import React from "react";
import { about1,about2,aboutOutro } from "../componentData/data";
import Outro from "./outro";
import Content from "./content";
import Navbar from "./navbar";
import '../styles/overview.css'



const Overview = () => {


    return (
        <div>


        <div className="overview-container">
<Outro {...aboutOutro} />
<Content {...about1}/>

<Content {...about2} />
        </div>
        </div>
    )


    
}


export default Overview