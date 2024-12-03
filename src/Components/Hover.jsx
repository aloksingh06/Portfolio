import { motion, animate } from "framer-motion";
import React, { useState } from "react";

function Hover({ value }) {
  const [progressBar, setProgressBar] = useState(472); // Initial strokeDashoffset value

  const targetValue = 472 - (472 * value) / 100; // Target value based on the `value` prop

  const handleMouseEnter = () => {
    // Smooth animation using Framer Motion's animate utility
    animate(progressBar, targetValue, {
      duration: 0.3, // Animation duration
      ease: [0.6, 0.0, 0.7, 1], // Smooth easing
      onUpdate: (v) => setProgressBar(v), // Update progressBar state dynamically
    });
  };

  const handleMouseLeave = () => {
    // Reset the progress bar smoothly
    animate(progressBar, 472, {
      duration: 0.1,
      ease: [0.6, 0.0, 0.7, 1],
      onUpdate: (v) => setProgressBar(v),
    });
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0.8 }}
      whileHover={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.6, 0.0, 0.7, 1] }}
      className="relative w-48 h-48"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192px"
        height="192px"
        className="absolute top-0 left-0"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#60a5fb" />
            <stop offset="100%" stopColor="#a480cf" />
          </linearGradient>
        </defs>
        {/* Background Circle */}
        <motion.circle
          initial={{ opacity: 0.2 }}
          whileHover={{ opacity: 0.4 }}
          transition={{ duration: 0.7, ease: [0.6, 0.0, 0.7, 1] }}
          cx="100"
          cy="98"
          r="87"
          fill=""
          stroke="#e2e8f0"
          strokeWidth="0"
        />
        {/* Animated Progress Circle */}
        <motion.circle
          cx="100"
          cy="100"
          r="78"
          fill="none"
          stroke="url(#GradientColor)"
          strokeWidth="20"
          strokeDasharray="472"
          strokeDashoffset={progressBar}
          strokeLinecap="round"
          initial={{ strokeDashoffset: 472 }}
          animate={{ strokeDashoffset: progressBar }}
          transition={{ duration: 0.5, ease: [0.6, 0.0, 0.7, 1] }}
        />
      </svg>
    </motion.div>
  );
}

export default Hover;
