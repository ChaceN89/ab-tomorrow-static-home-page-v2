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
 * 
 * 
 * @notes
 * this use to be used to shortd the nav bar lg:min-w-[calc(100%-14rem)]
 */

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LinkItem from "./LinkItem";
import NavDropdown from "./NavDropdown";
import NavLogo from "./NavLogo";

// Nav data
import {toolsDropDown, learnMoreDropDown, scrollLinks} from "../../data/navData";

// Icons 
import { BsHexagonHalf } from "react-icons/bs";

const HexSeparator = () => (
  <BsHexagonHalf className="text-accent-alt w-2 h-2 opacity-60 mx-0 translate-y-[1.5px]" />
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
      className="fixed z-40 top-0 left-0 min-w-full  py-2 backdrop-blur-md bg-gray-800/60 shadow-lg border-b border-white/10"
      style={{
        backgroundColor: `rgba(31, 41, 55, ${isHomePage ? Math.min(0.75, 0.4 + scrollY / 1000) : 0.75})`
      }}
    >
      <div className="flex w-full flex-col items-start lg:flex-row justify-start lg:justify-between lg:items-center page-width">
      
        {/* Left Side: Logo & Navigation */}
        <div className="flex items-center">
          <LinkItem
            router="/"
            scrollTo="hero"
            disableActive
            className=" text-white  hover:cursor-pointer "
          >
            <NavLogo />
          </LinkItem>
          <HexSeparator/>
          <NavDropdown title={toolsDropDown.title} items={toolsDropDown.list} />
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex  items-center pt-2 lg:pt-0">
          {scrollLinks.flatMap(({ label, scrollTo }, index, arr) => [
            <LinkItem
              key={scrollTo}
              router="/"
              scrollTo={scrollTo}
              className="nav-element-default nav-element-default-hover"
              activeClassName="nav-element-active"
            >
              {label}
            </LinkItem>,
            index < arr.length - 1 ? <HexSeparator key={`sep-${scrollTo}`} /> : null
          ])}
          <HexSeparator/>
          <NavDropdown title={learnMoreDropDown.title} items={learnMoreDropDown.list} openToLeft={true} />
          <HexSeparator/>
          <LinkItem
            href="https://www.canadahelps.org/en/dn/60256?v2=true"
            className="ml-nav p-3 py-1.5 rounded-lg bg-primary hover:bg-primary-alt text-white font-semibold transition"
          >
            Donate
          </LinkItem>        
        </div>
      </div>
    </nav>
  );
}
