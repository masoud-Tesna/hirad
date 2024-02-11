'use client';

import {Button, Checkbox, Col, Form, Input, Row, Select, Spin} from 'antd';
import classNames from 'classnames';
import {useRequest} from '@/utils/useRequest';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import {convertStringDateToTime, handleCreateAntdZodValidator} from '@/utils/helpers';
import {DateObject} from 'react-multi-date-picker';
import {useEffect, useState} from 'react';
import {
  BookVisitRequestLegalZod,
  BookVisitRequestZod,
  BookVisitZod
} from '@/app/contexts/bookVisit/schema/bookVisitForm';
import {useAuth} from '@/app/contexts/auth/AuthContext';
import {RegisterZod} from '@/app/schema/register';
import {LoginZod} from '@/app/schema/login';
import {DatePicker} from '@/templates/UI';

const defaultTimes = [
  {
    value: '09:00',
    label: '09:00 - 10:00'
  },
  {
    value: '10:15',
    label: '10:15 - 11:15'
  },
  {
    value: '11:30',
    label: '11:30 - 12:30'
  },
  {
    value: '14:00',
    label: '14:00 - 15:00'
  },
  {
    value: '15:15',
    label: '15:15 - 16:15'
  },
  {
    value: '16:30',
    label: '16:30 - 17:30'
  },
  {
    value: '17:45',
    label: '17:45 - 18:45'
  },
  {
    value: '19:00',
    label: '19:00 - 20:00'
  }
];

