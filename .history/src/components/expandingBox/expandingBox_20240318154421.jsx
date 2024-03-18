import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the useInView hook
import './expandingBox.css';

const ExpandingBox = ({ text, id }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5 // Adjust the threshold as needed
    });

    useEffect(() => {
        if (inView) {
            // Start animation when the box is in view
            // This can be any additional animation logic you want to trigger
        }
    }, [inView]);

    return (
        <motion.div
            className="expanding-box-container"
            ref={ref} // Attach the ref to the container div
            initial={{ scaleX: 0, opacity: 0 }} // Start as a very tiny box and hidden
            animate={inView ? { scaleX: 1, opacity: 1 } : {}} // Expand and fade in when in view
            transition={{ duration: 1 }} // Adjust the duration as needed
        >
            <motion.h2 className="expanding-box-text"
                initial={{ opacity: 0 }} // Start with opacity 0
                animate={inView ? { opacity: 1 } : {}} // Fade in when in view
                transition={{ duration: 1, delay: 0.5 }} // Adjust duration and delay as needed
            >
                {text}
            </motion.h2>
        </motion.div>
    );
};

export default ExpandingBox;
