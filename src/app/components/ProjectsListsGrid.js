'use client';

import {Col, Divider, Row, Space} from 'antd';
import styled from 'styled-components';

const Box = styled.div`
  .--image {
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      background-size: cover;
      transform-origin: center;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }
    
    &:focus,
    &:hover {
      &::after {
        transform: scale(1.05);
      }
      
      & > div {
        opacity: 1;
      }
    }
  }
`;

export default () => {
  return (
    <>
      <Row justify={'center'}>
        <Col className="text-end">
          <div className="text-black text-captionXxl">
            گروه ساختمانی هیراد
          </div>
          
          <div className="text-gray-30 text-captionXl">
            Hirad Construction Group
          </div>
          
          <div className="text-black text-captionLg">
            since 2019
          </div>
        </Col>
      </Row>
      
      <Box className="grid grid-cols-3 grid-rows-5 gap-4 h-[400px] [&>div>div]:cursor-pointer [&>div>div]:h-full [&>div>div]:relative [&>div>div]:overflow-hidden [&>div>div]:bg-center [&>div>div]:bg-cover [&>div>div]:bg-no-repeat mt-[40px]">
        <div className="row-span-5 col-start-3 row-start-1">
          <div className="--image bg-[url('/images/projects/project1.png')]">
            <div className="flex flex-col opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
              <div className="relative top-[50%] translate-y-[-50%]">
                <Space
                  split={<Divider className="!border-[rgba(221,221,221,.50)] !my-[5px]" />}
                  direction="vertical"
                  className="[&>div]:text-sm [&>div]:text-center"
                >
                  <div>
                    پروژه آوانگارد چلک
                  </div>
                  
                  <div className="tracking-[1.4px]">
                    Avangard Chelak
                  </div>
                </Space>
              </div>
              
              <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                Mazandaran, Nowshahr, chelak
              </div>
            </div>
          </div>
        </div>
        
        <div className="row-span-2 col-start-2 row-start-1">
          <div className="--image bg-[url('/images/projects/project2.png')]">
            <div className="flex flex-col opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
              <div className="relative top-[50%] translate-y-[-50%]">
                <Space
                  split={<Divider className="!border-[rgba(221,221,221,.50)] !my-[5px]" />}
                  direction="vertical"
                  className="[&>div]:text-sm [&>div]:text-center"
                >
                  <div>
                    پروژه آوانگارد چلک
                  </div>
                  
                  <div className="tracking-[1.4px]">
                    Avangard Chelak
                  </div>
                </Space>
              </div>
              
              <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                Mazandaran, Nowshahr, chelak
              </div>
            </div>
          </div>
        </div>
        
        <div className="row-span-3 col-start-2 row-start-3">
          <div className="--image bg-[url('/images/projects/project3.png')]">
            <div className="flex flex-col opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
              <div className="relative top-[50%] translate-y-[-50%]">
                <Space
                  split={<Divider className="!border-[rgba(221,221,221,.50)] !my-[5px]" />}
                  direction="vertical"
                  className="[&>div]:text-sm [&>div]:text-center"
                >
                  <div>
                    پروژه آوانگارد چلک
                  </div>
                  
                  <div className="tracking-[1.4px]">
                    Avangard Chelak
                  </div>
                </Space>
              </div>
              
              <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                Mazandaran, Nowshahr, chelak
              </div>
            </div>
          </div>
        </div>
        
        <div className="row-span-3 col-start-1 row-start-1">
          <div className="--image bg-[url('/images/projects/project4.png')]">
            <div className="flex flex-col opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
              <div className="relative top-[50%] translate-y-[-50%]">
                <Space
                  split={<Divider className="!border-[rgba(221,221,221,.50)] !my-[5px]" />}
                  direction="vertical"
                  className="[&>div]:text-sm [&>div]:text-center"
                >
                  <div>
                    پروژه آوانگارد چلک
                  </div>
                  
                  <div className="tracking-[1.4px]">
                    Avangard Chelak
                  </div>
                </Space>
              </div>
              
              <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                Mazandaran, Nowshahr, chelak
              </div>
            </div>
          </div>
        </div>
        
        <div className="row-span-2 row-start-4">
          <div className="--image bg-[url('/images/projects/project5.png')]">
            <div className="flex flex-col opacity-0 relative z-10 items-center text-white h-full transition-opacity duration-[300ms] bg-[rgba(32,32,32,.90)]">
              <div className="relative top-[50%] translate-y-[-50%]">
                <Space
                  split={<Divider className="!border-[rgba(221,221,221,.50)] !my-[5px]" />}
                  direction="vertical"
                  className="[&>div]:text-sm [&>div]:text-center"
                >
                  <div>
                    پروژه آوانگارد چلک
                  </div>
                  
                  <div className="tracking-[1.4px]">
                    Avangard Chelak
                  </div>
                </Space>
              </div>
              
              <div className="text-[rgba(221,221,221,.50)] text-xs mt-auto">
                Mazandaran, Nowshahr, chelak
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};
