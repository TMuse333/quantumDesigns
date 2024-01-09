import react from 'react'
import { tenetsData } from '../componentData/data'
import '../styles/tenetStar.css'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const Tenet = ({ name, description, isAnimated,
   animation, isReturning, returnAnimation,
    animationClick,tenetClick,
  isClicked }) => {
  
    const style = {
      color:
    }
  
    return (
      <AnimatePresence>
        <motion.div
          className='tenet'
          initial={isReturning ? returnAnimation.initial : animation.initial}
          animate={isAnimated ? animation.animate : returnAnimation.animate}
          transition={isAnimated ? animation.transition : returnAnimation.transition}
         onClick={tenetClick}
        >
          <h2 className='description-text'>
            {name}
          </h2>
         
      
        </motion.div>
      </AnimatePresence>
    );
  };


const TenetStar = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [clickedTenets, setClickedTenets] = useState({})

 

    const tenetClick = (name) => {
      console.log(name+ ' clicked!')

      setClickedTenets((prevClickedTenets) => ({
        ...prevClickedTenets,
        [name]: true,
      }));

      console.log(clickedTenets)
    }

    const animationClick = () => {
      setIsAnimated(!isAnimated);
      console.log('clicked');
    };

    const tenetAnimation = {
        initial: {opacity:1},
        animate:{opacity:0},
        transition:{opacity:{delay:1.6}}
    }


    const returnTenetAnimation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { opacity: { delay: 0 } },
      };

const animations = [
    {
      initial: { x: 300, y: 100, opacity: 1, scale: 0.1 },
      animate: { x: 0, y: 0, opacity: 1, scale: 1 },
      transition: { scale: { delay: 0.3 }, opacity: { delay: 0 } },
    },
    {
      initial: { x: -200, y: 100, opacity: 1, scale: 0.2 },
      animate: { x: 0, y: 0, opacity: 1, scale: 1 },
      transition: { delay: 0.3, scale: { delay: 0.6 }, opacity: { delay: 0.3 } },
    },
    {
      initial: { x: 20, y: 20, opacity: 1, scale: 0.2 },
      animate: { x: 0, y: 0, opacity: 1, scale: 1 },
      transition: { delay: 0.6, scale: { delay: 1.8 }, opacity: { delay: 1.8 } },
    },
    {
      initial: { x: 200, y: -100, opacity: 1, scale: 0.2 },
      animate: { x: 0, y: 0, opacity: 1, scale: 1 },
      transition: { delay: 0.9, scale: { delay: 1 }, opacity: { delay: 1 } },
    },
    {
      initial: { x: -200, y: -100, opacity: 1, scale: 0.2 },
      animate: { x: 0, y: 0, opacity: 1, scale: 1 },
      transition: { delay: 1.2, scale: { delay: 1.4 }, opacity: { delay: 1.4 } },
    },
  ];

  const returnAnimations = [
    {
      initial: { x: 0, y: 0, opacity: 0, scale: 1 },
      animate: { x: 200, y: 100, opacity: 0, scale: 0.2 },
    },
    {
      initial: { x: 0, y: 0, opacity: 1, scale: 1 },
      animate: { x: -200, y: 100, opacity: 0, scale: 0.2 },
    },
    {
      initial: { x: 0, y: 0, opacity: 1, scale: 1 },
      animate: { x: 20, y: 20, opacity: 0, scale: 0.2 },
    },
    {
      initial: { x: 0, y: 0, opacity: 1, scale: 1 },
      animate: { x: 200, y: -100, opacity: 0, scale: 0.2 },
    },
    {
      initial: { x: 0, y: 0, opacity: 1, scale: 1 },
      animate: { x: -200, y: -100, opacity: 0, scale: 0.2 },
    },
  ];
      
      
      
      

    return (
        <div className='tenet-star-container'>

            <motion.div 
            onClick={()=>animationClick()}
            initial={isAnimated ? tenetAnimation.initial :returnTenetAnimation.initial }
            animate={
                isAnimated ?
                 tenetAnimation.animate : returnTenetAnimation.animate}
                 transition={isAnimated ?tenetAnimation.transition : returnTenetAnimation.transition}
            className='tenet tenet-button'>
                Our tenets
            </motion.div>

<div className='first-row'>
    <AnimatePresence>
    <Tenet
   
     {...tenetsData[0]}
        animation={animations[0]}
     isAnimated={isAnimated}
     returnAnimation={returnAnimations[0]}
     isReturning={(!isAnimated) === true}
      tenetClick={()=>tenetClick(tenetsData[0].name)}
   
     />
    </AnimatePresence>
   
    <AnimatePresence>
    <Tenet
   
     {...tenetsData[1]}
        animation={animations[1]}
     isAnimated={isAnimated}
     returnAnimation={returnAnimations[1]}
     isReturning={(!isAnimated) === true}
     tenetClick={()=>tenetClick(tenetsData[1].name)}
     />
    </AnimatePresence>

</div>

<div className='second-row'>
<AnimatePresence>
    <Tenet
   
     {...tenetsData[2]}
        animation={animations[2]}
     isAnimated={isAnimated}
     returnAnimation={returnAnimations[2]}
     isReturning={(!isAnimated) === true}
     tenetClick={()=>tenetClick(tenetsData[2].name)}
   
     />
    </AnimatePresence>
</div>

<div className='third-row'>
<AnimatePresence>
    <Tenet
   
     {...tenetsData[3]}
        animation={animations[3]}
     isAnimated={isAnimated}
     returnAnimation={returnAnimations[3]}
     isReturning={(!isAnimated) === true}
     tenetClick={()=>tenetClick(tenetsData[3].name)}
     />
    </AnimatePresence>
    <AnimatePresence>
    <Tenet
   
     {...tenetsData[4]}
        animation={animations[4]}
     isAnimated={isAnimated}
     returnAnimation={returnAnimations[4]}
     isReturning={(!isAnimated) === true}
     tenetClick={()=>tenetClick(tenetsData[4].name)}
     />
    </AnimatePresence>
</div>




        </div>
    )


}

export default TenetStar