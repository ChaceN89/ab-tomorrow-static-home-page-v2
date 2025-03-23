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
import { randomOrderBannerSponsors } from "../../data/partnerData";
import ToolTip from '../ui-utils/ToolTip';

export default function PartnerBanner() {




  return (
    <>
    {/* Desktop Version */}
<div className="hidden lg:block partner-banner-vertical scroll-element">
  <ul>
    {randomOrderBannerSponsors.map((partner, index) => (
      <li key={index}>
        <a href={partner.link} target="_blank" rel="noopener noreferrer">
          <img src={`partners/${partner.logo}`} alt={partner.name} />
          <div className="w-full h-[0.5px] bg-black opacity-50 my-1.5"></div>
        </a>
      </li>
    ))}
  </ul>
</div>

{/* Mobile Version */}
<div className="lg:hidden partner-banner-horizontal scroll-element">
  <ul>
    {randomOrderBannerSponsors.map((partner, index) => (
      <li key={index}>
        <a href={partner.link} target="_blank" rel="noopener noreferrer">
          <img src={`partners/${partner.logo}`} alt={partner.name} />
        </a>
      </li>
    ))}
  </ul>
</div>
</>
  );
}