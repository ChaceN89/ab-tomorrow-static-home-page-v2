import React, { useState, useEffect } from 'react';

export default function BackgroundWrapper({background, backgroundSm, children, className="h-screen"}) {
    
  // State for tracking high-res image load
  const [highResLoaded, setHighResLoaded] = useState(false);

  // lg breakpoint is 1024px+ (tailwind) - track if we are larger than that
  const [isLg, setIsLg] = useState(window.innerWidth >= 1024); 

  // Load high-res image and set state when loaded
  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => setHighResLoaded(true);
  }, []);


    // Update isLg state on resize
    useEffect(() => {
      const handleResize = () => setIsLg(window.innerWidth >= 1024); // Update on resize
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize); // Cleanup listener
    }, []);
  
  return (
    <div className= {`relative overflow-hidden ${className}`}>
    {/* Low-Res Background (Default) */}
    <div
      className="absolute inset-0 w-full h-full bg-fixed transition-opacity duration-800 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundSm})`,
        backgroundSize: "cover",
        backgroundPosition: isLg ? "calc(50% - 7rem) center" : "center",
        opacity: highResLoaded ? 0 : 1, // Fade out when high-res loads
      }}
    />

    {/* High-Res Background (Fades in) */}
    <div
      className="absolute inset-0 w-full h-full bg-fixed transition-opacity duration-800 ease-in-out"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: isLg ? "calc(50% - 7rem) center" : "center", // taking into accound the partner banner
        opacity: highResLoaded ? 1 : 0, // Fade in when loaded
      }}
    />

    {/* Content */}
    <>{children}</>
  </div>
  )
}










