import React, { useRef,useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import '../styles/intro.css'
import { Link } from "react-router-dom";
import network from '../images/network.jpg'

const Intro = () => {
  const controls = useAnimation();
  const elementRef = useRef(null);

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   const element = elementRef.current;

  //   if (element) {
  //     const { top, bottom } = element.getBoundingClientRect();
  //     const windowHeight = window.innerHeight;

  //     if (top < windowHeight * 0.75 && bottom > 0) {
  //       controls.start({ opacity: 1, x: 0 });
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Initial check

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [controls]);

  return (
    <div className="intro-container">
      <AnimatePresence>
        <motion.h2 className="title-text intro">
          Great <motion.span className="bold-700">Websites</motion.span> are{" "}
          <motion.span className="bold-700">Essential</motion.span>
        </motion.h2>
      </AnimatePresence>

      <div className="intro-description">
        
      </div>

<img src={network} style={{
  width:'300px'
}}/>
      <AnimatePresence>
        <motion.p
          className="description-text"
          // ref={elementRef}
          // initial={{ opacity: 0, x: -50 }}
          // animate={controls}
        >
          Having a <motion.span className="bold-700">strong</motion.span>{" "}
          online presence today is a{" "}
          <motion.span className="bold-700">non-negotiable</motion.span> if you
          want to be competitive and grow your brand. Here at Q3 Visuals we use
          creative designs and scientific methods to give you that competitive
          advantage you need to succeed.
        </motion.p>
      </AnimatePresence>

      <h2 className="intro-end">
        Quantum Visuals will you turn your vision into digital reality.
      </h2>

      <Link to='booking'>
      <button className="button">Transform your vision today</button>
      </Link>
    </div>
  );
};

export default Intro;
