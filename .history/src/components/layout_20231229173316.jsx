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
import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";
import Content from "./content";



const Layout = () => {


    return (
        <div className="layout">
       <Navbar/>    
 <Herobanner/>
 {/* <Sphere 

  /> */}
  <Content {...content1} />
  <Content {...content2}/>
 {/* <Intro/> */}
 {/* <Tenets/> */}

 <WorkCarousel/>
 <Testimonials/>


 <Outro/>
 <Footer/>
 

        </div>
       
    )
}

export default Layout