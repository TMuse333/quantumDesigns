import React from "react";
import { about1,about2,aboutOutro } from "../componentData/data";
import Outro from "./outro";
import Content from "./content";
import Navbar from "./navbar";
import '../styles/overview.css'
import Footer from "./footer";



const Overview = () => {


    return (
        <div>
<Navbar/>

        <div className="overview-container">
<Outro {...aboutOutro} />
<Content {...about1}/>

<Content {...about2} />
        </div>

        <Footer/>
        </div>
    )


    
}


export default Overview