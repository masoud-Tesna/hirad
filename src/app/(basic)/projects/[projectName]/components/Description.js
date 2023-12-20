'use client';

import {Button} from 'antd';

const Description = ({details}) => {
    return (
        <>
            <div
                className="max-md:text-center text-[5.94306rem] bg-clip-text text-transparent uppercase font-bold opacity-50"
                style={{
                    backgroundPosition: '-70% 70%',
                    backgroundRepeat: 'repeat, no-repeat',
                    backgroundImage: `url('${details?.projectImage}'), none`
                }}
            >
                {details?.projectName}
            </div>

            <div className="max-md:text-center text-gray-40 text-[1.51369rem] tracking-[0.115rem] capitalize">
                {details.title.top}
            </div>

            <div className="max-md:text-center text-black text-[1.329rem] tracking-[0.118rem] capitalize mb-[20px]">
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
