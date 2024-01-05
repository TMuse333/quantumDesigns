import React, {useEffect,useRef,useState} from "react";
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
              };
          
              window.addEventListener('scroll', handleScroll);
          
              return () => {
                window.removeEventListener('scroll', handleScroll);
              };
            }, []);
        
            return (
                <div ref={servicesRef} className='company-services'>
        
        
                <div className="services-container">
                    <Navbar 
                    // links={links}
                    />


                    <div className="background-intro">

                  

                    <h1 className="title-text">
            React js development
        </h1>     
      
        
        
                      
                      
                        <div className="line">
        
                        </div>
                    </div>
        
            
        
                    <div className="company-services">
                        <h1 className="title-text">
                            Here key aspects to our work that help us stand out from the rest
                        </h1>
                        <Sphere
                    size={'200px'}/>
                        <p className="description-text">
                           
                        </p>
                        <div className="services-box">
          {companyServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.4 }} // Adjust the delay based on your preference
              className="service"
            >
              <h2 className="title-text">{service.name}</h2>
              <p className="description-text">{service.description}</p>
            </motion.div>
          ))}
        </div>
                    </div>
        
                   
        
        
        
        
        
                        
        
        
                    <div className="closing-container">
                            <p className="description-text level">
                                    Its time to level up
                                </p>
                                <h1 className="title-text outro">
                                     <span className='bold-700'>Elevate </span>Your Digital Presence <span className="bold-700">Today.</span>
                                </h1>
        
        
                               
                                <p className="description-text action">
                                    Take action now and <span className='bold-700'>level up</span> your business, <span className='bold-700'>
                                    win </span>  over your competition and <span className='bold-700'>
                                     achieve </span> your goals with Q3 Visuals.</p>
                                     <div className="alternative">
                                     <p className="description-text bold-700 ">
                                        ...Or do nothing
                                     </p>
                                     <p className="description-text">and not improve</p>
                                     </div>
                                    <div className="choice-button">
        
                                   
                                     <h3 className="description-text"><span className='bold-700'>
                                     The Choice Is Yours.  </span></h3>
                                     <Link to='/booking'>
                                     <button className="button">
                                        Level Up Today
                                     </button>
                                     </Link>
                                     </div>
                                   
                            </div>
        
                <div className="pillars">
        
                </div>
        
        <Footer
        // links={links}
        />
                </div>
                </div>
            )
        
        }
        
        
 



export default ServiceOverview