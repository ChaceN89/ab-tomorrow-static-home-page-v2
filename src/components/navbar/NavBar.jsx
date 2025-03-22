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
import DonateButton from "./DonateButton";

// Nav data
import {toolsDropDown, learnMoreDropDown, scrollLinks, donateInfo} from "../../data/navData";

// Icons 
import { BsHexagonHalf } from "react-icons/bs";
import { HiBars3BottomRight } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
import MobileMenu from "./MobileMenu";


const HexSeparator = () => (
  <BsHexagonHalf className="text-accent-alt w-2 h-2 opacity-60 mx-1 translate-y-[1.5px]" />
);

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Track scroll position and update state
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className="fixed z-40 top-0 left-0 min-w-full py-2 backdrop-blur-md bg-gray-800/60 shadow-lg border-b border-white/10 2xl:min-w-[calc(100%-14rem)]"
      style={{
        backgroundColor: `rgba(31, 41, 55, ${isHomePage ? Math.min(0.75, 0.4 + scrollY / 1000) : 0.75})`
      }}
    >
      <div className="flex w-full md:flex-col  lg:flex-row justify-between md:justify-start lg:justify-between items-center page-width">
      
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
          <div className="items-center hidden md:flex">
          <HexSeparator/>
            
          <NavDropdown title={toolsDropDown.title} items={toolsDropDown.list} />   
          </div>
        </div>

 

        {/* Right Side: Navigation Links */}
        <div className="hidden md:flex  items-center ">
          {scrollLinks.flatMap(({ label, scrollTo, icon }, index, arr) => [
            <LinkItem
              key={scrollTo}
              router="/"
              scrollTo={scrollTo}
              className="nav-element-default nav-element-default-hover flex items-center gap-1"
              activeClassName="nav-element-active"
            >
              {icon}
              {label}
            </LinkItem>,
            index < arr.length - 1 ? <HexSeparator key={`sep-${scrollTo}`} /> : null
          ])}
          <HexSeparator/>
          <NavDropdown title={learnMoreDropDown.title} items={learnMoreDropDown.list} openToLeft={false} />
          <HexSeparator/>
          <DonateButton/>
        </div>

        <button
            className="flex items-center md:hidden hover:cursor-pointer "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiX className="text-white w-6 h-6 transition-transform duration-500 hover:text-accent" />
            ) : (
              <HiBars3BottomRight className="text-white w-6 h-6 transition-transform duration-500 hover:text-accent" />
            )}
          </button>

      </div>
      <MobileMenu isOpen={isMobileMenuOpen}/>
    </nav>
  );
}
