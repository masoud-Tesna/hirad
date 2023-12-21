'use client';

import {Button} from 'antd';

const Description = ({details}) => {
  return (
    <>
      <div
        className="text-center max-md:text-[11.9vw] max-xl:text-[8.4vw] xl:text-[7.85vw] bg-clip-text text-transparent uppercase font-bold opacity-50"
        style={{
          backgroundPosition: '-70% 70%',
          backgroundRepeat: 'repeat, no-repeat',
          backgroundImage: `url('${details?.projectImage}'), none`
        }}
      >
        {details?.projectName}
      </div>
      
      <div className="text-center text-gray-40 max-md:text-[3.475vw] max-xl:text-[2.48vw] xl:text-[2.3vw] capitalize mb-[8px]">
        {details.title.top}
      </div>
      
      <div className="text-center text-black max-md:text-[3.12vw] max-xl:text-[2.215vw] xl:text-[2.06vw] capitalize mb-[20px]">
        {details?.title?.bottom}
      </div>
      
      <div className="text-captionXl text-gray-40 text-justify line-clamp-[18]">
        <p>
          {details?.description}
        </p>
      </div>
      
      <Button type="primary" className="!bg-primary !shadow-3 mt-[20px]" block>
        رزرو بازدید پروژه
      </Button>
    </>
  );
};

export default Description;
