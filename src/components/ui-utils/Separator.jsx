/**
 * @file Separator.jsx
 * @module Separator
 * @desc A hexagonal grid separator component for between component
 *
 * @author Chace Nielson
 * @created Mar 24, 2025
 * @updated Mar 24, 2025
 */

import React from 'react';

export default function Separator({ rows = 3, cols = 80 }) {
  return (
<div className="relative w-full h-24 overflow-x-hidden overflow-y-visible bg-primary border-4">
  <div className="absolute inset-0 z-0 flex flex-col hex-grid">
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div
        className={`hex-row ${rowIndex % 2 !== 0 ? 'hex-row-offset' : ''}`}
        key={`row-${rowIndex}`}
      >
        {Array.from({ length: cols }).map((_, colIndex) => (
          <div
            className="hexagon"
            key={`hex-${rowIndex}-${colIndex}`}
          />
        ))}
      </div>
    ))}
  </div>
</div>
  );
}