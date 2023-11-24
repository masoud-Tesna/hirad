'use client';

import {createContext, useContext, useState} from 'react';

// Context Create:
const bannerContext = createContext({});

export const BannerProvider = ({children}) => {
  const [bannerSettings, setBannerSettings] = useState({
    banner: '/images/homeBanner.png',
    alt: 'Hirad',
    height: 'calc(100vh - 75px - 72px)'
  });
  
  return (
    <bannerContext.Provider value={{bannerSettings, setBannerSettings}}>
      {children}
    </bannerContext.Provider>
  );
};

export const useBanner = () => {
  const getBannerContext = useContext(bannerContext);
  const bannerSettings = getBannerContext?.bannerSettings; // get current banner settings
  const setBannerSettings = getBannerContext?.setBannerSettings; // dispatch
  
  const handleChangeBannerSettings = settings => setBannerSettings(settings); // handle change banner settings
  
  return {bannerSettings, handleChangeBannerSettings};
};
