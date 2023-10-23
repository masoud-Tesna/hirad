'use client';

import {Col, Layout, Row} from 'antd';
import Image from 'next/image';
import Banner from '@/app/components/Banner';
import classNames from 'classnames';

export default function Template({children}) {
  
  const borderClassName = '[&>div:not(:last-child)]:text-center [&>div:not(:last-child)]:border-solid [&>div:not(:last-child)]:border-0 [&>div:not(:last-child)]:border-e [&>div:not(:last-child)]:border-gray-10';
  
  return (
    <Layout className="min-h-full !bg-white">
      <Layout.Header className="!shadow-1 !bg-primary !h-[75px] !flex justify-center">
        <Image
          src="/logo.svg"
          alt="Next.js Logo"
          width={45}
          height={67}
          priority
        />
      </Layout.Header>
      
      <Layout.Content>
        <div>
          <div className="relative">
            <div className="h-[600px] h-[calc(100vh-75px)]-forTest">
              <Banner />
            </div>
            
            <Row
              className={classNames('w-full max-w-[70%] mx-auto bg-white py-[18px] shadow-2 relative top-[-25px]', borderClassName)}
            >
              <Col span={6}>1</Col>
              <Col span={6}>2</Col>
              <Col span={6}>3</Col>
              <Col span={6}>4</Col>
            </Row>
          </div>
          
          <div>
            {children}
          </div>
        </div>
      </Layout.Content>
      
      <Layout.Footer className="!bg-black !p-0">
        <Row>
          <Col span={24}></Col>
          
          <Col span={24} className="text-center text-white text-captionMd h-[40px] leading-[40px] d-ltr">
            WWW.hirad-group.ir – Copyright © 2023 – All rights reserved.
          </Col>
        </Row>
      </Layout.Footer>
    </Layout>
  );
}
