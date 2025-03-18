/**
 * @file LinkItem.jsx
 * @module LinkItem
 * @desc A reusable navigation link component that supports react-scroll, react-router, and external links.
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

export default function LinkItem({ external, scroll, router, children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Active styles
  const activeClass = "text-accent font-semibold border-b-2 border-accent"; // Underline effect for active links
  const defaultClass = "text-white hover:text-accent cursor-pointer transition-all duration-200";

  // Function to handle both navigation and scrolling
  const handleClick = (e) => {
    e.preventDefault();

    if (scroll) {
      if (isHomePage) {
        // If already on the home page, scroll immediately
        scroller.scrollTo(scroll, {
          smooth: true,
          duration: 600,
          offset: -120, // Adjust based on navbar height
        });
      } else {
        // Navigate to home first, then scroll after navigation completes
        navigate("/");

        // Wait for navigation to complete and the DOM to fully render before scrolling
        const observer = new MutationObserver(() => {
          const targetElement = document.getElementById(scroll);
          if (targetElement) {
            observer.disconnect(); // Stop observing once the element exists

            // Ensure scroll happens after DOM layout calculations
            setTimeout(() => {
              scroller.scrollTo(scroll, {
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
      {external && (
        <a
          href={external}
          target="_blank"
          rel="noopener noreferrer"
          className={`${defaultClass} block`}
        >
          {children}
        </a>
      )}

      {/* Scroll Link (Works on Home Page, Uses react-scroll Active State) */}
      {scroll && isHomePage && (
        <ScrollLink
          to={scroll}
          smooth={true}
          duration={1000}
          spy={true}
          offset={-70} // Adjust based on navbar height
          activeClass={activeClass} // This adds styling when section is active
          className={`${defaultClass} block`}
        >
          {children}
        </ScrollLink>
      )}

      {/* Scroll Link (Navigates to Home First, Then Scrolls) */}
      {scroll && !isHomePage && (
        <a href="/" onClick={handleClick} className={`${defaultClass} block`}>
          {children}
        </a>
      )}

      {/* Router Link (Uses Active Class for Current Route) */}
      {router && !scroll && (
        <NavLink
          to={router}
          className={({ isActive }) => `${defaultClass} ${isActive ? activeClass : ""}`}
        >
          {children}
        </NavLink>
      )}
    </div>
  );
}
