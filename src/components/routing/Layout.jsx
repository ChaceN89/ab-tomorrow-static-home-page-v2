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

import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import PartnerBanner from "../partners/PartnerBanner";
import ScrollProgress from "../ui-utils/ScrollProgress";

export default function Layout() {

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress/>
      <NavBar />
    
      <main className="flex-1 overflow-auto relative flex flex-col pb-28 lg:pb-0 outlet-background lg:mr-56 ">
          <Outlet />
        <Footer />
      </main>
    </div>
  );
}
