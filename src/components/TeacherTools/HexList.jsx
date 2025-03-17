import React from 'react';
import { MdHexagon } from "react-icons/md";

export default function HexList({ title, hexList }) {
  return (
    <div className='flex flex-col space-y-6'>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <div>
        {hexList.map((item, index) => (
          <div key={index} className='flex items-start mb-4'>
            {/* Hexagon Icon with consistent size and spacing */}
            <MdHexagon size={20} color='#4CAF50' className="mr-3 flex-shrink-0" />
            {/* Text with proper alignment */}
            <span className="text-lg">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}