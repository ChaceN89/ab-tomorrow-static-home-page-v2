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
import { useLocation } from "react-router-dom";
import LinkItem from "./LinkItem";
import NavDropdown from "./NavDropdown";
import NavLogo from "./NavLogo";



export default function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Track scroll position and update state
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set opacity: 0.4 → 0.9 only on home page; otherwise, it's fixed at 0.9
  const opacity = isHomePage ? Math.min(0.9, 0.4 + scrollY / 1000) : 0.9;

  return (
    <motion.nav
      initial={{ opacity: isHomePage ? 0.4 : 0.9 }}
      animate={{ opacity }}
      transition={{ duration: 0.2 }}
      className="fixed z-40 top-0 left-0 w-full lg:w-[calc(100%-14rem)] bg-gray-800 text-white p-4 shadow-md"
    >
      <div className="flex justify-between items-center">
        {/* Left Side: Logo & Navigation */}
        <div className="flex justify-start items-center gap-2">
          <LinkItem router={"/"} scroll={'hero'}><NavLogo/></LinkItem>
          <NavDropdown > Tools </NavDropdown>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex justify-end items-center gap-2">
          <LinkItem router={"/"} scroll={"hero"}>Home</LinkItem>
          <LinkItem router={"/"} scroll={"intro"}>Intro</LinkItem>
          <LinkItem router={"/"} scroll={"tools"}>Tools</LinkItem>
          <LinkItem router={"/"} scroll={"education"}>Education</LinkItem>
          <LinkItem router={"/"} scroll={"about"}>About</LinkItem>
          <LinkItem router={"/FAQs"}>FAQs</LinkItem>
          <LinkItem router={"/Partners"}>Partners</LinkItem>
          <LinkItem router={"/Contact"}>Contact</LinkItem>
          <LinkItem router={"/Events"}>Events</LinkItem>
        </div>
      </div>
    </motion.nav>
  );
}
