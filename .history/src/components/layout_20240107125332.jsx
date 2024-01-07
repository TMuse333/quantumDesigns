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

const layoutRef = useRef()

    useEffect(() => {

        const content1Element = document.getElementById('content1');
        console.log(content1Element); // Log the element to see if it exists

        const handleScroll = () => {
            const content1Element = document.getElementById('content1');
            console.log('scrolling')
            if (content1Element) {
                const rect = content1Element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                
                if (isVisible) {
                    console.log('Scrolled to Content1!');
                    // Do something when scrolled to content1
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <div className="layout" id="layout">
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
