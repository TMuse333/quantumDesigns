

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

import React, { useState } from 'react';
import { tenetsData } from '../componentData/data';
import '../styles/tenetStar.css';
import { motion, AnimatePresence } from 'framer-motion';

const Tenet = ({
  name,
  description,
  isAnimated,
  animation,
  isReturning,
  returnAnimation,
  animationClick,
  toggleDescription,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={`tenet ${isAnimated ? 'expanded' : ''}`}
        initial={isReturning ? returnAnimation.initial : animation.initial}
        animate={isAnimated ? animation.animate : returnAnimation.animate}
        transition={isAnimated ? animation.transition : returnAnimation.transition}
        onClick={(event) => toggleDescription(event, name)}
      >
        <h2 className='description-text'>{name}</h2>
        {isAnimated && (
          <div className='description-container'>
            <p className='description-text'>{description}</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

const TenetStar = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isClicked, setIsClicked] = useState('');

  const toggleDescription = (event, tenetName) => {
    // Prevent the animation click event from triggering when clicking the description
    event.stopPropagation();
    setIsClicked((prevIsClicked) => (prevIsClicked === tenetName ? '' : tenetName));
    setIsAnimated(true);
  };

  const animationClick = () => {
    setIsAnimated(!isAnimated);
  };

  const tenetAnimation = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    transition: { opacity: { delay: 1.6 } },
  };

  const returnTenetAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { opacity: { delay: 0 } },
  };

  const animations = [
    { initial: { opacity: 1 }, animate: { opacity: 0 }, transition: { opacity: { delay: 1.6 } } },
    { /* ... your animation */ },
    { /* ... your animation */ },
    { /* ... your animation */ },
    { /* ... your animation */ },
  ];

  const returnAnimations = [
    { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { opacity: { delay: 0 } } },
    { /* ... your return animation */ },
    { /* ... your return animation */ },
    { /* ... your return animation */ },
    { /* ... your return animation */ },
  ];

  return (
    <div className='tenet-star-container'>
      <div className='first-row'>
        {tenetsData.slice(0, 2).map((tenet, index) => (
          <Tenet
            key={index}
            {...tenet}
            animation={animations[index]}
            isAnimated={isAnimated}
            returnAnimation={returnAnimations[index]}
            isReturning={!isAnimated}
            animationClick={animationClick}
            toggleDescription={toggleDescription}
          />
        ))}
      </div>

      <div className='second-row'>
        {tenetsData.slice(2, 3).map((tenet, index) => (
          <Tenet
            key={index}
            {...tenet}
            animation={animations[2]}
            isAnimated={isAnimated}
            returnAnimation={returnAnimations[2]}
            isReturning={!isAnimated}
            animationClick={animationClick}
            toggleDescription={toggleDescription}
          />
        ))}
      </div>

      <div className='third-row'>
        {tenetsData.slice(3, 5).map((tenet, index) => (
          <Tenet
            key={index}
            {...tenet}
            animation={animations[index + 3]}
            isAnimated={isAnimated}
            returnAnimation={returnAnimations[index + 3]}
            isReturning={!isAnimated}
            animationClick={animationClick}
            toggleDescription={toggleDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default TenetStar;
