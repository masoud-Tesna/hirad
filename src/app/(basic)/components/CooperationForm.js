// 'use client'

import {Button, Col, Form, Input, Row, Space, Spin} from 'antd';
import classNames from 'classnames';
import {CheckOutlined} from '@ant-design/icons';
import {useRequest} from '@/utils/useRequest';
import {handleCreateAntdZodValidator} from '@/utils/helpers';
import {CooperationZod} from '@/app/(basic)/schema/cooperationForm';

const cooperationFields = [
  {label: 'اجای پروژه ها', value: 'projectImplementation'},
  {label: 'معماری و طراحی', value: 'architectureAndDesign'},
  {label: 'بازاریابی و فروش', value: 'marketingAndSales'},
  {label: 'دریافت پروژه', value: 'receiveProject'}
];

const CooperationForm = ({onCloseModal}) => {
  const [formRef] = Form.useForm();
  
  const request = useRequest();
  
  const cooperationFieldWatch = Form.useWatch('cooperationField', formRef);
  
  const {isPending: cooperationsIsLoading, mutate: cooperationsRequest} = request.useMutation({
    url: '/api/v1/communication/work-with-us',
    customSuccessMessage: 'درخواست شما با موفقیت ثبت شد',
    onSuccess: () => {
      formRef.resetFields();
      onCloseModal();
    }
  });
  
  return (
    <Spin spinning={cooperationsIsLoading}>
      <Form form={formRef} layout="vertical" scrollToFirstError onFinish={cooperationsRequest}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={'firstName'}
              rules={[handleCreateAntdZodValidator(CooperationZod)]}
            >
              <Input placeholder="نام" />
            </Form.Item>
          </Col>
          
          <Col span={12}>
            <Form.Item
              name={'lastName'}
              rules={[handleCreateAntdZodValidator(CooperationZod)]}
            >
              <Input placeholder="نام خانوادگی" />
            </Form.Item>
          </Col>
          
          <Col xs={12} md={8}>
            <Form.Item
              name={'companyName'}
              rules={[handleCreateAntdZodValidator(CooperationZod)]}
            >
              <Input placeholder="نام شرکت" />
            </Form.Item>
          </Col>
          
          <Col xs={12} md={8}>
            <Form.Item
              name={'activityField'}
              rules={[handleCreateAntdZodValidator(CooperationZod)]}
            >
              <Input placeholder="حوزه اشتغال و فعالیت" />
            </Form.Item>
          </Col>
          
          <Col xs={12} md={8}>
            <Form.Item
              name={'mobileNumber'}
              rules={[handleCreateAntdZodValidator(CooperationZod)]}
            >
              <Input placeholder="شماره تماس" maxLength={11} />
            </Form.Item>
          </Col>
          
          <Col span={12}>
            <Form.Item
              name={'email'}
              rules={[handleCreateAntdZodValidator(CooperationZod)]}
            >
              <Input placeholder="ایمیل" />
            </Form.Item>
          </Col>
          
          <Col xs={24} md={12}>
            <Form.Item
              name={'websiteAddress'}
              rules={[handleCreateAntdZodValidator(CooperationZod)]}
            >
              <Input placeholder="آدرس وب سایت" />
            </Form.Item>
          </Col>
          
          <Col span={24}>
            <Form.Item
              name={'cooperationField'}
              rules={[handleCreateAntdZodValidator(CooperationZod)]}
              label="در کدام زمینه ها آماده همکاری با ما هستید؟"
            >
              <Row
                gutter={[10, 10]}
              >
                {cooperationFields?.map(item => (
                  <Col
                    xs={12}
                    md={6}
                    key={item?.value}
                  >
                    <div
                      className={classNames(
                        'h-[40px] md:h-[56px] flex justify-center items-center border-solid border border-gray-30 text-gray-40 text-captionLg d-ltr cursor-pointer transition-all duration-[.4s]',
                        {'bg-secondary text-white': cooperationFieldWatch === item?.value}
                      )}
                      onClick={() => {
                        formRef.setFields([
                          {
                            name: 'cooperationField',
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
              name={'companyIntroduction'}
              rules={[handleCreateAntdZodValidator(CooperationZod)]}
              label="توضیحات تکمیلی در خصوص زمینه های فعالیتی و سوابق اجرایی"
            >
              <Input.TextArea rows={4} placeholder="معرفی شرکت" />
            </Form.Item>
          </Col>
          
          <Col span={24}>
            <Form.Item
              name={'extraInfo'}
              rules={[handleCreateAntdZodValidator(CooperationZod)]}
            >
              <Input.TextArea rows={4} placeholder="توضیحات تکمیلی" />
            </Form.Item>
          </Col>
          
          <Col span={24} className="mt-2">
            <Button
              block
              className="!bg-primary !text-captionXl !text-white !p-0"
              htmlType={'submit'}
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
