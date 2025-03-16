import React from 'react';

export default function EventCard({ event }) {
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start">
        {/* Image Section */}
        <div className="flex-shrink-0 w-[30rem] mr-6">
          <img
            src={`/webinar-events/${event.image}`}
            alt={event.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
  
        {/* Title and Date Section */}
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">{event.title}</h2>
          <h3 className="text-xl font-medium text-gray-600 mb-1">{event.summary}</h3>
  
          {/* Event Dates with Links */}
          <div className="event-dates mb-1">
            {event.dates &&
              event.dates.map((date, index) => (
                <div key={index} className="font-semibold text-lg">
                  <span className='space-x-2 flex'> 
                    <p>{date.visualDate}:</p>
                    <a
                      href={date.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                      >
                      <span className="underline">Register Here</span>
                    </a>
                  </span>
                </div>
              ))}
          </div>
          <hr className="border-gray-300 mb-1" />

          <div className="event-description text-gray-700 mb-6">
            {event.description}
          </div>
        </div>

      </div>
      {event.speakers && event.speakers.length > 0 && (
        <>
          <h4 className="text-lg font-semibold text-gray-800 my-2">Speakers</h4>
          <div className="flex flex-col space-y-4 w-full ">
            {event.speakers.map((speaker, index) => (
              <div key={index} className="speaker-info bg-gray-100 p-4 rounded-lg shadow-sm">
                <h5 className="text-md font-medium text-gray-800">{speaker.name}</h5>
                <p className="text-gray-600 text-sm">{speaker.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
  
  
  
  return (
    <div className="event-card bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - First Image, Title, and Summary */}
        <div className="flex-1  mb-6 lg:mb-0">
          <img
            src={`/webinar-events/${event.images[0]}`}
            alt={event.title}
            className="h-auto w-auto max-h-96 rounded-lg mb-4"
          />
        </div>

        {/* Right Section - Title, Summary, Dates, and Links */}
        <div className="flex-1 ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h2>
          <h3 className="text-xl font-medium text-gray-600 mb-4">{event.summary}</h3>

          {/* Render event dates with links */}
          <div className="event-dates mb-6">
            {event.dates &&
              event.dates.map((date, index) => (
                <p key={index} className="font-semibold text-lg">
                  <a
                    href={date.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {date.date} - <span className="underline">Register Here</span>
                  </a>
                </p>
              ))}
          </div>

          {/* Line separating description from the rest of the content */}
          <hr className="border-gray-300 mb-6" />

          {/* Render description */}
          <div className="event-description text-gray-700 mb-6">
            {event.description}
          </div>

          {/* Render additional images in a column */}
          {event.images && event.images.length > 1 && (
            <div className="event-images mb-6 flex flex-col space-y-4">
              {event.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={`/webinar-events/${image}`}
                  alt={`${event.title} image ${index + 2}`}
                  className="w-3/4 rounded-lg mx-auto"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Render speakers if available */}
      {event.speakers && event.speakers.length > 0 && (
        <div className="event-speakers mt-6 flex justify-between">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Speakers</h4>
          <div className="flex flex-col space-y-4 w-full lg:w-1/3">
            {event.speakers.map((speaker, index) => (
              <div key={index} className="speaker-info bg-gray-100 p-4 rounded-lg shadow-sm">
                <h5 className="text-md font-medium text-gray-800">{speaker.name}</h5>
                <p className="text-gray-600 text-sm">{speaker.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
