/**
 * @file HexSeparator.jsx
 * @module HexSeparator
 * @desc A hexagonal grid separator component for between component
 *
 * @author Chace Nielson
 * @created Mar 24, 2025
 * @updated Mar 24, 2025
 */

import React from 'react';

// Separator.jsx
export default function HexSeparator({ 
  rows = 3, 
  cols = 80, 
  bgColor = 'bg-primary', 
  height = 'h-11', 
  hexColor = 'bg-primary-alt', 
  topMargin = 'mt-0', 
  opacity = 'opacity-100'
}) {


  return (
    <div className={`relative ${height} ${bgColor} `}>
      
      {/* This wraps the hex grid and allows it to bleed */}
      <div className={`absolute inset-0 flex flex-col hex-grid ${topMargin}`}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            className={`hex-row ${rowIndex % 2 !== 0 ? 'hex-row-offset' : ''}`}
            key={`row-${rowIndex}`}
          >
            {Array.from({ length: cols }).map((_, colIndex) => (
              <div
                className={`hexagon ${hexColor} ${opacity}`}
                key={`hex-${rowIndex}-${colIndex}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
