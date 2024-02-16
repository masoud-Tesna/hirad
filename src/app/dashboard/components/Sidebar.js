'use client';

import {Layout} from 'antd';
import logo from '/public/logo.svg';
import Image from 'next/image';
import SidebarMenu from './SidebarMenu';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Layout.Sider
      className="p-[20px] overflow-auto h-screen !sticky !start-0 !top-0 !bottom-0 !bg-primary"
      theme={'light'}
      width={270}
    >
      <div className="text-center mb-[16px]">
        <Link href={'/'}>
          <Image
            src={logo}
            alt="Hirad"
            priority
            className="max-h-[63px]"
          />
        </Link>
      </div>
      
      <SidebarMenu />
    </Layout.Sider>
  );
};

export default Sidebar;
