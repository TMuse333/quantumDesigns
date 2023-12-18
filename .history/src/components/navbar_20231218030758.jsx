import React, { useState,useEffect } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import q2 from '../images/q3-visuals-logo-2.svg'
import nobg from '../images/q3-visuals-logo-2-no-bg.png'



const Navbar = () => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true)

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

    height: subMenuVisible && isMobile? '170px' :!isMobile ? '0px' :'0px',
    overflow:  'hidden',
  // opacity: subMenuVisible || !isMobile ? 1 : 1,
    transition:'height 0.3s ease-in-out',
    backgroundColor: 'rgb(48, 46, 99)',
    marginLeft: 'auto',
    marginRight:'auto',
    borderRadius:'5px',
    textAlign:'left',
    paddingLeft:'10px',

    
   
  };

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
        // className='nav-button'
        className='mini-logo'
        
        >
          
       <img src={nobg} style={{
        width:'30px'
       }}/>
        </button>
        <ul 
        style={style}
         className='nav-list'
         >

          
          <Link to='/'> 
          <li >Home </li>
          </Link>
        <Link to='/booking'>
        <li >Work with us</li>
        </Link>
          
    

          <li >Tenets of Work</li>
          
        
          
          <li> About us</li>
       
        </ul>
      </div>
       </div>
  
  );
};

export default Navbar;