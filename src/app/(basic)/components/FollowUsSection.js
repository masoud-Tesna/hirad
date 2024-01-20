import Image from 'next/image';
import {Button} from 'antd';
import argonLogo from '/public/argonLogo.svg';

const FollowUsSection = () => {
  return (
    <div className="bg-primary shadow-4 flex flex-col justify-center items-center py-[30px]">
      <div>
        <Image
          src={argonLogo}
          alt={'argonLogo'}
          layout="responsive"
          className="max-h-[280px] mt-[-50px]"
        />
      </div>
      
      <div>
        <Button
          type={'link'}
          href="https://aargon.ir"
          className="!bg-transparent !text-white !text-captionXl !tracking-[2.7px] !border-white !px-[3rem]"
        >
          Follow Us
        </Button>
      </div>
    </div>
  );
};
export default FollowUsSection;
