import React, { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import '../styles/serviceOverview.css'
import { companyServices } from "../componentData/data";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom"
import Sphere from './sphere'
import {}
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
          <h1 className="title-text">Powerful, Customizable
          web dev</h1>
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
                In todays online atmoshpere there are different aspects
                to web dev and we have those aspects covered.
                We can integrate our react js front end development
                with the most popular technologies like wordpress 
                and shopify to ensure you are working with the industry
                standards while also standing out.
                <br/><br/>  For e-commerce solutions, we leverage Shopify to empower your online store. Our integration ensures a secure and scalable platform, enabling smooth transactions and a user-friendly shopping experience. From product listings to checkout processes, we optimize every step to maximize conversion rates and elevate your online business.
                <br/><br/>  We are also competent with WordPress — the industry's leading content management system. Seamlessly manage your website's content, blogs, and customization. With our expertise, your website becomes a dynamic storytelling platform that engages visitors and keeps them coming back for more.
                </p> 

                      </div>

          <div className="details-box-2">
                  <h2 className="title-text">
                    We work fast.
                  </h2>
                  <p className="description-text">
                 Speed is crucial in todays world, our processes
                 for web design have been cultivated over
                 countless hours of focused work.
                 When you hire us, we apply our razor
                 sharp focus to ensure your product
                 is delivered quickly with high quality.

                  </p>

                  <h2 className="title-text">
                    Think outside the box
                  </h2>
                
                    <p className="description-text">
                  With so much content already online, you need a way to stand
                  out. We have taken a lot of inspiration
                  from many popular things and along with a strong
                  art background, have combined all of them
                  together to make attention grabbing designs
                  to help you stand out.
                    </p>

                    <h2 className="title-text">
                         Plan it out
                    </h2>

                    <p className="description-text">
                      We make a plan, and execute it. Simple if you
                      want to learn more about our tenets of work,
                      click below
                      
                    </p>
                    <Link to='/tenets'>
                        <button className="button">
                          Our tenets of work
                        </button>
                      </Link>
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
