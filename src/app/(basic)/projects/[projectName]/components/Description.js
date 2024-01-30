'use client';

import {Button} from 'antd';
import {useBookVisit} from '@/app/contexts/bookVisit';

const Description = ({details}) => {
  const {setBookVisitOpen} = useBookVisit();
  
  return (
    <>
      <div
        className="text-center max-md:text-[10vw] xl:text-[4.5vw] bg-clip-text text-transparent uppercase font-bold opacity-50"
        style={{
          backgroundPosition: '-70% 70%',
          backgroundRepeat: 'repeat, no-repeat',
          backgroundImage: `url('${details?.projectImage}'), none`
        }}
      >
        {details?.projectName}
      </div>
      
      <div className="text-center text-gray-40 max-md:text-[3vw] xl:text-[2.3vw] capitalize mb-[8px]">
        {details.title.top}
      </div>
      
      <div className="text-center text-black max-md:text-[3vw] xl:text-[2vw] capitalize mb-[20px]">
        {details?.title?.bottom}
      </div>
      
      <div className="text-captionMd md:text-captionXl text-gray-40 text-justify line-clamp-[18]">
        <p>
          {details?.description}
        </p>
      </div>
      
      <Button type="primary" className="!bg-primary !shadow-3 mt-[20px]" block onClick={() => setBookVisitOpen(true)}>
        رزرو بازدید پروژه
      </Button>
    </>
  );
};

export default Description;
