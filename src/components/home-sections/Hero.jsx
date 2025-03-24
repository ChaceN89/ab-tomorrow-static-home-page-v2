import React, { useState, useEffect } from 'react';

// background
import heroBanner from '../../assets/ui-elements/abtom-banner.jpg';
import heroBannerSm from '../../assets/ui-elements/abtom-banner-sm.jpg';

// Award logos
import award1 from '../../assets/awards/28th-emerald-finalist-logo.png';
import award2 from '../../assets/awards/30th-emerald-finalist-logo.png';
import award3 from '../../assets/awards/31st-emerald-recipient-logo.png';
import BackgroundWrapper from '../ui-utils/BackgroundWrapper';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroBanner;
    img.onload = () => setLoaded(true);
  }, []);



  return(
    <BackgroundWrapper 
      background={heroBanner} 
      backgroundSm={heroBannerSm} fixed
      className="relative text-white flex justify-center items-end text-center h-[80vh] lg:h-screen bg-cover bg-no-repeat bg-center lg:bg-[calc(50%-7rem)_center] lg:bg-fixed  overflow-hidden"
    >
      <div className="relative z-10 pb-14 lg:pb-24 space-y-4 overflow-hidden">
        <div className="flex justify-center items-center gap-3 sm:gap-12 md:gap-20 lg:gap-32">
 
          <img src={award1} alt="" className="h-28 sm:h-44 award-shadow" />

          <img src={award2} alt="" className="h-28 sm:h-44" />
          <img src={award3} alt="" className="h-28 sm:h-44" />
        </div>
        <a href="https://www.simulator.albertatomorrow.ca/" className="btn-blue">Launch Simulator</a>
      </div>
    </BackgroundWrapper>
  )

  return (
    <div className="relative text-white flex justify-center items-end text-center h-[80vh] lg:h-screen bg-cover bg-no-repeat bg-center lg:bg-[calc(50%-7rem)_center] lg:bg-fixed  overflow-hidden">
      
      {/* Blurry low-res background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md scale-105 transition-opacity duration-1000"
        style={{ backgroundImage: `url(${heroBannerSm})`, opacity: loaded ? 0 : 1, zIndex: 0 }}
      />

      {/* Sharp high-res background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${heroBanner})`, opacity: loaded ? 1 : 0, zIndex: 0 }}
      />

      {/* Foreground content */}
      <div className="relative z-10 pb-14 lg:pb-24 space-y-4 overflow-hidden">
        <div className="flex justify-center items-center gap-3 sm:gap-12 md:gap-20 lg:gap-32">
 
          <img src={award1} alt="" className="h-28 sm:h-44 award-shadow" />

          <img src={award2} alt="" className="h-28 sm:h-44" />
          <img src={award3} alt="" className="h-28 sm:h-44" />
        </div>
        <a href="https://www.simulator.albertatomorrow.ca/" className="btn-blue">Launch Simulator</a>
      </div>
    </div>
  );
  
}
