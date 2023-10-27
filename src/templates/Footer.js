import {Col, Row} from 'antd';
import Image from 'next/image';

const Footer = () => {
  return (
    <Row>
      <Col span={24} className="bg-gray-10 bg-gray py-[8px] px-[10px]">
        <Row gutter={8} align="middle">
          <Col span={4} className="text-center">
            <Image
              src="/logo.svg"
              alt="Hirad Construction Company"
              width={61}
              height={91}
              layout={'responsive'}
              priority
              className="max-w-[61px]"
            />
          </Col>
          
          <Col xs={20} sm={16} md={10} lg={16}>
            <Row gutter={8} justify={'space-between'} align={'middle'}>
              <Col xs={24} lg={12}>
                <Row gutter={20} align={'middle'}>
                  <Col flex="70px">
                    <Image
                      src="/icons/location.svg"
                      alt="Hirad Construction Company"
                      width={50}
                      height={50}
                      layout={'responsive'}
                      priority
                    />
                  </Col>
                  
                  <Col flex="1 1" className="[&>div]:text-black [&>div]:text-captionLg [&>div]:py-[12px]">
                    <div className="border-solid border-0 border-b border-gray-30 inline-block">
                      تهران، شهرک غرب، خیابان گل افشان، پلاک 84
                    </div>
                    
                    <div>
                      Tehran, Shahrak-e gharb, Gol afshan Ave.
                    </div>
                  </Col>
                </Row>
              </Col>
              
              <Col xs={24} lg={6} className="[&>div]:py-[12px]">
                <Row
                  gutter={20}
                  align={'middle'}
                  className="border-solid border-0 border-b border-gray-30 [&>div]:text-captionLg [&>div]:text-black"
                >
                  <Col flex="1 1">
                    021-880912912
                  </Col>
                  
                  <Col flex="50px">
                    <Image
                      src="/icons/phone.svg"
                      alt="Hirad Construction Company"
                      width={31}
                      height={31}
                      layout={'responsive'}
                      priority
                    />
                  </Col>
                </Row>
                
                <Row gutter={20} align={'middle'}>
                  <Col flex="1 1">
                    info@hirad-group.ir
                  </Col>
                  
                  <Col flex="50px">
                    <Image
                      src="/icons/email.svg"
                      alt="Hirad Construction Company"
                      width={31}
                      height={31}
                      layout={'responsive'}
                      priority
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      
      <Col span={24} className="text-center text-white text-captionMd h-[40px] leading-[40px] d-ltr">
        https://Hirad-Group.ir – Copyright © 2023 – All rights reserved.
      </Col>
    </Row>
  );
};

export default Footer;
