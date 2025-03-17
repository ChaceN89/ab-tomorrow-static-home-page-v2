import React from 'react';
import BackgroundWrapper from '../ui-utils/BackgroundWrapper';
import heroBanner from '../../assets/ui-elements/abtom-banner.jpg';
import heroBannerSm from '../../assets/ui-elements/abtom-banner-sm.jpg';
import award1 from '../../assets/awards/28th-emerald-finalist-logo.png';
import award2 from '../../assets/awards/30th-emerald-finalist-logo.png';
import award3 from '../../assets/awards/31st-emerald-recipient-logo.png';

export default function Hero() {

  return (
    <BackgroundWrapper
      id="hero-section"
      src={heroBanner}
      lowResSrc={heroBannerSm} // Ideally, use a pre-blurred version
      // backgroundAttachment="fixed"
      bgOpacity={100}
      blurAmount={0}
      className="relative h-screen"
    >
      <div className="relative z-10 flex justify-center items-end h-full text-center text-white pb-20">
        <div className='space-y-4'>
          <div className='flex justify-center items-end gap-32 drop-shadow-2xl '>

            <img src={award1} alt="Award 1" className="h-44" />
            <img src={award2} alt="Award 2" className="h-44" />
            <img src={award3} alt="Award 3" className="h-44" />
          </div>
          <a href="#learn-more" className="btn-blue">
              Launch Simulator
          </a>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
