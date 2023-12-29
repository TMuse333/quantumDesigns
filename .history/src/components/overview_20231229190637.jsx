import React from "react";
import { about1,about2,aboutOutro } from "../componentData/data";
import Outro from "./outro";
import Content from "./content";



const Overview = () => {


    return (
        <div className="overview-container">
<Outro {...aboutOutro}/>
<Content {...about1}/>
<Content {...about2} />
        </div>
    )


    
}


export default Overview