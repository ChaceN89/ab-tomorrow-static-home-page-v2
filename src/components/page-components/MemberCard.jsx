/**
 * @file MemberCard.jsx
 * @module MemberCard
 * @desc Renders an individual board member’s profile card with hover expansion and smooth image transformation.
 * 
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 27, 2025
 */

import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';

export default function MemberCard({ member }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group bg-gray-50 shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl border border-black overflow-hidden max-w-md mx-auto hover:cursor-help">
      
      <div className="relative w-52 h-52 transition-all duration-500 ease-in-out group-hover:w-60 rounded-[50%] group-hover:rounded-[1rem]">
        {!imageLoaded && (
          <Blurhash
            hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
            className="absolute inset-0 z-0"
          />
        )}
        <img
          src={`/board-of-directors/${member.image}`}
          alt={member.name}
          className="w-full h-full object-cover object-top z-10 transition-all duration-500 ease-in-out rounded-[50%] group-hover:rounded-[1rem]"
          onLoad={() => setImageLoaded(true)}
        />
      </div>


      {/* Name + Title */}
      <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
      <p className="text-sm text-gray-600 font-medium">{member.title}</p>
      <div className="w-full h-[2px] bg-black opacity-50 mt-1.5" />

      {/* Expandable Bio Section */}
      <div className="grid transition-all duration-1200 ease-in-out max-h-0 opacity-20 group-hover:max-h-[500px] group-hover:opacity-100 overflow-hidden mt-3">
        <p className="text-sm text-gray-700">{member.bio}</p>
      </div>
    </div>
  );
}
