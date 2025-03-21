import React from 'react';

import EnergyTomorrowLogo from '../../assets/tool-logos/energy-tomorrow-logo.png';
import SimulatorLogo from '../../assets/site-logos/logo-lg.png';
import WildlifeTomorrowLogo from '../../assets/tool-logos/wildlife-tomorrow-logo.png';

export default function InteractiveTools() {
  return (
    <section  id="tools"
    className="bg-secondary text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold uppercase mb-8">
          Explore Our Interactive Tools
        </h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          Use our powerful educational tools to explore land use, energy sustainability, and wildlife conservation in Alberta.
        </p>
      </div>

      {/* Tools Grid */}
      <div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
        
        {/* Land Use Simulator */}
        <div className="bg-primary-alt rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
          <img src={SimulatorLogo} alt="Land Use Simulator" className="w-32 h-32 mb-4" />
          <h3 className="text-2xl font-semibold">Land Use Simulator</h3>
          <p className="mt-2 text-gray-200">
            Design Alberta’s future by balancing economic growth with environmental sustainability.
          </p>
          <a 
            href="https://www.simulator.albertatomorrow.ca"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-blue mt-4"
          >
            Try the Simulator
          </a>
        </div>

        {/* Energy Tomorrow */}
        <div className="bg-primary-alt rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
          <img src={EnergyTomorrowLogo} alt="Energy Tomorrow" className="w-32 h-32 mb-4" />
          <h3 className="text-2xl font-semibold">Energy Tomorrow</h3>
          <p className="mt-2 text-gray-200">
            Learn how energy production impacts Alberta’s economy and environment.
          </p>
          <a 
            href="https://www.simulator.albertatomorrow.ca"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-blue mt-4"
          >
            Learn More
          </a>
        </div>

        {/* Wildlife Tomorrow */}
        <div className="bg-primary-alt rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
          <img src={WildlifeTomorrowLogo} alt="Wildlife Tomorrow" className="w-32 h-32 mb-4" />
          <h3 className="text-2xl font-semibold">Wildlife Tomorrow</h3>
          <p className="mt-2 text-gray-200">
            Explore conservation efforts and the impact of land use on Alberta’s wildlife.
          </p>
          <a 
            href="https://www.simulator.albertatomorrow.ca"
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-blue mt-4"
          >
            Explore Wildlife
          </a>
        </div>

      </div>
    </section>
  );
}
