/**
 * @file PolicyHeader.jsx
 * @module PolicyHeader
 * @desc Displays the title and introduction for policy pages.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";

export default function PolicyHeader({ title, intro }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <hr className="mb-6" />
      {intro && <p className="text-gray-700 mb-4">{intro}</p>}
    </div>
  );
}
