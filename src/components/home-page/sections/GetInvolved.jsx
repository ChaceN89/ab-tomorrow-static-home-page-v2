import React from 'react';
import BCTomorrowLogo from '../../../assets/tool-logos/bc-tomorrow-logo.png'; // Ensure correct paths
import CanadaTomorrowLogo from '../../../assets/tool-logos/canada-tomorrow-logo.png';

export default function GetInvolved() {
  return (
    <div className="bg-primary text-white py-16 px-6 lg:px-20 text-center">
      {/* Main Call to Action */}
      <h2 className="text-3xl lg:text-4xl font-bold uppercase">
        Be Part of Our Story
      </h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-200">
        Download our sponsorship package today to learn more about becoming a partner.
      </p>

      {/* Sponsorship Download Button */}
      <div className="mt-6">
        <a 
          href="/path-to-sponsorship-package.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-blue px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition duration-300"
        >
          Download Sponsorship Package
        </a>
      </div>

      {/* Expansion Section */}
      <div className="mt-16">
        <h3 className="text-2xl lg:text-3xl font-bold">
          Launch the App in Your Own Province
        </h3>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-200">
          We are excited to launch the Canada Tomorrow initiative to allow students, teachers, and the public across Canada to learn about sustainable planning and climate change.
        </p>
      </div>

      {/* Logos + Video Layout */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Stacked Logos */}
        <div className="flex flex-col items-center gap-4">
          <img src={CanadaTomorrowLogo} alt="Canada Tomorrow Logo" className="w-48" />
          <img src={BCTomorrowLogo} alt="BC Tomorrow Logo" className="w-48" />
        </div>

        {/* YouTube Video */}
        <div className="w-full md:w-2/3 lg:w-1/2">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Canada Tomorrow Initiative"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
