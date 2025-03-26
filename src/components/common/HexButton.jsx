/**
 * @file HexButton.jsx
 * @module UI/HexButton
 * @desc A reusable hexagonal call-to-action button styled with a wrapper and shadow effects.
 *       Primarily used for external links like launching the simulator.
 * 
 * @author Chace Nielson
 * @created Mar 25, 2025
 * @updated Mar 25, 2025
 *
 * @features
 * - Hexagonal shape with hover shadow effect
 * - Accepts custom children or defaults to "Launch Simulator"
 * - Opens link in a new tab
 *
 * @dependencies
 * - Tailwind utility classes for styling
 * - Global CSS for `.hex-button-wrapper`, `.large-shadow`, and `.large-shadow-hover`
 */
import React from 'react'

export default function HexButton({ children = "Launch Simulator", link }) {
  return (
    <div className='hex-button-container bg-tertiary'>
      <a className="hex-button-wrapper font-semibold" href={link} target="_blank">
        {children}
      </a>
    </div>
  );
}