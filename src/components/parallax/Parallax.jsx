import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedTextCharacter from "../hero/AnimatedTextCharacter";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.1 start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yPt = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      // style={{
      //   background:
      //     type === "services"
      //       ? "linear-gradient(180deg, #111132, #0c0c1d)"
      //       : "linear-gradient(180deg, #111132, #505064)",
      // }}
    >
      <motion.h1 style={{ y: yText }}>
        {/* {type === "services" ? "Projects Section" : "What We Did?"} */}
        <AnimatedTextCharacter text="Projects" cl=""/>
      </motion.h1>
      <motion.div 
      style={{ y: yBg }} 
      className="mountains"></motion.div>
      {/* <motion.div
        className="planets"
        style={{
          y: yPt,
          backgroundImage: `url("/stars.png")`,
        }}
      ></motion.div> */}
      <motion.div
        className="planets"
        style={{
          y: yPt,
          // backgroundImage: `url("/planets.png")`,
        }}
      >
        <img src="/full-moon.png" alt="" />
      </motion.div>
      <motion.div 
      // style={{ x: yBg }} 
      className="mountain"></motion.div>
    </div>
  );
};

export default Parallax;
