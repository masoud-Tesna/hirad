// 'use client'

import {Button, Col, Form, Input, Row, Space, Spin} from 'antd';
import classNames from 'classnames';
import {CheckOutlined} from '@ant-design/icons';

const cooperations = [
  {label: 'اجای پروژه ها', value: '1'},
  {label: 'معماری و طراحی', value: '2'},
  {label: 'بازاریابی و فروش', value: '3'},
  {label: 'دریافت پروژه', value: '4'}
];

const CooperationForm = () => {
  const [formRef] = Form.useForm();
  
  const cooperationWatch = Form.useWatch('cooperation', formRef);
  
  return (
    <Spin spinning={false}>
      <Form form={formRef} layout="vertical" scrollToFirstError>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={'fullName'}
            >
              <Input placeholder="نام و نام خانوادگی" />
            </Form.Item>
          </Col>
          
          <Col span={12}>
            <Form.Item
              name={'companyName'}
            >
              <Input placeholder="نام شرکت" />
            </Form.Item>
          </Col>
          
          <Col xs={12} md={8}>
            <Form.Item
              name={'input3'}
            >
              <Input placeholder="حوزه اشتغال و فعالیت" />
            </Form.Item>
          </Col>
          
          <Col xs={12} md={8}>
            <Form.Item
              name={'input4'}
            >
              <Input placeholder="شماره تماس" maxLength={11} />
            </Form.Item>
          </Col>
          
          <Col xs={12} md={8}>
            <Form.Item
              name={'email'}
            >
              <Input placeholder="ایمیل" />
            </Form.Item>
          </Col>
          
          <Col span={24}>
            <Form.Item
              name={'site'}
            >
              <Input placeholder="آدرس وب سایت" />
            </Form.Item>
          </Col>
          
          <Col span={24}>
            <Form.Item
              name={'cooperation'}
              label="در کدام زمینه ها آماده همکاری با ما هستید؟"
            >
              <Row
                gutter={[10, 10]}
              >
                {cooperations?.map(item => (
                  <Col
                    xs={12}
                    md={6}
                    key={item?.value}
                  >
                    <div
                      className={classNames(
                        'h-[40px] md:h-[56px] flex justify-center items-center border-solid border border-gray-30 text-gray-40 text-captionLg d-ltr cursor-pointer transition-all duration-[.4s]',
                        {'bg-secondary text-white': cooperationWatch === item?.value}
                      )}
                      onClick={() => {
                        formRef.setFields([
                          {
                            name: 'cooperation',
                            value: item?.value
                          }
                        ]);
                      }}
                    >
                      <Space>
                        <CheckOutlined />
                        
                        {item?.label}
                      </Space>
                    </div>
                  </Col>
                ))}
              </Row>
            </Form.Item>
          </Col>
          
          <Col span={24}>
            <Form.Item
              name={'desc'}
              label="توضیحات تکمیلی در خصوص زمینه های فعالیتی و سوابق اجرایی"
            >
              <Input.TextArea rows={4} placeholder="معرفی شرکت" />
            </Form.Item>
          </Col>
          
          <Col span={24}>
            <Form.Item
              name={'desc2'}
            >
              <Input.TextArea rows={4} placeholder="توضیحات تکمیلی" />
            </Form.Item>
          </Col>
          
          <Col span={24} className="mt-2">
            <Button
              block
              className="!bg-primary !text-captionXl !text-white !p-0"
            >
              ثبت درخواست همکاری
            </Button>
          </Col>
        </Row>
      </Form>
    </Spin>
  );
};

export default CooperationForm;
