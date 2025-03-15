/**
 * @file ScrollProgress.tsx
 * @module ScrollProgress
 * @desc A Framer Motion-based progress bar that tracks the scroll progress of the main content.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const scrollRef = useRef(null);

  // Track the scroll progress of the main content area
  const { scrollYProgress } = useScroll({
    container: scrollRef, // Tracks scrolling inside the main content
  });

  // Smooth animation for the scroll progress bar
  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    mass: 1,
  });

  return (
    <>
      {/* Custom Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX: springScrollYProgress }}
      />

      {/* Return the scroll reference for the parent */}
      <div ref={scrollRef} className="overflow-y-auto h-full">
        {/* Content inside this div will trigger the progress bar */}
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
      </div>
    </>
  );
}
