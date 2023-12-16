import React from "react";
import '../styles/process.css'
import { tenets } from "./skillDesc";


const Process = () => {

    const nextTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
      };
    
      const prevTestimonial = () => {
        setCurrentTestimonial((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      };

    return (
        <div className="process-container">
            <h1 className="title-text">Our Tenets</h1>
            <p className="description-text">
                Q3 Visuals has developed an
                efficent system to ensure your website
                attracts more business and be attention grabbing.
                Here are our tenets to do so.
            </p>
            </div>
            
    )

}

export default Process