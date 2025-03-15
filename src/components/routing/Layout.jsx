/**
 * @file Layout.tsx
 * @module Layout
 * @desc Defines the layout with a fixed navbar, a static sidebar, and a scrollable content section.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import { Outlet } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

import NavBar from "../navigation/NavBar";
import Footer from "../navigation/Footer";
import PartnerBanner from "../partners/PartnerBanner";
import ScrollProgress from "../../utils/ScrollProgress";

export default function Layout() {
  const mainScrollRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (mainScrollRef.current) {
      setIsMounted(true);
      console.log("Main scrollRef is now assigned:", mainScrollRef.current);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <NavBar />

      {/* Only render ScrollProgress when the ref is available */}
      {isMounted && <ScrollProgress scrollRef={mainScrollRef} />}

      {/* Main Section (Sidebar + Scrollable Content) */}
      <div className="flex flex-1 pt-16">
        {/* Static Sidebar (Does not scroll) */}
        <div className="hidden lg:flex w-44">
          <PartnerBanner />
        </div>

        {/* Scrollable Main Content Area with `relative` positioning */}
        <main
          ref={mainScrollRef}
          className="flex-1 overflow-auto bg-yellow-200 h-[calc(100vh-4rem)] relative flex flex-col"
        >
          {/* Content Wrapper: Ensures Outlet pushes footer down */}
          <div className="flex-1">
            <Outlet />
          </div>

          {/* Footer (Stays at the Bottom) */}
          <Footer />
        </main>
        
      </div>
    </div>
  );
}
