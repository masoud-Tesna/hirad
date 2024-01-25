'use client';

// import required modules
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

const BusinessPartners = () => {
  return (
    <>
      <div className="text-center">
        <div className="text-black text-captionXl md:text-captionXxl">
          همکاران تجاری هیراد
        </div>
        
        <div className="text-gray-40 text-captionLg md:text-captionXl">
          Hirad Partners
        </div>
      </div>
      
      <div className="mt-[30px] hidden md:grid grid-cols-2 md:grid-cols-5 gap-[16px]">
        {(new Array(10).fill(2))?.map((_, index) => (
          <div key={index} className="bg-gray-20 h-[143px]" />
        ))}
      </div>
      
      <div className="mt-[20px] md:hidden px-[16px]">
        <Swiper
          slidesPerView={2}
          spaceBetween={16}
          modules={[Autoplay]}
          loop
          autoplay={{delay: 2500, disableOnInteraction: false}}
          pagination={{
            clickable: true
          }}
          className="h-full"
        >
          {(new Array(10).fill(2))?.map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-20 h-[143px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BusinessPartners;
