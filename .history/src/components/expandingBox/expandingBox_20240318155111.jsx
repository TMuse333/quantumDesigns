import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import the useInView hook
import './expandingBox.css';

const ExpandingBox = ({ text, id }) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5 // Adjust the threshold as needed
    });
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (inView) {
            setIsAnimating(true); // Start animation when the box is in view
            document.body.classList.add("overflow-hidden");
            // Disable scrolling
            console.log('stop scrollage')
        }
    }, [inView]);

    const handleAnimationComplete = () => {
        setIsAnimating(false); // Set animation state to false when animation is complete
        // document.body.style.overflowY = "auto"; // Restore scrolling

        document.body.classList.remove("overflow-hidden");
    };

    return (
        <motion.div
            className="expanding-box-container"
            ref={ref} // Attach the ref to the container div
            initial={{ scaleX: 0, opacity: 0 }} // Start as a very tiny box and hidden
            animate={inView ? { scaleX: 1, opacity: 1 } : {}} // Expand and fade in when animating
            transition={{ duration: 1 }} // Adjust the duration as needed
            onAnimationComplete={handleAnimationComplete} // Call function when animation is complete
        >
            <motion.h2 className="expanding-box-text"
                initial={{ opacity: 0 }} // Start with opacity 0
                animate={inView ? { opacity: 1 } : {}} // Fade in when animating
                transition={{ duration: 1, delay: 0.5 }} // Adjust duration and delay as needed
            >
                {text}
            </motion.h2>
        </motion.div>
    );
};

export default ExpandingBox;
