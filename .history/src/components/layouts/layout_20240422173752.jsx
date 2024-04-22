import React, { useEffect,useRef } from "react";
import '../../App.css';
import WorkCarousel from "../work/work";
import Testimonials from "../testimonials/testimonials";
import Outro from "../outro/outro";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

import { content1 } from "../../componentData/data";

import Content from "../content/content";

import ServiceOffering from "../serviceOffering/serviceOffering";
import Hero3 from "../herobanner3/herobanner3";
import { useState } from "react";
import ParticlesComponent from "../particles/particles";

import q3 from '../../images/q3-visuals-logo-2-no-bg.png'
import striker from '../../images/quantum-striker-pose.png'
import ExpandingBox from "../expandingBox/expandingBox";
import Example from "../rotatingBox/rotatingBox";
import AuroraHero from "../auroraHero/auroraHero";
import MountainParallax from "../mountainParallax/mountainParallax";
import ai from '../../images/q3-imac.jpg'
import FullScreenSlide from "../fullScreenSlide/fullScreenSlide";
import { TextParallaxContentExample } from "../parallaxText/parallaxText";
const Layout = () => {


const links = [
    {
        dest:'why-us',
        name:'Why Q3',

  
    },
    {
        dest:'booking',
        name:'Contact'
    },
    {
        dest:'about',
        name:'About Us'
    },
    {
        dest:'https://ab7882-2.myshopify.com',
        name:'Shop'
    }
]


    return (
   
        <>

<ParticlesComponent/>
 
        <div className="layout" id="layout"
        >
            <Navbar 
            links={links}/>
            {/* <Hero3 
            /> */}

            <MountainParallax/>


          
            <Content
            id='content1'
            {...content1}
            rotatingImage={true}
            image={ai}
            imageId='striker'
            />

            <TextParallaxContentExample/>


<FullScreenSlide
            image={ai}
            id='ai-slide'
            />

            {/* <Content  
          
    
  
           id='about1'
            hasTilt={true}
            hasAnimation={true}
            {...content1}
            image={striker}
            imageId='striker'
             /> */}
            <ServiceOffering />
            {/* <Content 
        {...content2}
        image={content2.img}
          hasTilt={true}
          hasAnimation={true}
             /> */}
                   <ExpandingBox
      text={'Creating Digital Excellence'}
      id='expanding-work-box'
      />
            <WorkCarousel />
            <Testimonials />
            <AuroraHero/>
            {/* <Outro title='transform your vision today' content={content1.description} /> */}
            <Footer links={links}/>
        </div>
        
</>
       
    );
}

export default Layout;
