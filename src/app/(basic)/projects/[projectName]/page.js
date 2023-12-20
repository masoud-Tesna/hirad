import ChangeBanner from '@/app/(basic)/projects/[projectName]/components/ChangeBanner';
import {Col, Row} from 'antd';

import projectImage from '/public/images/projects/falamac/forDescription.png';
import Image from 'next/image';
import Description from '@/app/(basic)/projects/[projectName]/components/Description';
import ProjectAmenities from '@/app/(basic)/projects/[projectName]/components/ProjectAmenities';
import ProjectGallery from '@/app/(basic)/projects/[projectName]/components/ProjectGallery';

export async function generateStaticParams() {
    const projects = ['falamac'];

    return projects.map((project) => {
        console.log('project >>', project);

        return {
            projectName: project
        };
    });
}

const ProjectDetailsPage = ({params: {projectName}}) => {
    console.log({projectName});
    return (
        <>
            <ChangeBanner projectName={projectName} />

            <Row
                justify={'space-between'}
                align={'middle'}
                className="mb-[100px] !flex-col-reverse md:!flex-row max-md:px-[40px]"
            >
                <Col xs={24} md={9}>
                    <Description
                        details={{
                            projectName,
                            projectImage: projectImage?.src,
                            title: {
                                top: 'Falamac Project, Shahrak-e Gharb',
                                bottom: 'Modern and magnificent architecture'
                            },
                            description: 'منطقه چلک در فاصله ۵ کیلومتری نوشهر کوتاهترین فاصله میان جنگل و دریا را در سرتاسر مازندران دارد. و همین موضوع باعث شده آب و هوای این منطقه همیشه معتدل بوده و کمترین میزان رطوبت را داشته باشد. دسترسی این منطقه به آزادراه تهران شمال باعث شده که در ۲ ساعت از تهران بتوان به چلک رسید. وجود تراکم درختان و حفاظت از آنها سبب شد تا جانمایی بنا در سطوحی که فاقد پوشش طبیعی بودند صورت پذیرد و این استقرار با رویکرد اشراف حداکثری به محیط پیرامونی همچون جنگل و دریا صورت گرفته است. استقراری که می باید در فصول مختلف موجب فراهم آوردن حد مطلوب آسایش برای ساکنین باشد. سناریوی طراحی فضاهای سکونتی بنای فوق بر اساس راهبرد تفکیک فضاها شکل گرفته است. در حقیقت تمامی فضا در عین حال که به صورت مطلوب با هم در ارتباط هستند از طریق فضاهای فیلتر بدون ایجاد مزاحمت و تداخل در عملکرد از هم مجزا شده‌اند. به صورتی که فضاهای عمومی تر مانند پذیرایی، آشپزخانه و نشیمن در طبقه همکف و اتاق خواب ها، حال خصوصی و استخر.'
                        }}
                    />
                </Col>

                <Col xs={24} md={10}>
                    <Image
                        src={projectImage}
                        alt={projectName}
                        className="max-w-full max-h-[300px] md:max-h-[821px]"
                        placeholder="blur"
                        hidden
                    />
                </Col>
            </Row>

            <ProjectAmenities />

            <ProjectGallery />
        </>
    );
};

export default ProjectDetailsPage;
