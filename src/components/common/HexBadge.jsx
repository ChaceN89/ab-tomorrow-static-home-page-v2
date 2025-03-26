/**
 * @file HexBadge.jsx
 * @module UI/HexBadge
 * @desc A reusable hexagonal badge component with an image-based icon background.
 *
 * @props {string} label - The text displayed on the ribbon.
 * @props {string} icon - URL to the icon image used as the background.
 * @props {string} color - The color theme for the hex background.
 *
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 */

import React from 'react';

export default function HexBadge({ label, icon, color = 'yellow' }) {
  return (
    <div className={`hex-badge ${color}`}>
      <div
        className="circle"
        style={{
          backgroundImage: `url(${icon})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {label && <div className="ribbon">{label}</div>}
    </div>
  );
}
