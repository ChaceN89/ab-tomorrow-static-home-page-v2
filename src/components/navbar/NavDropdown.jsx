/**
 * @file NavDropdown.jsx
 * @module NavDropdown
 * @desc A dropdown menu for navigation. Uses Framer Motion animations and supports mouse/keyboard interactions.
 *
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 *
 * @author Chace Nielson
 * @created Mar 17, 2025
 * @updated Mar 17, 2025
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import LinkItem from "./LinkItem";

export default function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef(null);
  const dropRef = useRef(null);

  const options = [
    { label: "Videos", to: "https://www.simulator.albertatomorrow.ca/#/dashboard/videos" },
    { label: "Simulator", to: "https://www.simulator.albertatomorrow.ca" },
    { label: "Energy Tomorrow", to: "https://www.simulator.albertatomorrow.ca" },
    { label: "Wildlife Tomorrow", to: "https://www.simulator.albertatomorrow.ca" },
  ];

  /** Toggles the dropdown */
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  /** Closes dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropRef.current &&
        !dropRef.current.contains(event.target) &&
        btnRef.current &&
        !btnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /** Closes dropdown when mouse leaves */
  const handleMouseLeave = (event) => {
    if (!dropRef.current.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        ref={btnRef}
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white"
      >
        Tools <FaChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropRef}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-48 bg-gray-900 text-white rounded shadow-md"
          >
            {options.map((option) => (
              <div key={option.label} onClick={() => setIsOpen(false)}>
                <LinkItem external={option.to}>
                  {option.label}
                </LinkItem>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
