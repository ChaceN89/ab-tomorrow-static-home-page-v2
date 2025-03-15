/**
 * @file PartnerBanner.tsx
 * @module PartnerBanner
 * @desc A static sidebar that stays in place while the main content scrolls.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";

export default function PartnerBanner() {
  return (
    <div className="w-44  bg-white shadow-md p-4">
      <ul className="space-y-2 p-2">
        <img src="https://via.placeholder.com/150" alt="Partner Logo" className="w-full h-20 object-contain" />
      </ul>
    </div>
  );
}


/*
    <div className="lg:hidden fixed bottom-0 w-full bg-white shadow-md p-2 text-center z-30">
        <div className="flex justify-center items-center space-x-2">
          <div className="h-20 w-20 bg-gray-200 flex items-center justify-center text-sm">🌍</div>
          <div className="h-20 w-20 bg-gray-200 flex items-center justify-center text-sm">⚡</div>
          <div className="h-20 w-20 bg-gray-200 flex items-center justify-center text-sm">🏆</div>
          <div className="h-20 w-20 bg-gray-200 flex items-center justify-center text-sm">🏢</div>
          <div className="h-20 w-20 bg-gray-200 flex items-center justify-center text-sm">🎗️</div>
          <div className="h-20 w-20 bg-gray-200 flex items-center justify-center text-sm">🚀</div>
        </div>
      </div>
*/