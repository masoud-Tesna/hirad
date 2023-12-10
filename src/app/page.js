'use client';

// components
import ProjectsList from '@/app/components/ProjectsListsGrid';
import ProjectsListSlider from '@/app/components/ProjectsListSlider';
import FollowUsSection from '@/app/components/FollowUsSection';
import BusinessPartners from '@/app/components/BusinessPartners';
import FalamacProject from '@/app/components/FalamacProject';
import ChangeBanner from '@/app/components/ChangeBanner';

const Home = () => {
  return (
    <>
      <ChangeBanner />
      
      <div className="pb-[80px]">
        <div className="mx-auto max-sm:w-full max-lg:w-[85%] lg:w-[80%] max-md:mt-[40px]">
          <ProjectsList />
        </div>
      </div>
      
      <div className="bg-gray-10 py-[80px] md:mx-[-10%]">
        <div className="mx-auto max-sm:w-full max-lg:w-[85%] lg:w-[80%]">
          <ProjectsListSlider />
        </div>
      </div>
      
      <div className="md:mx-[-10%]">
        <FollowUsSection />
      </div>
      
      <div className="py-[80px]">
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
