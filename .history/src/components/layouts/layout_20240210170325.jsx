import React, { useEffect,useRef } from "react";
import '../../app.css';
import WorkCarousel from "../work/work";
import Testimonials from "../testimonials/testimonials";
import Outro from "../outro/outro";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

import { about2, content1 } from "../../componentData/data";
import { content2 } from "../../componentData/data";
import Content from "../content/content";
import Herobanner2 from "../herobanner2/herobanner2";
import ServiceOffering from "./serviceOffering";
import Hero3 from "./herobanner3";
import { useState } from "react";
import ParticlesComponent from "./particles";
import q3 from '../images/q3-visuals-logo-2-no-bg.png'

const Layout = () => {

    const [content1Animated, setContent1Animated] = useState(false)
    const [content2Animated, setContent2Animated] = useState(false)
    

const layoutRef = useRef()



const [scrollY, setScrollY] = useState(0);



    return (
   
        <>

<ParticlesComponent/>
 
        <div className="layout" id="layout"
        >
            <Navbar />
            <Hero3 
            />
            <Content  
          
    
  
           id='about1'
            hasTilt={true}
            hasAnimation={true}
            {...content1}
            image={content1.img}
             />
            <ServiceOffering />
            <Content 
        {...content2}
        image={content2.img}
          hasTilt={true}
          hasAnimation={true}
             />
            <WorkCarousel />
            <Testimonials />
            <Outro title='transform your vision today' content={content1.description} />
            <Footer />
        </div>
        
</>
       
    );
}

export default Layout;
