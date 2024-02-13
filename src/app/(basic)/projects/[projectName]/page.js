import {Col, Row} from 'antd';

import projectImage from '/public/images/projects/hiradPalace/forDescription.png';
import Image from 'next/image';
import Description from './components/Description';
import ProjectAmenities from './components/ProjectAmenities';
import ProjectGallery from './components/ProjectGallery';
import ProjectDetails from './components/ProjectDetails';
import {BusinessPartnersBox} from '@/app/(basic)/components/BusinessPartners';

export async function generateStaticParams() {
  const projects = ['hirad-palace'];
  
  return projects.map((project) => ({projectName: project}));
}

const ProjectDetailsPage = ({params: {projectName}}) => {
  
  const convertProjectNames = {
    'hirad-palace': 'Hirad Palace'
  };
  
  
  return (
    <>
      <Row
        justify={'space-between'}
        align={'stretch'}
        gutter={[{xs: 0, md: 40}, 16]}
        className="mb-[50px] md:mb-[100px] !flex-col-reverse md:!flex-row max-md:px-[16px] mt-[20px] md:mt-[15dvh] max-md:!mx-0"
      >
        <Col xs={24} md={12} xl={11}>
          <Description
            details={{
              projectName: convertProjectNames[projectName],
              projectImage: projectImage?.src,
              title: {
                top: 'Hirad Palace, Shahrak-e Gharb',
                bottom: 'Modern and magnificent architecture'
              },
              description: 'ساختمان هیراد پالاس، اثری مدرن و نوآورانه با طراحی معماری از عطیه سوهانی و سرپرستی امیر حسین نوشاد، در یکی از بهترین نقاط جغرافیایی شهرک غرب واقع گردیده است. این سازه بتن آرمه در مساحت ۴۵۰ متر مربع با بهره‌مندی از پیشرو ترین روش های اجرا، کیفیتی تضمین شده را به ساکنین خود ارائه می‌دهد. هدف اصلی سازندگان این بنا، ایجاد یک محیط زیبا و کارآمد است که با استفاده از به روز ترین فن‌آوری‌های ساخت و ساز در دنیا و با رعایت استانداردهای بین‌المللی، به عنوان یک نمونه برجسته در زمینه‌ی معماری مدرن شناخته می‌شود. گروه ساختمانی هیراد در طول کلیه مراحل به نظارت بر تمامی ارکان پروژه اعم از طراحی و اجرا با بالاترین دقت و اتخاذ حرفه‌ای ترین روش‌ها پرداخته و تضمین می‌کند که این بنا با رعایت بالاترین استانداردها و بهترین کیفیت ممکن قابل ارائه به مصرف کنندگان خواهد بود.'
            }}
          />
        </Col>
        
        <Col xs={24} md={12} className="max-[420px]:!min-h-[250px] max-md:!min-h-[300px]">
          <Image
            src={projectImage}
            alt={convertProjectNames[projectName]}
            className="max-w-full"
            placeholder="blur"
            layout="fill"
            objectFit="cover"
          />
        </Col>
      </Row>
      
      <ProjectAmenities />
      
      <ProjectGallery />
      
      <ProjectDetails />
      
      <div className="mt-[20px] mb-[50px] md:mb-[100px]">
        <BusinessPartnersBox count={5} />
      </div>
    </>
  );
};

export default ProjectDetailsPage;
