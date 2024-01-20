'use client';

import {Button, Checkbox, Col, Form, Input, Row, Select, Spin} from 'antd';
import {DatePicker} from '@/templates/UI';
import classNames from 'classnames';
import {useRequest} from '@/utils/useRequest';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import {convertStringDateToTime, handleCreateAntdZodValidator} from '@/utils/helpers';
import {DateObject} from 'react-multi-date-picker';
import {useEffect, useState} from 'react';
import {
  BookVisitZod,
  BookVisitRequestLegalZod,
  BookVisitRequestZod
} from '@/app/(basic)/components/schema/bookVisitForm';
import {useAuth} from '@/app/contexts/auth/AuthContext';
import {RegisterZod} from '@/app/schema/register';
import {LoginZod} from '@/app/schema/login';

export const dynamic = 'force-dynamic';

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

const BookVisitForm = ({handleCloseBookVisitModal, handleOpenBookVisitSuccessModal}) => {
  const request = useRequest();
  const [formRef] = Form.useForm();
  const {isLoggedIn, userInfo, tokenInfo, handleChangeUserData} = useAuth();
  
  const timeWatch = Form.useWatch('time', formRef);
  const dateWatch = Form.useWatch('date', formRef)?.convert(gregorian, gregorian_en)?.format('YYYY-MM-DD');
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
  /*{
   '2023-12-09': [
   '2023-12-09T09:00:00.000Z',
   '2023-12-09T10:15:00.000Z'
   ],
   '2023-12-10': [],
   '2023-12-11': [],
   '2023-12-12': [],
   '2023-12-13': [],
   '2023-12-14': [],
   '2023-12-15': [],
   '2023-12-16': []
   };*/
  
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
      
      console.log({userInfo});
      
      if (!isLoggedIn) {
        const bookVisitRequestZod = BookVisitRequestZod.parse(formData);
        console.log({bookVisitRequestZod});
        
        await naturalVisitRequest(bookVisitRequestZod);
      }
      else {
        const bookVisitRequestLegalZod = BookVisitRequestLegalZod.parse(formData);
        console.log({bookVisitRequestLegalZod});
        
        await legalVisitRequest(bookVisitRequestLegalZod);
      }
      
      handleCloseBookVisitModal();
      handleOpenBookVisitSuccessModal();
      
    } catch (error) {
      console.log('error in handleOnFinishForm >>', error);
    }
  };
  
  /*const handleOnFinishCustomForm = async () => {
   
   try {
   await formRef.validateFields();
   const formData = await formRef.getFieldsValue(true);
   
   const convertedDate = formData?.date?.convert(gregorian, gregorian_en)?.format('YYYY-MM-DD');
   
   formData.selectedDate = `${convertedDate} ${formData?.time}`;
   
   const bookVisitRequestLegalZod = BookVisitRequestLegalZod.parse(formData);
   console.log({bookVisitRequestLegalZod});
   
   return await legalVisitRequest(bookVisitRequestLegalZod);
   
   } catch (error) {
   console.log('error in handleOnFinishForm >>', error);
   }
   };*/
  
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
  
  /*
   [
   {
   label: 'فلامک',
   value: 'greenHouse'
   },
   {
   label: 'LaResidence',
   value: 'LaResidence'
   },
   {
   label: 'تست1',
   value: 'test1'
   },
   {
   label: 'تست2',
   value: 'test2'
   },
   {
   label: 'تست3',
   value: 'test3'
   },
   {
   label: 'تست4',
   value: 'test4'
   },
   {
   label: 'تست5',
   value: 'test5'
   },
   {
   label: 'تست6',
   value: 'test6'
   },
   {
   label: 'تست7',
   value: 'test7'
   },
   {
   label: 'تست8',
   value: 'test8'
   },
   {
   label: 'تست9',
   value: 'test9'
   },
   {
   label: 'تست10',
   value: 'test10'
   }
   ]
   */
  
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
  
  const VisitFormInputs = () => (
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
      
      <Col span={4}>
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
      
      <Col span={8}>
        <Form.Item
          name="firstName"
          rules={[handleCreateAntdZodValidator(BookVisitZod)]}
        >
          <Input placeholder="نام" />
        </Form.Item>
      </Col>
      
      <Col span={12}>
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
        className="mt-2 text-black text-captionLg border-solid border-0 border-b border-gray-30 pb-[10px]"
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
              gutter={[10, 16]}
              className="d-ltr"
            >
              {timeItems?.map(item => (
                <Col
                  span={6}
                  key={item?.value}
                >
                  <div
                    className={classNames(
                      'h-[56px] flex justify-center items-center border-solid border border-gray-30 text-gray-40 text-captionLg d-ltr cursor-pointer transition-all duration-[.4s]',
                      {'bg-secondary text-white': timeWatch === item?.value},
                      {'bg-gray-60/50 !cursor-not-allowed select-none': item?.disabled || !Object.keys(occupiedTimes)?.length || !dateWatch?.length}
                    )}
                    onClick={() => {
                      if (!item?.disabled && Object.keys(occupiedTimes)?.length && dateWatch?.length) {
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
  );
  
  const RegisterForm = () => (
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
  );
  
  
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
            <VisitFormInputs /> :
            <RegisterForm />
          }
          
          {!isLoggedIn &&
            <Col span={24} className="mt-7">
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
