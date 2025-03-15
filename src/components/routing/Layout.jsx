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
      <NavBar />
      <ScrollProgress/>

      <div className="flex flex-1 pt-16">
        {/* Sidebar Stays in Place */}
        <PartnerBanner />

        {/* Main Content Moves Right (No Overlap) */}
        <main className="flex-1 overflow-auto relative flex flex-col pb-28 lg:pb-0 outlet-background lg:mr-44">
          <div className="flex-1">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
