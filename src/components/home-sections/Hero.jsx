/**
 * @file Hero.jsx
 * @module Home/Hero
 * @desc The top section of the Alberta Tomorrow homepage featuring a parallax background,
 *       award logos, and a call-to-action button.
 *
 * @author Chace Nielson
 * @created Mar 24, 2025
 * @updated Mar 24, 2025
 *
 * @features
 * - Responsive parallax-style hero background using `BackgroundWrapper`
 * - Display of Emerald Award badges with external links
 * - Launch Simulator call-to-action using a custom `HexButton`
 *
 * @dependencies
 * - BackgroundWrapper.jsx
 * - HexButton.jsx
 * - Static assets: award images and hero banners
 */
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
      className=" text-white flex justify-center items-end text-center h-[90svh] lg:h-screen overflow-hidden"
    >
      <div className="relative z-10 pb-14 lg:pb-24 space-y-4 overflow-hidden  fade-in">
        <div className="flex justify-center items-center gap-3 sm:gap-12 md:gap-20 lg:gap-32 ">
          <a href="https://emeraldfoundation.ca/emeraldawards/" target="_blank" ><img src={award1} alt="28th-emerald-finalist" className="h-28 sm:h-44 award-shadow" /></a>
          <a href="https://emeraldfoundation.ca/emeraldawards/" target="_blank" ><img src={award2} alt="30th-emerald-finalist" className="h-28 sm:h-44 award-shadow" /></a>
          <a href="https://emeraldfoundation.ca/emeraldawards/" target="_blank" ><img src={award3} alt="31st-emerald-recipient" className="h-28 sm:h-44 award-shadow" /></a>
        </div>
        <HexButton link="https://www.simulator.albertatomorrow.ca/" name="Launch Simulator" />
      </div>
    </BackgroundWrapper>
  )
}
