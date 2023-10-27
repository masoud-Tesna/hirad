'use client';

import ProjectsList from '@/app/components/ProjectsListsGrid';
import ProjectsListSlider from '@/app/components/ProjectsListSlider';

const Home = () => {
  return (
    <>
      <div className="pb-[80px]">
        <div className="mx-auto max-sm:w-full max-lg:w-[85%] lg:w-[80%]">
          <ProjectsList />
        </div>
      </div>
      
      <div className="bg-gray-10 py-[80px]">
        <div className="mx-auto max-sm:w-full max-lg:w-[85%] lg:w-[80%]">
          <ProjectsListSlider />
        </div>
      </div>
    </>
  );
};

export default Home;
