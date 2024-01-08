import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import '../styles/serviceOverview.css'
import { companyServices } from "../componentData/data";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom"
import Sphere from './sphere'

const ServiceOverview = () => {
  const servicesRef = useRef();
  const [isAnimated, setIsAnimated] = useState(false);
  const [showScrollDownAnimation, setShowScrollDownAnimation] = useState(true);

  useEffect(() => {
    // window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const servicesOffset = servicesRef.current.offsetTop + 600;

      if (scrollPosition > servicesOffset + 500) {
        setIsAnimated(true);
        setShowScrollDownAnimation(false);
      } else {
        setIsAnimated(false);
        setShowScrollDownAnimation(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={servicesRef} className=''>
      <div className="services-container">
        <Navbar />
        <div className="background-intro">
          <h1 className="title-text">React js development</h1>
          <p className="description-text">
            Q3 Visuals takes a unique and effective approach to web development.
            From the design aspect, we use React.js, a powerful software
            that can create fully and customizable and interactive designs
            to help you stand out from all the repetitive templates you see online and win!
          </p>
          <Sphere size={1} position={{ x: 0, y: 0, z: 0 }} color={0x0000ff} />
        </div>
        <div className="company-services">
          <h1 className="title-text">Here are key aspects of our work that help us stand out from the rest</h1>
          <p className="description-text"></p>
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={showScrollDownAnimation ? { opacity: 1, y: 10 } : { opacity: 0, y: -10 }}
            transition={{ duration: 1, repeat: showScrollDownAnimation ? Infinity : null, repeatType: 'mirror' }}
            className="scroll-down-animation"
          >
            &#8595; Scroll down &#8595;
          </motion.div>
          <div className="services-box">
            {companyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isAnimated ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.4 }}
                className="service"
              >
                <h2 className="title-text">{service.name}</h2>
                <p className="description-text">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

       
         
          

              <div className="details-boxes">

              

          <div className="details-box-1">

          <h2>Our approach</h2>
          <h1 className="title-text">
            All around web dev
            </h1>
            <div className="line">
              
              </div>
              <p className="description-text">
                In todays online 
                <br/><br/> Nam eu justo ac tortor vestibulum facilisis. Quisque nec diam vitae dui facilisis accumsan vel et massa.
                <br/><br/> Integer vulputate, arcu vel ultricies ullamcorper, sapien purus pharetra libero, non fermentum ligula tortor vel nisl. Proin nec justo et elit bibendum interdum non eget massa. Duis dapibus odio vitae semper lacinia. Fusce a ante sed arcu imperdiet interdum a in justo. Proin aliquet consectetur sapien vel vestibulum. Vivamus vel sagittis sapien. Nulla facilisi. Sed vel justo nec est rhoncus iaculis id vitae ex. Sed vel justo nec est rhoncus iaculis id vitae ex. Curabitur tincidunt congue lorem, eu fermentum eros facilisis ac.
                </p> 

                      </div>

          <div className="details-box-2">
                  <h2 className="title-text">
                    We work fast.
                  </h2>
                  <p className="description-text">
                  Brand growth requires focus, alignment, and a big emphasis on data.

                    Our data and analytics services reflect the most comprehensive strategies available to digital marketers today. This enables our agency partners to achieve the most meaningful results through their hard-earned marketing efforts.
                  </p>

                  <h2 className="title-text">
                    E-Commerce
                  </h2>
                
                    <p className="description-text">
                   We can build you a E commerece store stylishly
                   and quickly by designing the store with react js
                   then having shopify manage all the payment processing
                   and other store processes so we can get your product out
                   there quickly
                    </p>

                    <h2 className="title-text">
                          Wordpress
                    </h2>

                    <p className="description-text">
                    Wordpress is one of the most popular content
                    management systems online, we can manage the your
                    website for you
                    </p>
                </div>
               
              </div>

        <div className="closing-container">
          <p className="description-text level">
            It's time to level up
          </p>
          <h1 className="title-text outro">
            <span className='bold-700'>Elevate </span>Your Digital Presence <span className="bold-700">Today.</span>
          </h1>
          <p className="description-text action">
            Take action now and <span className='bold-700'>level up</span> your business, <span className='bold-700'>
            win </span> over your competition and <span className='bold-700'>
              achieve </span> your goals with Q3 Visuals.</p>
          <div className="alternative">
            <p className="description-text bold-700 ">
              ...Or do nothing
            </p>
            <p className="description-text">and not improve</p>
          </div>
          <div className="choice-button">
            <h3 className="description-text"><span className='bold-700'>
              The Choice Is Yours. </span></h3>
            <Link to='/booking'>
              <button className="button">
                Level Up Today
              </button>
            </Link>
          </div>
        </div>
       
        <Footer />
      </div>
    </div>
  );
};

export default ServiceOverview;
