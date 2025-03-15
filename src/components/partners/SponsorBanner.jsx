/**
 * @file PartnerBanner.tsx
 * @module PartnerBanner
 * @desc A static sidebar on large screens and a bottom banner on small screens, displaying sponsor logos.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";

// List of sponsor logo file names (update the path based on actual storage location)
const sponsorLogos = [
  "bow-river-basin-council-logo.jpg",
  "calgary-foundation-logo.jpg",
  "cygnet-energy-logo.png",
  "cygnet-energy-logo.png",
  "cygnet-energy-logo.png",
  "canada-helps.png",
  "cenovus-energy-logo.png",
  "cygnet-energy-logo.png",
  "chawkers-foundation-logo.jpg",
  "cygnet-energy-logo.png",
  "conoco-phillips-logo.jpg",
  "cygnet-energy-logo.png",
];

export default function SponsorBanner() {
  return (
    <>
      {/* Desktop Sidebar (Always Visible) */}
      <div className="hidden fixed right-0 z-30 lg:flex w-44 h-[calc(100vh-4rem)] bg-white shadow-md p-4 overflow-auto">
        <ul className="space-y-4 p-2 w-full ">
          {sponsorLogos.map((logo, index) => (
            <li key={index} className="flex justify-center">
              <img src={`/partners/${logo}`} alt="Sponsor Logo" className="w-full h-24 object-contain" />
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Bottom Banner (Appears on Small Screens) */}
      <div className="lg:hidden fixed bottom-0 w-full bg-white shadow-md p-2 text-center z-30">
        <div className="flex justify-center items-center space-x-2 overflow-auto">
          {sponsorLogos.map((logo, index) => (
            <img key={index}  src={"partners/"+logo} alt="Sponsor Logo" className="w-full h-20 object-contain" />
          ))}
        </div>
      </div>
    </>
  );
}
