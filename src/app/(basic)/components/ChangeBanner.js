'use client';

import {useBanner} from '@/app/contexts/banner';
import {useEffect} from 'react';

const ChangeBanner = () => {
  const {handleChangeBannerSettings} = useBanner();
  
  useEffect(() => {
    handleChangeBannerSettings({
      banner: '/images/homeBanner.png',
      alt: 'Hirad',
      height: 'calc(100vh - 75px - 72px)',
      objectFit: 'cover'
    });
  }, []);
  
  return <></>;
};

export default ChangeBanner;
