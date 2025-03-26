/**
 * @file AppRoutes.jsx
 * @module AppRoutes
 * @desc Defines the main routing system for the application with animated page transitions.
 * - This file sets up routing using `react-router-dom`, enabling navigation between different pages in the app.
 * - It uses `AnimatePresence` from `framer-motion` to animate page transitions with smooth fade-in and fade-out effects.
 * - Each page transition is wrapped in a `motion.div` to apply animations.
 * - The routing structure includes multiple pages, such as Home, Privacy Policy, Terms of Use, Contact, and more, with a catch-all route (`*`) for undefined paths, showing a 404 page (`NotFound`).
 * - The page transitions are handled by the `PageTransition` component, which applies animation to each page.
 * - Additionally, a `PartnerBanner` component is used to display partners' logos across the app.
 *
 * @features
 * - **Page Transitions**: `AnimatePresence` and `motion.div` are used to add smooth fade-in/fade-out page transitions for a more polished user experience.
 * - **Dynamic Routing**: Uses `react-router-dom` to define routes for various pages like Home, Privacy Policy, Terms of Use, etc.
 * - **Catch-All Route**: The `*` route catches undefined paths and displays the `NotFound` component to handle 404 errors.
 * - **Partner Banner**: The `PartnerBanner` component is placed at the top level and visible across different pages, showing the partner logos.
 * - **Performance**: Route transitions are optimized using `AnimatePresence` and memoization for the page components to ensure smooth, performant transitions.
 *
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 * @see {@link https://reactjs.org/docs/context.html | React Context API Documentation}
 * @see {@link https://reactjs.org/docs/react-api.html#memo | React Memo}
 * @see {@link https://reactjs.org/docs/react-api.html#reactsuspense | React Suspense}
 * @see {@link https://reactrouter.com/web/api/Routes | React Router Routes API}
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 16, 2025 by Chace Nielson
 */
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "./Layout";
import PartnerBanner from '../partners/PartnerBanner';

import Home from '../pages/Home';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsOfUse from '../pages/TermsOfUse';
import Contact from '../pages/Contact';
import FAQs from '../pages/FAQs';
import Events from '../pages/Events';
import BoardOfDirectors from '../pages/BoardOfDirectors';
import PartnersPage from '../pages/PartnersPage';
import NotFound from '../pages/NotFound';
import ScrollToTop from "../layout/ScrollToTop";
import NewsPopup from "../media/NewsPopup";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <div className="min-w-44 overflow-x-hidden bg-primary">
      {/* Partner Banner stays in place throughout routing */}
      <PartnerBanner />
      <ScrollToTop/>
      <NewsPopup/>
      
      {/* AnimatePresence enables animations for route transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<PageTransition><Home /></PageTransition>} />
            <Route path="privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="terms-of-use" element={<PageTransition><TermsOfUse /></PageTransition>} />
            <Route path="partners" element={<PageTransition><PartnersPage /></PageTransition>} />
            <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="faqs" element={<PageTransition><FAQs /></PageTransition>} />
            <Route path="events" element={<PageTransition><Events /></PageTransition>} />
            <Route path="board-of-directors" element={<PageTransition><BoardOfDirectors /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

// PageTransition component for animating page transitions
const PageTransition = ({ children }) => {
  return (
    <motion.div
      key="page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};