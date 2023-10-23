'use client';

import {Layout} from 'antd';
import Image from 'next/image';
import Banner from './components/Banner';
import BannerCTA from './components/BannerCTA';
import Footer from './components/Footer';

export default function Template({children}) {
  
  
  return (
    <Layout className="min-h-full !bg-white">
      <Layout.Header className="!shadow-1 !bg-primary !h-[75px] !flex justify-center">
        <Image
          src="/logo.svg"
          alt="Next.js Logo"
          width={45}
          height={67}
          layout={'responsive'}
          priority
        />
      </Layout.Header>
      
      <Layout.Content>
        <div className="--bannerSection relative">
          <div className="h-[600px] h-[calc(100vh-75px)]-forTest">
            <Banner />
          </div>
          
          <div className="w-full max-w-[70%]  mx-auto relative top-[-25px]">
            <BannerCTA />
          </div>
        </div>
        
        <div className="--pageSection">
          {children}
        </div>
      </Layout.Content>
      
      <Layout.Footer className="!bg-black !p-0">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}
