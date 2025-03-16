/**
 * @file PolicySection.jsx
 * @module PolicySection
 * @desc A reusable component for sections in policy pages.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";

export default function PolicySection({ title, children }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}
