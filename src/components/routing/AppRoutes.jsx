/**
 * @file AppRoutes.jsx
 * @module AppRoutes
 * @desc Defines the main routing system for the application with animated page transitions.
 *
 * @see {@link https://reactrouter.com/ | React Router Documentation}
 * @see {@link https://www.framer.com/motion/ | Framer Motion Documentation}
 *
 * @author Chace Nielson
 * @created 
 * @updated 
 */

import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./Layout";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse";
import Contact from "../pages/Contact";
import FAQs from "../pages/FAQs";
import Events from "../pages/Events";
import BoardOfDirectors from "../pages/BoardOfDirectors";
import PartnersPage from "../pages/PartnersPage";

export default function AppRoutes() {
  const location = useLocation();

  return (
    <div className="min-w-44 overflow-x-hidden">
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home/>} />
            <Route path="privacy-policy" element={<PrivacyPolicy/>} />
            <Route path="terms-of-use" element={<TermsOfUse/>} />
            <Route path="partners" element={<PartnersPage/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="faqs" element={<FAQs/>} />
            <Route path="events" element={<Events/>} />
            <Route path="board-of-directors" element={<BoardOfDirectors/>} />
            <Route path="*" element={<Navigate to="/" replace />} /> 
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

/* Animated Cross-Dissolve Page Transition */
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}  // Start hidden
      animate={{ opacity: 1 }}  // Fade in
      exit={{ opacity: 0 }}     // Fade out
      transition={{ duration: 0.2, ease: "easeInOut" }} // Smooth cross dissolve
      style={{ position: "absolute", width: "100%" }} // Ensures pages overlap
    >
      {children}
    </motion.div>
  );
};

/* Placeholder for future pages */
const TempPage = ({ name }) => {
  return (
    <div className="p-10">
      {name}

    </div>
  );
};
