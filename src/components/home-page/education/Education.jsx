/**
 * @file Education.jsx
 * @module Pages/Education
 * @desc Full Education section component for the Alberta Tomorrow homepage.
 *       Displays the main education call-to-action, embedded media content, and
 *       a highlight of the Water Rangers testing kit. Uses a fixed background image.
 * 
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 26, 2025
 *
 * @features
 * - Section header with dynamic title and description from `educationData`
 * - Custom HexButton linking to a virtual/in-class visit sign-up form
 * - Responsive grid of educational YouTube videos
 * - Promo layout for Water Rangers Kit including image, title, and description
 * - Fixed parallax-style background with `BackgroundWrapper`
 *
 * @dependencies
 * - `BackgroundWrapper` for fixed background layout
 * - `SectionHeader` for the section title + description
 * - `HexButton` for CTA links
 * - `MediaFrame` for reusable video/image display
 * - `educationData` (from @/data/educationData)
 * - Parallax background image (from @/assets/ui-elements/parallax-1.jpg)
 */
import React from 'react';

// Assets
import parallaxBg from '@/assets/ui-elements/parallax-1.jpg';

// UI Components
import BackgroundWrapper from '@/components/layout/BackgroundWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import MediaFrame from '@/components/media/MediaFrame';
import HexButton from '@/components/common/HexButton';

// Data
import { eductionData } from '@/data/educationData';

export default function Education() {
  return(
    <BackgroundWrapper background={parallaxBg} backgroundSm={null} fixed >
      <div className='home-section home-y-padding space-y-8'>
        <SectionHeader
          title={eductionData.title}
          description={eductionData.description}
        />

        {/* Link to sign up for classes */}
        <div className="flex justify-center"> 
          <HexButton
            color='accent'
            hoverColor='primary'
            textColor='black'
            hoverTextColor='white'
            link={"https://docs.google.com/forms/d/e/1FAIpQLSd24ENj4C_M9MsQvCLp9LEZv42EP3Ydz-k1SsV-6gRP7E_1Qg/viewform"}
          >
            Sign Up for Virtual & In-Class Visits
          </HexButton>
        </div>

        {/* Media Frame Grid for videos */}
        <div className='grid-section'>
          {eductionData.media.map((item, index) => (
            <MediaFrame
              key={index}
              type={item.type}
              src={item.src}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* Water Ranger testing kit */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <img
            src={eductionData.waterRangerKitImg}
            alt="Water Rangers Testing Kit"
            className="w-4/5 sm:w-2/3 md:w-1/3 max-w-[300px] rounded-lg shadow-lg"
          />
          <div className="max-w-lg text-left  px-4 md:px-0">
            <h3 className="text-2xl font-bold">{eductionData.waterRangerKitTitle}</h3>
            <p className="mt-2 opacity-80">{eductionData.waterRangerKitDescription}</p>
          </div>
        </div>

      </div>
    </BackgroundWrapper>
  )
}
