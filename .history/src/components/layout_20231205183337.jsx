import React from "react";
import About from './about'
import Herobanner from './Herobanner'
import '../app'


const Layout = () => {


    return (
        <div className="layout">
 <Herobanner/>
        <About/>
        </div>
       
    )
}

export default Layout