'use client';

import ProjectsList from '@/app/components/ProjectsLists';

const Home = () => {
  return (
    <div>
      <div className="mx-auto max-sm:w-full max-lg:w-[85%] lg:w-[80%]">
        <ProjectsList />
      </div>
    </div>
  );
};

export default Home;
