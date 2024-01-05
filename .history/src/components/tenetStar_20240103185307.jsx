import react from 'react'
import { tenetsData } from '../componentData/data'
import '../styles/tenetStar.css'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const Tenet = ({name,description,animationClick,
isAnimated,animation,isReturning,
returnAnimation}) => {

    const [visibleDescriptions, setVisibleDescriptions] = useState({});

    const toggleDescription = (tenetName) => {
        setVisibleDescriptions((prevVisible) => ({
          ...prevVisible,
          [tenetName]: !prevVisible[tenetName],
        }));
      };

      const style = (isVisible,index) => ({
             overflow:!isVisible ? 'hidden' : 'scroll',
             height: isVisible ? '200px' : '100px',
             transition: 'height 0.6s ease',
          
           });

       

    return (
        <AnimatePresence>

     
        <motion.div className='tenet'
         initial={animation.initial}
         animate={isAnimated ? animation.animate : returnAnimation.initial}
         transition={isAnimated ? animation.transition : returnAnimation.transition}
         onClick={animationClick}
        >
            <h2 className='description-text'>
                {name}
            </h2>
            {/* <p className='description-text'>
                {description}
            </p> */}
            </motion.div>
            </AnimatePresence>
    )
}


const TenetStar = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [isClicked, setIsCLicked] = useState(true)

    const animationClick = () => {
      setIsAnimated(!isAnimated);
      console.log('clicked');
    };

    const tenetAnimation = {
        initial: {opacity:1},
        animate:{opacity:0}
    }

    const animations = [
        {
          initial: { x: 200, y: 100, opacity: 1,scale:0.2 },
          animate: { x: 0, y: 0, opacity: 1, scale: 1 },
          transition: { scale: { delay: 0.6 } },
        },
        {
          initial: { x: -200, y: 100, opacity: 1, scale: 0.2 },
          animate: { x: 0, y: 0, opacity: 1, scale: 1 },
          transition: { delay: 0.3, scale: { delay: 0.6 } }, // Increased delay for the scale effect
        },
        {
          initial: { x: 20, y: 20, opacity: 1, scale: 0.2 },
          animate: { x: 0, y: 0, opacity: 1, scale: 1 },
          transition: { delay: 0.6, scale: { delay: 1.2 } }, // Increased delay for the scale effect
        },
        {
          initial: { x: 200, y: -100, opacity: 1, scale: 0.2 },
          animate: { x: 0, y: 0, opacity: 1, scale: 1 },
          transition: { delay: 0.9, scale: { delay: 1.8 } }, // Increased delay for the scale effect
        },
        {
          initial: { x: -200, y: -100, opacity: 1, scale: 0.2 },
          animate: { x: 0, y: 0, opacity: 1, scale: 1 },
          transition: { delay: 1.2, scale: { delay: 2.4 } }, // Increased delay for the scale effect
        },
      ];


      const returnAnimations = [
        {
          initial: { x: 0, y: 0, opacity: 1, scale: 1 },
          animate: { x: 200, y: 100, opacity: 1, scale: 1 },
        },
        {
          initial: { x: 0, y: 0, opacity: 1, scale: 1 },
          animate: { x: -200, y: 100, opacity: 1, scale: 0.2 },
        },
        {
          initial: { x: 0, y: 0, opacity: 1, scale: 1 },
          animate: { x: 20, y: 20, opacity: 1, scale: 0.2 },
        },
        {
          initial: { x: 0, y: 0, opacity: 1, scale: 1 },
          animate: { x: 200, y: -100, opacity: 1, scale: 0.2 },
        },
        {
          initial: { x: 0, y: 0, opacity: 1, scale: 1 },
          animate: { x: -200, y: -100, opacity: 1, scale: 0.2 },
        },
      ];
      
      
      
      

    return (
        <div className='tenet-star-container'>

            <motion.div 
            onClick={()=>animationClick()}
            initial={tenetAnimation.initial}
            // animate={
            //     isAnimated ?
            //      tenetAnimation.animate : tenetAnimation.initial}
            className='tenet'>
                Our tenets
            </motion.div>

<div className='first-row'>
    <AnimatePresence>
    <Tenet
   
     {...tenetsData[0]}
        animation={animations[0]}
     isAnimated={isAnimated}
     returnAnimation={returnAnimations}
     />
    </AnimatePresence>
   
    <AnimatePresence>
    <Tenet
   
     {...tenetsData[1]}
        animation={animations[1]}
     isAnimated={isAnimated}
     />
    </AnimatePresence>

</div>

<div className='second-row'>
<AnimatePresence>
    <Tenet
   
     {...tenetsData[2]}
        animation={animations[2]}
     isAnimated={isAnimated}
     />
    </AnimatePresence>
</div>

<div className='third-row'>
<AnimatePresence>
    <Tenet
   
     {...tenetsData[3]}
        animation={animations[3]}
     isAnimated={isAnimated}
     />
    </AnimatePresence>
    <AnimatePresence>
    <Tenet
   
     {...tenetsData[4]}
        animation={animations[4]}
     isAnimated={isAnimated}
     />
    </AnimatePresence>
</div>




        </div>
    )


}

export default TenetStar