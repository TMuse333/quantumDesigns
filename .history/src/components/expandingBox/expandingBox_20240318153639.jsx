import React from "react";
import { motion } from "framer-motion";
import './expandingBox.css';

const ExpandingBox = ({text}) => {
    return (
        <motion.div
            className="expanding-box-container"
            initial={{ scaleX: 0 }} // Start as a very tiny box
            animate={{ scaleX: 1 }} // Expand to full width
            transition={{ duration: 3.5 }} // Adjust the duration as needed
        >
           <motion.p
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{
            delay:3.5
           }}>
            {text}
           </motion.p>
        </motion.div>
    );
};

export default ExpandingBox;
