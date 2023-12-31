import React from "react";
import Navbar from "./navbar";
import Footer from './footer'
import '../styles/services.css'
// import {companyStats} from '../componentData/data'
import {companyServices} from '../componentData/data'
import Content from "./content";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useEffect,useRef } from "react";





const Services = ({stats,services}) => {
    
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae, quis minus blanditiis, vel temporibus fugiat quos omnis porro dolor nostrum voluptatem animi debitis molestias laboriosam aliquid? Porro, sunt! Sapiente.'

    const links = [
        {
            dest:'/',
            name:'Home'
        },
        {
        dest:'/about-ceo',
        name :'About CEO'  
        },
      
        {
            dest:'/portfolio',
            name:'Our work'
        },
        
    ]


    const servicesRef = useRef();

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const servicesOffset = servicesRef.current.offsetTop;
  
        if (scrollPosition > servicesOffset) {
          // Trigger animation when services section is in view
          // You can set a state here to control the animation if needed
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
                   Take your brand to the next level with
                   Q3 Visuals
                </h1>
                <p className="description-text">
                Q3 Visuals specialzies in creating efficient and unique web designs to help grow your digital presence.
              
                </p>

                <p className="description-text">
                We leverage state of the art technologies like react js, a programming language to create websites, to 
                create visually appealing and functional designs you need to take your business to the
                next level
                </p>
                <div className="line">

                </div>
            </div>

    

            <div className="company-services">
                <h1 className="description-text">
                    Here key aspects to our work that help us stand out from the rest
                </h1>
                <p className="description-text">
                   
                </p>
                <div className="services-box">
  {companyServices.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }} // Adjust the delay based on your preference
      className="service"
    >
      <h2 className="title-text">{service.name}</h2>
      <p className="description-text">{service.description}</p>
    </motion.div>
  ))}
</div>
            </div>

            <div className="closing-container">
                    <p className="description-text ">
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

                           
                             <h3 className="description-text bold-700 choice">The Choice Is Yours.</h3>
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


export default Services

