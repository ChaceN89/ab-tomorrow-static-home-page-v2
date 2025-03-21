/**
 * @file LinkItem.jsx
 * @module LinkItem
 * @desc A reusable navigation link component that supports react-scroll, react-router, and href links.
 *
 * @see {@link https://reactrouter.com/en/main | React Router Documentation}
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 *
 * @author Chace Nielson
 * @created Mar 17, 2025
 * @updated Mar 17, 2025
 */

import React from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function LinkItem({ href, scrollTo, router, children, disableActive = false, disableHover=false }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const defaultClass = `
    nav-element-default
    ${disableHover ? "" : " nav-element-default-hover"}
  `;

  

  // Function to handle both navigation and scrolling
  const handleClick = (e) => {
    e.preventDefault();

    if (scrollTo) {
      if (isHomePage) {
        // If already on the home page, scrollTo immediately
        scroller.scrollTo(scrollTo, {
          smooth: true,
          duration: 600,
          offset: -120, // Adjust based on navbar height
        });
      } else {
        // Navigate to home first, then scrollTo after navigation completes
        navigate("/");

        // Wait for navigation to complete and the DOM to fully render before scrolling
        const observer = new MutationObserver(() => {
          const targetElement = document.getElementById(scrollTo);
          if (targetElement) {
            observer.disconnect(); // Stop observing once the element exists

            // Ensure scrollTo happens after DOM layout calculations
            setTimeout(() => {
              scroller.scrollTo(scrollTo, {
                smooth: true,
                duration: 1000,
                offset: -70, // Adjust based on navbar height
              });
            }, 300); // Delay to ensure rendering is complete
          }
        });

        observer.observe(document.body, { childList: true, subtree: true });
      }
    } else if (router) {
      // If it's a normal router link, navigate normally
      navigate(router);
    }
  };

  return (
    <div className="relative">
      {/* External Link */}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${defaultClass} block`}
        >
          {children}
        </a>
      )}

      {/* Scroll Link (Works on Home Page, Uses react-scrollTo Active State) */}
      {scrollTo && isHomePage && (
        <ScrollLink
          to={scrollTo}
          smooth={true}
          duration={1000}
          spy={true}
          offset={-70} // Adjust based on navbar height
          activeClass={!disableActive ? "nav-element-active" : ""} 
          className={`${defaultClass} block`}
        >
          {children}
        </ScrollLink>
      )}

      {/* Scroll Link (Navigates to Home First, Then Scrolls) */}
      {scrollTo && !isHomePage && (
        <a href="/" onClick={handleClick} className={`${defaultClass} block`}>
          {children}
        </a>
      )}

      {/* Router Link (Uses Active Class for Current Route) */}
      {router && !scrollTo && (
        <NavLink
          to={router}
          className={({ isActive }) =>
            `${defaultClass} ${isActive && !disableActive ? "nav-element-active" : ""}`
          }
        >
          {children}
        </NavLink>
      )}
    </div>
  );
}
