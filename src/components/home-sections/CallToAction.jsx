import React from 'react';
import background from '../../assets/ui-elements/parallax-2.jpg';
import backgroundSm from '../../assets/ui-elements/parallax-2-sm.jpg'; // Use a lower-res version
import BackgroundWrapper from '../ui-utils/BackgroundWrapper';

export default function CallToAction() {
  return (
    <BackgroundWrapper background={background} backgroundSm={backgroundSm} className="h-full py-32">
      <div className="relative z-10 flex justify-center items-center h-full text-center text-white">
        <div className="relative z-10 max-w-3xl px-6 text-center text-white space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase">
            Now set some goals and design a future for Alberta that you want to see!
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Take control and shape Alberta’s future using the Alberta Tomorrow simulator.
          </p>
          <div className="mt-4">
            <a 
              href="https://www.albertatomorrow.ca/simulator" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-blue inline-block"
            >
              Launch Simulator
            </a>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
