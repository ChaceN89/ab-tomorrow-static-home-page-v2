import React, { useState, useEffect } from 'react';

export default function BackgroundWrapper({background, backgroundSm, children, className="", fixed = false}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = background;
    img.onload = () => setLoaded(true);
  }, []);

  const attachment = fixed ? 'fixed' : 'scroll';


  return(
    <div className={className}>
      
      {/* Blurry low-res background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-md scale-105 transition-opacity duration-1000"
        style={{ backgroundImage: `url(${backgroundSm})`, opacity: loaded ? 0 : 1, zIndex: 0 }}
      />

      {/* Sharp high-res background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${background})`, opacity: loaded ? 1 : 0, zIndex: 0 }}
      />

      {/* Foreground content/Children */}
      <div>
        {children}
      </div>
    </div>
   )
}
