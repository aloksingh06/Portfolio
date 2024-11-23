import React, { useEffect, useState } from "react";

function Hover({ value }) {
  const [progressBar, setProgressBar] = useState(472); // Initial strokeDashoffset value
  const targetValue = 472 - (472 * value) / 100; // Target value based on the `value` prop

  const handleMouseEnter = () => {
    let currentValue = 472; // Start from the initial state
    const interval = setInterval(() => {
      if (currentValue > targetValue) {
        currentValue--; // Decrease strokeDashoffset
        setProgressBar(currentValue); // Update progressBar state
      } else {
        clearInterval(interval); // Stop animation
      }
    }, 1);
  };

  const handleMouseLeave = () => {
    setProgressBar(472); // Reset progress bar to initial state
  };

  return (
    <div
      className="relative w-48 h-48"
      onMouseEnter={handleMouseEnter} // Start animation on hover
      onMouseLeave={handleMouseLeave} // Reset on hover leave
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
            <stop offset="100%" stopColor="#673ab7" />
          </linearGradient>
        </defs>
        {/* Background Circle */}
        <circle
          cx="100"
          cy="98"
          r="83"
          fill="none"
          
          strokeWidth="23"
        />
        {/* Animated Progress Circle */}
        <circle
          cx="100"
          cy="98"
          r="83"
          fill="none"
          stroke="url(#GradientColor)"
          strokeWidth="23"
          strokeDasharray="472"
          strokeDashoffset={progressBar} // Use updated progressBar value
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.0s linear", // Smooth transition
          }}
        />
      </svg>
    </div>
  );
}

export default Hover;