import React, { useEffect,useRef } from "react";
import '../app.css';
import WorkCarousel from "./work";
import Testimonials from "./testimonials";
import Outro from "./outro";
import Footer from "./footer";
import Navbar from "./navbar";

import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";
import Content from "./content";
import Herobanner2 from "./herobanner2";
import ServiceOffering from "./serviceOffering";
import Hero3 from "./herobanner3";
import { useState } from "react";
import ParticlesComponent from "./particles";

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
            <Hero3 image={content1.img}
            />
            <Content    id='abou1'
            hasTilt={true}
            hasAnimation={true}
             />
            <ServiceOffering />
            <Content 
          id='about2'
          hasTilt={true}
          hasAnimation={true}
             />
            {/* <WorkCarousel /> */}
            {/* <Testimonials /> */}
            <Outro title='transform your vision today' content={content1.description} />
            <Footer />
        </div>
        
</>
       
    );
}

export default Layout;
