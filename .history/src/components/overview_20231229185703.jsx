import React from "react";
import { about1,about2 } from "../componentData/data";
import Outro from "./outro";
import Content from "./content";



const Overview = () => {


    return (
        <div className="overview-container">
<Outro/>
<Content {...about1}/>
<Content {...about2}
        </div>
    )


    
}