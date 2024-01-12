import React, {useEffect,useState} from "react";
import logo from '../images/q3-visuals-logo-2-no-bg.png'
import '../styles/infographic.css'
import Navbar from './navbar'
import Typed from 'typed.js';
import { Link } from "react-router-dom";
import Footer from "./footer";
import { motion } from "framer-motion";
import { designAdvantages } from "../componentData/data";
const Infographic = () => {

    const [isAnimated, setIsAnimated] = useState(false)

    useEffect(() => {
        
        // Your Typed.js initialization script
        var typed = new Typed('.future-text.info-header', {
          strings: ["Powerful and one of a kind websites"],
          typeSpeed: 35,
          backSpeed: 30,
          showCursor: false,
          cursorChar: '|',
          loop: false,
          onComplete: function (self) {
           setIsAnimated(true)
           console.log(isAnimated)
          }
        });
    
        // Cleanup the Typed instance when the component unmounts
        return () => {
          typed.destroy();
   
          
        };
      }, []); 

     console.log(isAnimated)

      const style = {
        opacity: isAnimated ? 1 : 0,
        transition: 'opacity 0.3s ease-in'
      }


      const imageAnimation = {
        hidden: {
          x: -200,
          rotateY: 100,
           // Adjust the rotation angle
          z: -1000, // Adjust the distance in the z-axis
          opacity: 0, // You can adjust the opacity if needed
        },
        visible: {
          x: 0,
          rotateY: 0,
         
          opacity: 1,
          transition: {
            duration: 0.5, // Adjust the duration as needed
          },
        },
      };

      const textAnimation = {
        hidden: {
            opacity:0
        },
        visible: {
            opacity:1,
            transition: {
                delay:0.5
            }
        }
      }

      const boxAnimation = {
        hidden: {
            opacity:0
        },
        visible: {
            opacity:1,
            transition: {
                delay:0.8
            }
        }
      }

    return (
        <div className="infographic-container">
            <Navbar/>

            <h1 className="future-text
            info-header">
                Powerful and one of
                a kind websites
                
            </h1>

            <p style={style}
            className="description-text after-intro"
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laborum expedita vero, enim error aut recusandae voluptate accusamus debitis provident aliquid porro praesentium doloremque possimus dicta corrupti, iste, repellendus saepe veniam harum quaerat. Eaque modi fuga et, facilis in nobis deleniti sed nam laudantium voluptates, est minima pariatur reprehenderit iusto.
            </p>

          <div className="info-image-box">
            <div className="info-image">


            <motion.img 
  variants={imageAnimation}
  initial="hidden"
  animate={isAnimated ? "visible" : "hidden"}
  src={logo}
  style={{
    width: '250px',
  }}
/>
                        </div>
                        <motion.div
                        variants={textAnimation}
                        initial="hidden"
  animate={isAnimated ? "visible" : "hidden"}
                         className="info-description"
                        >

  
             <p className="description-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Quo, incidunt. 
                 Reiciendis assumenda qui doloribus earum laborum iure aperiam, aut sapiente rem, iusto maxime, eum quam exercitationem aliquam nisi? Saepe facere est dolore, fugit beatae nihil eius? Nesciunt accusamus excepturi illo nemo, totam dolores repellendus, quaerat sunt itaque officia, impedit dolorem!
            </p>
            </motion.div>
          </div>
         
           
         

            <motion.div 
            variants={boxAnimation}
            initial="hidden"
animate={isAnimated ? "visible" : "hidden"}
            className="info-content">
            {[...Array(6)].map((_, index) => (
        <div key={index} className="content">
          <img src={logo} style={{ width: '100px' }} alt={`Logo ${index}`} />
          <p className="description-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             {/* Repudiandae, aut mollitia libero rem saepe eligendi. Dolorem ad reprehenderit vero aperiam! */}
          </p>
        </div>
      ))}

            </motion.div>

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
    )
}


export default Infographic