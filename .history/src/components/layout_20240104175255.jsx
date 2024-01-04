import React from "react";

import '../app.css'

import WorkCarousel from "./work";
import Testimonials from "./testimonials";
import Outro from "./outro";
import Footer from "./footer";
import Navbar from "./navbar";
import Sphere from "./sphere";
import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";
import Content from "./content";
import Herobanner2 from "./herobanner2";
import ServiceOffering from "./serviceOffering";



const Layout = () => {


    return (
        <div className="layout">
       <Navbar/>    
 <Herobanner2/>
 {/* <Sphere 

  /> */}
  <Content {...content1} />
  <Content {...content2}/>


 <WorkCarousel/>
 <Testimonials/>


 <Outro
 title='transform your vision today'
 content={content1.description}/>
 <Footer/>
 

        </div>
       
    )
}

export default Layout