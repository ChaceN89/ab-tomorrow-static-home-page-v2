import React from 'react';

// background
import heroBanner from '../../assets/ui-elements/abtom-banner.jpg';
import heroBannerSm from '../../assets/ui-elements/abtom-banner-sm.jpg';

// Award logos
import award1 from '../../assets/awards/28th-emerald-finalist-logo.png';
import award2 from '../../assets/awards/30th-emerald-finalist-logo.png';
import award3 from '../../assets/awards/31st-emerald-recipient-logo.png';

export default function Hero() {
  return (
    <div
      id="hero"
      className={`
        relative text-white flex justify-center items-end text-center
        h-[80vh] lg:h-screen lg:m-0
        bg-cover bg-no-repeat
        bg-center lg:bg-[calc(50%-7rem)_center] 
        lg:bg-fixed
      `}
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="relative z-10 pb-14 lg:pb-24 space-y-4">
        <div className="flex justify-center items-end gap-2 sm:gap-12 md:gap-20 lg:gap-32">
          <img src={award1} alt="" className="h-28 sm:h-44 award-shadow" />
          <img src={award2} alt="" className="h-28 sm:h-44 " />
          <img src={award3} alt="" className="h-28 sm:h-44 " />
        </div>
        <a href="https://www.simulator.albertatomorrow.ca/" className="btn-blue">Launch Simulator</a>
      </div>
    </div>
  );
}
