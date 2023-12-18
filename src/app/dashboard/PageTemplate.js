'use client';

import {Dropdown, Layout, Space} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import Link from 'next/link';
import Header from '@/app/dashboard/components/Header';
import Sidebar from '@/app/dashboard/components/Sidebar';
import {useAuth} from '@/app/contexts/auth/AuthContext';
import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {useQueryClient} from '@tanstack/react-query';

const PageTemplate = ({children}) => {
    const {isLoggedIn} = useAuth();
    const route = useRouter();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!isLoggedIn) {
            console.log('in if');
            queryClient.removeQueries();
            route.push('/');
        }
    }, [isLoggedIn]);

    return (
        <Layout className="min-h-full" hasSider>
            <Sidebar />

            <Layout className="!bg-[#FAFBFD]">
                <Layout.Header className="!bg-white !h-[80px] !flex justify-end shadow-8 relative">
                    <Header />
                </Layout.Header>

                <Layout.Content>
                    {children}
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default PageTemplate;