const BookVisitForm = ({handleCloseBookVisitModal, handleOpenBookVisitSuccessModal, handleSetVisitLink}) => {
  const request = useRequest();
  const [formRef] = Form.useForm();
  const {isLoggedIn, userInfo, tokenInfo, handleChangeUserData} = useAuth();
  
  const timeWatch = Form.useWatch('time', formRef);
  const dateWatch = Form.useWatch('date', formRef);
  const convertedDateWatch = dateWatch?.convert(gregorian, gregorian_en)?.format('YYYY-MM-DD');
  const projectNameWatch = Form.useWatch('projectName', formRef);
  const isRealEstateWatch = Form.useWatch('isRealEstate', formRef);
  
  const [timeItems, setTimeItems] = useState(defaultTimes);
  const [disabledIsRealState, setDisabledIsRealState] = useState(true);
  const [formStep, setFormStep] = useState(0);
  
  useEffect(() => {
    const {time, date, mobileNumber, lastName, firstName, gender, projectName} = formRef.getFieldsValue(true);
    
    if (time && date && mobileNumber && lastName && firstName && gender && projectName) {
      setDisabledIsRealState(false);
    }
    else {
      setDisabledIsRealState(true);
    }
  }, [formRef.getFieldsValue(true)]);
  
  useEffect(() => {
    if (!!Object.keys(userInfo)?.length) {
      formRef.setFieldsValue(userInfo);
    }
  }, [userInfo]);
  
  const {data, isLoading} = request.useQuery({
    url: '/api/v1/appeal/visit/occupied-times',
    queryKey: ['occupied-times', projectNameWatch],
    retry: false,
    params: {
      projectName: projectNameWatch
    },
    enabled: !!projectNameWatch
  });
  
  const occupiedTimes = data?.response || {};
  
  const {mutateAsync: naturalVisitRequest, isPending: naturalVisitIsPending} = request.useMutation({
    url: '/api/v1/appeal/visit/natural'
  });
  
  const {mutateAsync: legalVisitRequest, isPending: legalVisitIsPending} = request.useMutation({
    url: '/api/v1/appeal/visit/legal'
  });
  
  const {mutateAsync: registerRequest, isPending: registerIsPending} = request.useMutation({
    url: '/api/v1/auth/register-realstate',
    showMessage: {
      success: false
    }
  });
  
  const {mutateAsync: loginRequest, isPending: loginIsPending} = request.useMutation({
    url: '/api/v1/auth/login',
    showMessage: {
      success: false
    }
  });
  
  const handleOnChangeDatePicker = date => {
    const convertedDate = date?.convert(gregorian, gregorian_en).format('YYYY-MM-DD');
    
    if (convertedDate?.length && Object.keys(occupiedTimes)?.length) {
      const selectedOccupiedTime = occupiedTimes[convertedDate];
      
      if (selectedOccupiedTime?.length) {
        const convertedTimes = selectedOccupiedTime?.map(item => convertStringDateToTime(new Date(item)));
        
        setTimeItems(current => current.map(item => {
          if (convertedTimes.includes(item.value)) {
            return {
              ...item,
              disabled: true
            };
          }
          return item;
        }));
      }
      else {
        setTimeItems(defaultTimes);
      }
      
      formRef.setFields([
        {
          name: 'time',
          value: null
        }
      ]);
    }
  };
  
  const handleOnFinishForm = async () => {
    try {
      await formRef.validateFields();
      const formData = await formRef.getFieldsValue(true);
      
      const convertedDate = formData?.date?.convert(gregorian, gregorian_en)?.format('YYYY-MM-DD');
      
      formData.selectedDate = `${convertedDate} ${formData?.time}`;
      
      if (!isLoggedIn) {
        const bookVisitRequestZod = BookVisitRequestZod.parse(formData);
        
        const res = await naturalVisitRequest(bookVisitRequestZod);
        await handleSetVisitLink(res?.response?.link);
      }
      else {
        const bookVisitRequestLegalZod = BookVisitRequestLegalZod.parse(formData);
        
        const res = await legalVisitRequest(bookVisitRequestLegalZod);
        await handleSetVisitLink(res?.response?.link);
      }
      
      handleCloseBookVisitModal();
      handleOpenBookVisitSuccessModal();
      
    } catch (error) {
      console.log('error in handleOnFinishForm >>', error);
    }
  };
  
  const handleChangeToRegister = async () => {
    try {
      await formRef.validateFields();
      const formData = await formRef.getFieldsValue(true);
      
      const registerZod = RegisterZod.parse(formData);
      
      await registerRequest(registerZod);
      
      const loginZod = LoginZod.parse({...formData, credential: formData?.mobileNumber});
      
      const loginResponse = await loginRequest(loginZod);
      
      await handleChangeUserData(loginResponse?.response);
      
      // await handleOnFinishForm(formData);
      
    } catch (error) {
      console.log('error in handleChangeToRegister >>', error);
    }
  };
  
  const handleNextStep = async () => {
    try {
      await formRef.validateFields();
      setFormStep(current => current + 1);
    } catch (error) {
    
    }
  };
  
  useEffect(() => {
    if (Object.keys(tokenInfo)?.length && isRealEstateWatch && formStep === 1) {
      handleOnFinishForm();
    }
  }, [tokenInfo]);
  
  const projectOptions = [
    {
      label: 'هیراد پالاس',
      value: 'hiradPalace'
    },
    {
      label: 'هیراد پالاس 2',
      value: 'hiradPalace2'
    }
  ];
  
  
  return (
    <Spin
      spinning={isLoading || naturalVisitIsPending || registerIsPending || loginIsPending || legalVisitIsPending}
    >
      <Form
        form={formRef}
        name={'bookVisitForm'}
        layout="vertical"
        scrollToFirstError
      >
        <Row gutter={16}>
          
          {formStep === 0 ?
            (
              <>
                <Col span={24}>
                  <Form.Item
                    name="projectName"
                    rules={[handleCreateAntdZodValidator(BookVisitZod)]}
                  >
                    <Select
                      placeholder="انتخاب پروژه جهت بازدید"
                      onChange={() => {
                        formRef.setFields([
                          {
                            name: 'time',
                            value: null
                          },
                          {
                            name: 'date',
                            value: null
                          }
                        ]);
                        
                        setTimeItems(defaultTimes);
                      }}
                      options={projectOptions}
                    />
                  </Form.Item>
                </Col>
                
                <Col xs={24} md={4}>
                  <Form.Item
                    name="gender"
                    rules={[handleCreateAntdZodValidator(BookVisitZod)]}
                  >
                    <Select
                      placeholder="جنسیت"
                      options={[
                        {
                          label: 'آقا',
                          value: 'male'
                        },
                        {
                          label: 'خانم',
                          value: 'female'
                        }
                      ]}
                    />
                  </Form.Item>
                </Col>
                
                <Col xs={12} md={8}>
                  <Form.Item
                    name="firstName"
                    rules={[handleCreateAntdZodValidator(BookVisitZod)]}
                  >
                    <Input placeholder="نام" />
                  </Form.Item>
                </Col>
                
                <Col xs={12} md={12}>
                  <Form.Item
                    name="lastName"
                    rules={[handleCreateAntdZodValidator(BookVisitZod)]}
                  >
                    <Input placeholder="نام خانوادگی" />
                  </Form.Item>
                </Col>
                
                <Col span={12}>
                  <Form.Item
                    name="mobileNumber"
                    rules={[handleCreateAntdZodValidator(BookVisitZod)]}
                  >
                    <Input placeholder="شماره موبایل" maxLength={11} />
                  </Form.Item>
                </Col>
                
                <Col span={12}>
                  <Form.Item
                    name="date"
                    rules={[handleCreateAntdZodValidator(BookVisitZod)]}
                  >
                    <DatePicker
                      placeholder="تاریخ بازدید"
                      onChange={handleOnChangeDatePicker}
                      minDate={new DateObject()}
                      maxDate={new DateObject().add(7, 'days')}
                    />
                  </Form.Item>
                </Col>
                
                <Col
                  span={24}
                  className="md:mt-2 text-black !text-captionMd md:!text-captionLg border-solid border-0 border-b border-gray-30 pb-[10px]"
                >
                  یکی از بازه های زمانی زیر را جهت بازدید انتخاب کنید
                </Col>
                
                <Col span={24} className="mt-7">
                  <Form.Item
                    name="time"
                    rules={[handleCreateAntdZodValidator(BookVisitZod)]}
                  >
                    <div>
                      <Row
                        gutter={[10, 10]}
                        className="d-ltr"
                      >
                        {timeItems?.map(item => (
                          <Col
                            xs={12}
                            md={6}
                            key={item?.value}
                          >
                            <div
                              className={classNames(
                                'h-[40px] md:h-[56px] flex justify-center items-center border-solid border border-gray-30 text-gray-40 text-captionLg d-ltr cursor-pointer transition-all duration-[.4s]',
                                {'bg-secondary text-white': timeWatch === item?.value},
                                {'bg-gray-60/50 !cursor-not-allowed select-none': item?.disabled || !Object.keys(occupiedTimes)?.length || !convertedDateWatch?.length}
                              )}
                              onClick={() => {
                                if (!item?.disabled && Object.keys(occupiedTimes)?.length && convertedDateWatch?.length) {
                                  formRef.setFields([
                                    {
                                      name: 'time',
                                      value: item?.value
                                    }
                                  ]);
                                }
                              }}
                            >
                              {item?.label}
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </Form.Item>
                </Col>
              </>
            ) :
            (
              <>
                <Col span={12}>
                  <Form.Item
                    name={'nationalCode'}
                    rules={[handleCreateAntdZodValidator(RegisterZod)]}
                  >
                    <Input placeholder={'کد ملی'} />
                  </Form.Item>
                </Col>
                
                <Col span={12}>
                  <Form.Item
                    name="password"
                    rules={[handleCreateAntdZodValidator(RegisterZod)]}
                  >
                    <Input.Password
                      placeholder={'کلمه عبور'}
                      rootClassName="d-ltr [&>input]:d-ltr [&>input]:placeholder:text-end"
                    />
                  </Form.Item>
                </Col>
                
                <Col span={12}>
                  <Form.Item
                    name={'realstateName'}
                    rules={[handleCreateAntdZodValidator(RegisterZod)]}
                  >
                    <Input placeholder={'نام دفتر املاک'} />
                  </Form.Item>
                </Col>
                
                <Col span={12}>
                  <Form.Item
                    name="realstateRegNo"
                    rules={[handleCreateAntdZodValidator(RegisterZod)]}
                  >
                    <Input placeholder={'کد دفتر املاک'} />
                  </Form.Item>
                </Col>
                
                <Col span={24}>
                  <Form.Item
                    name="realstateAddress"
                    rules={[handleCreateAntdZodValidator(RegisterZod)]}
                  >
                    <Input.TextArea placeholder={'آدرس'} />
                  </Form.Item>
                </Col>
              </>
            )
          }
          
          {!isLoggedIn &&
            <Col span={24} className="md:mt-7">
              <Form.Item
                name="isRealEstate"
                valuePropName="checked"
              >
                <Checkbox
                  disabled={disabledIsRealState}
                >
                  کارشناس مشاور املاک هستم
                </Checkbox>
              </Form.Item>
            </Col>
          }
          
          <Col span={24} className="mt-2">
            <Button
              block
              className="!bg-primary !text-captionXl !text-white !p-0"
              onClick={isRealEstateWatch ? (formStep === 0 ? handleNextStep : handleChangeToRegister) : handleOnFinishForm}
            >
              {isRealEstateWatch ? 'ادامه' : 'رزور زمان بازدید'}
            </Button>
          </Col>
        </Row>
      </Form>
    </Spin>
  );
};

export default BookVisitForm;
