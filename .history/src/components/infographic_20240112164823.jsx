import React, { useEffect, useState } from "react";
import logo from '../images/q3-visuals-logo-2-no-bg.png';
import '../styles/infographic.css';
import Navbar from './navbar';
import Typed from 'typed.js';
import { Link } from "react-router-dom";
import Footer from "./footer";
import { motion,AnimatePresence } from "framer-motion";
import { designAdvantages, performanceAdvantages } from "../componentData/data";
import abu from '../images/aboubacar-5-fire.png';

const Infographic = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [expandedIndices, setExpandedIndices] = useState([]);
    const [activeDesignAdvantages, setActiveDesignAdvantages] = useState(true);
  
    const handleContentClick = (index) => {
      setExpandedIndices((prevIndices) =>
        prevIndices.includes(index)
          ? prevIndices.filter((i) => i !== index)
          : [...prevIndices, index]
      );
    };
  
    useEffect(() => {
      var typed = new Typed('.future-text.info-header', {
        strings: ["Powerful and one of a kind websites"],
        typeSpeed: 35,
        backSpeed: 30,
        showCursor: false,
        cursorChar: '|',
        loop: false,
        onComplete: function (self) {
          setIsAnimated(true);
        }
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  
    const style = {
      opacity: isAnimated ? 1 : 0,
      transition: 'opacity 0.3s ease-in'
    };
  
    const imageAnimation = {
      hidden: {
        x:,
        rotateY: 100,
        z: -1000,
        opacity: 0,
      },
      visible: {
        x: 0,
        rotateY: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      },
    };
  
    const textAnimation = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.5
        }
      }
    };
  
    const boxAnimation = {
      hidden: {
        opacity: 0
      },
      visible: {
        opacity: 1,
        transition: {
          delay: 0.8
        }
      }
    };
  
    const contentStyle = (index) => {
      return {
        height: expandedIndices.includes(index) ? '450px' : '230px',
        transition: 'all 0.3s ease-in',
        overflow: 'scroll'
      };
    };
  
    const handleToggle = () => {
      setExpandedIndices([]); // Reset expanded indices when toggling
      setActiveDesignAdvantages((prev) => !prev);
    };
  
    return (
      <div className="infographic-container">
        <Navbar />
  
        <div className="infographic-intro">
          <h1 className="future-text info-header">
            Powerful and one of a kind websites
          </h1>
  
          <p style={style} className="description-text afer-intro">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laborum expedita vero, enim error aut recusandae voluptate accusamus debitis provident aliquid porro praesentium doloremque possimus dicta corrupti, iste, repellendus saepe veniam harum quaerat. Eaque modi fuga et, facilis in nobis deleniti sed nam laudantium voluptates, est minima pariatur reprehenderit iusto.
          </p>
  
          <div className="advantage-selector">
            <button className={`button ${activeDesignAdvantages ? 'active' : ''}`} onClick={() => setActiveDesignAdvantages(true)}>
              Design
            </button>
            <button className={`button ${!activeDesignAdvantages ? 'active' : ''}`} onClick={() => setActiveDesignAdvantages(false)}>
              Performance
            </button>
          </div>
        </div>
  
        <div className="info-image-box">
          <div className="info-image">
            



            <motion.img
            key={activeDesignAdvantages ? 'designs' : 'performance'}
              variants={imageAnimation}
              initial="hidden"
              animate={isAnimated ? "visible" : "hidden"}
              exit={{
                opacity:0,
                transition:{
                    delay:0.5
                }
              }}
              src={activeDesignAdvantages ? designAdvantages.image : performanceAdvantages.image}
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
            <p className="description-text">{activeDesignAdvantages ? designAdvantages.description : performanceAdvantages.description}</p>
          </motion.div>
        </div>
  
        <motion.div
          variants={boxAnimation}
          initial="hidden"
          animate={isAnimated ? "visible" : "hidden"}
          className="info-content"
        >
          {activeDesignAdvantages
            ? designAdvantages.points.map((design, index) => (
              <div
                key={index}
                style={contentStyle(index)}
                className={`content ${expandedIndices.includes(index) ? 'expanded' : ''}`}
                onClick={() => handleContentClick(index)}
              >
                <img src={logo} style={{ width: '100px' }} alt={`Logo ${index}`} />
                <h3>{design.name}</h3>
                {expandedIndices.includes(index) && <p className="description-text">{design.description}</p>}
              </div>
            ))
            : performanceAdvantages.points.map((performance, index) => (
              <div
                key={index}
                style={contentStyle(index)}
                className={`content ${expandedIndices.includes(index) ? 'expanded' : ''}`}
                onClick={() => handleContentClick(index)}
              >
                <img src={logo} style={{ width: '100px' }} alt={`Logo ${index}`} />
                <h3>{performance.name}</h3>
                {expandedIndices.includes(index) && <p className="description-text">{performance.description}</p>}
              </div>
            ))}
        </motion.div>
  
        <div className="closing-container">
          <p className="description-text level">It's time to level up</p>
          <h1 className="title-text outro">
            <span className='bold-700'>Elevate </span>Your Digital Presence <span className="bold-700">Today.</span>
          </h1>
          <p className="description-text action">
            Take action now and <span className='bold-700'>level up</span> your business, <span className='bold-700'>
              win </span> over your competition and <span className='bold-700'>
                achieve </span> your goals with Q3 Visuals.
          </p>
          <div className="alternative">
            <p className="description-text bold-700 ">...Or do nothing</p>
            <p className="description-text">and not improve</p>
          </div>
          <div className="choice-button">
            <h3 className="description-text"><span className='bold-700'>The Choice Is Yours. </span></h3>
            <Link to='/booking'>
              <button className="button">Level Up Today</button>
            </Link>
          </div>
        </div>
  
        <Footer />
      </div>
    );
  };
  
  export default Infographic;
