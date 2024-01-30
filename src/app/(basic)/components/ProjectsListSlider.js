'use client';

import {Button, Col, Divider, Row, Space} from 'antd';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import parkingIcon from '/public/icons/parking.svg';
import poolIcon from '/public/icons/pool.svg';
import jacuzziIcon from '/public/icons/jacuzzi.svg';
import storageRoomIcon from '/public/icons/storageRoom.svg';
import saunaIcon from '/public/icons/sauna.svg';
import smartHomeIcon from '/public/icons/smartHome.svg';

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

import quote from '/public/icons/quote.svg';


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
            <Col xs={24} md={12} className="p-[10px] md:p-[60px] pb-[34px]">
              <Row className="gap-y-[16px] md:gap-y-[35px]">
                <Col span={24}>
                  <Row gutter={[{md: 23}]}>
                    <Col className="max-md:mt-[10px]">
                      <Image src={quote} alt={'quote'} className="max-md:max-h-[30px]" />
                    </Col>
                    
                    <Col flex="1 1" className="md:ps-[12px]">
                      <div className="bg-primary bg-clip-text text-transparent text-captionXl2 !font-[700] md:text-captionXxl">
                        پروژه هیراد پالاس
                      </div>
                      
                      <div className="text-gray-40 text-captionXl">
                        Hirad Palace, Shahrak-e Gharb
                      </div>
                      
                      <div className="text-black uppercase text-captionMd md:text-captionLg">
                        Modern and magnificent architecture
                      </div>
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24} className="h-[250px] md:!hidden">
                  <ProjectImageGallery
                    images={
                      [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6, sliderImage7, sliderImage8, sliderImage9, sliderImage10, sliderImage11]
                    }
                  />
                </Col>
                
                <Col span={24}>
                  <Row
                    gutter={[16, 8]}
                    className="--pointsSection [&>div>div]:pb-[12px] max-md:!hidden"
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
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              دو پارکینگ
                            </div>
                            
                            <div>
                              Parking
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={poolIcon}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              استخر
                            </div>
                            
                            <div>
                              Pool
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={jacuzziIcon}
                            alt={'cinema'}
                            layout="responsive"
                            width={49}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              جکوزی
                            </div>
                            
                            <div>
                              Jacuzzi
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={storageRoomIcon}
                            alt={'cinema'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              انباری
                            </div>
                            
                            <div>
                              Storage Room
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={saunaIcon}
                            alt={'snooker'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              سونا
                            </div>
                            
                            <div>
                              Sauna
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={smartHomeIcon}
                            alt={'snooker'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              واحد هوشمند
                            </div>
                            
                            <div>
                              Smart
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  
                  <Row
                    gutter={16}
                    className="--pointsSection [&>div>div]:pb-[12px] md:!hidden"
                    align={'middle'}
                    justify={'space-between'}
                  >
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={parkingIcon}
                        alt={'parking'}
                        layout="fill"
                        /*width={40}
                         height={40}*/
                      />
                    </Col>
                    
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={poolIcon}
                        alt={'parking'}
                        layout="fill"
                        /*width={40}
                         height={40}*/
                      />
                    </Col>
                    
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={jacuzziIcon}
                        alt={'cinema'}
                        layout="fill"
                        /*width={49}
                         height={40}*/
                      />
                    </Col>
                    
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={storageRoomIcon}
                        alt={'cinema'}
                        layout="fill"
                        /*width={40}
                         height={40}*/
                      />
                    </Col>
                    
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={saunaIcon}
                        alt={'snooker'}
                        layout="fill"
                        /*width={40}
                         height={40}*/
                      />
                    </Col>
                    
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={smartHomeIcon}
                        alt={'snooker'}
                        layout="fill"
                        /*width={40}
                         height={40}*/
                      />
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24}>
                  <Button
                    onClick={() => router?.push('/projects/hirad-palace', {scroll: false})}
                    type="primary"
                    className="!bg-primary !shadow-3"
                    block
                  >
                    معرفی کامل پروژه
                  </Button>
                </Col>
              </Row>
            </Col>
            
            <Col xs={24} md={12} className="hidden md:block">
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
            <Col xs={24} md={12} className="p-[10px] md:p-[60px] pb-[34px]">
              <Row className="gap-y-[16px] md:gap-y-[35px]">
                <Col span={24}>
                  <Row gutter={[{md: 23}]}>
                    <Col className="max-md:mt-[10px]">
                      <Image src={quote} alt={'quote'} className="max-md:max-h-[30px]" />
                    </Col>
                    
                    <Col flex="1 1" className="md:ps-[12px]">
                      <div className="bg-primary bg-clip-text text-transparent text-captionXl2 !font-[700] md:text-captionXxl">
                        پروژه هیراد پالاس
                      </div>
                      
                      <div className="text-gray-40 text-captionXl">
                        Hirad Palace, Shahrak-e Gharb
                      </div>
                      
                      <div className="text-black uppercase text-captionMd md:text-captionLg">
                        Modern and magnificent architecture
                      </div>
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24} className="h-[250px] md:!hidden">
                  <ProjectImageGallery
                    images={
                      [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6, sliderImage7, sliderImage8, sliderImage9, sliderImage10, sliderImage11]
                    }
                  />
                </Col>
                
                <Col span={24}>
                  <Row
                    gutter={[16, 8]}
                    className="--pointsSection [&>div>div]:pb-[12px] max-md:!hidden"
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
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              دو پارکینگ
                            </div>
                            
                            <div>
                              Parking
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={poolIcon}
                            alt={'parking'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              استخر
                            </div>
                            
                            <div>
                              Pool
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={jacuzziIcon}
                            alt={'cinema'}
                            layout="responsive"
                            width={49}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              جکوزی
                            </div>
                            
                            <div>
                              Jacuzzi
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={storageRoomIcon}
                            alt={'cinema'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              انباری
                            </div>
                            
                            <div>
                              Storage Room
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                    
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={saunaIcon}
                            alt={'snooker'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              سونا
                            </div>
                            
                            <div>
                              Sauna
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Row align="middle">
                        <Col flex="50px" className="text-end">
                          <Image
                            src={smartHomeIcon}
                            alt={'snooker'}
                            layout="responsive"
                            width={40}
                            height={40}
                          />
                        </Col>
                        
                        <Col flex="1 1" className="ps-[12px] truncate">
                          <Space size={6} split={<Divider type={'vertical'} className="!border-black !m-0" />}>
                            <div>
                              واحد هوشمند
                            </div>
                            
                            <div>
                              Smart
                            </div>
                          </Space>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  
                  <Row
                    gutter={16}
                    className="--pointsSection [&>div>div]:pb-[12px] md:!hidden"
                    align={'middle'}
                    justify={'space-between'}
                  >
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={parkingIcon}
                        alt={'parking'}
                        layout="fill"
                        /*width={40}
                         height={40}*/
                      />
                    </Col>
                    
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={poolIcon}
                        alt={'parking'}
                        layout="fill"
                        /*width={40}
                         height={40}*/
                      />
                    </Col>
                    
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={jacuzziIcon}
                        alt={'cinema'}
                        layout="fill"
                        /*width={49}
                         height={40}*/
                      />
                    </Col>
                    
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={storageRoomIcon}
                        alt={'cinema'}
                        layout="fill"
                        /*width={40}
                         height={40}*/
                      />
                    </Col>
                    
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={saunaIcon}
                        alt={'snooker'}
                        layout="fill"
                        /*width={40}
                         height={40}*/
                      />
                    </Col>
                    
                    <Col flex={'50px'} className="text-center h-[30px]">
                      <Image
                        src={smartHomeIcon}
                        alt={'snooker'}
                        layout="fill"
                        /*width={40}
                         height={40}*/
                      />
                    </Col>
                  </Row>
                </Col>
                
                <Col span={24}>
                  <Button
                    onClick={() => router?.push('/projects/hirad-palace', {scroll: false})}
                    type="primary"
                    className="!bg-primary !shadow-3"
                    block
                  >
                    معرفی کامل پروژه
                  </Button>
                </Col>
              </Row>
            </Col>
            
            <Col xs={24} md={12} className="hidden md:block">
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
