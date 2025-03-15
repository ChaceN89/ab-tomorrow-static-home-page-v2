/**
 * @file PartnerBanner.tsx
 * @module PartnerBanner
 * @desc A static sidebar on large screens and a bottom banner on small screens.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";

export default function PartnerBanner() {
  return (
    <>
      {/* Desktop Sidebar (Always Visible) */}
      <div className="hidden lg:flex w-44 h-full bg-white shadow-md p-4">
        <ul className="space-y-2 p-2">
          <img src="https://via.placeholder.com/150" alt="Partner Logo" className="w-full h-20 object-contain" />
        </ul>
      </div>

      {/* Mobile Bottom Banner (Appears on Small Screens) */}
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
    </>
  );
}
