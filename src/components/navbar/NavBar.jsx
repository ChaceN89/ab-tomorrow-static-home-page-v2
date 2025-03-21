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

// Nav data
import {toolsDropDown, learnMoreDropDown, scrollLinks} from "../../data/navData";

// Icons 
import { BsHexagonHalf } from "react-icons/bs";

const HexSeparator = () => (
  <BsHexagonHalf className="text-accent-alt w-2 h-2 opacity-70" />
);

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
    <nav
      className="fixed z-40 top-0 left-0 w-full lg:w-[calc(100%-14rem)] pt-1.5 backdrop-blur-md bg-gray-800/60 shadow-lg border-b border-white/10"
      style={{
        backgroundColor: `rgba(31, 41, 55, ${isHomePage ? Math.min(0.75, 0.4 + scrollY / 1000) : 0.75})`
      }}
    >
      <div className="flex justify-between items-center page-width ">
        {/* Left Side: Logo & Navigation */}
        <div className="flex justify-start items-center gap-1.5">
          <LinkItem  router="/"
            scrollTo={"hero"}
            disableActive
            disableHover
          >
            <NavLogo/>
          </LinkItem>
          <HexSeparator/>
          <NavDropdown title={toolsDropDown.title} items={toolsDropDown.list} />
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex justify-end items-center gap-1.5">
          {scrollLinks.flatMap(({ label, scrollTo, disableActive }, index, arr) => [
            <LinkItem
              key={scrollTo}
              router="/"
              scrollTo={scrollTo}
              disableActive={disableActive}
            >
              {label}
            </LinkItem>,
            index < arr.length - 1 ? <HexSeparator key={`sep-${scrollTo}`} /> : null
          ])}
          <HexSeparator/>
          <NavDropdown title={learnMoreDropDown.title} items={learnMoreDropDown.list} openToLeft={true} />
          <HexSeparator/>
          <div className=' bg-green-500 hover:bg-green-800 rounded-lg hover:cursor-pointer'>Donate</div>
        </div>
      </div>
    </nav>
  );
}
