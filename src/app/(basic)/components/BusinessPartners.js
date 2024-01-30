'use client';

// import required modules
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import businessPartnerIcon1 from '/public/icons/businessPartners/businessPartnerIcon1.svg';
import businessPartnerIcon2 from '/public/icons/businessPartners/businessPartnerIcon2.svg';
import businessPartnerIcon3 from '/public/icons/businessPartners/businessPartnerIcon3.svg';
import businessPartnerIcon4 from '/public/icons/businessPartners/businessPartnerIcon4.svg';
import businessPartnerIcon5 from '/public/icons/businessPartners/businessPartnerIcon5.svg';
import businessPartnerIcon6 from '/public/icons/businessPartners/businessPartnerIcon6.svg';
import Image from 'next/image';

const businessPartnersIcons = [
  businessPartnerIcon1,
  businessPartnerIcon2,
  businessPartnerIcon3,
  businessPartnerIcon4,
  businessPartnerIcon5,
  businessPartnerIcon6
];

export const BusinessPartnersBox = ({count}) => {
  return (
    <>
      <div className="mt-[30px] hidden md:grid grid-cols-2 md:grid-cols-3 gap-[16px]">
        {businessPartnersIcons?.map((img, index) => (
          <div
            key={index}
            className="h-[143px] center [&>img]:object-contain [&>img]:aspect-[3/2] hover:[&>img]:mix-blend-luminosity"
          >
            <Image src={img} alt={'business partners'} className="max-w-full transition-all duration-[.4s]" />
          </div>
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
          {businessPartnersIcons?.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="h-[143px] center [&>img]:object-contain [&>img]:aspect-[3/2] hover:[&>img]:mix-blend-luminosity">
                <Image src={img} alt={'business partners'} className="max-w-full transition-all duration-[.4s]" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

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
      
      <BusinessPartnersBox count={10} />
    </>
  );
};

export default BusinessPartners;
