/**
 * @file PartnerBanner.tsx
 * @module PartnerBanner
 * @desc Displays the sponsor section (sticky sidebar on large screens, bottom banner on small screens).
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";

export default function PartnerBanner() {
  return (
    <>
      {/* Desktop Sidebar (Sticky) */}
      <div className="hidden lg:flex flex-col items-center w-48 bg-white shadow-md p-4 z-30 sticky top-16 self-start">
        <h3 className="text-lg font-bold mb-2">Our Sponsors</h3>
        <ul className="flex flex-col items-center space-y-2">
          <li className="h-20 w-full bg-gray-200 flex items-center justify-center text-sm">🌍 Sponsor 1</li>
          <li className="h-20 w-full bg-gray-200 flex items-center justify-center text-sm">⚡ Sponsor 2</li>
          <li className="h-20 w-full bg-gray-200 flex items-center justify-center text-sm">🏆 Sponsor 3</li>
          <li className="h-20 w-full bg-gray-200 flex items-center justify-center text-sm">🏢 Sponsor 4</li>
          <li className="h-20 w-full bg-gray-200 flex items-center justify-center text-sm">🎗️ Sponsor 5</li>
          <li className="h-20 w-full bg-gray-200 flex items-center justify-center text-sm">🚀 Sponsor 6</li>
        </ul>
      </div>

      {/* Mobile Bottom Banner */}
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
