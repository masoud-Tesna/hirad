'use client';

import {useRequest} from '@/utils/useRequest';
import {useQueryClient} from '@tanstack/react-query';
import {useEffect, useMemo, useState} from 'react';
import {DateObject} from 'react-multi-date-picker';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import persian from 'react-date-object/calendars/persian';
import {userGender, userTypes} from '@/app/dashboard/utils/userDetails';
import {Col, Form, Input, Row, Select, Switch, Table} from 'antd';
import {SearchOutlined} from '@/templates/icons';
import debounce from 'lodash.debounce';

const UsersTable = () => {
    const [formRef] = Form.useForm();
    const request = useRequest();
    const queryClient = useQueryClient();

    const [filters, setFilters] = useState({page: 1});
    const [searchFilter, setSearchFilter] = useState({});
    const [searchBy, setSearchBy] = useState('');

    const handleChangeFilter = (value, filedName) => setFilters(current => ({...current, [filedName]: value}));

    const handleOnChangeSearchFilter = (value, searchBy) => {
        setSearchFilter({[searchBy]: value});
    };

    const debouncedOnSearch = useMemo((value, searchBy) => {
        return debounce((value, searchBy) => handleOnChangeSearchFilter(value, searchBy), 500);
    }, []);

    const {isLoading, data: usersData} = request.useQuery({
        url: 'api/v1/management/users-list',
        params: {...filters, ...searchFilter},
        queryKey: ['users-list', {...filters, ...searchFilter}]
    });

    const users = usersData?.response?.foundedUser || [];
    const usersCount = usersData?.response?.count || 0;

    const {mutateAsync: banUserRequest, isPending: banUserIsLoading} = request.useMutation({
        url: '/api/v1/management/ban-user',
        method: 'patch',
        mutationKey: ['ban-user']
    });

    const handleOnChangeSwitch = async (value, userId) => {
        try {
            if (!value) {
                await banUserRequest({userId});
                queryClient.setQueryData(
                    ['users-list', filters],
                    oldData => ({
                        ...oldData,
                        response: {
                            ...oldData.response,
                            foundedUser: oldData?.response?.foundedUser?.map(item => {
                                if (item?._id === userId) {
                                    return {...item, status: 'ban'};
                                }
                                return item;
                            })
                        }
                    })
                );
            }
        } catch (error) {
            console.log('error in handleOnChangeSwitch >>>', error);
        }
    };

    const expandedRowRender = (record) => {
        let columns;

        if (record?.type === 'natural') {
            columns = [
                {
                    title: 'جنسیت',
                    key: 'gender',
                    dataIndex: 'gender',
                    render: gender => userGender[gender]
                },
                {
                    title: 'تاریخ ثبت نام',
                    key: 'registerationDate',
                    dataIndex: 'registerationDate',
                    render: (registerationDate) => new DateObject({
                        date: registerationDate,
                        calendar: gregorian,
                        locale: gregorian_en
                    }).convert(persian).format('YYYY/MM/DD')
                }
            ];
        } else {
            columns = [
                {
                    title: 'نام دفتر املاک',
                    key: 'realstateName',
                    dataIndex: 'realstateName'
                },
                {
                    title: 'کد دفتر املاک',
                    dataIndex: 'realstateRegNo',
                    key: 'realstateRegNo'
                },
                {
                    title: 'کد ملی',
                    dataIndex: 'nationalCode',
                    key: 'nationalCode'
                },
                {
                    title: 'تاریخ ثبت نام',
                    dataIndex: 'registerationDate',
                    key: 'registerationDate',
                    render: (registerationDate) => new DateObject({
                        date: registerationDate,
                        calendar: gregorian,
                        locale: gregorian_en
                    }).convert(persian).format('YYYY/MM/DD')
                },
                {
                    title: 'آدرس دفتر املاک',
                    dataIndex: 'realstateAddress',
                    key: 'realstateAddress'
                }
            ];
        }


        return <Table columns={columns} dataSource={[record]} pagination={false} />;
    };

    const columns = [
        {
            title: 'نوع کاربری',
            align: 'center',
            key: 'type',
            dataIndex: 'type',
            render: (type) => userTypes[type]
        },
        {
            title: 'نام و نام خانوادگی',
            align: 'center',
            key: 'fullName',
            render: (_, row) => `${row?.firstName} ${row?.lastName}`
        },
        {
            title: 'شماره موبایل',
            align: 'center',
            key: 'mobileNumber',
            dataIndex: 'mobileNumber'
        },
        {
            title: 'وضعیت',
            align: 'center',
            key: 'status',
            dataIndex: 'status',
            render: (status, row) => <Switch
                defaultChecked={status === 'active'}
                checkedChildren="فعال"
                unCheckedChildren="غیر فعال"
                disabled={status === 'ban'}
                onChange={value => handleOnChangeSwitch(value, row?._id)}
            />
        }
    ];

    useEffect(() => {
        return () => {
            debouncedOnSearch.cancel();
        };
    }, []);

    return (
        <>
            <Form form={formRef}>
                <Row gutter={11} justify="space-between">
                    <Col span={6}>
                        <Row gutter={11}>
                            <Col span={12}>
                                <Select
                                    placeholder="نوع کاربری"
                                    className="w-full"
                                    onChange={v => {
                                        setFilters(current => ({...current, userType: v, gender: undefined}));
                                    }}
                                    options={[
                                        {
                                            label: 'حقیقی',
                                            value: 'natural'
                                        },
                                        {
                                            label: 'حقوقی',
                                            value: 'legal'
                                        }
                                    ]}
                                    allowClear
                                />
                            </Col>

                            {filters?.userType === 'natural' &&
                                <Col span={12}>
                                    <Select
                                        placeholder="جنسیت"
                                        className="w-full"
                                        onChange={v => handleChangeFilter(v, 'gender')}
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
                                        allowClear
                                    />
                                </Col>}
                        </Row>
                    </Col>

                    <Col span={18}>
                        <Row gutter={11} justify={'end'}>
                            <Col span={6}>
                                <Select
                                    placeholder="جستجو بر اساس"
                                    className="w-full"
                                    onChange={v => {
                                        setSearchBy(v);
                                        formRef.setFieldValue('search', null);

                                        if (!v?.length) {
                                            setSearchFilter({});
                                        }
                                    }}
                                    options={[
                                        {
                                            label: 'شماره موبایل',
                                            value: 'mobileNumber'
                                        },
                                        {
                                            label: 'نام',
                                            value: 'firstName'
                                        },
                                        {
                                            label: 'نام خانوادگی',
                                            value: 'lastName'
                                        },
                                        {
                                            label: 'نام دفتر املاک',
                                            value: 'realstateName'
                                        }
                                    ]}
                                    id={'searchByField'}
                                    allowClear
                                />
                            </Col>

                            <Col span={11}>
                                <Form.Item
                                    name={'search'}
                                    noStyle
                                >
                                    <Input
                                        placeholder={'جستجو...'}
                                        suffix={<SearchOutlined className="!text-gray-40" />}
                                        onChange={e => {
                                            const value = e?.target?.value;

                                            if (!value?.length) {
                                                setSearchFilter({});
                                            } else {
                                                if (searchBy === 'mobileNumber') {
                                                    if (value.length >= 4 && value.length <= 11) {
                                                        debouncedOnSearch(value, 'mobileNumber');
                                                    }
                                                } else if (['firstName', 'lastName', 'realstateName'].includes(searchBy)) {
                                                    if (value.length >= 2) {
                                                        debouncedOnSearch(value, searchBy);
                                                    }
                                                }
                                            }
                                        }}
                                        onFocus={() => {
                                            if (!searchBy?.length) {
                                                return document.getElementById('searchByField').focus(
                                                );
                                            }
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>

            <div className="bg-white my-[20px] py-[40px] px-[16px]">
                <Table
                    loading={isLoading || banUserIsLoading}
                    columns={columns}
                    dataSource={users}
                    bordered={false}
                    pagination={{
                        position: ['bottomRight'],
                        hideOnSinglePage: true,
                        showSizeChanger: false,
                        pageSize: 20,
                        total: usersCount,
                        onChange: page => setFilters(current => ({...current, page}))
                    }}
                    rowKey={'_id'}
                    expandable={{
                        expandedRowRender
                    }}
                />
            </div>
        </>
    );
};

export default UsersTable;
