import React from 'react';
import logo from '../../assets/site-logos/logo-lg.png';
import simHistoric from '../../assets/simulator-screenshots/sim-8-new-historic.jpg';
import simClimate from '../../assets/simulator-screenshots/sim-7-new-climate-planning.jpg';

export default function Intro() {

  return(
    <div className="z-30">
      <div className="section z-30">
        <div className="flex items-center justify-center gap-1 relative">
          <div>          
            <img src={logo} alt="Alberta Tomorrow Logo" className="h-40" />
          </div>
          <h2 className="text-4xl font-bold text-accent uppercase">
            Welcome to Alberta Tomorrow
          </h2>
        </div>

        {/* 🛠 Apply z-30 here too */}
        <div className="z-30 relative">
          <p className="mt-6 text-start text-lg text-gray-200 leading-relaxed animate-fade-in-up">
            UNPRECEDENTED GROWTH IN ALBERTA HAS CREATED A VIBRANT ECONOMY, BUT IT HAS ALSO PLACED A TREMENDOUS STRAIN ON THE FOREST, GRASSLAND AND RIVERS WHICH HELP TO SUSTAIN THAT GROWTH.
          </p>
          <p className="mt-6 text-start text-lg text-gray-200 leading-relaxed">
            The Alberta Tomorrow simulator is an educational tool that helps you to understand the process of sustainable planning to balance land-uses such as agriculture, oil and gas, and forestry with ecological integrity. By looking at past and present landscape imagery, you will be able to see changes that have taken place in the past. You can also collect, geotag, and save water sampling data, images, video, and other observations.
          </p>
        </div>
      </div>

{/*       
      <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/your-video-id-1"
            title="The simulator in action"
            allowFullScreen
          ></iframe>
          <p className="text-center text-gray-100 mt-2 text-sm">
            The simulator in action: See the current landscape in 30+ areas in Alberta.
          </p>
        </div>
        <div className="relative">
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/your-video-id-2"
            title="Draw your own plan"
            allowFullScreen
          ></iframe>
          <p className="text-center text-gray-100 mt-2 text-sm">
            Draw your own plan for Alberta and see the potential outcomes!
          </p>
        </div>
      </div> */}

      {/* Images Section */}
      {/* <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <img src={simHistoric} alt="Historic Simulation" className="w-full rounded-lg shadow-lg" />
          <p className="text-center text-gray-100 mt-2 text-sm">Historic Landscape Simulation</p>
        </div>
        <div className="relative">
          <img src={simClimate} alt="Climate Planning Simulation" className="w-full rounded-lg shadow-lg" />
          <p className="text-center text-gray-100 mt-2 text-sm">Climate Planning Simulation</p>
        </div>
      </div> */}
      
    </div>
  )


}
