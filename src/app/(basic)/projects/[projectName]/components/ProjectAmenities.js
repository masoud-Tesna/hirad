'use client';

import projectAmenitiesBg from '/public/images/projectAmenitiesBg.png';
import {Col, Divider, Row, Space} from 'antd';
import {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import downOutlined from '/public/icons/downOutlined.svg';
import parkingIcon from '/public/icons/parking.svg';
import poolIcon from '/public/icons/pool.svg';
import jacuzziIcon from '/public/icons/jacuzzi.svg';
import storageRoomIcon from '/public/icons/storageRoom.svg';
import saunaIcon from '/public/icons/sauna.svg';
import smartHomeIcon from '/public/icons/smartHome.svg';
import Image from 'next/image';

const ProjectAmenities = () => {
  const [showAmenitiesVisible, setShowAmenitiesVisible] = useState(false);
  
  const contentRef = useRef(null);
  
  // Adjusted toggleAmenities function
  const toggleAmenities = () => {
    const currentHeight = showAmenitiesVisible ? 0 : contentRef.current.scrollHeight;
    contentRef.current.style.maxHeight = `${currentHeight}px`;
    setShowAmenitiesVisible(!showAmenitiesVisible);
  };
  
  // Adjusted useEffect
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = showAmenitiesVisible ? `${contentRef.current.scrollHeight}px` : '20px'; // Adjust 20px as needed
    }
  }, [showAmenitiesVisible]);
  
  return (
    <Row
      className="h-[600px] md:mx-[-10%] relative"
      align="middle"
    >
      <Image src={projectAmenitiesBg} alt={''} layout="fill" placeholder="blur" objectFit="cover" />
      
      <Col
        className="w-[500px] fill-[linear-gradient(180deg,rgba(137,137,137,0.50)_-2.81%,rgba(255,255,255,0.00)_104.22%)] drop-shadow-[-3px_0px_12px_rgba(0,0,0,0.12)] backdrop-blur-[20px] transition-all duration-500 ease-in-out transform py-[37px] md:pb-[22px] px-[2%] text-white text-center"
      >
        <div className="text-captionXl2 md:text-captionXxl">
          امکانات رفاهی هیراد پالاس
        </div>
        
        <div className=" text-captionXl md:text-captionXl2">
          Hirad Palace Project Amenities
        </div>
        
        <div
          ref={contentRef}
          className="--projectAmenitiesContainer"
          style={{maxHeight: showAmenitiesVisible ? `${contentRef.current.scrollHeight}px` : '0px'}}
        >
          <div
            className={classNames('w-2/3 md:w-1/2 mt-[25px] mx-auto space-y-[12px] [&>div]:border-solid [&>div]:border-0 [&>div]:border-b [&>div]:border-gray-30 [&>div]:pb-[12px] max-h-0 overflow-hidden --projectAmenitiesContainer', {'!max-h-full': showAmenitiesVisible})}
          >
            <div>
              <Row align="middle" gutter={10}>
                <Col flex="50px" className="text-end">
                  <Image
                    src={parkingIcon}
                    alt={'parking'}
                    layout="responsive"
                    width={40}
                    height={40}
                  />
                </Col>
                
                <Col className="ps-[12px] truncate">
                  <Space size={6} split={<Divider type={'vertical'} className="!border-white !m-0" />}>
                    <div>
                      دو پارکینگ
                    </div>
                    
                    <div>
                      Parking
                    </div>
                  </Space>
                </Col>
              </Row>
            </div>
            
            <div>
              <Row align="middle" gutter={10}>
                <Col flex="50px" className="text-end">
                  <Image
                    src={poolIcon}
                    alt={'parking'}
                    layout="responsive"
                    width={40}
                    height={40}
                  />
                </Col>
                
                <Col className="ps-[12px] truncate">
                  <Space size={6} split={<Divider type={'vertical'} className="!border-white !m-0" />}>
                    <div>
                      استخر
                    </div>
                    
                    <div>
                      Pool
                    </div>
                  </Space>
                </Col>
              </Row>
            </div>
            
            <div>
              <Row align="middle" gutter={10}>
                <Col flex="50px" className="text-end">
                  <Image
                    src={jacuzziIcon}
                    alt={'cinema'}
                    layout="responsive"
                    width={49}
                    height={40}
                  />
                </Col>
                
                <Col className="ps-[12px] truncate">
                  <Space size={6} split={<Divider type={'vertical'} className="!border-white !m-0" />}>
                    <div>
                      جکوزی
                    </div>
                    
                    <div>
                      Jacuzzi
                    </div>
                  </Space>
                </Col>
              </Row>
            </div>
            
            <div>
              <Row align="middle" gutter={10}>
                <Col flex="50px" className="text-end">
                  <Image
                    src={storageRoomIcon}
                    alt={'cinema'}
                    layout="responsive"
                    width={40}
                    height={40}
                  />
                </Col>
                
                <Col className="ps-[12px] truncate">
                  <Space size={6} split={<Divider type={'vertical'} className="!border-white !m-0" />}>
                    <div>
                      انباری
                    </div>
                    
                    <div>
                      Storage Room
                    </div>
                  </Space>
                </Col>
              </Row>
            </div>
            
            <div>
              <Row align="middle" gutter={10}>
                <Col flex="50px" className="text-end">
                  <Image
                    src={saunaIcon}
                    alt={'snooker'}
                    layout="responsive"
                    width={40}
                    height={40}
                  />
                </Col>
                
                <Col className="ps-[12px] truncate">
                  <Space size={6} split={<Divider type={'vertical'} className="!border-white !m-0" />}>
                    <div>
                      سونا
                    </div>
                    
                    <div>
                      Sauna
                    </div>
                  </Space>
                </Col>
              </Row>
            </div>
            
            <div>
              <Row align="middle" gutter={10}>
                <Col flex="50px" className="text-end">
                  <Image
                    src={smartHomeIcon}
                    alt={'snooker'}
                    layout="responsive"
                    width={40}
                    height={40}
                  />
                </Col>
                
                <Col className="ps-[12px] truncate">
                  <Space size={6} split={<Divider type={'vertical'} className="!border-white !m-0" />}>
                    <div>
                      واحد هوشمند
                    </div>
                    
                    <div>
                      Smart
                    </div>
                  </Space>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        
        <div className="h-[50px] center " onClick={toggleAmenities}>
          <Image
            src={downOutlined}
            alt={''}
            className={classNames('transition-all ease-in-out duration-[.4s] mt-[20px]', {'rotate-180': showAmenitiesVisible})}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProjectAmenities;
