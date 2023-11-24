'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
// import required modules
import {Autoplay, EffectCreative, Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Button, Col, Row} from 'antd';
import Image from 'next/image';

const ProjectsListSlider = () => {
  return (
    <div className="d-ltr">
      {/*<swiper-container
        init="false"
        className="w-full h-[400px]"
        grab-cursor="true"
        effect="creative"
        creative-effect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        }}
      >
        <swiper-slide className="flex items-center justify-center bg-red-500">Slide 1</swiper-slide>
        <swiper-slide className="flex items-center justify-center bg-amber-500">Slide 2</swiper-slide>
        <swiper-slide className="flex items-center justify-center bg-blue-500">Slide 3</swiper-slide>
        <swiper-slide className="flex items-center justify-center bg-cyan-5000">Slide 4</swiper-slide>
        <swiper-slide className="flex items-center justify-center bg-fuchsia-500">Slide 5</swiper-slide>
      </swiper-container>*/}
      
      <Swiper
        navigation
        grabCursor
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -500]
          },
          next: {
            translate: ['100%', 0, 0]
          }
        }}
        modules={[EffectCreative, Navigation]}
        dir="rtl"
        loop
        className="w-full --projectsListSlider"
      >
        <SwiperSlide className="bg-white text-black">
          <Row>
            <Col span={12} className="p-[60px] pb-[34px]">
              <Row gutter={[0, 35]}>
                <Col span={24}>
                  <Row gutter={23}>
                    <Col className="text-secondary/10 tracking-[-24px]">
                      <svg
                        className="w-[50px] h-[70px] text-secondary/10"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                      >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </Col>
                    
                    <Col flex="1 1" className="ps-[12px]">
                      <div className="bg-primary bg-clip-text text-transparent text-captionXxl">
                        پروژه فلامک، شهـرک غرب
                      </div>
                      
                      <div className="text-gray-40 text-captionXl">
                        Flamac Project, Shahrak-e Gharb
                      </div>
                      
                      <div className="text-black uppercase text-captionLg">
                        Modern and magnificent architecture
                      </div>
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24}>
                  <Row
                    gutter={[16, 8]}
                    className="--pointsSection [&>div>div]:pb-[12px]"
                  >
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/parking.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Parking | پارکینگ
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/parking.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Parking | پارکینگ
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/cinema.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={49}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Cinema | سینما
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/cinema.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Cinema | سینما
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/snooker.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Snooker | بیلیارد
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/snooker.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Snooker | بیلیارد
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24}>
                  <Button type="primary" className="bg-primary !shadow-3 !h-[47px] !leading-[47px]-" block>
                    معرفی کامل پروژه
                  </Button>
                </Col>
              </Row>
            </Col>
            
            <Col span={12}>
              <ProjectImageGallery
                images={
                  [
                    '/images/forGallery.png',
                    '/images/forGallery.png',
                    '/images/forGallery.png',
                    '/images/forGallery.png'
                  ]
                }
              />
            </Col>
          </Row>
        </SwiperSlide>
        
        <SwiperSlide className="bg-white text-black">
          <Row>
            <Col span={12} className="p-[60px] pb-[34px]">
              <Row gutter={[0, 35]}>
                <Col span={24}>
                  <Row gutter={23}>
                    <Col className="text-secondary/10 tracking-[-24px]">
                      {/*،،*/}
                      <svg
                        className="w-[50px] h-[70px] text-secondary/10"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                      >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </Col>
                    
                    <Col flex="1 1" className="ps-[12px]">
                      <div className="bg-primary bg-clip-text text-transparent text-captionXxl">
                        پروژه فلامک، شهـرک غرب
                      </div>
                      
                      <div className="text-gray-40 text-captionXl">
                        Flamac Project, Shahrak-e Gharb
                      </div>
                      
                      <div className="text-black uppercase text-captionLg">
                        Modern and magnificent architecture
                      </div>
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24}>
                  <Row
                    gutter={[16, 8]}
                    className="--pointsSection [&>div>div]:pb-[12px]"
                  >
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/parking.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Parking | پارکینگ
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/parking.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Parking | پارکینگ
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/cinema.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={49}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Cinema | سینما
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/cinema.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Cinema | سینما
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/snooker.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Snooker | بیلیارد
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/snooker.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Snooker | بیلیارد
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24}>
                  <Button type="primary" className="bg-primary !shadow-3 !h-[47px] !leading-[47px]-" block>
                    معرفی کامل پروژه
                  </Button>
                </Col>
              </Row>
            </Col>
            
            <Col span={12}>
              <ProjectImageGallery
                images={
                  [
                    '/images/forGallery.png',
                    '/images/forGallery.png',
                    '/images/forGallery.png',
                    '/images/forGallery.png'
                  ]
                }
              />
            </Col>
          </Row>
        </SwiperSlide>
        
        <SwiperSlide className="bg-white text-black">
          <Row>
            <Col span={12} className="p-[60px] pb-[34px]">
              <Row gutter={[0, 35]}>
                <Col span={24}>
                  <Row gutter={23}>
                    <Col className="text-secondary/10 tracking-[-24px]">
                      {/*،،*/}
                      <svg
                        className="w-[50px] h-[70px] text-secondary/10"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                      >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </Col>
                    
                    <Col flex="1 1" className="ps-[12px]">
                      <div className="bg-primary bg-clip-text text-transparent text-captionXxl">
                        پروژه فلامک، شهـرک غرب
                      </div>
                      
                      <div className="text-gray-40 text-captionXl">
                        Flamac Project, Shahrak-e Gharb
                      </div>
                      
                      <div className="text-black uppercase text-captionLg">
                        Modern and magnificent architecture
                      </div>
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24}>
                  <Row
                    gutter={[16, 8]}
                    className="--pointsSection [&>div>div]:pb-[12px]"
                  >
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/parking.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Parking | پارکینگ
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/parking.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Parking | پارکینگ
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/cinema.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={49}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Cinema | سینما
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/cinema.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Cinema | سینما
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/snooker.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Snooker | بیلیارد
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/snooker.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Snooker | بیلیارد
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24}>
                  <Button type="primary" className="bg-primary !shadow-3 !h-[47px] !leading-[47px]-" block>
                    معرفی کامل پروژه
                  </Button>
                </Col>
              </Row>
            </Col>
            
            <Col span={12}>
              <ProjectImageGallery
                images={
                  [
                    '/images/forGallery.png',
                    '/images/forGallery.png',
                    '/images/forGallery.png',
                    '/images/forGallery.png'
                  ]
                }
              />
            </Col>
          </Row>
        </SwiperSlide>
        
        <SwiperSlide className="bg-white text-black">
          <Row>
            <Col span={12} className="p-[60px] pb-[34px]">
              <Row gutter={[0, 35]}>
                <Col span={24}>
                  <Row gutter={23}>
                    <Col className="text-secondary/10 tracking-[-24px]">
                      {/*،،*/}
                      <svg
                        className="w-[50px] h-[70px] text-secondary/10"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 14"
                      >
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                      </svg>
                    </Col>
                    
                    <Col flex="1 1" className="ps-[12px]">
                      <div className="bg-primary bg-clip-text text-transparent text-captionXxl">
                        پروژه فلامک، شهـرک غرب
                      </div>
                      
                      <div className="text-gray-40 text-captionXl">
                        Flamac Project, Shahrak-e Gharb
                      </div>
                      
                      <div className="text-black uppercase text-captionLg">
                        Modern and magnificent architecture
                      </div>
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24}>
                  <Row
                    gutter={[16, 8]}
                    className="--pointsSection [&>div>div]:pb-[12px]"
                  >
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/parking.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Parking | پارکینگ
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/parking.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Parking | پارکینگ
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/cinema.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={49}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Cinema | سینما
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/cinema.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Cinema | سینما
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/snooker.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Snooker | بیلیارد
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={'/icons/snooker.svg'}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px]">
                          Snooker | بیلیارد
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24}>
                  <Button type="primary" className="bg-primary !shadow-3 !h-[47px] !leading-[47px]-" block>
                    معرفی کامل پروژه
                  </Button>
                </Col>
              </Row>
            </Col>
            
            <Col span={12}>
              <ProjectImageGallery
                images={
                  [
                    '/images/forGallery.png',
                    '/images/forGallery.png',
                    '/images/forGallery.png',
                    '/images/forGallery.png'
                  ]
                }
              />
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const ProjectImageGallery = ({images}) => {
  return (
    <Swiper
      centeredSlides
      modules={[Pagination, Autoplay]}
      loop
      autoplay={{delay: 2500, disableOnInteraction: false}}
      pagination={{
        clickable: true
      }}
      className="h-full"
    >
      {images?.map(item => (
        <SwiperSlide key={item}>
          <Image src={item} alt={'alt'} layout="fill" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsListSlider;
