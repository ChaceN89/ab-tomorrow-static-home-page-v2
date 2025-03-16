/**
 * @file NavBar.jsx
 * @module NavBar
 * @desc A fixed navigation bar with buttons for routing between pages.
 *
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */


// want to have opacity change on scroll

import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed z-40 top-0 left-0 w-full lg:w-[calc(100%-14rem)] bg-gray-800 text-white p-4 shadow-md opacity-70">
      <div className="flex gap-4 justify-between">
        <NavButton to="/" label="Home" />
        <NavButton to="/privacy-policy" label="Privacy Policy" />
        <NavButton to="/terms-of-use" label="Terms of Use" />
        <NavButton to="/contact" label="Contact" />
        <NavButton to="/faqs" label="FAQs" />
        <NavButton to="/events" label="Events" />
        <NavButton to="/board-of-directors" label="Board of Directors" />
        <NavButton to="/partners" label="Partners" />
      </div>
    </nav>
  );
}

/* Reusable Button Component */
const NavButton = ({ to, label }) => (
  <Link to={to} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white">
    {label}
  </Link>
);
