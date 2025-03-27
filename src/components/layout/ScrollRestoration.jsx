/**
 * @file ScrollRestoration.js
 * @module ScrollRestoration
 * @desc Smart scroll restoration: scrolls to top on new page loads, restores scroll on browser back/forward.
 *
 * @author Chace Nielson
 * @created Mar 27, 2025
 * @updated Mar 27, 2025
 */

import { useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollRestoration() {
  const location = useLocation();
  const action = useNavigationType(); // "PUSH", "POP", or "REPLACE"

  // Store scroll position before navigation
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(location.pathname, window.scrollY.toString());
    };

    window.addEventListener("beforeunload", saveScrollPosition);
    return () => {
      saveScrollPosition();
      window.removeEventListener("beforeunload", saveScrollPosition);
    };
  }, [location]);

  // Restore or scroll to top on navigation
  useLayoutEffect(() => {
    if (action === "POP") {
      const savedY = sessionStorage.getItem(location.pathname);
      if (savedY !== null) window.scrollTo(0, parseInt(savedY));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
