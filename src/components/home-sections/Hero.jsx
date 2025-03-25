import React from 'react';

// background
import heroBanner from '../../assets/ui-elements/abtom-banner.jpg';
import heroBannerSm from '../../assets/ui-elements/abtom-banner-sm.jpg';

// Award logos
import award1 from '../../assets/awards/28th-emerald-finalist-logo.png';
import award2 from '../../assets/awards/30th-emerald-finalist-logo.png';
import award3 from '../../assets/awards/31st-emerald-recipient-logo.png';
import BackgroundWrapper from '../ui-utils/BackgroundWrapper';
import HexButton from '../ui-utils/HexButton';

export default function Hero() {



  return(
    <BackgroundWrapper 
      background={heroBanner} 
      backgroundSm={heroBannerSm} 
      className=" text-white flex justify-center items-end text-center h-[90vh] lg:h-screen overflow-hidden"
    >
      <div className="relative z-10 pb-14 lg:pb-24 space-y-4 overflow-hidden  fade-in">
        <div className="flex justify-center items-center gap-3 sm:gap-12 md:gap-20 lg:gap-32 ">
          <img src={award1} alt="" className="h-28 sm:h-44 award-shadow" />
          <img src={award2} alt="" className="h-28 sm:h-44" />
          <img src={award3} alt="" className="h-28 sm:h-44" />
        </div>
        <HexButton link="https://www.simulator.albertatomorrow.ca/" name="Launch Simulator" />
      </div>
    </BackgroundWrapper>
  )

}
