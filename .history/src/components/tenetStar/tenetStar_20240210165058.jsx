import react from 'react'
import { tenetsData } from '../../componentData/data'
import '../styles/tenetStar.css'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const Tenet = ({ name, description, isAnimated,
   animation, isReturning, returnAnimation,
    animationClick,tenetClick,
  isClicked,index }) => {
  
    const style = (index) => ({
      height: isClicked ? '18.5rem' : '8rem',


      top: index === 1 ? '40%' : 'auto',
      position:'absolute',


      top: index === 0 || index === 1 ? '-5%' : 
      index === 2 ? '20%' :'45%',


     
      left:index === 2? '40%' :
      index === 0 || index === 3 ? '10%' :
      'auto',
      right:index === 4 || index === 1 ? '15%' : 'auto',
      transition:'height 0.3s ease-in',
      transform: index === 2 ? 'translateX(-50%)' : 'none',
    });
  
    return (
      <AnimatePresence>
        <motion.div
        style={style(index)}
          className='tenet'
          initial={isReturning ? returnAnimation.initial : animation.initial}
          animate={isAnimated ? animation.animate : returnAnimation.animate}
          transition={isAnimated ? animation.transition : returnAnimation.transition}
          onClick={() => tenetClick(name)}
        >
          <h2 className='description-text'>
            {name}
          </h2>

        {isClicked && (
          <motion.p
            className='description-text'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {description}
          </motion.p>
        )}
         
      
        </motion.div>
      </AnimatePresence>
    );
  };


const TenetStar = () => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [clickedTenets, setClickedTenets] = useState([])

 

    const tenetClick = (name) => {
      console.log(name + ' clicked!');
      setClickedTenets((prevClickedTenets) =>
        prevClickedTenets.includes(name)
          ? prevClickedTenets.filter((tenet) => tenet !== name)
          : [...prevClickedTenets, name]
      );
      console.log(clickedTenets);
    };

    const animationClick = () => {
      setIsAnimated(!isAnimated);
      console.log('clicked');
    };

    const tenetAnimation = {
        initial: {opacity:1,y:30,x:0},
        animate:{y:-340,x:-130}
        // animate:{opacity:0},
        // transition:{opacity:{delay:1.6}}
    }


    const returnTenetAnimation = {
        initial: { y:0,x:0 },
        animate: { opacity: 1,y:-100,x:-130 },
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
      isClicked={clickedTenets.includes(tenetsData[0].name)}
      index={0}
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
     isClicked={clickedTenets.includes(tenetsData[1].name)}
     index={1}
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
     isClicked={clickedTenets.includes(tenetsData[2].name)}
     index={2}
     />
    </AnimatePresence>
</div>

<div className='third-row'>
<AnimatePresence>
    <Tenet
    className='tenet4'
     {...tenetsData[3]}
        animation={animations[3]}
     isAnimated={isAnimated}
     returnAnimation={returnAnimations[3]}
     isReturning={(!isAnimated) === true}
     tenetClick={()=>tenetClick(tenetsData[3].name)}
     isClicked={clickedTenets.includes(tenetsData[3].name)}
     index={3}
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
     isClicked={clickedTenets.includes(tenetsData[4].name)}
     index={4}
     />
    </AnimatePresence>
</div>




        </div>
    )


}

export default TenetStar