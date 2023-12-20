'use client';

import {Col, Row} from 'antd';

const ProjectGallery = () => {
    return (
        <>

            <Row justify={'center'} className="my-[50px]">
                <Col className="text-end">
                    <div className="text-black text-captionXxl">
                        گالری تصاویر پروژه
                    </div>

                    <div className="text-gray-40 text-captionXl">
                        project images Gallery
                    </div>

                    <div className="text-black text-captionLg uppercase">
                        Falamac
                    </div>
                </Col>
            </Row>

            <div className="d-ltr grid grid-cols-10 grid-rows-10 gap-4 [&>div]:bg-center [&>div]:bg-cover [&>div]:bg-no-repeat">
                <div className="col-span-3 row-span-5 h-[405px] bg-[url('/images/projects/project1.png')]" />

                <div className="col-span-3 row-span-2 col-start-4 bg-[url('/images/projects/project2.png')]" />

                <div className="col-span-3 row-span-3 col-start-4 row-start-3 bg-[url('/images/projects/project3.png')]" />

                <div className="col-span-4 row-span-3 col-start-7 row-start-1 bg-[url('/images/projects/project4.png')]" />

                <div className="col-span-4 row-span-2 col-start-7 row-start-4 bg-[url('/images/projects/project5.png')]" />

                <div className="col-span-3 row-span-3 row-start-6 bg-[url('/images/projects/project1.png')]" />

                <div className="col-span-4 row-span-3 col-start-4 row-start-6 bg-[url('/images/projects/project2.png')]" />

                <div className="col-span-3 row-span-5 col-start-8 h-[524px] row-start-6 bg-[url('/images/projects/project3.png')]" />

                <div className="col-span-7 row-span-2 row-start-9 bg-[url('/images/projects/project4.png')]" />

            </div>
        </>
    );
};

export default ProjectGallery;
