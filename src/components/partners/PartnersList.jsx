import React from "react";

export default function PartnersList({ partners, title, showDescriptions = false }) {
  if (!partners || partners.length === 0) return null; // Return nothing if no partners exist

  return (
    <section className="my-8 border-2 border-black">
      <h2 className="text-3xl font-semibold text-center mb-8">{title}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="w-52 flex flex-col items-center space-y-3 hover:opacity-80 transition">
            <a
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-52 flex flex-col items-center space-y-3 hover:opacity-80 transition"
            >
              {partner.logo ? (
                <img
                  src={`/partners/${partner.logo}`}
                  alt={partner.name}
                  className="w-48 h-48 object-contain drop-shadow"
                />
              ) : (
                <div className="w-48 h-48 flex items-center justify-center bg-gray-200 text-gray-600 text-sm">
                  No Image
                </div>
              )}
            </a>
            <p className="text-lg font-bold text-center">{partner.name}</p>
            {showDescriptions && partner.description && (
              <p className="text-sm font-medium text-center">{partner.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

