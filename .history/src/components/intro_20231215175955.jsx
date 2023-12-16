import React, { useEffect, useRef, useState } from "react";
import Skills from "./tenets";
import "../styles/intro.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Intro = () => {
  const controls = useAnimation();
  // const [ref, inView] = useInView({ triggerOnce: true });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start({ opacity: 1, x: 0 });
  //   }
  // }, [controls, inView]);

  return (
    <div className="intro-container">
      <motion.h2
        className="title-text intro"
        // ref={ref}
        initial={{ opacity: 0, x: -100 }}
        // animate={controls}
      >
        Great <motion.span className="bold-700">Websites</motion.span> are{" "}
        <motion.span className="bold-700">Essential</motion.span>
      </motion.h2>

      <motion.p
        className="description-text"
        // ref={ref}
        initial={{ opacity: 0 }}
        animate={controls}
      >
        Having a <motion.span className="bold-700">strong</motion.span> online
        presence today is a{" "}
        <motion.span className="bold-700">non-negotiable</motion.span> if you
        want to be competitive and grow your brand. Here at Q3 Visuals we use
        creative designs and scientific methods to give you that competitive
        advantage you need to succeed.
      </motion.p>

      <h2 className="intro-end">
        Quantum Visuals will you turn your vision into digital reality.
      </h2>

      <button className="button">Transform your vision today</button>
    </div>
  );
};

export default Intro;
