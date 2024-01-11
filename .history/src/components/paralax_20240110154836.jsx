import React from "react";
import { about1, } from "../componentData/data";
import { Parallax,ParallaxLayer } from "@react-spring/parallax";
import Content from "./content";
import Herobanner2 from "./herobanner2";
import quantum from '../images/quantum-realm.png'


import goku from '../images/goku-vs-jiren.jpg'
import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";
import Navbar from "./navbar";

import sand from '../images/sandy-bg.png'
import abu from '../images/aboubacar-6.jpg'

const ParallaxLayout = () => {


    return (
       <div className="parallax-container">
     <header>

     
        <img src={sand}
        className="background"
        style={{
            width:'100vw'
        }}/>

        <img src=''
        className="foreground"/>
        <h1 className="title-text">
            Q3 Visuals
        </h1>
</header>
<section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae recusandae incidunt repellat tenetur fugit cupiditate quidem aperiam sapiente numquam molestias quia accusantium, odio enim, reprehenderit ipsam corporis iusto error itaque ex nostrum expedita consequatur? A at iste aliquid! Atque, nesciunt aspernatur quisquam assumenda nulla fugit aperiam consequuntur dolores dolore, nihil eaque repellat minima nam similique cum qui est, accusantium voluptatum laboriosam ipsa ratione. Ad, facilis aliquam tempore blanditiis omnis voluptatem exercitationem inventore perferendis vero ipsam accusantium excepturi delectus repellat, eaque beatae totam placeat. Libero blanditiis enim non qui dolor! Accusantium officiis, ratione distinctio reiciendis earum quis corrupti totam odio.

</section>

        
       </div>
    )
}


export default ParallaxLayout