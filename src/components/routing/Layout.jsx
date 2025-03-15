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
import NavBar from "../navigation/NavBar";
import Footer from "../navigation/Footer";
import PartnerBanner from "../partners/PartnerBanner";
import ScrollProgress from "../../utils/ScrollProgress";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <NavBar />

      {/* Main Section (Sidebar + Scrollable Content) */}
      <div className="flex flex-1 pt-16">
        
        {/* Static Sidebar (Does not scroll) */}
        <div className="hidden lg:flex w-44">
          <PartnerBanner />
        </div>
        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-auto p-4 bg-yellow-200 h-[calc(100vh-4rem)]">
          <Outlet />
        </main>

        <div>
        <ScrollProgress />
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
