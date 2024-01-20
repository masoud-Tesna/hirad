'use client';

import {Button, Col, Row} from 'antd';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import parkingIcon from '/public/icons/parking.svg';
import cinemaIcon from '/public/icons/cinema.svg';
import snookerIcon from '/public/icons/snooker.svg';

// slider Images
import sliderImage1 from '/public/images/slider/image-1.png';
import sliderImage2 from '/public/images/slider/image-2.png';
import sliderImage3 from '/public/images/slider/image-3.png';
import sliderImage4 from '/public/images/slider/image-4.png';
import sliderImage5 from '/public/images/slider/image-5.png';
import sliderImage6 from '/public/images/slider/image-6.png';
import sliderImage7 from '/public/images/slider/image-7.png';
import sliderImage8 from '/public/images/slider/image-8.png';
import sliderImage9 from '/public/images/slider/image-9.png';
import sliderImage10 from '/public/images/slider/image-10.png';
import sliderImage11 from '/public/images/slider/image-11.png';

// import required modules
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, EffectCreative, Navigation, Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ProjectsListSlider = () => {
  const router = useRouter();
  
  return (
    <div className="d-ltr">
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
            <Col xs={24} md={12} className="p-[60px] pb-[34px]">
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
                        Falamac Project, Shahrak-e Gharb
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
                            src={parkingIcon}
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
                            src={parkingIcon}
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
                            src={cinemaIcon}
                            alt={'cinema'}
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
                            src={cinemaIcon}
                            alt={'cinema'}
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
                            src={snookerIcon}
                            alt={'snooker'}
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
                            src={snookerIcon}
                            alt={'snooker'}
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
                  <Button
                    onClick={() => router?.push('/projects/falamac', {scroll: false})}
                    type="primary"
                    className="!bg-primary !shadow-3"
                    block
                  >
                    معرفی کامل پروژه
                  </Button>
                </Col>
              </Row>
            </Col>
            
            <Col xs={0} md={12} className="hidden md:block">
              <ProjectImageGallery
                images={
                  [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6, sliderImage7, sliderImage8, sliderImage9, sliderImage10, sliderImage11]
                }
              />
            </Col>
          </Row>
        </SwiperSlide>
        
        <SwiperSlide className="bg-white text-black">
          <Row>
            <Col xs={24} md={12} className="p-[60px] pb-[34px]">
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
                        Falamac Project, Shahrak-e Gharb
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
                            src={parkingIcon}
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
                            src={parkingIcon}
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
                            src={cinemaIcon}
                            alt={'cinema'}
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
                            src={cinemaIcon}
                            alt={'cinema'}
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
                            src={snookerIcon}
                            alt={'snooker'}
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
                            src={snookerIcon}
                            alt={'snooker'}
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
                  <Button
                    onClick={() => router?.push('/projects/falamac', {scroll: false})}
                    type="primary"
                    className="!bg-primary !shadow-3"
                    block
                  >
                    معرفی کامل پروژه
                  </Button>
                </Col>
              </Row>
            </Col>
            
            <Col xs={0} md={12} className="hidden md:block">
              <ProjectImageGallery
                images={
                  [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6, sliderImage7, sliderImage8, sliderImage9, sliderImage10, sliderImage11]
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
      {images?.map((item, i) => (
        <SwiperSlide key={i}>
          <Image src={item} alt={'alt'} layout="fill" placeholder="blur" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsListSlider;
