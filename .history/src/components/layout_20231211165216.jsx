import React from "react";
import About from './about'
import Herobanner from './Herobanner'
import '../app.css'
import Intro from "./intro";
import Tenets from "./tenets";
import WorkCarousel from "./work";
import Testimonials from "./testimonials";
import Outro from "./outro";



const Layout = () => {


    return (
        <div className="layout">
 <Herobanner/>
 <Intro/>
 <Tenets/>
 <WorkCarousel/>
 <Testimonials/>
 <Outro/>
 

        </div>
       
    )
}

export default Layout