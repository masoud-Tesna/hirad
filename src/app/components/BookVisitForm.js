'use client';

import {Button, Checkbox, Col, Form, Input, Row, Select} from 'antd';
import {DatePicker} from '@/templates/UI';
import classNames from 'classnames';

const BookVisitForm = () => {
  const [formRef] = Form.useForm();
  
  const timeWatch = Form.useWatch('time', formRef);
  
  return (
    <Form
      form={formRef}
      name={'bookVisitForm'}
      layout="vertical"
      scrollToFirstError
      onFinish={v => {
        console.log({values: v});
      }}
    >
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="project"
          >
            <Select
              placeholder="انتخاب پروژه جهت بازدید"
              options={[
                {
                  label: 'فلامک',
                  value: 'falamac'
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
            name="mobile"
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
          >
            {['14 - 15', '11:30 - 12:30', '10:15 - 11:15', '9 - 10', '19 - 20', '20:30 - 21:30', '16:15 - 16:15', '17 - 18']?.map(item => (
              <Col
                span={6}
                key={item}
              >
                <div
                  className={classNames('h-[56px] flex justify-center items-center border-solid border border-gray-30 text-gray-40 text-captionLg d-ltr cursor-pointer transition-all duration-[.4s]', {'bg-secondary text-white': timeWatch === item})}
                  onClick={() => {
                    formRef.setFields([
                      {
                        name: 'time',
                        value: item
                      }
                    ]);
                  }}
                >
                  {item}
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
            className="bg-primary h-[47px] text-captionXl !text-white !p-0"
            htmlType="submit"
          >
            رزور زمان بازدید
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default BookVisitForm;
