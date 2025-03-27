import React, { useState } from 'react';
import { Blurhash } from 'react-blurhash';

export default function EventCard({ event }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row-reverse gap-6 items-start">

        {/* Right: Event Image with Blurhash */}
        <div className="flex-shrink-0 w-full lg:w-[30rem]">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            {!imageLoaded && (
              <Blurhash
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj" // generic fallback
                width="100%"
                height="100%"
                resolutionX={32}
                resolutionY={32}
                punch={1}
                className="absolute inset-0 z-0"
              />
            )}
            <img
              src={`/webinar-events/${event.image}`}
              alt={event.title}
              className="w-full h-full object-cover rounded-lg z-10 relative"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </div>

        {/* Left: Textual content */}
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{event.title}</h2>
            <h3 className="text-xl font-medium text-gray-600">{event.summary}</h3>
          </div>

          {/* Event Dates with Links */}
          <div className="event-dates space-y-2">
            {event.dates?.map((date, index) => (
              <div key={index} className="font-semibold text-lg flex flex-wrap gap-2">
                <p>{date.visualDate}:</p>
                <a
                  href={date.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  <span className="underline">Register Here</span>
                </a>
              </div>
            ))}
          </div>

          <hr className="border-gray-300" />

          {/* Description */}
          <p className="text-gray-700">{event.description}</p>

          {/* Speakers */}
          {event.speakers?.length > 0 && (
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Speakers</h4>
              <div className="flex flex-col gap-3">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <h5 className="text-md font-medium text-gray-800">{speaker.name}</h5>
                    <p className="text-gray-600 text-sm">{speaker.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
