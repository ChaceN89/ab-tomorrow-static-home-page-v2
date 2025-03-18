/**
 * @file NavBar.jsx
 * @module NavBar
 * @desc A fixed navigation bar that increases opacity as you scroll using Framer Motion.
 *
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 17, 2025
 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LinkItem from "./LinkItem";

export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position and update state
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Opacity increases from 0.4 to 0.9 over the first 300px of scrolling
  const opacity = Math.min(0.9, 0.4 + scrollY / 300); // Adjust 300 for fade length

  return (
    <motion.nav
      initial={{ opacity: 0.4 }}
      animate={{ opacity }}
      transition={{ duration: 0.2 }}
      className="fixed z-40 top-0 left-0 w-full lg:w-[calc(100%-14rem)] bg-gray-800 text-white p-4 shadow-md"
    >
      <div className="flex justify-between items-center">
        {/* Left Side: Logo & Navigation */}
        <div className="flex justify-start items-center gap-2">
          <LinkItem>Logo</LinkItem>
          <LinkItem>Videos</LinkItem>
          <LinkItem>Tools</LinkItem>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex justify-end items-center gap-2">
          <LinkItem>Home</LinkItem>
          <LinkItem>Intro</LinkItem>
          <LinkItem>Tools</LinkItem>
          <LinkItem>Education</LinkItem>
          <LinkItem>About</LinkItem>
          <LinkItem>FAQs</LinkItem>
          <LinkItem>Partners</LinkItem>
          <LinkItem>Contact</LinkItem>
          <LinkItem>Events</LinkItem>
        </div>
      </div>
    </motion.nav>
  );
}
