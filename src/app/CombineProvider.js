'use client';

import {createCache, extractStyle, StyleProvider} from '@ant-design/cssinjs';
import {useServerInsertedHTML} from 'next/navigation';
import {ConfigProvider} from 'antd';
import faIR from 'antd/locale/fa_IR';
import {antdTheme} from '@/theme';
import {useMemo, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

const StyledComponentsRegistry = ({children}) => {
  const cache = useMemo(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{__html: extractStyle(cache, true)}} />
  ));
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

const CombineProvider = ({children}) => {
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={antdTheme} direction={'rtl'} locale={faIR}>
          {children}
          
          <ReactQueryDevtools />
        </ConfigProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
};

export default CombineProvider;