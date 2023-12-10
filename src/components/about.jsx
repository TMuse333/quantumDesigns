import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/about.css';

const About = () => {
  const listItemVariants = {
    hidden: { opacity: 0, x: -400 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay: index * 0.5 }, // Adjust the delay here
    }),
  };

  const controls = useAnimation();
  const ulRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.5 }
    );

    if (ulRef.current) {
      observer.observe(ulRef.current);
    }

    return () => {
      if (ulRef.current) {
        observer.unobserve(ulRef.current);
      }
    };
  }, [controls]);

  return (
    <div className="about-container">
      <h2>Unlock Your Success with a Website</h2>
      <p>
  In today's hyper-digital world, not having a website is akin to not having a storefront on the busiest street in the city. It's like choosing to keep your business in the shadows while potential customers pass you by. Don't let valuable opportunities slip away—seize the advantages of establishing your online presence!
</p>
<p>
  Your exceptional business idea is deserving of the spotlight on the vast stage of the internet. Don't hide your remarkable business any longer. Allow me to shine a light on the concrete benefits that come with the establishment of your distinguished website:
</p>
<motion.ul initial='hidden' animate={controls} ref={ulRef}>
  <motion.li variants={listItemVariants} custom={0}>Striking Design: Capture attention with a visually appealing and professional design that sets you apart from the competition.</motion.li>
  <motion.li variants={listItemVariants} custom={1}>Competitive Edge: Gain a significant advantage—around 40% of small businesses still don't have a website. Stand out and be a step ahead in your industry.</motion.li>
  <motion.li variants={listItemVariants} custom={2}>Compelling Content: Showcase your unique value proposition and engage your audience with content that resonates and converts visitors into customers.</motion.li>
  <motion.li variants={listItemVariants} custom={3}>Lead Generation: Turn website visitors into actual customers with effective lead capture mechanisms, ensuring you don't miss out on potential business opportunities.</motion.li>
  <motion.li variants={listItemVariants} custom={4}>Brand Credibility: Establish trust and credibility by presenting a polished online presence. How you present your brand online shapes how customers perceive and trust your business.</motion.li>
</motion.ul>

    </div>
  );
};

export default About;
