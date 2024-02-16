'use client';

import {Col, Layout, Row, Skeleton} from 'antd';
import Header from '@/app/dashboard/components/Header';
import Sidebar from '@/app/dashboard/components/Sidebar';
import {useAuth} from '@/app/contexts/auth/AuthContext';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {useQueryClient} from '@tanstack/react-query';
import DashboardPageIsLoading from './components/DashboardPageIsLoading';

const PageTemplate = ({children}) => {
  const {isLoggedIn, userInfo} = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();
  
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (userInfo?.type === 'admin' || !isLoggedIn) {
      setIsLoading(false);
    }
    
    if (userInfo?.type !== 'admin' && isLoggedIn) {
      router.push('/');
    }
  }, [userInfo, isLoggedIn]);
  
  return (
    <Layout className="min-h-full" hasSider>
      {isLoading ?
        <Layout className="!bg-[#FAFBFD] h-screen">
          <Layout.Content>
            <Row align={'stretch'} className="h-full !m-0">
              <Col flex={'270px'}>
                <Skeleton.Button block className="!h-full" />
              </Col>
              
              <Col flex={'1 1'}>
                <DashboardPageIsLoading />
              </Col>
            </Row>
          </Layout.Content>
        </Layout> :
        <>
          <Sidebar />
          
          <Layout className="!bg-[#FAFBFD]">
            <Layout.Header className="!bg-white !h-[80px] !flex justify-end shadow-8 relative">
              <Header />
            </Layout.Header>
            
            <Layout.Content>
              {children}
            </Layout.Content>
          </Layout>
        </>
      }
    </Layout>
  );
};

export default PageTemplate;
