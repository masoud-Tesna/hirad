'use client';

import {Col, Drawer, Layout, Row} from 'antd';
import Image from 'next/image';
import Banner from '@/templates/Banner';
import BannerCTA from '@/templates/BannerCTA';
import Footer from '@/templates/Footer';
import logo from '/public/logo.svg';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';
import {MenuOutlined} from '@ant-design/icons';
import {useState} from 'react';
import MobileMenu from './components/MobileMenu';
import {useSelectedLayoutSegment} from 'next/navigation';
import classNames from 'classnames';

const LoginSection = dynamic(
  () => import('./components/LoginSection'),
  {
    ssr: false,
    loading: () => <Skeleton height={23} width={100} baseColor={'rgba(255,255,255,.1)'} />
  }
);

export default function PageTemplate({children}) {
  const segment = useSelectedLayoutSegment();
  
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  
  const handleOpenDrawer = () => setMenuDrawerOpen(true);
  
  const handleCloseDrawer = () => setMenuDrawerOpen(false);
  
  return (
    <Layout className="min-h-full !bg-white">
      <Layout.Header className="!shadow-1 !bg-primary !h-[50px] md:!h-[75px] !px-[6%] !leading-[50px] md:!leading-[75px]">
        <Row align={'middle'} className="h-full !hidden md:!flex">
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
        
        <Row align={'middle'} className="h-full md:!hidden" justify={'space-between'}>
          <Col span={3} className="cursor-pointer" onClick={handleOpenDrawer}>
            <MenuOutlined className="!text-white text-[21px] !align-middle" />
          </Col>
          
          <Col flex={'1 1'} className="text-center">
            <Link href={'/'} className="my-auto inl" scroll={false}>
              <Image
                src={logo}
                alt="Hirad Construction Company"
                priority
                className="cursor-pointer max-h-[40px] md:max-h-[65px]"
              />
            </Link>
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
        
        <div className="--mobileBannerSection relative md:!hidden">
          <Banner asMobile />
        </div>
        
        <div className={classNames('w-full mx-auto relative md:hidden p-[16px] pb-0', {'!hidden': segment === 'projects'})}>
          <BannerCTA />
        </div>
        
        <div className="--pageSection md:mt-[40px] text-black w-full md:w-10/12 mx-auto">
          {children}
        </div>
      </Layout.Content>
      
      <Layout.Footer className="!bg-black !p-0">
        <Footer />
      </Layout.Footer>
      
      <Drawer
        title="گروه ساختمانی هیراد"
        onClose={handleCloseDrawer}
        open={menuDrawerOpen}
        width={'70%'}
      >
        <MobileMenu handleCloseDrawer={handleCloseDrawer} />
      </Drawer>
    </Layout>
  );
}
