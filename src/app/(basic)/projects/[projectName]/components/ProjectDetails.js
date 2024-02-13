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
                  کارفرما: گروه ساختمانی هیراد
                </li>
                
                <li>
                  کاربری: مسکونی
                </li>
                
                <li>
                  نشانی: شهرک غرب، فاز 4،فلامک شمالی، کوچه حیدریان، پلاک 9
                </li>
                
                <li>
                  سرپرست کارگاه: امیرحسین نوشاد
                </li>
                
                <li>
                  آرشیتکت: عطیه سوهانی
                </li>
                
                <li>
                  نوع سازه: بتن آرمه با سقف وافل
                </li>
                
                <li>
                  مساحت زمین: 450 متر مربع
                </li>
                
                <li>
                  زیربنا: 1500 متر مفید، 1000 متر غیرمفید
                </li>
              </div>
            </Col>
            
            <Col xs={24} md={12} className="d-ltr">
              <div className="list-none list-inside text-captionLg text-black ">
                <li>
                  Employer: Hirad Construction Group
                </li>
                
                <li>
                  Usage: Residential
                </li>
                
                <li>
                  Address: Shahrak-e Gharb, Phase 4, North Flamak, Heydarian Alley, No. 9
                </li>
                
                <li>
                  Workshop Supervisor: Amir Hossein Noushad
                </li>
                
                <li>
                  Architect: Atiye Sohani
                </li>
                
                <li>
                  Structure Type: Reinforced Concrete with Waffle Slab Roof
                </li>
                
                <li>
                  Land Area: 450 square meters
                </li>
                
                <li>
                  Built Area: 1500 square meters (Usable), 1000 square meters (Non-usable)
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
