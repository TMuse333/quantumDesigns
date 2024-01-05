import React, {useEffect,useRef,useState} from "react";
import '../styles/serviceOfferings.css'
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
const ServiceOffering = () => {

    const servicesRef = useRef();
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        
        window.scrollTo(0, 0);

      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight ;
        const servicesOffset = servicesRef.current.offsetTop + 600;
  
        if (scrollPosition > servicesOffset + 500) {
          // Trigger animation when services section is in view
          // You can set a state here to control the animation if needed
          setIsAnimated(true)
         
        }

        else{
            setIsAnimated(false)
           
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const liVariants = {
        hiddenLeft: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        hiddenRight: { x: 50, opacity: 0 },
      };


    return (

  <div ref={servicesRef}>

<h2 className="title-text">
  Swift, Customizable web
  dev
</h2>

    <div className="service-offering-container">

        <div className="offered-service first">
            <img src=''/>

            <h1 className="title-text">
                React web dev
            </h1>

            <p className="description-text">
                We create very customizable websites
                with react js as opposed to standard web templates.
                This means we can create exactly the vision you want
                for your website without any limitations with the following advantages
            </p>

            <motion.ul className="service-overview-list">
            <motion.li
              className="description-text"
              variants={liVariants}
              initial={isAnimated ? liVariants.hiddenLeft : "hiddenRight"}
              animate={isAnimated ? "visible" : "hiddenLeft"}
            >
              Stunning animations
            </motion.li>
            <motion.li
              className="description-text"
              variants={liVariants}
              initial={isAnimated ? "hiddenRight" : "hiddenLeft"}
              animate={isAnimated ? "visible" : "hiddenRight"}
            >
              Visually appealing layouts
            </motion.li>
            <motion.li
              className="description-text"
              variants={liVariants}
              initial={isAnimated ? "hiddenLeft" : "hiddenRight"}
              animate={isAnimated ? "visible" : "hiddenLeft"}
            >
              More functionality
            </motion.li>
            <motion.li
              className="description-text"
              variants={liVariants}
              initial={isAnimated ? "hiddenRight" : "hiddenLeft"}
              animate={isAnimated ? "visible" : "hiddenRight"}
            >
              Very scalable and efficient to maintain
            </motion.li>
            <motion.li
              className="description-text"
              variants={liVariants}
              initial={isAnimated ? "hiddenLeft" : "hiddenRight"}
              animate={isAnimated ? "visible" : "hiddenLeft"}
            >
              Optimized performance
            </motion.li>
          </motion.ul>
            <Link to='react'>
                <button className="button">
                    Learn more
                </button>
            </Link>
        </div>

        {/* <div className="offered-service second">
            <img src=''/>
            <h2 className="title-text">
                word press services
            </h2>
            <ul className="service-overview-list">
                <li>
                    Content Management system
                </li>
                <li>
                   SEO-friendly
                </li>
                <li>
                    Very user friendly
                </li>
                <li>
                   Lots of plugins
                </li>
            </ul>
        </div> */}
    </div>
    </div>
    )
}

export default ServiceOffering