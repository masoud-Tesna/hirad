'use client';

import {Col, Row} from 'antd';

import image1 from '/public/images/projects/gallery/image-1.png';
import image2 from '/public/images/projects/gallery/image-2.png';
import image3 from '/public/images/projects/gallery/image-3.png';
import image4 from '/public/images/projects/gallery/image-4.png';
import image5 from '/public/images/projects/gallery/image-5.png';
import image6 from '/public/images/projects/gallery/image-6.png';
import image7 from '/public/images/projects/gallery/image-7.png';
import image8 from '/public/images/projects/gallery/image-8.png';
import image9 from '/public/images/projects/gallery/image-9.png';
import Image from 'next/image';

const ProjectGallery = () => {
  return (
    <>
      
      <Row justify={'center'} className="my-[50px]">
        <Col className="text-end">
          <div className="text-black text-captionXxl">
            گالری تصاویر پروژه
          </div>
          
          <div className="text-gray-40 text-captionXl">
            project images Gallery
          </div>
          
          <div className="text-black text-captionLg uppercase">
            Falamac
          </div>
        </Col>
      </Row>
      
      {/*<div className="d-ltr grid grid-cols-10 grid-rows-10 gap-4 [&>div]:bg-center [&>div]:bg-cover [&>div]:bg-no-repeat">
       <div className="col-span-3 row-span-5 h-[405px] bg-[url('/images/projects/project1.png')]" />
       
       <div className="col-span-3 row-span-2 col-start-4 bg-[url('/images/projects/project2.png')]" />
       
       <div className="col-span-3 row-span-3 col-start-4 row-start-3 bg-[url('/images/projects/project3.png')]" />
       
       <div className="col-span-4 row-span-3 col-start-7 row-start-1 bg-[url('/images/projects/project4.png')]" />
       
       <div className="col-span-4 row-span-2 col-start-7 row-start-4 bg-[url('/images/projects/project5.png')]" />
       
       <div className="col-span-3 row-span-3 row-start-6 bg-[url('/images/projects/project1.png')]" />
       
       <div className="col-span-4 row-span-3 col-start-4 row-start-6 bg-[url('/images/projects/project2.png')]" />
       
       <div className="col-span-3 row-span-5 col-start-8 h-[524px] row-start-6 bg-[url('/images/projects/project3.png')]" />
       
       <div className="col-span-7 row-span-2 row-start-9 bg-[url('/images/projects/project4.png')]" />
       
       </div>*/}
      
      <div className="d-ltr grid grid-cols-12 grid-rows-16 gap-[16px] [&>div]:!bg-center [&>div]:!bg-cover [&>div]:!bg-no-repeat">
        <div
          className="col-span-4 row-span-7 h-[470px]"
          style={{
            background: `url("${image1?.src}")`
          }}
        >
          {/*<Image src={image1} alt={''} className="max-w-full" layout={'responsive'} />*/}
        </div>
        
        <div
          className="col-span-4 row-span-3 col-start-5"
          style={{
            background: `url("${image2?.src}")`
          }}
        >
          {/*<Image src={image2} alt={''} className="max-w-full" layout={'responsive'} />*/}
        </div>
        
        <div
          className="col-span-4 row-span-4 col-start-9"
          style={{
            background: `url("${image3?.src}")`
          }}
        >
          {/*<Image src={image3} alt={''} className="max-w-full" layout={'responsive'} />*/}
        </div>
        
        <div
          className="col-span-4 row-span-4 col-start-5 row-start-4"
          style={{
            background: `url("${image4?.src}")`
          }}
        >
          {/*<Image src={image4} alt={''} className="max-w-full" layout={'responsive'} />*/}
        </div>
        
        <div
          className="col-span-4 row-span-3 col-start-9 row-start-5"
          style={{
            background: `url("${image5?.src}")`
          }}
        >
          {/*<Image src={image5} alt={''} className="max-w-full" layout={'responsive'} />*/}
        </div>
        
        <div
          className="col-span-4 row-span-5 row-start-8"
          style={{
            background: `url("${image6?.src}")`
          }}
        >
          {/*<Image src={image6} alt={''} className="max-w-full" layout={'responsive'} />*/}
        </div>
        
        <div
          className="col-span-4 row-span-5 col-start-5 row-start-8"
          style={{
            background: `url("${image7?.src}")`
          }}
        >
          {/*<Image src={image7} alt={''} className="max-w-full" layout={'responsive'} />*/}
        </div>
        
        <div
          className="col-span-4 row-span-9 col-start-9 row-start-8 h-[580px]"
          style={{
            background: `url("${image8?.src}")`
          }}
        >
          {/*<Image src={image8} alt={''} className="max-w-full" layout={'responsive'} />*/}
        </div>
        
        <div
          className="col-span-8 row-span-4 row-start-13"
          style={{
            background: `url("${image9?.src}")`
          }}
        >
          {/*<Image src={image9} alt={''} className="max-w-full" layout={'responsive'} />*/}
        </div>
      </div>
    </>
  );
};

export default ProjectGallery;
