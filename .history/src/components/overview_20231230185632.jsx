import React from "react";
import { about1,about2,aboutOutro } from "../componentData/data";
import Outro from "./outro";
import Content from "./content";
import Navbar from "./navbar";
import '../styles/overview.css'
import Footer from "./footer";
import dunk from '../images/best_dunk.mp4'



const Overview = () => {


    return (
        <div>
<Navbar/>

        <div className="overview-container">


<div className="overview-header">
    <h1 className="title-text">
        We are Q3 Visuals
    </h1>
    <p className="description-text">
        We are commited to creating greatness
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora fuga repudiandae perferendis beatae. Obcaecati iste magni iure repellat dolore ad voluptatem ex debitis cum, optio, nemo totam qui, earum vero!
        <br></br>
    </p>
</div>

<h1 className="title-text">
    About the creator
</h1>
<Content {...about1}/>

<Content {...about2} />

<img className="overview-video"
src={dunk}/>

<h2 className="title-text">
    Hustlers dont stop they keep going!
</h2>
<Footer/>
        </div>

       
        </div>
    )


    
}


export default Overview