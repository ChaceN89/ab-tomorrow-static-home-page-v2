/**
 * @file PolicySection.jsx
 * @module PolicySection
 * @desc A reusable component for sections in policy pages with a dropdown feature.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // React Icons for the arrows

export default function PolicySection({ title, children, initiallyOpen=false }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen); // State to control visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the state
  };

  return (
    <div className="mt-8 ">
      <div className="flex items-center justify-between hover:cursor-pointer   hover:shadow-lg px-2 rounded-xl" onClick={toggleDropdown}>
        <h2 className="text-xl font-semibold">{title}</h2>
        {/* Toggle button with arrow icons */}
        <button className="text-xl">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Content section with sliding animation */}
      <div
        className={`overflow-hidden transition-all  ${isOpen ? "max-h-[2000px] duration-1200" : "max-h-0 duration-500"}`}
        style={{ transitionProperty: "max-height" }}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
