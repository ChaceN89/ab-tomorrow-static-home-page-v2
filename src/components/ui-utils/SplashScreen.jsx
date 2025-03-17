/**
 * @file SplashScreen.jsx
 * @module SplashScreen
 * @desc Displays a loading state with a logo while the site content is being loaded, or an error message.
 *
 * @author Chace Nielson
 * @created Mar 15, 2025
 * @updated Mar 16, 2025 by Chace Nielson
 */

import React from 'react';
import splash from '../../assets/site-logos/splash.png';
import { FiAlertCircle } from "react-icons/fi"; // Import error icon from react-icons


export default function SplashScreen({ errorMsg = false, errorText=null, errorLocation=null }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <img src={splash} alt="Site Logo" className="mb-4 w-32 h-32 animate-spin-slow" />

        {/* Loading Text or Error Message */}
        <div className="text-xl text-gray-600 text-center">
          {errorMsg ? (
            <div className="flex flex-col items-center ">
              <FiAlertCircle className="w-12 h-12 mb-2" /> {/* Error Icon */}
              <span className='text-gray-600'>{errorText}</span>
              {errorLocation && <span className="text-sm text-gray-200 mt-2">📍 {errorLocation}</span>}
            </div>
          ) : (
            // Loading text with pulsing dots
            <> Loading <span className="dots"></span></>
          )}
        </div>
      </div>
    </div>
  );
}
