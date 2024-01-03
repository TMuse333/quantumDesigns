import React from "react";
import '../styles/outro.css'
import { Link } from "react-router-dom";



const Outro = ({title, content, button}) => {


    return (
        <div className="outro-container">

            <div className="outro-text-box">


            <h2 className="title-text">
                {title}
                </h2>
            <p className='description-text content2-text'>
Websites are becoming more and more important everyday. With so many of websites out there you need one that stands out to
attraction attention but simple enough for a effortless user experience.
</p>

<p className='description-text content2-text'>
A great website can be the difference between your business thriving and
having no one take you seriously. Would you trust someone with a non professional website or who doesn't even have one?
Q3 Visuals will take care of all these problems for you and deliver a 
fantastic website to ta

</p>

<div className="calendly-container">

{/* {button &&  */}
    <Link to='booking'>
        <button className="button">
            transform you vision today
        </button>
    </Link>
{/* } */}


</div>




            </div>
        </div>
    )
} 

export default Outro