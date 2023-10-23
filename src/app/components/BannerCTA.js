'use client';

import classNames from 'classnames';
import {Col, Row, Space} from 'antd';
import Image from 'next/image';

const BannerCTA = () => {
  
  const borderClassName = '[&>div:not(:last-child)]:text-center [&>div:not(:last-child)]:border-solid [&>div:not(:last-child)]:border-0 [&>div:not(:last-child)]:border-e [&>div:not(:last-child)]:border-gray-10';
  
  return (
    <Row
      className={classNames('w-full bg-white py-[18px] shadow-2 [&>.ant-col]:text-center', borderClassName)}
    >
      <Col span={6}>
        <CTALink
          text={{persian: 'رزرو بازدید واحد', english: 'Book Visit'}}
          icon={{path: '/icons/calendar.svg', width: 50, height: 54}}
        />
      </Col>
      
      <Col span={6}>
        <CTALink
          text={{persian: 'پروژه فلامک', english: 'Falamac'}}
          icon={{path: '/icons/hotel.svg', width: 50, height: 54}}
        />
      </Col>
      
      <Col span={6}>
        <CTALink
          text={{persian: 'همکاری با هیراد', english: 'Cooperation'}}
          icon={{path: '/icons/cooperation.svg', width: 50, height: 54}}
        />
      </Col>
      
      <Col span={6}>
        <CTALink
          text={{persian: 'درباره هیراد', english: 'About Hirad'}}
          icon={{path: '/icons/messages.svg', width: 50, height: 54}}
        />
      </Col>
    </Row>
  );
};

const CTALink = ({text, icon}) => {
  return (
    <Space>
      <div className="[&>div]:text-center [&>div]:text-captionXl">
        <div className="text-black">{text?.persian}</div>
        
        <div className="text-gray-20">{text?.english}</div>
      </div>
      
      <div>
        <Image src={icon?.path} alt={text?.persian} layout={'responsive'} width={icon?.width} height={icon?.height} />
      </div>
    </Space>
  );
};

export default BannerCTA;
