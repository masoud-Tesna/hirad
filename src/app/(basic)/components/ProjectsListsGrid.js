'use client';

import {Col, Divider, Row, Space} from 'antd';
import styled from 'styled-components';
import locationIcon from '/public/icons/location2.svg';
import Image from 'next/image';
// import required modules
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectCreative, Navigation, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

const Box = styled.div`
  .--image {
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      background-size: cover;
      transform-origin: center;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    
    &:focus,
    &:hover {
      &::after {
        transform: scale(1.05);
      }
      
      & > div {
        opacity: 1;
      }
    }
  }
`;

const ProjectsListsGrid = () => {
  return (
    <>
      <Row justify={'center'}>
        <Col className="text-end">
          <div className="text-black text-captionXl md:text-captionXxl">
            گروه ساختمانی هیراد
          </div>
          
          <div className="text-gray-40 text-captionLg md:text-captionXl">
            Hirad Construction Group
          </div>
          
          <div className="text-black text-captionLg">
            since 2019
          </div>
        </Col>
      </Row>
      
      <Box className="hidden md:grid grid-cols-3 grid-rows-5 gap-4 h-[400px] [&>div>div]:cursor-pointer [&>div>div]:h-full [&>div>div]:relative [&>div>div]:overflow-hidden [&>div>div]:bg-center [&>div>div]:bg-cover [&>div>div]:bg-no-repeat mt-[20px] md:mt-[40px]">
        <div className="row-span-5 col-start-3 row-start-1">
          <div className="--image bg-[url('/images/projects/project1.png')]">
            <div className="flex flex-col py-[15px] opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
              <div className="relative top-[50%] translate-y-[-50%]">
                <Space
                  split={<Divider className="!border-[rgba(221,221,221,.50)] !my-0" />}
                  size={4}
                  direction="vertical"
                  className="[&>div]:text-sm [&>div]:text-center"
                >
                  <div>
                    پروژه آوانگارد چلک
                  </div>
                  
                  <div className="tracking-[1.4px]">
                    Avangard Chelak
                  </div>
                </Space>
              </div>
              
              <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                <Space size={4}>
                  Mazandaran, Nowshahr, chelak
                  
                  <Image src={locationIcon} alt="" className="max-w-[9px] max-h-[12px]" />
                </Space>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row-span-2 col-start-2 row-start-1">
          <div className="--image bg-[url('/images/projects/project2.png')]">
            <div className="flex flex-col py-[15px] opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
              <div className="relative top-[50%] translate-y-[-50%]">
                <Space
                  split={<Divider className="!border-[rgba(221,221,221,.50)] !my-0" />}
                  size={4}
                  direction="vertical"
                  className="[&>div]:text-sm [&>div]:text-center"
                >
                  <div>
                    پروژه آوانگارد چلک
                  </div>
                  
                  <div className="tracking-[1.4px]">
                    Avangard Chelak
                  </div>
                </Space>
              </div>
              
              <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                <Space size={4}>
                  Mazandaran, Nowshahr, chelak
                  
                  <Image src={locationIcon} alt="" className="max-w-[9px] max-h-[12px]" />
                </Space>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row-span-3 col-start-2 row-start-3">
          <div className="--image bg-[url('/images/projects/project3.png')]">
            <div className="flex flex-col py-[15px] opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
              <div className="relative top-[50%] translate-y-[-50%]">
                <Space
                  split={<Divider className="!border-[rgba(221,221,221,.50)] !my-0" />}
                  size={4}
                  direction="vertical"
                  className="[&>div]:text-sm [&>div]:text-center"
                >
                  <div>
                    پروژه آوانگارد چلک
                  </div>
                  
                  <div className="tracking-[1.4px]">
                    Avangard Chelak
                  </div>
                </Space>
              </div>
              
              <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                <Space size={4}>
                  Mazandaran, Nowshahr, chelak
                  
                  <Image src={locationIcon} alt="" className="max-w-[9px] max-h-[12px]" />
                </Space>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row-span-3 col-start-1 row-start-1">
          <div className="--image bg-[url('/images/projects/project4.png')]">
            <div className="flex flex-col py-[15px] opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
              <div className="relative top-[50%] translate-y-[-50%]">
                <Space
                  split={<Divider className="!border-[rgba(221,221,221,.50)] !my-0" />}
                  size={4}
                  direction="vertical"
                  className="[&>div]:text-sm [&>div]:text-center"
                >
                  <div>
                    پروژه آوانگارد چلک
                  </div>
                  
                  <div className="tracking-[1.4px]">
                    Avangard Chelak
                  </div>
                </Space>
              </div>
              
              <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                <Space size={4}>
                  Mazandaran, Nowshahr, chelak
                  
                  <Image src={locationIcon} alt="" className="max-w-[9px] max-h-[12px]" />
                </Space>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row-span-2 row-start-4">
          <div className="--image bg-[url('/images/projects/project5.png')]">
            <div className="flex flex-col py-[15px] opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
              <div className="relative top-[50%] translate-y-[-50%]">
                <Space
                  split={<Divider className="!border-[rgba(221,221,221,.50)] !my-0" />}
                  size={4}
                  direction="vertical"
                  className="[&>div]:text-sm [&>div]:text-center"
                >
                  <div>
                    پروژه آوانگارد چلک
                  </div>
                  
                  <div className="tracking-[1.4px]">
                    Avangard Chelak
                  </div>
                </Space>
              </div>
              
              <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                <Space size={4}>
                  Mazandaran, Nowshahr, chelak
                  
                  <Image src={locationIcon} alt="" className="max-w-[9px] max-h-[12px]" />
                </Space>
              </div>
            </div>
          </div>
        </div>
      </Box>
      
      <div className="md:!hidden h-[250px] mt-[20px]">
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
          initialSlide={0}
        >
          <SwiperSlide className="--mobileProjectsSlider">
            <div className="--image bg-[url('/images/projects/project1.png')]">
              <div className="flex flex-col py-[15px] opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
                <div className="relative top-[50%] translate-y-[-50%]">
                  <Space
                    split={<Divider className="!border-[rgba(221,221,221,.50)] !my-0" />}
                    size={4}
                    direction="vertical"
                    className="[&>div]:text-sm [&>div]:text-center"
                  >
                    <div>
                      پروژه آوانگارد چلک
                    </div>
                    
                    <div className="tracking-[1.4px]">
                      Avangard Chelak
                    </div>
                  </Space>
                </div>
                
                <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                  <Space size={4}>
                    Mazandaran, Nowshahr, chelak
                    
                    <Image src={locationIcon} alt="" className="max-w-[9px] max-h-[12px]" />
                  </Space>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="--mobileProjectsSlider">
            <div className="--image bg-[url('/images/projects/project2.png')]">
              <div className="flex flex-col py-[15px] opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
                <div className="relative top-[50%] translate-y-[-50%]">
                  <Space
                    split={<Divider className="!border-[rgba(221,221,221,.50)] !my-0" />}
                    size={4}
                    direction="vertical"
                    className="[&>div]:text-sm [&>div]:text-center"
                  >
                    <div>
                      پروژه آوانگارد چلک
                    </div>
                    
                    <div className="tracking-[1.4px]">
                      Avangard Chelak
                    </div>
                  </Space>
                </div>
                
                <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                  <Space size={4}>
                    Mazandaran, Nowshahr, chelak
                    
                    <Image src={locationIcon} alt="" className="max-w-[9px] max-h-[12px]" />
                  </Space>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="--mobileProjectsSlider">
            <div className="--image bg-[url('/images/projects/project3.png')]">
              <div className="flex flex-col py-[15px] opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
                <div className="relative top-[50%] translate-y-[-50%]">
                  <Space
                    split={<Divider className="!border-[rgba(221,221,221,.50)] !my-0" />}
                    size={4}
                    direction="vertical"
                    className="[&>div]:text-sm [&>div]:text-center"
                  >
                    <div>
                      پروژه آوانگارد چلک
                    </div>
                    
                    <div className="tracking-[1.4px]">
                      Avangard Chelak
                    </div>
                  </Space>
                </div>
                
                <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                  <Space size={4}>
                    Mazandaran, Nowshahr, chelak
                    
                    <Image src={locationIcon} alt="" className="max-w-[9px] max-h-[12px]" />
                  </Space>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="--mobileProjectsSlider">
            <div className="--image bg-[url('/images/projects/project4.png')]">
              <div className="flex flex-col py-[15px] opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
                <div className="relative top-[50%] translate-y-[-50%]">
                  <Space
                    split={<Divider className="!border-[rgba(221,221,221,.50)] !my-0" />}
                    size={4}
                    direction="vertical"
                    className="[&>div]:text-sm [&>div]:text-center"
                  >
                    <div>
                      پروژه آوانگارد چلک
                    </div>
                    
                    <div className="tracking-[1.4px]">
                      Avangard Chelak
                    </div>
                  </Space>
                </div>
                
                <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                  <Space size={4}>
                    Mazandaran, Nowshahr, chelak
                    
                    <Image src={locationIcon} alt="" className="max-w-[9px] max-h-[12px]" />
                  </Space>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="--mobileProjectsSlider">
            <div className="--image bg-[url('/images/projects/project5.png')]">
              <div className="flex flex-col py-[15px] opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
                <div className="relative top-[50%] translate-y-[-50%]">
                  <Space
                    split={<Divider className="!border-[rgba(221,221,221,.50)] !my-0" />}
                    size={4}
                    direction="vertical"
                    className="[&>div]:text-sm [&>div]:text-center"
                  >
                    <div>
                      پروژه آوانگارد چلک
                    </div>
                    
                    <div className="tracking-[1.4px]">
                      Avangard Chelak
                    </div>
                  </Space>
                </div>
                
                <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                  <Space size={4}>
                    Mazandaran, Nowshahr, chelak
                    
                    <Image src={locationIcon} alt="" className="max-w-[9px] max-h-[12px]" />
                  </Space>
                </div>
              </div>
            </div>
          </SwiperSlide>
        
        </Swiper>
        
        {/*{images?.map((item, i) => (
            <SwiperSlide key={i} className="!w-[80%]">
              <Image src={item} alt={'alt'} layout="fill" placeholder="blur" className="" />
            </SwiperSlide>
          ))}*/}
      </div>
    </>
  );
};

export default ProjectsListsGrid;
