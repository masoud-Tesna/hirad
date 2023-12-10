'use client';

import {createCache, extractStyle, StyleProvider} from '@ant-design/cssinjs';
import {useServerInsertedHTML} from 'next/navigation';
import {ConfigProvider} from 'antd';
import faIR from 'antd/locale/fa_IR';
import {antdTheme} from '@/theme';
import {useMemo, useRef, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {BannerProvider} from '@/app/contexts/Banner';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledComponentsRegistry = ({children}) => {
  const cache = useMemo(() => createCache(), []);
  
  const isServerInserted = useRef(false);
  
  useServerInsertedHTML(() => {
    // avoid duplicate css insert
    if (isServerInserted.current) {
      return;
    }
    isServerInserted.current = true;
    return <style id="antd" dangerouslySetInnerHTML={{__html: extractStyle(cache, true)}} />;
  });
  
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

const CombineProvider = ({children}) => {
  // register Swiper custom elements
  // register();
  
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={antdTheme} direction={'rtl'} locale={faIR}>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            pauseOnHover
            draggable
            theme="colored"
            closeButton
            bodyClassName="text-[0.875rem] font-vazir"
          />
          <BannerProvider>
            {children}
          </BannerProvider>
          
          <ReactQueryDevtools />
        </ConfigProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
};

export default CombineProvider;


/*

npx jscodeshift@latest ./src/ --extensions=ts,tsx  --parser=tsx --transform=./node_modules/@tanstack/react-query/build/codemods/src/v5/remove-overloads/remove-overloads.js

*
* */
