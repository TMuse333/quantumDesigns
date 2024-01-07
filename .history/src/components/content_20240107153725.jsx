import React, {useState,useEffect} from "react";
import '../styles/content.css'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Content = ({ img, title, description, rev,
   link, linkText, descriptionIntro, boldTitle,
    boldDescription,video,objectPosition,id,
    isAnimated
 }) => {

  const [animatedDescription, setAnimatedDescription] = useState("");


  const makeBold2 = (text, boldWords) => {
    if (!boldWords) {
      return text; // Return the original text if boldWords is not provided
    }

    const words = text.split(' ');

    return words.map((word, index) => (
      boldWords.includes(word.toLowerCase()) ?
        <motion.span
          className="bold-700"
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {word}{' '}
        </motion.span>
        :
        `${word} `
    ));
  };


  const handleAnimationComplete = () => {
    console.log('animation completed!')
   
  }

  const animations = {
    base: {
      animation: { opacity: 0 },
      animate: { opacity: 1 },
    },
    rotate: {
      animation: { rotateY: 80 },
      animate: { rotateY: 0 },
    },
  };

  useEffect(() => {
    if (isAnimated) {
      const boldedDescription = makeBold2(description, boldDescription); // Replace with your bold words
      setTimeout(() => {
        setAnimatedDescription(boldedDescription);
      }, 4000); // Delay of 4 seconds
    }
  }, [isAnimated, description]);

  return (
    <motion.div className={`content-container`}
    id={id}
    
    >
      {/* Render the main title */}
      <h1 className="title-text">
        {makeBold2(title, boldTitle)}
      </h1>
      <motion.div className={`image-text-box ${rev ? 'reverse' : ''}`}
      variants={{
        ...animations.base,
        ...animations.rotate,
      }}
      initial={{...animations.base.animation,
      ...animations.rotate.animation}}
  
     animate={isAnimated ? { ...animations.base.animate, ...animations.rotate.animate } : {
    ...animations.base.animation,
    ...animations.rotate.animation,
  }}
  
      transition={{ duration: 0.8, ease: 'linear' }}
      
      
      >
        {/* Check if rev is true, meaning the paragraph is
        on the left and image on the right */}
        {rev ? (
          // If rev is true, render this block
          <div className="description-box">
            {/* Render the secondary title if it exists */}
            {title && <h2 className="title-text">{descriptionIntro}</h2>}
            {/* Render the description with specified words bold and link/button if provided */}
            <p className='description-text'>
              {makeBold2(description, boldDescription)}
              <br/>
              {link != null &&
                <Link to={link}>
                  <button className="button">{linkText}</button>
                </Link>
              }
            </p>
          </div>
        ) : null}
        {/* Render the image */}
        <div className="image-box">
  {video ? (
    <video controls className='content-video'>
      <source src={img} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img src={img} loading="lazy" className='content-image'
    style={{
      objectPosition:objectPosition
    }} />
  )}
</div>
        {/* Check if rev is false,
        meaning image is on the right then paragraph
        is on the left of the screen */}
        {rev ? null : (
          // If rev is false, render this block
          <div className="description-box">
            {/* Render the secondary title */}
            <h2 className="title-text">
              {makeBold2(descriptionIntro, boldTitle)}
            </h2>
            {/* Render the description with specified words bold and link/button if provided */}
            <motion.p
         initial={{
          opacity: 0,
          x: 200,
        }}
        animate={{
          opacity: isAnimated ? 1 : 0,
          x: isAnimated ? 0 : 200,
        }}
        transition={{
          delay: 1,
          duration: 0.2,
          when: 'beforeChildren', // Set the 'when' property to 'beforeChildren'
        }}
             className='description-text'
             onAnimationComplete={handleAnimationComplete}
             >
              {/* {makeBold2(description, boldDescription)} */}
  
              {animatedDescription || description}

             
              <br />
              {link != null &&
                <Link to={link}>
                  <button className="button">{linkText}</button>
                </Link>
              }
            </motion.p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default Content;
