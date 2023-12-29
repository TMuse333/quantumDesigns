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
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aliquid ea quam maxime placeat soluta laborum voluptatum perspiciatis voluptates dolores! Reprehenderit labore numquam quasi quisquam placeat, error consequatur maiores quam.<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aliquam quasi voluptatum suscipit! In, excepturi labore. Iusto, vero ad, assumenda facilis voluptatibus blanditiis tempora magnam similique at officia minima rem.<br/><br/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere sed sit quo obcaecati porro. Aperiam beatae, autem asperiores neque vitae quasi facilis molestias quod unde aut et a vero?
</p>

<div className="calendly-container">

{button && 
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