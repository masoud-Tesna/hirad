import {Col, Row} from 'antd';
import grayLogo from '/public/grayLogo.svg';
import Image from 'next/image';

const ProjectDetails = () => {
  return (
    <>
      <Row justify={'center'} className="my-[20px] md:my-[50px] max-md:px-[16px]" gutter={[0, 20]}>
        <Col className="text-end">
          <div className="text-black text-captionXxl">
            مـشـخصـات پـروژه
          </div>
          
          <div className="text-gray-40 text-captionXl">
            Project specifications
          </div>
        </Col>
        
        <Col span={24}>
          <Row gutter={[16, 16]}>
            <div className="absolute z-30 left-[50%] translate-x-[-50%] top-[-10px] max-md:hidden">
              <Image
                src={grayLogo}
                alt="Hirad Construction Company"
                width={69}
                layout={'responsive'}
                priority
                className="max-w-[69px] h-full"
              />
            </div>
            
            <Col xs={24} md={12}>
              <div className="list-disc list-inside text-captionLg text-black">
                <li>
                  کارفرما: گروه ساختمانی آوانگارد
                </li>
                
                <li>
                  کاربری: مسکونی
                </li>
                
                <li>
                  آدرس پروژه: مازندران، نوشهر، چلک
                </li>
                
                <li>
                  معمار: امیرحسین تبریزی
                </li>
                
                <li>
                  نوع سازه: اسکلت بتنی
                </li>
                
                <li>
                  مساحت زمین: ۱۰,۰۰۰ متر مربع
                </li>
              </div>
            </Col>
            
            <Col xs={24} md={12} className="d-ltr">
              <div className="list-none list-inside text-captionLg text-black ">
                <li>
                  Employer: Avangard Construction Group
                </li>
                
                <li>
                  Usage: Residential
                </li>
                
                <li>
                  Project address: Mazandaran, Nowshehr, Chalak
                </li>
                
                <li>
                  Architect: Amirhossein Tabrizi
                </li>
                
                <li>
                  Type of structure: concrete frame
                </li>
                
                <li>
                  Land area: 10,000 square meter
                </li>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProjectDetails;
