import React from "react";

export default function PartnersList({ partners, title }) {
  if (!partners || partners.length === 0) return null; // Return nothing if no partners exist

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-40 flex flex-col items-center space-y-2 hover:opacity-80 transition"
          >
            {partner.logo ? (
              <img
                src={`/partners/${partner.logo}`}
                alt={partner.name}
                className="w-32 h-20 object-contain"
              />
            ) : (
              <div className="w-32 h-20 flex items-center justify-center bg-gray-200 text-gray-600 text-sm">
                No Image
              </div>
            )}
            <p className="text-sm font-medium text-center">{partner.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
