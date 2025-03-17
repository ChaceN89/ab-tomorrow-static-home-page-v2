import React from 'react';

// YouTube Video IDs (Replace these with actual video IDs)
const videoLinks = [
  "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
  "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
  "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
];

import WaterRangerKit from '../education/WaterRangerKit';

import BackgroundWrapper from '../ui-utils/BackgroundWrapper';

import parallaxBg from '../../assets/ui-elements/parallax-1.jpg';


export default function Education() {
  return (
    <BackgroundWrapper background={parallaxBg} backgroundSm={parallaxBg} className="h-full py-16">
      <div className="relative z-10 flex justify-center items-center h-full text-center ">
      <div className="py-16 px-6 lg:px-20  text-center ">
      {/* Title & Description */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold uppercase leading-snug">
          Add Excitement To Your Classroom With Free Lesson Plans and Online Tools
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Alberta Tomorrow is a FREE educational tool that has been developed for use with K-12 and university curricula.
        </p>
      </div>

      {/* YouTube Videos */}
      <div className="mt-12 flex justify-center gap-6">
        {videoLinks.map((link, index) => (
          <div key={index} className="w-full md:w-1/3">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src={link}
              title={`Educational Video ${index + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* YouTube Channel Link */}
      <div className="mt-6">
        <a 
          href="https://www.youtube.com/channel/UC-YOUR_CHANNEL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 underline text-lg"
        >
          Visit our YouTube Channel for more!
        </a>
      </div>

      {/* Sign Up Button */}
      <div className="mt-8">
        <a 
          href="https://www.albertatomorrow.ca/signup" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-blue px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition duration-300"
        >
          Sign Up for Virtual & In-Class Visits
        </a>
      </div>

      {/* Water Rangers Section */}
        <WaterRangerKit/>
    </div>
  
      </div>
    </BackgroundWrapper>
  )


  return (
    <BackgroundWrapper background={parallaxBg} backgroundSm={parallaxBg} className="h-full">


    <div className="bg-secondary py-16 px-6 lg:px-20 text-white text-center relative">
      {/* Title & Description */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold uppercase leading-snug">
          Add Excitement To Your Classroom With Free Lesson Plans and Online Tools
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Alberta Tomorrow is a FREE educational tool that has been developed for use with K-12 and university curricula.
        </p>
      </div>

      {/* YouTube Videos */}
      <div className="mt-12 flex justify-center gap-6">
        {videoLinks.map((link, index) => (
          <div key={index} className="w-full md:w-1/3">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src={link}
              title={`Educational Video ${index + 1}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>

      {/* YouTube Channel Link */}
      <div className="mt-6">
        <a 
          href="https://www.youtube.com/channel/UC-YOUR_CHANNEL"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 underline text-lg"
        >
          Visit our YouTube Channel for more!
        </a>
      </div>

      {/* Sign Up Button */}
      <div className="mt-8">
        <a 
          href="https://www.albertatomorrow.ca/signup" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-blue px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition duration-300"
        >
          Sign Up for Virtual & In-Class Visits
        </a>
      </div>

      {/* Water Rangers Section */}
        <WaterRangerKit/>
    </div>
    </BackgroundWrapper>
  );
}
