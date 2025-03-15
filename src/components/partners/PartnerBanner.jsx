/**
 * @file SponsorBanner.tsx
 * @module SponsorBanner
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
    <div className="sponsor-banner">
      <ul>
        {bannerSponsors.map((partner, index) => (
          <li key={index}>
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <img src={`partners/${partner.logo}`} alt={partner.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
