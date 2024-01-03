import react from 'react'
import { tenetsData } from '../componentData/data'
import '../styles/tenetStar.css'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const Tenet = ({name,description,animationClick,
isAnimated,animation}) => {

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
         animate={isAnimated ? animation.animate : animation.initial}
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
      setIsAnimated(true);
      console.log('clicked');
    };

    const tenetAnim

    const animations = [
        {
          initial: { x: 20, y: 20,opacity:0 },
          animate: { x: 0, y: 0,opacity:1 }
        },
        
      ];

    return (
        <div className='tenet-star-container'>

            <div onClick={()=>animationClick()}
            className='tenet'>
                Our tenets
            </div>

<div className='first-row'>
    <AnimatePresence>
    <Tenet
   
     {...tenetsData[0]}
        animation={animations[0]}
     isAnimated={isAnimated}/>
    </AnimatePresence>
   
    {/* <Tenet {...tenetsData[1]}/> */}

</div>

{/* <div className='second-row'>
<Tenet {...tenetsData[2]}/>
</div>

<div className='third-row'>
<Tenet {...tenetsData[3]}/>
    <Tenet {...tenetsData[4]}/>
</div> */}




        </div>
    )


}

export default TenetStar