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

import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "./Layout";
import SplashScreen from '../page-components/SplashScreen';
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

// const Home = lazy(() => import("../pages/Home"));
// const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
// const TermsOfUse = lazy(() => import('../pages/TermsOfUse'));
// const Contact = lazy(() => import('../pages/Contact'));
// const FAQs = lazy(() => import('../pages/FAQs'));
// const Events = lazy(() => import('../pages/Events'));
// const BoardOfDirectors = lazy(() => import('../pages/BoardOfDirectors'));
// const PartnersPage = lazy(() => import('../pages/PartnersPage'));
// const NotFound = lazy(() => import('../pages/NotFound'));




export default function AppRoutes() {
  const location = useLocation();

  return (
    <div className="min-w-44 overflow-x-hidden">
      <Suspense fallback={<SplashScreen/>}>
        <PartnerBanner/>
        <AnimatePresence  mode="wait" initial={false}>
      
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
      </Suspense>
    </div>
  );
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      key="page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
