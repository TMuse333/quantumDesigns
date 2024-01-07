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
import { useState } from "react";


const Layout = () => {

    const [content1Animated, setContent1Animated] = useState(false)
    const [content2Animated, setContent2Animated] = useState(false)
    

const layoutRef = useRef()

useEffect(() => {
    console.log
    const content1Element = document.getElementById('content1');
    const content2Element = document.getElementById('content2');

    console.log(content2Element)

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8, // Adjust threshold as needed
    };

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Scrolled to ${entry.target.id}!`);
                if (entry.target.id === 'content1') {
                    setContent1Animated(true);
                } else if (entry.target.id === 'content2') {
                    setContent2Animated(true);
                    console.log('content2 in range')
                }
                // Do something when scrolled to content1 or content2
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (content1Element) {
        observer.observe(content1Element);
    }

    if (content2Element) {
        observer.observe(content2Element);
    }

    // Cleanup the observer on component unmount
    return () => {
        if (content1Element) {
            observer.unobserve(content1Element);
        }
        if (content2Element) {
            observer.unobserve(content2Element);
        }
    };
}, [layoutRef, setContent1Animated, setContent2Animated]);

    return (
        <div className="layout" id="layout"
        ref={layoutRef}>
            <Navbar />
            <Hero3 />
            <Content {...content1}
            isAnimated={content1Animated} />
            <ServiceOffering />
            <Content {...content2}
            isAnimated={content2Animated} />
            <WorkCarousel />
            <Testimonials />
            <Outro title='transform your vision today' content={content1.description} />
            <Footer />
        </div>
    );
}

export default Layout;
