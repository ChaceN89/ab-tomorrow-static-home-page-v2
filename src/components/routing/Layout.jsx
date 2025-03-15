/**
 * @file Layout.tsx
 * @module Layout
 * @desc Defines the layout with a fixed navbar, dynamic content section, and footer.
 *
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * 
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import { Outlet } from "react-router-dom";
import NavBar from "../navigation/NavBar";
import Footer from "../navigation/Footer";
import PartnerBanner from "../partners/PartnerBanner";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      <NavBar />

      <div className="flex flex-1 pt-16">
        {/* Main Content Area */}
        <main className="flex-1 bg-yellow-200 relative">
          <Outlet />
        </main>

        {/* Partner Banner (Sidebar on Desktop) */}
        <PartnerBanner />
      </div>

      <Footer />
    </div>
  );
}
