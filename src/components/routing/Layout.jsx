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
import ScrollProgress from "../layout/ScrollProgress";
import HexSeparator from "../common/HexSeparator";

export default function Layout() {

  return (
    <div className="flex flex-col min-h-screen min-w-56">
      <ScrollProgress/>
      <NavBar />
    
      <main className="flex-1 relative flex flex-col pb-14 sm:pb-24 lg:pb-0 outlet-background lg:mr-56 min-h-[50vh] overflow-hidden">
        <HexSeparator randomColors rows={10}   hexClass='bg-primary-alt opacity-10'/>
        <div className="relative ">
          <Outlet />
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </main>
    </div>
  );
}
