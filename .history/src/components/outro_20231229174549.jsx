import React from "react";
import '../styles/outro.css'
import { Link } from "react-router-dom";



const Outro = ({title, content, button}) => {


    return (
        <div className="outro-container">

            <div className="outro-text-box">


            <h2 className="title-text">{title}</h2>
            <p className='description-text content2-text'>
 {content}

</p>

<div className="calendly-container">

{button && 
    <Link to='booking'>
        <button className="button"
    </Link>
}


</div>




            </div>
        </div>
    )
} 

export default Outro