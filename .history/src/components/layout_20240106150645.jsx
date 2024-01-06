import React, {useEffect} from "react";

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
import { Body } from "cannon-es";



const Layout = () => {

    let meteorNum = 25;

    useEffect(() => {
        const layoutElement = document.querySelector('#layout');
        for (let i=1; i<= meteorNum; i++){
            layoutElement.innerHTML += `<div class=meteor-$[i]`
        }
        // Do something with layoutElement
      }, []);
    

    return (
        <div className="layout"
        id="layout">
       {/* <Navbar/>    
 <Herobanner2/>

 <Sphere size={2} position={{ x: 0, y: 0, z: 0 }} color={0x0000ff} />
  <Content {...content1} />

  <ServiceOffering/>

  <Content {...content2}/>


 <WorkCarousel/>
 <Testimonials/>


 <Outro
 title='transform your vision today'
 content={content1.description}/>
 <Footer/> */}
 

        </div>
       
    )
}

export default Layout