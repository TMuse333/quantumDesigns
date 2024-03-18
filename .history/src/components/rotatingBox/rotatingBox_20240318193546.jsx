import { motion, useMotionValue, useTransform } from 'framer-motion';
import q3 from '../../images/q3-visuals-logo-2-no-bg.png'
import './rotatingbox.css'
const Example = () => {
  const blockVariants = {
    initial: {
      rotate: 0,
    },
    target: {
      rotate: 360,
    },
  };

  const rotate = useMotionValue(0);
  
  const scale = useTransform(rotate, [0, 270], [0, 1]);

  const imageVariants = {
    initial:{
        opacity:0
    },
    animate:{
        opacity:1
    }
  }

  return (
    <motion.div className='rotating-box'
      style={{
        background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
        height: '100px',
        width: '100px',
        borderRadius: '10px',
        rotate,
        scale,
      }}
      variants={blockVariants}
      initial="initial"
      animate="target"
      transition={{
        ease: 'easeInOut',
        duration: 4,
      }}
      
    >
        <img src={q3}/>
    </motion.div>
  );
};

export default Example;