'use client';

import projectAmenitiesBg from '/public/images/projectAmenitiesBg.png';
import {Col, Row} from 'antd';
import {useState} from 'react';
import classNames from 'classnames';
import downOutlined from '/public/icons/downOutlined.svg';
import parkingIcon from '/public/icons/parking.svg';
import cinemaIcon from '/public/icons/cinema.svg';
import snookerIcon from '/public/icons/snooker.svg';
import Image from 'next/image';

const ProjectAmenities = () => {
  const [showAmenitiesVisible, setShowAmenitiesVisible] = useState(false);
  
  return (
    <Row
      className=""
      style={{backgroundImage: `url('${projectAmenitiesBg.src}')`}}
      align="middle h-[600px] md:mx-[-10%]"
    >
      <Col
        className={classNames('w-[500px] fill-[linear-gradient(180deg,rgba(137,137,137,0.50)_-2.81%,rgba(255,255,255,0.00)_104.22%)] drop-shadow-[-3px_0px_12px_rgba(0,0,0,0.12)] backdrop-blur-[20px] transition-[height] ease-in-out duration-[2s] pt-[56px] pb-[22px] px-[2%] text-white text-center', {'h-full': showAmenitiesVisible})}
      >
        <div className="text-captionXxl">
          امکانات رفاهی فلامک
        </div>
        
        <div className="text-captionXl">
          Falamac Project Amenities
        </div>
        
        <div className={classNames('w-1/2 mt-[25px] mx-auto space-y-[12px] [&>div]:border-solid [&>div]:border-0 [&>div]:border-b [&>div]:border-gray-30 [&>div]:pb-[12px] max-h-0 !transition-[max-height]  duration-[.4s] overflow-hidden', {'!max-h-full': showAmenitiesVisible})}>
          <div>
            <Row align="middle" gutter={18}>
              <Col flex="58px" className="text-end">
                <Image
                  src={parkingIcon}
                  alt={'parking'}
                  layout="responsive"
                  className="w-[40px]"
                />
              </Col>
              
              <Col className="ps-[12px]">
                Parking | پارکینگ
              </Col>
            </Row>
          </div>
          
          <div>
            <Row align="middle" gutter={18}>
              <Col flex="58px" className="text-end">
                <Image
                  src={cinemaIcon}
                  alt={'parking'}
                  layout="responsive"
                  className="w-[40px]"
                />
              </Col>
              
              <Col className="ps-[12px]">
                Cinema | سینما
              </Col>
            </Row>
          </div>
          
          <div>
            <Row align="middle" gutter={18}>
              <Col flex="58px" className="text-end">
                <Image
                  src={snookerIcon}
                  alt={'parking'}
                  layout="responsive"
                  className="w-[40px]"
                />
              </Col>
              
              <Col className="ps-[12px]">
                Snooker | بیلیارد
              </Col>
            </Row>
          </div>
          
          <div>
            <Row align="middle" gutter={18}>
              <Col flex="58px" className="text-end">
                <Image
                  src={parkingIcon}
                  alt={'parking'}
                  layout="responsive"
                  className="w-[40px]"
                />
              </Col>
              
              <Col className="ps-[12px]">
                Parking | پارکینگ
              </Col>
            </Row>
          </div>
          
          <div>
            <Row align="middle" gutter={18}>
              <Col flex="58px" className="text-end">
                <Image
                  src={cinemaIcon}
                  alt={'parking'}
                  layout="responsive"
                  className="w-[40px]"
                />
              </Col>
              
              <Col className="ps-[12px]">
                Cinema | سینما
              </Col>
            </Row>
          </div>
          
          <div>
            <Row align="middle" gutter={18}>
              <Col flex="58px" className="text-end">
                <Image
                  src={snookerIcon}
                  alt={'parking'}
                  layout="responsive"
                  className="w-[40px]"
                />
              </Col>
              
              <Col className="ps-[12px]">
                Snooker | بیلیارد
              </Col>
            </Row>
          </div>
        </div>
        
        <div className="mt-[20px]">
          <Image
            src={downOutlined}
            alt={''}
            className={classNames('transition-all ease-in-out duration-[.4s]', {'rotate-180': showAmenitiesVisible})}
            onClick={() => setShowAmenitiesVisible(current => !current)}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProjectAmenities;
