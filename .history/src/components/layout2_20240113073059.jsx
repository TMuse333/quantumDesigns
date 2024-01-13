import React, { useEffect ,useState} from "react";
import '../app.css';
import WorkCarousel from "./work";
import Testimonials from "./testimonials";
import Outro from "./outro";
import Footer from "./footer";
import Navbar from "./navbar";

import { content1 } from "../componentData/data";
import { content2 } from "../componentData/data";
import Content from "./content";

import ServiceOffering from "./serviceOffering";
import Hero3 from "./herobanner3";

const Layout2 = () => {
  const [scrollY, setScrollY] = useState(0);
  const [content1animated, setContent1Animated] = useState(false);
  const [content2animated, setContent2Animated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log('scrolling')
      // Check if the element with id 'content1' is in the viewport
      const content1Element = document.getElementById("content1");
      if (content1Element) {
        const { top, bottom } = content1Element.getBoundingClientRect();
        if (top < window.innerHeight && bottom >= window.innerHeight * 0.) {
          // Element is in the viewport
          setContent1Animated(true);
          console.log('in range')
        } else {
          // Element is not in the viewport
          setContent1Animated(false);
        }
      }

      const content2Element = document.getElementById("content2");
      if (content2Element) {
        const { top, bottom } = content2Element.getBoundingClientRect();
        if (top < window.innerHeight && bottom >= 0) {
          // Element is in the viewport
          setContent2Animated(true);
        } else {
          // Element is not in the viewport
          setContent2Animated(false);
        }
      }


    };

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="background-container">


    <div className="layout">
        <Navbar/>
    <Hero3/>
      
      {/* Conditionally apply a CSS class based on content1animated state */}
     <Content {...content1}
     isAnimated={content1animated}/>

     <ServiceOffering/>

    <Content {...content2}
    isAnimated={content2animated}
    />

<WorkCarousel />
            <Testimonials />
            <Outro title='transform your vision today' content={content1.description} />

  <Footer/>
    </div>
    </div>
  );
};

export default Layout2;
