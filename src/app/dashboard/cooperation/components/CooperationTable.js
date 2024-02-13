'use client';

import {Button, Col, Form, Input, Row, Select, Table} from 'antd';
import {useRef, useState} from 'react';
import {useRequest} from '@/utils/useRequest';
import {cooperationsField} from '@/app/dashboard/utils/cooperationsField';
import {userGender} from '@/app/dashboard/utils/userDetails';
import {DateObject} from 'react-multi-date-picker';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import persian from 'react-date-object/calendars/persian';

const CooperationTable = () => {
  const tableRef = useRef();
  
  const [formRef] = Form.useForm();
  const request = useRequest();
  
  const [filters, setFilters] = useState({page: 1});
  const [searchFilter, setSearchFilter] = useState({});
  
  const {isLoading, data: cooperationsData} = request.useQuery({
    url: '/api/v1/management/work-with-us-list',
    params: {...filters, ...searchFilter},
    queryKey: ['work-with-us-list', {...filters, ...searchFilter}]
  });
  
  const cooperations = cooperationsData?.response?.foundedCooperationMessage || [];
  const cooperationsCount = cooperationsData?.response?.count || 0;
  
  const expandedRowRender = (record) => {
    const columns = [
      {
        title: 'توضیحات تکمیلی در خصوص زمینه های فعالیتی و سوابق اجرایی',
        align: 'center',
        dataIndex: 'companyIntroduction'
      },
      {
        title: 'توضیحات تکمیلی',
        align: 'center',
        dataIndex: 'extraInfo'
      }
    ];
    
    
    return <Table columns={columns} dataSource={[record]} pagination={false} />;
  };
  
  
  const columns = [
    {
      title: 'نام و نام خانوادگی',
      align: 'center',
      key: 'fullName',
      render: (_, row) => `${row?.firstName} ${row?.lastName}`
    },
    {
      title: 'نام شرکت',
      align: 'center',
      key: 'companyName',
      dataIndex: 'companyName'
    },
    {
      title: 'حوزه اشتغال و فعالیت',
      align: 'center',
      key: 'activityField',
      dataIndex: 'activityField'
    },
    {
      title: 'شماره موبایل',
      align: 'center',
      key: 'mobileNumber',
      dataIndex: 'mobileNumber'
    },
    {
      title: 'ایمیل',
      align: 'center',
      key: 'email',
      dataIndex: 'email'
    },
    {
      title: 'آدرس وب سایت',
      align: 'center',
      key: 'websiteAddress',
      dataIndex: 'websiteAddress'
    },
    {
      title: 'زمینه های همکاری',
      align: 'center',
      key: 'cooperationField',
      dataIndex: 'cooperationField',
      render: (cooperationField) => cooperationsField[cooperationField]
    }
  ];
  
  return (
    <>
      <Form form={formRef} onFinish={setSearchFilter}>
        <Row gutter={11} justify="space-between">
          <Col span={4}>
            <Form.Item name="firstName">
              <Input
                placeholder="نام"
                allowClear
                /*onChange={e => {
                 if (!e.target.value) {
                 formRef.submit();
                 }
                 }}*/
              />
            </Form.Item>
          </Col>
          
          <Col span={4}>
            <Form.Item name="lastName">
              <Input
                placeholder="نام خانوادگی"
                allowClear
                /*onChange={e => {
                 if (!e.target.value) {
                 formRef.submit();
                 }
                 }}*/
              />
            </Form.Item>
          </Col>
          
          <Col span={4}>
            <Form.Item name="companyName">
              <Input
                placeholder="نام شرکت"
                allowClear
                /*onChange={e => {
                 if (!e.target.value) {
                 formRef.submit();
                 }
                 }}*/
              />
            </Form.Item>
          </Col>
          
          <Col span={4}>
            <Form.Item name="mobileNumber">
              <Input
                placeholder="شماره تماس"
                allowClear
                /*onChange={e => {
                 if (!e.target.value) {
                 formRef.submit();
                 }
                 }}*/
              />
            </Form.Item>
          </Col>
          
          <Col span={4}>
            <Form.Item name="email">
              <Input
                placeholder="ایمیل"
                allowClear
                /*onChange={e => {
                 if (!e.target.value) {
                 formRef.submit();
                 }
                 }}*/
              />
            </Form.Item>
          </Col>
          
          <Col span={4}>
            <Button type="primary" block htmlType={'submit'} className="!h-[43px]">
              اعمال
            </Button>
          </Col>
        </Row>
      </Form>
      
      <div className="bg-white my-[20px] py-[40px] px-[16px]">
        <Table
          ref={tableRef}
          loading={isLoading}
          columns={columns}
          dataSource={cooperations}
          rowKey={'_id'}
          bordered={false}
          pagination={{
            position: ['bottomRight'],
            hideOnSinglePage: true,
            showSizeChanger: false,
            pageSize: 20,
            total: cooperationsCount,
            onChange: page => setFilters(current => ({...current, page}))
          }}
          expandable={{
            expandedRowRender
          }}
        />
      </div>
    </>
  );
};

export default CooperationTable;
