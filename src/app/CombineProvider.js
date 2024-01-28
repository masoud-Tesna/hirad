'use client';

import {ConfigProvider} from 'antd';
import faIR from 'antd/locale/fa_IR';
import {antdTheme} from '@/theme';
import {useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthProvider} from '@/app/contexts/auth/AuthContext';
import {AntdRegistry} from '@ant-design/nextjs-registry';
import BookVisitProvider from '@/app/contexts/bookVisit';
import LoginModalProvider from '@/app/contexts/auth/LoginModalContext';

const CombineProvider = ({children}) => {
  
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <AntdRegistry>
        <AuthProvider>
          <ConfigProvider theme={antdTheme} direction={'rtl'} locale={faIR}>
            <ToastContainer
              position="top-right"
              autoClose={4000}
              rtl
              draggable
              theme="colored"
              closeButton
              bodyClassName="text-[0.875rem] font-vazir"
            />
            <BookVisitProvider>
              <LoginModalProvider>
                {children}
              </LoginModalProvider>
            </BookVisitProvider>
            
            <ReactQueryDevtools />
          </ConfigProvider>
        </AuthProvider>
      </AntdRegistry>
    </QueryClientProvider>
  );
};

export default CombineProvider;
