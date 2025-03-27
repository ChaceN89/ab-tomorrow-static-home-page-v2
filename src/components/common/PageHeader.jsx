/**
 * @file PageHeader.jsx
 * @module UI/PageHeader
 * @desc Reusable header component for pages. Displays a responsive layout with a logo and left-aligned title + subtitle.
 *
 * @props {string} title - Main heading text.
 * @props {string} subtitle - Optional subtitle or description text.
 *
 * @example
 * <PageHeader title="Contact Us" subtitle="Reach out with questions, feedback, or suggestions." />
 * 
 * @author Chace Nielson
 * @created Mar 27, 2025
 * @updated Mar 27, 2025
 */

import React from 'react';
import logo from '@/assets/site-logos/logo-lg.png';

export default function PageHeader({ title, subtitle }) {
  return (
    <div className="py-10 text-left max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        <img
          src={logo}
          alt="Alberta Tomorrow Logo"
          className="w-16 h-16 object-contain hidden sm:block"
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-secondary-alt">
          {title}
        </h1>
      </div>
      
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-muted opacity-80">{subtitle}</p>
      )}
    </div>
  );
}
