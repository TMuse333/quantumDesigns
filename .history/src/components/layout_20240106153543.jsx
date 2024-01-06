import React from "react";
import '../app.css';
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

import { Parallax,ParallaxLayer } from "@react-spring/parallax";

// <Sphere size={2} position={{ x: 0, y: 0, z: 0 }} color={0x0000ff} />


const Layout = () => {
    return (
        <div className="layout" id="layout">
            <Navbar />

            <Parallax pages={8}>
          
                <Herobanner2 />
    

           
               
   
           
            <Content {...content1} />



            <ServiceOffering />
           
                <Content {...content2} />

            <WorkCarousel />
            <Testimonials />
            <Outro title='transform your vision today' content={content1.description} />
            </Parallax>
            <Footer />
         
        </div>
    );
}

export default Layout;
