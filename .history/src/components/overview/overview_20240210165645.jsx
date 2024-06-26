import React from "react";
import { about1,about2,aboutOutro,content3 } from "../../componentData/data";
import Outro from "../outro/outro";
import Content from "../content/content";
import Navbar from "../navbar/navbar";
import './overview.css'
import Footer from "../footer/footer";
import dunk from '../../images/best_dunk.mp4'



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
   Q3 Visuals is committed to creating the most appealing products they can and
   developing their creative abilities as much as they can, and helping others out while doing so!
   We believe in hard work everyday and always seeking for new skills and techniques
   to learn to make the best products and user experience we can.
   Although we are focused on visual communications,
   we are also interested in other forms of human communication like language to
   combine visuals and language together to create awesome websites.
   The posibilites for these forms of communication are endless and we want to explore them all.

        <br></br>
        
    </p>
</div>

<h1 className="title-text">
    About the creator
</h1>
<Content {...about1}
/>

<Content {...about2}
/>

<div className="image-text-box">

</div>

{/* <img className="overview-video"
src={dunk}/> */}

<Content {...content3}
/>



<h2 className="title-text">
    Hustlers dont stop they keep going!
</h2>
<Footer/>
        </div>

       
        </div>
    )


    
}


export default Overview