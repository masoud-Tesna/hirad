'use client';

import {Layout} from 'antd';
import Image from 'next/image';
import Banner from '@/templates/Banner';
import BannerCTA from '@/templates/BannerCTA';
import Footer from '@/templates/Footer';
import logo from '/public/logo.svg';

export default function Template({children}) {
  
  return (
    <Layout className="min-h-full !bg-white">
      <Layout.Header className="!shadow-1 !bg-primary !h-[75px] !flex justify-center">
        <Image
          src={logo}
          alt="Hirad"
          priority
        />
      </Layout.Header>
      
      <Layout.Content>
        <div className="--bannerSection relative">
          <div>
            <Banner />
          </div>
          
          <div className="w-full lg:w-10/12 mx-auto relative top-[-25px]">
            <BannerCTA />
          </div>
        </div>
        
        <div className="--pageSection mt-[40px] text-black w-full lg:w-10/12 mx-auto">
          {children}
        </div>
      </Layout.Content>
      
      <Layout.Footer className="!bg-black !p-0">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}
