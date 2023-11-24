'use client';

import classNames from 'classnames';
import {Col, Modal, Row, Space} from 'antd';
import Image from 'next/image';
import {useState} from 'react';
import {motion} from 'framer-motion';
import BookVisitForm from '@/app/components/BookVisitForm';

const BannerCTA = () => {
  
  const [bookVisitModalVisible, setBookVisitModalVisible] = useState(false);
  
  const borderClassName = '[&>div:not(:last-child)]:text-center [&>div:not(:last-child)]:border-solid [&>div:not(:last-child)]:border-0 [&>div:not(:last-child)]:border-e [&>div:not(:last-child)]:border-gray-30';
  
  return (
    <>
      <Row
        className={classNames('w-full bg-white py-[18px] shadow-2 [&>.ant-col]:text-center', borderClassName)}
      >
        <Col span={6}>
          <CTALink
            text={{persian: 'رزرو بازدید واحد', english: 'Book Visit'}}
            icon={{path: '/icons/calendar.svg', width: 50, height: 54}}
            onClick={() => setBookVisitModalVisible(true)}
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
      
      <Modal
        open={bookVisitModalVisible}
        footer={null}
        onCancel={() => setBookVisitModalVisible(false)}
        title="رزرو زمان بازدید"
        className="--customModal"
        width="55%"
      >
        <BookVisitForm />
      </Modal>
    </>
  );
};

const CTALink = ({text, icon, onClick}) => {
  return (
    <motion.div whileTap={{scale: 0.75}}>
      <Space onClick={onClick} className="cursor-pointer select-none">
        <div className="[&>div]:text-center [&>div]:text-captionXl">
          <div className="text-black">{text?.persian}</div>
          
          <div className="text-gray-40">{text?.english}</div>
        </div>
        
        <div>
          <Image src={icon?.path} alt={text?.persian} layout={'responsive'} width={icon?.width} height={icon?.height} />
        </div>
      </Space>
    </motion.div>
  );
};

export default BannerCTA;
