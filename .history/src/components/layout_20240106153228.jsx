import React from "react";
import { Parallax } from "react-parallax";
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

import 

const Layout = () => {
    return (
        <div className="layout" id="layout">
            <Navbar />

            <Parallax strength={0}>
                <Herobanner2 />
            </Parallax>

            <Parallax strength={-200}>
                <Sphere size={2} position={{ x: 0, y: 0, z: 0 }} color={0x0000ff} />
            </Parallax>
            <Content {...content1} />
            <ServiceOffering />
            <Parallax strength={-200}>
                <Content {...content2} />
            </Parallax>
            <WorkCarousel />
            <Testimonials />
            <Outro title='transform your vision today' content={content1.description} />
            <Footer />
        </div>
    );
}

export default Layout;
