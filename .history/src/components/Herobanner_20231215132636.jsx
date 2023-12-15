import React from "react";
import logo from '../images/quantum nation.jpeg'
import '../styles/herobanner.css'
import { motion, AnimatePresence } from "framer-motion";
import q3 from '../images/q3-visuals-logo.svg'
import q2 from '../images/q3-visuals-logo-2.svg'

const Herobanner = () => {

// "Visual Excellence, Quantum Innovation.
//In Quantum We Design, In Visuals We Thrive.
//Transforming Ideas into Quantum Realities
//Empowering Brands through Quantum Visuals.

    return (
        <div className="herobanner-container">
            <AnimatePresence mode='wait'>

         
            <motion.img className="herobanner-logo"
            src={q2}
            style={{
            width:'250px'}}
            initial={{ opacity: 1, scale:0, y:-100 }}
            animate={{ opacity: 1, scale:1, y:0, transition: {delay: 0.2,duration:0.5}  }}
              exit={{ opacity: 0 }}       
                           />
         </AnimatePresence>
         <AnimatePresence>
         <motion.h1
         initial={{ opacity: 0, x:-250 }}
         animate={{ opacity: 1, scale:1, x:0, transition: { delay: 0.4, duration:0.5 }}}
           exit={{ opacity: 0 }} 
           >Q3 Visuals</motion.h1>
         </AnimatePresence>
         
           <AnimatePresence>
            
           <motion.p className="description-text"
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, scale:1, transition: { delay: 1 ,
            duration:0.8} }}
              exit={{ opacity: 0 }} 
           >Unleashing Creativity with Scientific Precision.</motion.p>
           </AnimatePresence>
         
   
            
        </div>
    )

   
}

export default Herobanner