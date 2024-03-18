import React from "react";
import Content from "./content/content";
import Preview from "./preview/preview";
import Example from "./rotatingBox/rotatingBox";
ima


const Experiments = () => {


    return (
        <div className="experiments-container">
            <Preview/>
           <Content
           rotatingImage={true}
           />
        </div>

    )
}

export default Experiments