import React from 'react';
import heroBanner from '../../assets/ui-elements/abtom-banner.jpg'; // Importing the image
import award1 from '../../assets/awards/28thEmeraldFinalistLogo-300x300.png'; // Importing the image
import award2 from '../../assets/awards/30thEmeraldFinalist-300x300.png'; // Importing the image
import award3 from '../../assets/awards/31stEmeraldAwards-RecipientBadge-Colour-300x300.png'; // Importing the image

export default function Hero() {
  return (
    <div 
      className="relative bg-cover bg-center h-screen" 
      style={{ backgroundImage: `url(${heroBanner})` }} // Using the imported image
    >
      {/* Overlay (optional, for darkening the image) */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex justify-center items-end h-full text-center text-white pb-20">
        <div className='space-y-4'>
          <div className='flex justify-center items-end gap-32 drop-shadow-2xl '>

            <img src={award1} alt="Award 1" className="h-44" />
            <img src={award2} alt="Award 2" className="h-44" />
            <img src={award3} alt="Award 3" className="h-44" />
          </div>
          <a href="#learn-more" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md">
              Launch Simulator
          </a>
        </div>

      </div>

  

   
    </div>
  );
}
