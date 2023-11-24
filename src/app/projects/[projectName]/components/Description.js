import {Button} from 'antd';

const Description = ({details}) => {
  return (
    <>
      <div
        className="text-[5.94306rem] bg-clip-text text-transparent uppercase font-bold opacity-50"
        style={{
          backgroundPosition: '-70% 70%',
          backgroundRepeat: 'repeat, no-repeat',
          backgroundImage: `url('${details?.projectImage}'), none`
        }}
      >
        {details?.projectName}
      </div>
      
      <div className="text-gray-40 text-[1.51369rem] tracking-[0.135rem] capitalize">
        {details.title.top}
      </div>
      
      <div className="text-black text-[1.329rem] tracking-[0.11rem] capitalize mb-[20px]">
        {details?.title?.bottom}
      </div>
      
      <div className="text-captionXl text-gray-40 text-justify line-clamp-[18]">
        <p>
          {details?.description}
        </p>
      </div>
      
      <Button type="primary" className="bg-primary !shadow-3 !h-[47px] mt-[20px]" block>
        رزرو بازدید پروژه
      </Button>
    </>
  );
};

export default Description;
