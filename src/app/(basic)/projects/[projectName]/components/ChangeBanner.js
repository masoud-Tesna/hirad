'use client';

import {useBanner} from '@/app/contexts/banner';
import {useEffect} from 'react';

const ChangeBanner = ({projectName}) => {
  const {handleChangeBannerSettings} = useBanner();
  
  useEffect(() => {
    handleChangeBannerSettings({
      banner: `/images/projects/${projectName}Banner.png`,
      alt: 'projectName',
      height: 297
    });
  }, [projectName]);
  
  return <></>;
};

export default ChangeBanner;
