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


  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <NavBar />

      {/* Only render ScrollProgress when the ref is available */}
      <ScrollProgress/>

      {/* Main Section (Sidebar + Scrollable Content) */}
      <div className="flex flex-1 pt-16">
        {/* Static Sidebar (Does not scroll) */}
        <PartnerBanner />

        {/* Scrollable Main Content Area */}
        <main 
          className="flex-1 overflow-auto relative flex flex-col pb-28 lg:pb-0 outlet-background" // the pb wil ldepend on the size of the partner banner
        >
          {/* Content Wrapper: Ensures Outlet pushes footer down */}
          <div className="flex-1">
            <Outlet />
          </div>

          {/* Footer (Stays above the Sponsor Banner on Mobile) */}
          <Footer />
        </main>
      </div>
    </div>
  );
}
