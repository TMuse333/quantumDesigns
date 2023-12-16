import React, {useEffect, useRef} from "react";
import Skills from "./tenets";
import '../styles/intro.css'
import { motion, AnimatePresence, useAnimation } from "framer-motion";


const Intro = () => {

{/* <p>Welcome to Quantum Visual Designs</p>
<h2>Crafting Disciplined Excellence for Your Website</h2>
<p>Experience the synergy of expertise and creativity as we meticulously transform your vision into a distinct digital reality. Your disciplined excellence, our design.</p> */}

const controls = useAnimation()
const elementRef = useRef(null)


useEffect (() => {
  const element = elementRef.current

  if(element ){
    
  }
})

    return (
        <div className="intro-container">
         
         <AnimatePresence>
            <motion.h2 className="title-text intro"
            initial={{ opacity: 0, x:-100 }}
            animate={{ opacity: 1,  x:0, transition: {delay: 0.7,duration:0.5}  }}
            exit={{ opacity: 1 }}
            > Great <motion.span className="bold-700">Websites</motion.span> are <motion.span className="bold-700">Essential</motion.span>
            </motion.h2>

            </AnimatePresence>

        <AnimatePresence>

            <motion.p className="description-text"
              initial={{ opacity: 0,  }}
              animate={{ opacity: 1, scale:1, transition: { delay: 1.4, duration:0.5 }}}
                exit={{ opacity: 0 }} 
            
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