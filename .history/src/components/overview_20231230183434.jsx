import React from "react";
import { about1,about2,aboutOutro } from "../componentData/data";
import Outro from "./outro";
import Content from "./content";
import Navbar from "./navbar";
import '../styles/overview.css'
import Footer from "./footer";
import dunk from '../images/cockback_dunk.jpeg'



const Overview = () => {


    return (
        <div>
<Navbar/>

        <div className="overview-container">


<Outro {...aboutOutro} />

<h1 className="title-text">
    About the creator
</h1>
<Content {...about1}/>

<Content {...about2} />

<img src={dunk}

<h2 className="title-text">
    Hustlers dont stop they keep going!
</h2>
<Footer/>
        </div>

       
        </div>
    )


    
}


export default Overview