import React from "react";

import { Parallax,ParallaxLayer } from "@react-spring/parallax";



const parallaxLayout = () => {


    return (
        <div>
            <Parallax pages={4}>
            <ParallaxLayer>
                <h2 className="title=text"></h2>
            </ParallaxLayer>


            </Parallax>
        </div>
    )
}