import React from "react";
import './outro.css'
import { Link } from "react-router-dom";



const Outro = ({title, content, button}) => {


    return (
        <div className="outro-container">

            <div className="outro-text-box">


            <h2 className="title-text"
            style={{
                padding:'0 '
            }}>
                Transform Your Vision Today
                </h2>
            <p className='description-text content2-text'>
Websites are becoming more and more important everyday. With so many of websites out there you need one that stands out to
attraction attention but simple enough for a effortless user experience.
</p>
<br/><br/>
<p className='description-text content2-text'>
A great website can be the difference between your business thriving and
having no one take you seriously. Would you trust someone with a non professional website or who doesn't even have one?
Q3 Creations will take care of all these problems for you and deliver a 
fantastic website to turn your vision into reality.

</p>

<div className="calendly-container">

{/* {button &&  */}
    <Link to='booking'>
        <button className="button">
            Transform Your Vision Today
        </button>
    </Link>
{/* } */}


</div>




            </div>
        </div>
    )
} 

export default Outro