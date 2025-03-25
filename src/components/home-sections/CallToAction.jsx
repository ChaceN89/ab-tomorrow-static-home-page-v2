/**
 * @file CallToAction.jsx
 * @module CallToAction
 * @desc A parallax-style call-to-action section encouraging users to launch the Alberta Tomorrow simulator.
 *       Includes a frosted glass text panel with a quote, image, and button. Responsive and mobile-friendly.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 *
 * @see https://www.simulator.albertatomorrow.ca/ | Alberta Tomorrow Simulator
 *
 * @dependencies
 * - BackgroundWrapper: Handles fixed parallax background image.
 * - HexButton: Custom CTA button component.
 *
 * @notes
 * - Uses a frosted glass UI effect (via Tailwind `backdrop-blur` and transparent bg).
 * - Responsive layout: image hidden on mobile (`lg:flex`).
 * - Quote styled with a vertical accent divider and fixed max-width.
 */

import React from 'react';

// UI Assets
import background from '../../assets/ui-elements/parallax-2.jpg';
import backgroundSm from '../../assets/ui-elements/parallax-2-sm.jpg';
import quote from '../../assets/ui-elements/quote.png';
import alberta from '../../assets/ui-elements/state-of-landscape.png';

//components
import BackgroundWrapper from '../ui-utils/BackgroundWrapper';
import HexButton from '../ui-utils/HexButton';

export default function CallToAction() {
  return (
    <BackgroundWrapper
      background={background}
      backgroundSm={backgroundSm}
      fixed
      className="py-10 z-0 relative"
    >
      <div className="relative z-30 flex flex-col lg:flex-row gap-10 justify-center items-center  text-center text-white px-4">
        {/* Side Image (hidden on mobile) */}
        <div className="hidden lg:flex  justify-center items-center">
          <img className="max-h-96 object-fill" src={alberta} alt="Alberta" />
        </div>

        {/* Frosted Glass Content Card */}
        <div className="bg-primary/20 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-8 w-full max-w-3xl space-y-6 large-shadow">
          <h2 className="text-3xl lg:text-4xl font-bold uppercase text-white font-display ">
            Now set some goals and design a future for Alberta that you want to see!
          </h2>
          <p className="text-lg text-gray-200 font-body">
            Take control and shape Alberta’s future using the Alberta Tomorrow simulator.
          </p>

          {/* Quote */}
          <div className="flex items-start gap-2 mt-6 max-w-2xl px-4">
            {/* Quote Icon */}
            <img src={quote} alt="Quote Icon" className="w-8 h-8 shrink-0 mt-1" />

            {/* Vertical Line */}
            <div className="w-px bg-accent-alt opacity-50" />

            {/* Quote Text */}
            <blockquote className="text-base text-accent-alt italic space-y-2">
              <p>
                "Alberta Tomorrow gives my students real life exposure to real life decisions... all at their fingertips. Thank you for enriching my students' learning environment."
              </p>
              <footer className="not-italic font-medium mt-1">— Stephanie Bennett, Biology Teacher</footer>
            </blockquote>
          </div>


          {/* CTA Button */}
          <div className="pt-4">
            <HexButton link="https://www.simulator.albertatomorrow.ca/" name="Launch Simulator" />
          </div>
        </div>
      </div>
    </BackgroundWrapper>
  );
}
