'use client';

import {Col, Divider, Row, Space} from 'antd';

import image1 from '/public/images/projects/gallery/image-1.png';
import image2 from '/public/images/projects/gallery/image-2.png';
import image3 from '/public/images/projects/gallery/image-3.png';
import image4 from '/public/images/projects/gallery/image-4.png';
import image5 from '/public/images/projects/gallery/image-5.png';
import image6 from '/public/images/projects/gallery/image-6.png';
import image7 from '/public/images/projects/gallery/image-7.png';
import image8 from '/public/images/projects/gallery/image-8.png';
import image9 from '/public/images/projects/gallery/image-9.png';
import {Image} from 'antd';
// import required modules
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import locationIcon from '../../../../../../public/icons/location2.svg';

const ProjectGallery = () => {
  return (
    <>
      
      <Row justify={'center'} className="my-[20px] md:my-[50px]">
        <Col className="text-end">
          <div className="text-black text-captionXxl">
            گالری تصاویر پروژه
          </div>
          
          <div className="text-gray-40 text-captionXl">
            project images Gallery
          </div>
          
          <div className="text-black text-captionLg uppercase">
            Hirad Palace
          </div>
        </Col>
      </Row>
      
      <Image.PreviewGroup>
        <div className="d-ltr hidden md:grid grid-cols-12 grid-rows-16 gap-[16px] mb-[30px]">
          <div
            className="col-span-4 row-span-7 overflow-hidden"
          >
            <Image
              src={image1?.src}
              rootClassName={'!size-full !max-w-full !max-h-full'}
              className="!size-full !max-w-full !max-h-full object-cover object-center"
	      alt={"Fake Alt"}
            />
          </div>
          
          <div
            className="col-span-4 row-span-3 col-start-5 overflow-hidden"
          >
            <Image
              src={image2?.src}
              rootClassName={'!size-full !max-w-full !max-h-full'}
              className="!size-full !max-w-full !max-h-full object-cover object-center"
	      alt={"Fake Alt"}
            />
          </div>
          
          <div
            className="col-span-4 row-span-4 col-start-9 overflow-hidden"
          >
            <Image
              src={image3?.src}
              rootClassName={'!size-full !max-w-full !max-h-full'}
              className="!size-full !max-w-full !max-h-full object-cover object-center"
	      alt={"Fake Alt"}
            />
          </div>
          
          <div
            className="col-span-4 row-span-4 col-start-5 row-start-4 overflow-hidden"
          >
            <Image
              src={image4?.src}
              rootClassName={'!size-full !max-w-full !max-h-full'}
              className="!size-full !max-w-full !max-h-full object-cover object-center"
	      alt={"Fake Alt"}
            />
          </div>
          
          <div
            className="col-span-4 row-span-3 col-start-9 row-start-5 overflow-hidden"
          >
            <Image
              src={image5?.src}
              rootClassName={'!size-full !max-w-full !max-h-full'}
              className="!size-full !max-w-full !max-h-full object-cover object-center"
	      alt={"Fake Alt"}
            />
          </div>
          
          <div
            className="col-span-4 row-span-5 row-start-8 overflow-hidden"
          >
            <Image
              src={image6?.src}
              rootClassName={'!size-full !max-w-full !max-h-full'}
              className="!size-full !max-w-full !max-h-full object-cover object-center"
	      alt={"Fake Alt"}
            />
          </div>
          
          <div
            className="col-span-4 row-span-5 col-start-5 row-start-8 overflow-hidden"
          >
            <Image
              src={image7?.src}
              rootClassName={'!size-full !max-w-full !max-h-full'}
              className="!size-full !max-w-full !max-h-full object-cover object-center"
	      alt={"Fake Alt"}
            />
          </div>
          
          <div
            className="col-span-4 row-span-9 col-start-9 row-start-8 overflow-hidden"
          >
            <Image
              src={image8?.src}
              rootClassName={'!size-full !max-w-full !max-h-full'}
              className="!size-full !max-w-full !max-h-full object-cover object-center"
	      alt={"Fake Alt"}
            />
          </div>
          
          <div
            className="col-span-8 row-span-4 row-start-13 overflow-hidden"
          >
            <Image
              src={image9?.src}
              rootClassName={'!size-full !max-w-full !max-h-full'}
              className="!size-full !max-w-full !max-h-full object-cover object-center"
	      alt={"Fake Alt"}
            />
          </div>
        </div>
      </Image.PreviewGroup>
      
      <Image.PreviewGroup>
        <div className="md:!hidden h-[250px] mb-[20px]">
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            modules={[Autoplay]}
            loop
            autoplay={{delay: 5000, disableOnInteraction: false}}
            pagination={{
              clickable: true
            }}
            className="h-full"
            initialSlide={3}
          >
            <SwiperSlide className="--mobileProjectsSlider">
              <Image
                src={image1?.src}
                rootClassName={'!size-full !max-w-full !max-h-full'}
                className="!size-full !max-w-full !max-h-full object-cover object-center"
		alt={"Fake Alt"}
              />
            </SwiperSlide>
            
            <SwiperSlide className="--mobileProjectsSlider">
              <Image
                src={image2?.src}
                rootClassName={'!size-full !max-w-full !max-h-full'}
                className="!size-full !max-w-full !max-h-full object-cover object-center"
		alt={"Fake Alt"}
              />
            </SwiperSlide>
            
            <SwiperSlide className="--mobileProjectsSlider">
              <Image
                src={image3?.src}
                rootClassName={'!size-full !max-w-full !max-h-full'}
                className="!size-full !max-w-full !max-h-full object-cover object-center"
		alt={"Fake Alt"}
              />
            </SwiperSlide>
            
            <SwiperSlide className="--mobileProjectsSlider">
              <Image
                src={image4?.src}
                rootClassName={'!size-full !max-w-full !max-h-full'}
                className="!size-full !max-w-full !max-h-full object-cover object-center"
		alt={"Fake Alt"}
              />
            </SwiperSlide>
            
            <SwiperSlide className="--mobileProjectsSlider">
              <Image
                src={image5?.src}
                rootClassName={'!size-full !max-w-full !max-h-full'}
                className="!size-full !max-w-full !max-h-full object-cover object-center"
		alt={"Fake Alt"}
              />
            </SwiperSlide>
            
            <SwiperSlide className="--mobileProjectsSlider">
              <Image
                src={image6?.src}
                rootClassName={'!size-full !max-w-full !max-h-full'}
                className="!size-full !max-w-full !max-h-full object-cover object-center"
		alt={"Fake Alt"}
              />
            </SwiperSlide>
            
            <SwiperSlide className="--mobileProjectsSlider">
              <Image
                src={image7?.src}
                rootClassName={'!size-full !max-w-full !max-h-full'}
                className="!size-full !max-w-full !max-h-full object-cover object-center"
		alt={"Fake Alt"}
              />
            </SwiperSlide>
            
            <SwiperSlide className="--mobileProjectsSlider">
              <Image
                src={image8?.src}
                rootClassName={'!size-full !max-w-full !max-h-full'}
                className="!size-full !max-w-full !max-h-full object-cover object-center"
		alt={"Fake Alt"}
              />
            </SwiperSlide>
            
            <SwiperSlide className="--mobileProjectsSlider">
              <Image
                src={image9?.src}
                rootClassName={'!size-full !max-w-full !max-h-full'}
                className="!size-full !max-w-full !max-h-full object-cover object-center"
		alt={"Fake Alt"}
              />
            </SwiperSlide>
          
          </Swiper>
        </div>
      </Image.PreviewGroup>
    </>
  );
};

export default ProjectGallery;
