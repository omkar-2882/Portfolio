import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({text, cl}) => {
  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0, y: -30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.04 * i,
        // delay: 2,
      },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      overflow: "",
      transition: {
        type: "spring",
        damping: 7,
        stiffness: 100,
        duration: 5,
        // delay: 5,
        // repeat: Infinity,
        // repeatType: "mirror",
      },
    },
    hidden: {
      opacity: 1,
      x: 0,
      y: -40,
      transition: {
        type: "spring",
        // damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cl}
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      // animate="visible"
      whileInView={"visible"}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}
          whileHover={{scale:1.5}}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;