import React from "react";
import { motion } from "framer-motion";
import './expandingBox.css';

const ExpandingBox = ({text,id}) => {
    return (
        <motion.div
            className="expanding-box-container"
            initial={{ scaleX: 0 }} // Start as a very tiny box
            animate={{ scaleX: 1 }} // Expand to full width
            transition={{ duration: 1 }} // Adjust the duration as needed
        >
           <motion.h2 className="expanding-box-text"
           initial={{opacity:0}}
           animate={{opacity:1}}
           transition={{
            delay:1
           }}>
            {text}
           </motion.h2>
        </motion.div>
    );
};

export default ExpandingBox;
