import React from 'react';
import alberta from '../../assets/ui-elements/state-of-landscape.png';
import background from '../../assets/ui-elements/parallax-2.jpg';
import backgroundSm from '../../assets/ui-elements/parallax-2-sm.jpg'; // Use a lower-res version
import quote from '../../assets/ui-elements/quote.png'; // Use a lower-res version
import BackgroundWrapper from '../ui-utils/BackgroundWrapper';
import HexButton from '../ui-utils/HexButton';

export default function CallToAction() {


  
  return (
    <BackgroundWrapper background={background} backgroundSm={backgroundSm} fixed className=" py-32  z-0 relative">
      <div className="relative z-30 flex justify-center items-center h-full text-center text-white drop-shadow">
        <div>
          <img src={alberta} alt="" />
        </div>
        
        <div className="relative z-10 max-w-3xl px-6 text-center text-white space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase">
            Now set some goals and design a future for Alberta that you want to see!
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Take control and shape Alberta’s future using the Alberta Tomorrow simulator.
            Explore the tools (Energy tomorrow, Ab tomoorow simulator, Wildlife tomorrow)
          </p>
          <div className='flex' >


            <img src={quote} alt="Quote" className="quote" />
            <blockquote className="testimonial">
              "Alberta Tomorrow gives my students real life exposure to real life decisions...all at their fingertips. Thank
              you for enriching my students learning environment."
              - <i>Stephanie Bennett, Biology Teacher</i>
            </blockquote>
          </div>

                  <HexButton link="https://www.simulator.albertatomorrow.ca/" name="Launch Simulator" />
          

    
        </div>
      </div>
     </BackgroundWrapper>
  );
}
