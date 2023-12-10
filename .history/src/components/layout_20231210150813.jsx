import React from "react";
import About from './about'
import Herobanner from './Herobanner'
import '../app.css'
import Intro from "./intro";
import Skills from "./skills";
import WorkCarousel from "./work";



const Layout = () => {


    return (
        <div className="layout">
 <Herobanner/>
 <Intro/>
 <Skills/>
 <WorkCarousel/>
 <
 {/* <Skills/> */}
        {/* <About/> */}
        </div>
       
    )
}

export default Layout