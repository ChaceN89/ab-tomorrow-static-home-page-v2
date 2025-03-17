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
import { bannerSponsors } from "../../data/partnerData";

export default function PartnerBanner() {
  return (
    <div className="partner-banner scroll-element  ">
      <ul className="">
        {bannerSponsors.map((partner, index) => (
          <li key={index}>
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <img src={`partners/${partner.logo}`} alt={partner.name} />
              <div className="w-full h-[0.5px] bg-black opacity-50 my-1.5"></div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}