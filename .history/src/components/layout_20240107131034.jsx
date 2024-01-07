import React, { useEffect,useRef } from "react";
import '../app.css';
import WorkCarousel from "./work";
import Testimonials from "./testimonials";
import Outro from "./outro";
import Footer from "./footer";
import Navbar from "./navbar";
import Sphere from "./sphere";
import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";
import Content from "./content";
import Herobanner2 from "./herobanner2";
import ServiceOffering from "./serviceOffering";
import Hero3 from "./herobanner3";


const Layout = () => {

    const [content1Animated, setContent1]

const layoutRef = useRef()

useEffect(() => {
    const content1Element = document.getElementById('content1');
    console.log(content1Element); // Log the element to see if it exists

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8, // Adjust threshold as needed
    };

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Scrolled to Content1!');
                // Do something when scrolled to content1
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (content1Element) {
        observer.observe(content1Element);
    }

    // Cleanup the observer on component unmount
    return () => {
        if (content1Element) {
            observer.unobserve(content1Element);
        }
    };
}, [layoutRef]);

    return (
        <div className="layout" id="layout"
        ref={layoutRef}>
            <Navbar />
            <Hero3 />
            <Content {...content1} />
            <ServiceOffering />
            <Content {...content2} />
            <WorkCarousel />
            <Testimonials />
            <Outro title='transform your vision today' content={content1.description} />
            <Footer />
        </div>
    );
}

export default Layout;
