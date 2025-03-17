import React, { useState, useEffect } from 'react';
import heroBanner from '../../assets/ui-elements/abtom-banner.jpg';
import heroBannerSm from '../../assets/ui-elements/abtom-banner-sm.jpg';
import award1 from '../../assets/awards/28th-emerald-finalist-logo.png';
import award2 from '../../assets/awards/30th-emerald-finalist-logo.png';
import award3 from '../../assets/awards/31st-emerald-recipient-logo.png';


import BackgroundWrapper from '../ui-utils/BackgroundWrapper';
export default function Hero() {


  return (
    <BackgroundWrapper background={heroBanner} backgroundSm={heroBannerSm}>
      <div className="relative z-10 flex justify-center items-end h-full text-center text-white pb-24">
        <div className="space-y-4">
          <div className="flex justify-center items-end gap-32 drop-shadow-2xl">
            <img src={award1} alt="Award 1" className="h-44" />
            <img src={award2} alt="Award 2" className="h-44" />
            <img src={award3} alt="Award 3" className="h-44" />
          </div>
          <a href="https://www.simulator.albertatomorrow.ca/" className="btn-blue">Launch Simulator</a>
        </div>
      </div>
    </BackgroundWrapper>
  )

}
