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
              description: 'منطقه چلک در فاصله ۵ کیلومتری نوشهر کوتاهترین فاصله میان جنگل و دریا را در سرتاسر مازندران دارد. و همین موضوع باعث شده آب و هوای این منطقه همیشه معتدل بوده و کمترین میزان رطوبت را داشته باشد. دسترسی این منطقه به آزادراه تهران شمال باعث شده که در ۲ ساعت از تهران بتوان به چلک رسید. وجود تراکم درختان و حفاظت از آنها سبب شد تا جانمایی بنا در سطوحی که فاقد پوشش طبیعی بودند صورت پذیرد و این استقرار با رویکرد اشراف حداکثری به محیط پیرامونی همچون جنگل و دریا صورت گرفته است. استقراری که می باید در فصول مختلف موجب فراهم آوردن حد مطلوب آسایش برای ساکنین باشد. سناریوی طراحی فضاهای سکونتی بنای فوق بر اساس راهبرد تفکیک فضاها شکل گرفته است. در حقیقت تمامی فضا در عین حال که به صورت مطلوب با هم در ارتباط هستند از طریق فضاهای فیلتر بدون ایجاد مزاحمت و تداخل در عملکرد از هم مجزا شده‌اند. به صورتی که فضاهای عمومی تر مانند پذیرایی، آشپزخانه و نشیمن در طبقه همکف و اتاق خواب ها، حال خصوصی و استخر.'
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
