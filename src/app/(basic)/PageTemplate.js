'use client';

import {Col, Layout, Row} from 'antd';
import Image from 'next/image';
import Banner from '@/templates/Banner';
import BannerCTA from '@/templates/BannerCTA';
import Footer from '@/templates/Footer';
import logo from '/public/logo.svg';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';

const LoginSection = dynamic(
  () => import('./components/LoginSection'),
  {
    ssr: false,
    loading: () => <Skeleton height={23} width={100} baseColor={'rgba(255,255,255,.1)'} />
  }
);

export default function PageTemplate({children}) {
  return (
    <Layout className="min-h-full !bg-white">
      <Layout.Header className="!shadow-1 !bg-primary !h-[75px]">
        <Row align={'middle'} className="h-full">
          <Col flex={'1 1'} className="text-center">
            <Link href={'/'} className="my-auto" scroll={false}>
              <Image
                src={logo}
                alt="Hirad Construction Company"
                priority
                className="cursor-pointer max-h-[65px]"
              />
            </Link>
          </Col>
          
          <Col>
            <LoginSection />
          </Col>
        </Row>
      </Layout.Header>
      
      <Layout.Content>
        <div className="--bannerSection relative hidden md:block">
          <div>
            <Banner />
          </div>
          
          <div className="w-full lg:w-10/12 mx-auto relative top-[-25px]">
            <BannerCTA />
          </div>
        </div>
        
        <div className="--pageSection md:mt-[40px] text-black w-full md:w-10/12 mx-auto">
          {children}
        </div>
      </Layout.Content>
      
      <Layout.Footer className="!bg-black !p-0">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}
