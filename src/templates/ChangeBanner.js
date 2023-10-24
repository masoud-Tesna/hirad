'use client';

import {useBanner} from '@/app/contexts/Banner';
import {useEffect} from 'react';

const ChangeBanner = () => {
  const {handleChangeBannerSettings} = useBanner();
  
  useEffect(() => {
    handleChangeBannerSettings({
      banner: '/images/homeBanner.png',
      alt: 'Hirad',
      height: 'calc(100vh - 75px - 72px)'
    });
  }, []);
  
  return <></>;
};

export default ChangeBanner;
