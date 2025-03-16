/**
 * @file SiteLoading.jsx
 * @module SiteLoading
 * @desc Displays a loading state with a logo while the site content is being loaded, or an error message.
 *
 * @author Chace Nielson
 * @created Mar 15, 2025
 * @updated Mar 16, 2025 by Chace Nielson
 */

import React from 'react';
import splash from '../../assets/site-logos/splash.png';

export default function SplashScreen({ error = false }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img src={splash} alt="Site Logo" className="mb-4 w-32 h-32 animate-spin-slow" />

        {/* Loading Text or Error Message */}
        <p className="text-xl text-gray-600 loading-text">
          {error ? (
            // Error message
            <span>Something went wrong. Please try again later.</span>
          ) : (
            // Loading text with pulsing dots
            <> Loading <span className="dots"></span></>
          )}
        </p>
      </div>
    </div>
  );
}
