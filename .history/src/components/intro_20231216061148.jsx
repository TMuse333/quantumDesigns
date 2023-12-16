import React, {useEffect, useRef,lazy, Suspense} from "react";
import Skills from "./tenets";
import '../styles/intro.css'
import { motion, AnimatePresence, useAnimation } from "framer-motion";

const Intro = () => {




    return (
        <div className="intro-container">
         
         <AnimatePresence>
            <motion.h2 className="title-text intro"
           
            > Great <motion.span className="bold-700">Websites</motion.span> are <motion.span className="bold-700">Essential</motion.span>
            </motion.h2>

            </AnimatePresence>

        <AnimatePresence>

            <motion.p className="description-text"
             
            >
            Having a <motion.span className="bold-700">strong</motion.span> online presence today is a <motion.span className="bold-700">non negotiable</motion.span> if 
            you want to be competitive and grow your brand. Here at Q3 Visuals
            we use creative designs and scientific methods to give you that competitive
            advantage you need to succeed.
            </motion.p>
            </AnimatePresence>
          <h2 className="intro-end">
          Quantum Visuals will you turn your
            vision into digital reality.
          </h2>
           
           
            <button className="button">Transform your vision today</button>




        </div>
    )
}

export default Intro