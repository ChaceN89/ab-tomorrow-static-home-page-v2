/**
 * @file InteractiveTools.jsx
 * @module InteractiveTools
 * @desc Showcases the three core educational tools using logos, descriptions, and links. Includes support for tools still in development.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 */

import React from 'react';
import { interactiveToolsData } from '../../../data/interactiveToolsData';
import HexButton from '../../ui-utils/HexButton';

export default function InteractiveTools() {
  return (
    <section className="bg-secondary text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-6 relative large-shadow">
        <h2 className="text-3xl lg:text-4xl font-bold uppercase font-display">
          Explore Our Interactive Tools
        </h2>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto font-body">
          Use our powerful <span className='text-accent'>educational tools</span> to explore land use, energy sustainability, and wildlife conservation in Alberta.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3 text-center">
        {interactiveToolsData.map((tool, index) => (
          <div
            key={index}
            className="bg-primary/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:scale-[1.03] small-shadow"
          >
            <img src={tool.icon} alt={tool.name} className="w-28 h-28 object-contain mb-4" />
            <h3 className="text-2xl font-semibold font-display text-white">{tool.name}</h3>
            <p className="my-2 text-gray-300 font-body">{tool.description}</p>

            <div className="my-auto">
              {tool.inDevelopment ? (
                <span className="text-gray-400 italic">Coming Soon</span>
              ) : (
                <HexButton link={tool.link} name={tool.buttonText || 'Learn More'} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
