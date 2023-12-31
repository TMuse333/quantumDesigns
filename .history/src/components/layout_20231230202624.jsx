import React from "react";

import Herobanner from './Herobanner'
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



const Layout = () => {


    return (
        <div className="layout">
       <Navbar/>    
 <Herobanner2/>
 {/* <Sphere 

  /> */}
  <Content {...content1} />
  <Content {...content2}/>
 {/* <Intro/> */}
 {/* <Tenets/> */}

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