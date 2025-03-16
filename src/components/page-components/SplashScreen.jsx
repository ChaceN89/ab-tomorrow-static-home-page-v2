/**
 * @file SiteLoading.jsx
 * @module SiteLoading
 * @desc Displays a loading state with a logo while the site content is being loaded.
 *
 * @author Chace Nielson
 * @created Mar 15, 2025
 * @updated Mar 15, 2025
 */

import React from 'react';
import splash from '../../assets/site-logos/splash.png';

export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img src={splash} alt="Site Logo" className="mb-4 w-32 h-32 animate-spin-slow" />
        
        {/* Loading Text */}
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
