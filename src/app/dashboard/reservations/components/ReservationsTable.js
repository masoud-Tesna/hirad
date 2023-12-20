'use client';

import {Col, Form, Input, Popconfirm, Row, Select, Table} from 'antd';
import {convertStringDateToTime} from '@/utils/helpers';
// import {DatePicker} from '@/templates/UI';
import {DateObject} from 'react-multi-date-picker';
import {SearchOutlined, TrashOutlined} from '@/templates/icons';
import {useEffect, useMemo, useState} from 'react';
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import persian from 'react-date-object/calendars/persian';
import {userTypes} from '@/app/dashboard/utils/userDetails';
import {useRequest} from '@/utils/useRequest';
import {useQueryClient} from '@tanstack/react-query';
import debounce from 'lodash.debounce';
import dynamic from 'next/dynamic';

const DatePicker = dynamic(() => import('@/templates/UI/DatePicker').then((mod) => mod.DatePicker), {ssr: false});

const ReservationsTable = () => {
    const [formRef] = Form.useForm();
    const request = useRequest();
    const queryClient = useQueryClient();

    const [filters, setFilters] = useState({page: 1});
    const [searchFilter, setSearchFilter] = useState({});
    const [searchBy, setSearchBy] = useState('');

    const handleOnChangeDatePicker = date => {
        const reservationSDate = new DateObject(date).convert(gregorian, gregorian_en).format('YYYY-MM-DD');
        const reservationEDate = new DateObject(date)?.convert(gregorian, gregorian_en).add(1, 'days').format('YYYY-MM-DD');

        setFilters(current => ({...current, reservationSDate, reservationEDate}));
    };

    const handleChangeFilter = (value, filedName) => setFilters(current => ({...current, [filedName]: value}));

    const handleOnChangeSearchFilter = (value, searchBy) => {
        setSearchFilter({[searchBy]: value});
    };

    const debouncedOnSearch = useMemo((value, searchBy) => {
        return debounce((value, searchBy) => handleOnChangeSearchFilter(value, searchBy), 500);
    }, []);

    const {isLoading, data: reservationsData} = request.useQuery({
        url: '/api/v1/management/reservation-list',
        params: {...filters, ...searchFilter},
        queryKey: ['reservation-list', {...filters, ...searchFilter}]
    });

    const reservations = reservationsData?.response?.reservations || [];
    const reservationsCount = reservationsData?.response?.count || 0;

    const {mutateAsync: disableReservationRequest, isPending: disableReservationIsLoading} = request.useMutation({
        url: '/api/v1/management/disable-reservation',
        method: 'patch',
        mutationKey: ['disable-reservation']
    });

    const handleOnClickDisableReservation = async (reservationId) => {
        try {
            await disableReservationRequest({reservationId});

            queryClient.setQueryData(
                ['reservation-list', filters],
                oldData => ({
                    ...oldData,
                    response: {
                        ...oldData.response,
                        reservations: oldData?.response?.reservations?.map(item => {
                            if (item?._id === reservationId) {
                                return {...item, status: 'disabled'};
                            }
                            return item;
                        })
                    }
                })
            );

        } catch (error) {
            console.log('error in handleOnClickDisableReservation >>>', error);
        }
    };

    const columns = [
        {
            title: 'نام و نام خانوادگی',
            align: 'center',
            key: 'fullName',
            render: (_, row) => `${row?.firstName} ${row?.lastName}`
        },
        {
            title: 'تاریخ بازدید',
            align: 'center',
            key: 'reservedDate',
            dataIndex: 'reservedDateTime',
            render: (reservedDateTime) => new DateObject({
                date: reservedDateTime,
                calendar: gregorian,
                locale: gregorian_en
            }).convert(persian).format('YYYY/MM/DD')
        },
        {
            title: 'ساعت بازدید',
            align: 'center',
            key: 'reservedTime',
            dataIndex: 'reservedDateTime',
            render: (reservedDateTime) => convertStringDateToTime(new Date(reservedDateTime))
        },
        {
            title: 'شماره موبایل',
            align: 'center',
            key: 'mobileNumber',
            dataIndex: 'mobileNumber'
        },
        {
            title: 'نوع کاربری',
            align: 'center',
            key: 'type',
            dataIndex: 'type',
            render: (type) => userTypes[type]
        },
        {
            title: 'نام پروژه',
            align: 'center',
            key: 'projectName',
            dataIndex: 'projectName'
        },
        {
            title: 'تاریخ ثبت رزرو',
            align: 'center',
            key: 'reservIssuDate',
            dataIndex: 'reservIssuDate',
            render: (reservIssuDate) => new DateObject({
                date: reservIssuDate,
                calendar: gregorian,
                locale: gregorian_en
            }).convert(persian).format('YYYY/MM/DD')
        },
        {
            title: 'لغو رزرو',
            align: 'center',
            key: 'delete',
            dataIndex: '_id',
            render: (_id, row) => {
                // console.log('in table >>>', _id, row?.status);
                return (
                    row?.status === 'active' ?
                        <Popconfirm
                            title={'آیا از لغو رزرو مطمئن هستید؟'}
                            onConfirm={() => handleOnClickDisableReservation(_id)}
                            okButtonProps={{
                                className: '!bg-red-500 !shadow-none',
                                loading: disableReservationIsLoading
                            }}
                        >
                            <TrashOutlined className="!text-gray-40 !text-[28px] hover:!text-red-500" />
                        </Popconfirm> :
                        'لغو شده'
                );
            }
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
                    <Col span={5}>
                        <Select
                            placeholder="پروژه"
                            className="w-full"
                            onChange={v => handleChangeFilter(v, 'projectName')}
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
                            ]}
                            allowClear
                        />
                    </Col>

                    <Col span={3}>
                        <Select
                            placeholder="نوع کاربری"
                            className="w-full"
                            onChange={v => handleChangeFilter(v, 'userType')}
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

                    <Col span={4}>
                        <DatePicker
                            placeholder="تاریخ"
                            onChange={handleOnChangeDatePicker}
                        />
                    </Col>

                    <Col span={4}>
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
                                    label: 'نام دفتر املاک',
                                    value: 'realstateName'
                                },
                                {
                                    label: 'کد دفتر املاک',
                                    value: 'realstateRegNo'
                                }
                            ]}
                            id={'searchByField'}
                            allowClear
                        />
                    </Col>

                    <Col span={8}>
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
                                        } else if (['realstateRegNo', 'realstateName'].includes(searchBy)) {
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
            </Form>

            <div className="bg-white my-[20px] py-[40px] px-[16px]">
                <Table
                    loading={isLoading}
                    columns={columns}
                    dataSource={reservations}
                    rowKey={'_id'}
                    bordered={false}
                    pagination={{
                        position: ['bottomRight'],
                        hideOnSinglePage: true,
                        showSizeChanger: false,
                        pageSize: 20,
                        total: reservationsCount,
                        onChange: page => setFilters(current => ({...current, page}))
                    }}
                />
            </div>
        </>
    );
};

export default ReservationsTable;
