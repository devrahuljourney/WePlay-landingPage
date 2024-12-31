import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

// Function to split the text into individual characters (letters)
const splitText = (text) => {
  return text.split("").map((char, index) => (
    <motion.span
      key={index}
      style={{ display: "inline-block", margin: "0 2px" }} // Ensure each letter is inline-block
    >
      {char}
    </motion.span>
  ));
};

const TextSpan = ({ children }) => {
  const controls = useAnimationControls();

  // Define the rubber band animation for each letter
  const rubberBand = (controls) => {
    controls.start({
      scale: [
        1, // Normal scale
        1.4, // Stretch horizontally
        0.75, // Compress vertically
        1.25, // Stretch horizontally again
        0.9, // Slight compression
        1, // Back to normal scale
      ],
      transition: {
        duration: 0.6, // Duration of the animation
        ease: "easeOut", // Smooth easing for the animation
      },
    });
  };

  return (
    <motion.span
      onMouseOver={() => {
        // Trigger animation for each letter when mouse hovers over
        rubberBand(controls);
      }}
      style={{ display: "inline-block" }} // Make sure it's inline-block for animation
    >
      {splitText(children)} {/* Split and render each letter as a separate motion element */}
    </motion.span>
  );
};

export default TextSpan;
