'use client';

import {useEffect} from 'react';
import {ParallaxBanner, ParallaxProvider, useParallaxController} from 'react-scroll-parallax';

const passiveEventListener = {passive: true};

const FixParallaxScrollEvent = () => {
  const parallaxController = useParallaxController();
  
  useEffect(() => {
    if (parallaxController) {
      const updateParallaxController = () => parallaxController.update();
      
      window.addEventListener('scroll', updateParallaxController, passiveEventListener);
      
      return () => {
        window.removeEventListener('scroll', updateParallaxController, passiveEventListener);
      };
    }
  }, [parallaxController]);
  
  return null;
};

const Banner = () => {
  
  return (
    <ParallaxProvider>
      {/*<FixParallaxScrollEvent />*/}
      
      <ParallaxBanner
        layers={[
          {image: '/images/banner-background.jpg', speed: -30, className: 'aspect-[2/1]-'},
          {
            speed: -40,
            children: (
              <div className="absolute inset-0 top-[-10%] flex items-center justify-center">
                <h1 className="text-8xl text-white font-thin">هیراد</h1>
              </div>
            )
          },
          {image: '/images/banner-foreground.png', speed: -20, className: 'aspect-[2/1]-'}
        ]}
        className="h-full"
      />
    </ParallaxProvider>
  );
};

export default Banner;