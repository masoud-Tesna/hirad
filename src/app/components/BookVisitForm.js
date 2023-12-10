'use client';

import {Button, Checkbox, Col, Form, Input, Row, Select, Spin} from 'antd';
import {DatePicker} from '@/templates/UI';
import classNames from 'classnames';
import {useRequest} from '@/utils/useRequest';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import {convertStringDateToTime, useCreateAntdZodValidation} from '@/utils/helpers';
import {DateObject} from 'react-multi-date-picker';
import {useEffect, useState} from 'react';
import {BookVisitFormZod} from '@/app/components/schema/bookVisitForm';

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

const BookVisitForm = () => {
  const request = useRequest();
  
  const [formRef] = Form.useForm();
  
  const timeWatch = Form.useWatch('time', formRef);
  const dateWatch = Form.useWatch('date', formRef)?.convert(gregorian, gregorian_en)?.format('YYYY-MM-DD');
  const projectNameWatch = Form.useWatch('projectName', formRef);
  
  const [timeItems, setTimeItems] = useState(defaultTimes);
  
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
  
  const {mutateAsync: visitRequest, isPending} = request.useMutation({
    url: '/api/v1/appeal/visit/natural'
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
      } else {
        setTimeItems(defaultTimes);
      }
    }
  };
  
  const handleOnFinishForm = async (values) => {
    try {
      const convertedDate = values?.date?.convert(gregorian, gregorian_en)?.format('YYYY-MM-DD');
      
      values.selectedDate = `${convertedDate} ${values?.time}`;
      
      const res = await visitRequest(values);
      
      console.log('res >>>>>>>', res);
    } catch (error) {
      console.log('error in handleOnFinishForm >>', error);
    }
  };
  
  return (
    <Spin spinning={isLoading || isPending}>
      <Form
        form={formRef}
        name={'bookVisitForm'}
        layout="vertical"
        scrollToFirstError
        onFinish={handleOnFinishForm}
      >
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="projectName"
              rules={[useCreateAntdZodValidation(BookVisitFormZod)]}
            >
              <Select
                placeholder="انتخاب پروژه جهت بازدید"
                onChange={() => {
                  formRef.setFields([
                    {
                      name: 'item',
                      value: null
                    },
                    {
                      name: 'date',
                      value: null
                    }
                  ]);
                  
                  setTimeItems(defaultTimes);
                }}
                options={[
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
                    label: 'تست1',
                    value: 'test1'
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
                ]}
              />
            </Form.Item>
          </Col>
          
          <Col span={4}>
            <Form.Item
              name="gender"
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
            >
              <Input placeholder="نام" />
            </Form.Item>
          </Col>
          
          <Col span={12}>
            <Form.Item
              name="lastName"
            >
              <Input placeholder="نام خانوادگی" />
            </Form.Item>
          </Col>
          
          <Col span={12}>
            <Form.Item
              name="mobileNumber"
            >
              <Input placeholder="شماره موبایل" />
            </Form.Item>
          </Col>
          
          <Col span={12}>
            <Form.Item
              name="date"
            >
              <DatePicker
                placeholder="تاریخ بازدید"
                onChange={handleOnChangeDatePicker}
                /*onChange={v => {
                  formRef.setFields([
                    {
                      name: 'time',
                      value: null
                    }
                  ]);
                }}*/
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
              hidden
            >
              <Input hidden />
            </Form.Item>
            
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
                      {'bg-gray-60/50 cursor-not-allowed select-none': item?.disabled || !Object.keys(occupiedTimes)?.length || !dateWatch?.length}
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
          </Col>
          
          <Col span={24} className="mt-7">
            <Form.Item
              name="isRealEstate"
            >
              <Checkbox>
                کارشناس مشاور املاک هستم
              </Checkbox>
            </Form.Item>
          </Col>
          
          <Col span={24} className="mt-2">
            <Button
              block
              className="!bg-primary !text-captionXl !text-white !p-0"
              htmlType="submit"
            >
              رزور زمان بازدید
            </Button>
          </Col>
        </Row>
      </Form>
    </Spin>
  );
};

export default BookVisitForm;
