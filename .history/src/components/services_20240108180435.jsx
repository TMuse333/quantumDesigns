import React from "react";
import Navbar from "./navbar";
import Footer from './footer'
import '../styles/services.css'
// import {companyStats} from '../componentData/data'
import {companyServices,tenetsContent,tenetsData} from '../componentData/data'
import Content from "./content";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useEffect,useRef,useState } from "react";
import { AnimatePresence} from 'framer-motion';
import TenetStar from "./tenetStar";







const Services = ({stats,services}) => {
    
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae, quis minus blanditiis, vel temporibus fugiat quos omnis porro dolor nostrum voluptatem animi debitis molestias laboriosam aliquid? Porro, sunt! Sapiente.'

    const links = [
        {
            dest:'/',
            name:'Home'
        },
        {
        dest:'/about-ceo',
        name :'About CEO'  
        },
      
        {
            dest:'/portfolio',
            name:'Our work'
        },
        
    ]

 



    const servicesRef = useRef();
    const [isAnimated, setIsAnimated] = useState(false);


      const titleStyle = (isVisible) => ({
        // width: isVisible ? '30vw' : '25vw',
        transition: `width 0.3s ease `,
        // overflow: isVisible ? 'scroll' : 'hidden',
        // overflowY: 'scroll',
   
      })
      
      const style = {

      }

    useEffect(() => {

        window.scrollTo(0, 0);

      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight ;
        const servicesOffset = servicesRef.current.offsetTop + 600;
  
        if (scrollPosition > servicesOffset + 500) {
          // Trigger animation when services section is in view
          // You can set a state here to control the animation if needed
          setIsAnimated(true)
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div ref={servicesRef} className='company-services'>


        <div className="services-container">
            <Navbar 
            // links={links}
            />
            <div className="background-intro">
            <h1 className="title-text">
    Q3 Visuals
</h1>     <div className="tenets-list">
 

 <ul className='description-text'>
<AnimatePresence mode='wait'>
<motion.li
initial={{opacity:0,x:-80}}
animate={{opacity:1,x:0,transition:{duration:0.4}}}>
Discipline
</motion.li>
</AnimatePresence>

<AnimatePresence mode='wait'>
<motion.li
initial={{opacity:0,x:-80}}
animate={{opacity:1,x:0,transition:{duration:0.4,delay:0.4}}}>
Creativity
</motion.li>
</AnimatePresence>
<AnimatePresence mode='wait'>
<motion.li
initial={{opacity:0,x:-80}}
animate={{opacity:1,x:0,transition:{duration:0.4,delay:0.8}}}>
Precision
</motion.li>
</AnimatePresence>
<AnimatePresence mode='wait'>
<motion.li
initial={{opacity:0,x:-80}}
animate={{opacity:1,x:0,transition:{duration:0.4,delay:1.2}}}>
Tenacity
</motion.li>
</AnimatePresence>
<AnimatePresence mode='wait'>
<motion.li
initial={{opacity:0,x:-80}}
animate={{opacity:1,x:0,transition:{duration:0.4,delay:1.6}}}>
Focus
</motion.li>
</AnimatePresence>

</ul>
<AnimatePresence mode='wait'>
<motion.h2
initial={{opacity:0,scale:0}}
animate={{opacity:1,scale:1,transition:{delay:2.4}}}
exit={{scale:0.0, transition: { duration: 0.5 }}}
className='title-text promise'>
We will get it done.
</motion.h2>
</AnimatePresence>
    
</div>

<div className="q3-description">

<AnimatePresence mode='wait'>
<motion.p
initial={{opacity:0,scale:0}}
animate={{opacity:1,scale:1,transition:{duration:0.5,delay:2.9}}}
exit={{scale:0.0, transition: { duration: 0.5 }}}
className='description-text'>
 Q3 Visuals specializes in creating efficient and unique web designs
    to help you elevate your digital presence
</motion.p>
</AnimatePresence>


<AnimatePresence mode='wait'>
<motion.p
initial={{opacity:0,scale:0}}
animate={{opacity:1,scale:1,transition:{duration:0.5,delay:3.1}}}
exit={{scale:0.0, transition: { duration: 0.5 }}}
className='description-text'>
  We leverage state of the art technologies like react js, a programming language to create websites, to 
                create visually appealing and functional designs you need to take your business to the
                next level
</motion.p>
</AnimatePresence>


              
              
              
              

<Footer
// links={links}
/>
        </div>
        </div>
    )

}


export default Services

