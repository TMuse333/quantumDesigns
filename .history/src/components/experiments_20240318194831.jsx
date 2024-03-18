import React from "react";
import Preview from "./preview/preview";
import Example from "./rotatingBox/rotatingBox";



const Experiments = () => {


    return (
        <div className="experiments-container">
            <Preview/>
            <Example
            image={q3}
        </div>

    )
}

export default Experiments