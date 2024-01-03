import react from 'react'
import { tenetsData } from '../componentData/data'
import '../styles/tenetStar.css'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'

const Tenet = ({name,description}) => {

    const [visibleDescriptions, setVisibleDescriptions] = useState({});

    const toggleDescription = (tenetName) => {
        setVisibleDescriptions((prevVisible) => ({
          ...prevVisible,
          [tenetName]: !prevVisible[tenetName],
        }));
      };

      const [animated,Is]

    
      const style = (isVisible,index) => ({
             overflow:!isVisible ? 'hidden' : 'scroll',
             height: isVisible ? '200px' : '100px',
             transition: 'height 0.6s ease',
          
           });

           const animations = [
            {
              initial: { x: 10, y: 10 },
              animate: { x: 0, y: 0 }
            },
            // Add more animation objects as needed
          ];

    return (
        <AnimatePresence>

     
        <motion.div className='tenet'
        initial={animations[0].initial}
        animate={animations[0].animate}
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



    return (
        <div className='tenet-star-container'>

<div className='first-row'>
    <AnimatePresence>
    <Tenet
    // initial={{opacity:0}}
     {...tenetsData[0]}/>
    </AnimatePresence>
   
    <Tenet {...tenetsData[1]}/>

</div>

<div className='second-row'>
<Tenet {...tenetsData[2]}/>
</div>

<div className='third-row'>
<Tenet {...tenetsData[3]}/>
    <Tenet {...tenetsData[4]}/>
</div>




        </div>
    )


}

export default TenetStar