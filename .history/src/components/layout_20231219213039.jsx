import React from "react";

import Herobanner from './Herobanner'
import '../app.css'
import Intro from "./intro";
import Tenets from "./tenets";
import WorkCarousel from "./work";
import Testimonials from "./testimonials";
import Outro from "./outro";
import Footer from "./footer";
import Navbar from "./navbar";
import Sphere from "./sphere";



const Layout = () => {


    return (
        <div className="layout">
       <Navbar/>    
 <Herobanner/>
 <Sphere 
//  containerId='three-container'
//   sphereColor={0x00ff00} auraColor={0x00ff00} 
//   ringColor={0xffffff} 
  />
 {/* <Intro/>
 <Tenets/>
 <WorkCarousel/>
 <Testimonials/>
 <Outro/>
 <Footer/> */}
 

        </div>
       
    )
}

export default Layout