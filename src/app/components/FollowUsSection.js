import Image from 'next/image';
import {Button} from 'antd';

export default () => {
  return (
    <div className="bg-primary shadow-4 flex flex-col justify-center items-center py-[30px]">
      <div>
        <Image
          src={'/aargon»ogo.svg'}
          alt={'alt'}
          layout="FILL"
          width={312}
          height={280}
          className="max-h-[280px] mt-[-50px]"
        />
      </div>
      
      <div>
        <Button className="!bg-transparent !text-white !text-captionXl !tracking-[2.7px] !border-white !px-[3rem]">
          Follow Us
        </Button>
      </div>
    </div>
  );
};
