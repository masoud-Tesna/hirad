'use client';

// components
// import ProjectsList from '@/app/(basic)/components/ProjectsListsGrid';
import ProjectsListSlider from '@/app/(basic)/components/ProjectsListSlider';
import FollowUsSection from '@/app/(basic)/components/FollowUsSection';
import BusinessPartners from '@/app/(basic)/components/BusinessPartners';
import FalamacProject from '@/app/(basic)/components/FalamacProject';
import ChangeBanner from '@/app/(basic)/components/ChangeBanner';
import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';

const ProjectsList = dynamic(() => import('@/app/(basic)/components/ProjectsListsGrid'),
  {
    ssr: false,
    loading: () => <Skeleton height={300} width={'100%'} />
  });

const Home = () => {
  return (
    <>
      <ChangeBanner />
      
      <div className="pb-[20px] md:pb-[80px]">
        <div className="mx-auto max-sm:w-full max-lg:w-[85%] lg:w-[80%] max-md:mt-[20px]">
          <ProjectsList />
        </div>
      </div>
      
      <div className="bg-gray-10 py-[20px] md:py-[80px] md:mx-[-10%]">
        <div className="mx-auto max-sm:w-[95%] max-lg:w-[85%] lg:w-[80%]">
          <ProjectsListSlider />
        </div>
      </div>
      
      <div className="md:mx-[-10%]">
        <FollowUsSection />
      </div>
      
      <div className="py-[20px] md:py-[80px]">
        <div className="mx-auto max-sm:w-full max-lg:w-[85%] lg:w-[80%]">
          <BusinessPartners />
        </div>
      </div>
      
      <div className="md:mx-[-10%]">
        <FalamacProject />
      </div>
    </>
  );
};

export default Home;
