/**
 * @file main.jsx
 * @module main
 * @desc Main Entry Point for React Application, imports global styles and renders the App component.
 * 
 * @author Chace Nielson
 * @created March 23rd, 2025
 * @updated March 23rd, 2025
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import global styles from index and other style sheets
import './index.css'
import './styles/buttons.css';
import './styles/hex-badge.css';
import './styles/hex-separator.css';
import './styles/layout.css';
import './styles/nav.css';
import './styles/partnerBanner.css';
import './styles/splashScreen.css';

// Main App JSX component
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
