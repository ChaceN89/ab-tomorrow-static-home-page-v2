/**
 * @file NewsPopup.jsx
 * @module NewsPopup
 * @desc Displays a toast notification with the latest news items on initial site load.
 *
 * @see {@link https://react-hot-toast.com/ | React Hot Toast Documentation}
 *
 * @author Chace Nielson
 * @created Mar 17, 2025
 * @updated Mar 17, 2025
 */

import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGlobe, FaBolt, FaCalendarAlt } from "react-icons/fa"; // Import icons

/**
 * List of new updates to be displayed in the popup.
 */
const newsItems = [
  {
    icon: <FaGlobe className="text-accent text-xl" />, // Earth icon
    title: "New Feature: Interactive Maps!",
    description: "Explore wildlife data with our brand new interactive maps.",
    link: "https://www.simulator.albertatomorrow.ca/maps",
  },
  {
    icon: <FaBolt className="text-yellow-400 text-xl" />, // Lightning icon
    title: "Energy Tomorrow Update",
    description: "Learn about the latest improvements to our energy simulator.",
    link: "https://www.simulator.albertatomorrow.ca/energy",
  },
  {
    icon: <FaCalendarAlt className="text-black text-xl" />, // Calendar icon
    title: "Upcoming Events",
    description: "Join our live webinar on conservation strategies!",
    link: "https://www.simulator.albertatomorrow.ca/events",
  },
];

export default function NewsPopup() {
  useEffect(() => {
    // Show each news item as a toast notification with a small delay
    newsItems.forEach((item, index) => {
      setTimeout(() => {
        toast(
          (t) => (
            <div className="flex items-start space-x-3 text-white max-w-xs">
              {/* Icon */}
              <div>{item.icon}</div>

              {/* Content */}
              <div className="flex flex-col">
                <strong className="text-lg">{item.title}</strong>
                <p className="text-sm">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline text-sm"
                  onClick={() => toast.dismiss(t.id)}
                >
                  Read More →
                </a>
              </div>
            </div>
          ),
          {
            id: `news-toast-${index}`, // Ensure unique toast per news item
            duration: 8000, // Toast stays visible for 8 seconds
          }
        );
      }, index * 1000); // Delay each toast by 1 second
    });
  }, []);

  return null; // No UI element needed; just triggering toasts
}
