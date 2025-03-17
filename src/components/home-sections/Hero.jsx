import React, { useState, useEffect } from 'react';
import heroBanner from '../../assets/ui-elements/abtom-banner.jpg';
import heroBannerSm from '../../assets/ui-elements/abtom-banner-sm.jpg';
import award1 from '../../assets/awards/28th-emerald-finalist-logo.png';
import award2 from '../../assets/awards/30th-emerald-finalist-logo.png';
import award3 from '../../assets/awards/31st-emerald-recipient-logo.png';

export default function Hero() {

  // State for tracking high-res image load
  const [highResLoaded, setHighResLoaded] = useState(false);
  
  // lg breakpoint is 1024px+ (tailwind) - track if we are larger than that
  const [isLg, setIsLg] = useState(window.innerWidth >= 1024); 

  // Load high-res image and set state when loaded
  useEffect(() => {
    const img = new Image();
    img.src = heroBanner;
    img.onload = () => setHighResLoaded(true);
  }, []);

  // Update isLg state on resize
  useEffect(() => {
    const handleResize = () => setIsLg(window.innerWidth >= 1024); // Update on resize

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);


  return (
    <div className="relative h-screen overflow-hidden">
      {/* Low-Res Background (Default) */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed transition-opacity duration-800 ease-in-out"
        style={{
          backgroundImage: `url(${heroBannerSm})`,
          backgroundSize: "cover",
          backgroundPosition: isLg ? "calc(50% - 7rem) center" : "center",
          opacity: highResLoaded ? 0 : 1, // Fade out when high-res loads
        }}
      />

      {/* High-Res Background (Fades in) */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed transition-opacity duration-800 ease-in-out"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: isLg ? "calc(50% - 7rem) center" : "center", // taking into accound the partner banner
          opacity: highResLoaded ? 1 : 0, // Fade in when loaded
        }}
      />

      {/* Content */}
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
    </div>
  );
}
