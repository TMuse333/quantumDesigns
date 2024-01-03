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

    
      const style = (isVisible,index) => ({
             overflow:!isVisible ? 'hidden' : 'scroll',
             height: isVisible ? '200px' : '100px',
             transition: 'height 0.6s ease',
          
           });

    return (
        <div className='tenet'
        
        >
            <h2 className='description-text'>
                {name}
            </h2>
            {/* <p className='description-text'>
                {description}
            </p> */}
            </div>
    )
}


const TenetStar = () => {

    return (
        <div className='tenet-star-container'>

<div className='first-row'>
    <AnimatePresence>
    <motion.Tenet
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