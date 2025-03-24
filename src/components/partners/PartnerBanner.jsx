/**
 * @file PartnerBanner.jsx
 * @module PartnerBanner
 * @desc A unified sponsor banner that acts as a sidebar on large screens and a bottom banner on small screens.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React from "react";
import { shuffledPartners } from "../../data/partnerData";
import ToolTip from '../ui-utils/ToolTip';


function PartnerList() {
  return (
    <ul className="partner-scroll-list">
      {shuffledPartners.concat(shuffledPartners).map((partner, index) => (
        <li key={index}>
          <a href={partner.link} target="_blank" rel="noopener noreferrer">
            <img className="drop-shadow" src={`partners/${partner.logo}`} alt={partner.name} />
            <div className="hidden lg:block w-full h-[0.5px] bg-black opacity-20 my-1.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}


// Export two lists with different styles based on screen size
export default function PartnerBanner() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:block partner-banner-vertical scroll-element">
        <PartnerList/>
      </div>
      <div className="lg:hidden partner-banner-horizontal scroll-element">
        <PartnerList/>    
      </div>
    </>
  );
}