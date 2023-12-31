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
<h1 className="title-text"

<Outro {...aboutOutro} />
<Content {...about1}/>

<Content {...about2} />
<h2 className="title-text">
    Hustlers dont stop they keep going!
</h2>
<Footer/>
        </div>

       
        </div>
    )


    
}


export default Overview