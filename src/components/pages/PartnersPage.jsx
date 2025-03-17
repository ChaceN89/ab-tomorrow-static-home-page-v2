import React from "react";
import {
  champions,
  mentors,
  ambassadors,
  supporters,
  pastSponsors,
} from "../../data/partnerData";

import PartnerShowcase from "../partners/PartnersShowcase";

export default function PartnersPage() {
  return (
    <section className="section py-12 mt-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Our Partners</h1>
        <p className="text-lg text-gray-600 mt-2">
          We are grateful to the Alberta Tomorrow sponsors for making Alberta Tomorrow possible.
        </p>
      </div>

      <div className="flex flex-col items-center text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Be Part of Our Story</h2>
        <p className="text-lg text-gray-600 mt-2">
          Download our sponsorship package today to learn more about becoming a partner.
        </p>

        <a
          href="/static/pdfs/AlbertaTomorrowSponsorshipPackage.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Download Sponsorship Package 📄
        </a>
      </div>



      <div className="mt-12 space-y-12">
        <PartnerShowcase title="Champions" partners={champions} showDescriptions />
        <PartnerShowcase title="Ambassadors" partners={ambassadors} showDescriptions />
        <PartnerShowcase title="Mentors" partners={mentors} />
        <PartnerShowcase title="Supporters" partners={supporters} />
        <PartnerShowcase title="Past Sponsors" partners={pastSponsors} />
      </div>
    </section>
  );
}
