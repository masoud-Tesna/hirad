'use client';

import {Layout} from 'antd';
import Image from 'next/image';
import Banner from '@/templates/Banner';
import BannerCTA from '@/templates/BannerCTA';
import Footer from '@/templates/Footer';
import logo from '/public/logo.svg';
import {useRouter} from 'next/navigation';
import Link from 'next/link';

export default function PageTemplate({children}) {
  const router = useRouter();
  
  return (
    <Layout className="min-h-full !bg-white">
      <Layout.Header className="!shadow-1 !bg-primary !h-[75px] !flex justify-center">
        <Link href={'/'} className="my-auto" scroll={false}>
          <Image
            src={logo}
            alt="Hirad"
            priority
            className="cursor-pointer max-h-[65px]"
          />
        </Link>
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
