import React, { useState,useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import q2 from '../images/q3-visuals-logo-2.svg'
import nobg from '../images/q3-visuals-logo-2-no-bg.png'



const Navbar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true)
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const toggleSubMenu = () => {
    console.log("clicked")
    setSubMenuVisible(!subMenuVisible);
  };

  const scrollToSection = (sectionId) => {

    const element = document.getElementById(sectionId);
    if (element) {
    
      element.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',    // Scroll to the top of the element
      });
    }
  }

  useEffect(() => {
    // Function to update sub-menu visibility when the screen width changes
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(!(screenWidth >= 415)); // Set subMenuVisible to true if screen width is at least 415 pixels
    };

    // Add a resize event listener to update the sub-menu visibility
    window.addEventListener('resize', handleResize);

    // Initial call to set sub-menu visibility based on current screen width
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const style = {
height:isMobile && !subMenuVisible ? '0px' : '0px',
overflowY:'hidden',
transition:'height 0.3s ease-in'
  
 
  };

  const logoStyle = {
    transform: hovered || subMenuVisible? 'scale(1.4)' : 'scale(1)',
    width:'30px',
    transition:'all ease-in 0.3s',
    backgroundColor:'transparent'
  }

  return (

    <div className='navbar-container'>

    <div className='navbar-logo'>
      <Link to='/'>
        <p className='navbar-logo'
      >Q3 Visuals</p>
      </Link>
      </div>
      
    
      <div className='list-container'>
        <button onClick={toggleSubMenu} 
        
        className='mini-logo'
        
        >
          
       <img src={nobg} style={logoStyle}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      
       />
        </button>
        <ul 
        // style={isMobile ? style :null}
        //  className={isMobile?null:'nav-list'}
         style={isMobile ? style : null}
         >

          
          <Link to='/'> 
          <li >Home </li>
          </Link>
        <Link to='/booking'>
        <li >Contact</li>
        </Link>
          
    
        <Link to='/process'>
        <li >Tenets</li>
        </Link>
         
          
        
          <Link to='/about'>
          <li> About us</li>
          </Link>
          
       
        </ul>
      </div>
       </div>
  
  );
};

export default Navbar;