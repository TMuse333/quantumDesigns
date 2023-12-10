import React from "react";
import About from './about'
import Herobanner from './Herobanner'
import '../app.css'
import Intro from "./intro";
import Skills from "./skills";


const Layout = () => {


    return (
        <div className="layout">
 <Herobanner/>
 <Intro/>
 <Skills/>
        {/* <About/> */}
        </div>
       
    )
}

export default Layout