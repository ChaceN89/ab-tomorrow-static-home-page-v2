/**
 * @file PageTitle.jsx
 * @module UI/PageTitle
 * @desc Dynamically updates the document title tag.
 *       Replaces "Home - Alberta Tomorrow" with "Blank - Alberta Tomorrow"
 *       or sets a custom page title if provided.
 *
 * @props {string} [title] - Optional custom title override.
 *
 * @example
 * <DocumentTitle /> // Replaces "Home" with "Blank"
 * <DocumentTitle title="Contact - Alberta Tomorrow" /> // Sets custom title
 * 
 * @author Chace Nielson
 * @created Mar 27, 2025
 */

import { useEffect } from 'react';

export default function PageTitle({ title, }) {
  useEffect(() => {
    
    document.title = title + " - Alberta Tomorrow";

  }, [title]);

  return null;
}
