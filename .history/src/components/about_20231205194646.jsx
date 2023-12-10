import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>Unlock Your Success with a Website</h2>
      <p>
        In today's hyper-digital world, not having a website is like not having a storefront on the busiest street in the city. Don't miss out on potential customers—tap into an untapped sea of opportunities!
      </p>
      <p>
        Your exceptional business idea deserves the spotlight of a vast online audience. Don't conceal your remarkable business any longer. Let me illuminate the path for you. Here are key benefits awaiting with the establishment of your distinguished website:
      </p>
      <motion.ul
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: [0.2, 0.4, 0.6, 0.8, 1.0] }}
      >
        <motion.li>Striking Design: Capture attention with a visually appealing and professional design.</motion.li>
        <motion.li>Competitive Edge: Gain a significant advantage—around 40% of small businesses still don't have a website.</motion.li>
        <motion.li>Compelling Content: Showcase your unique value proposition and engage your audience.</motion.li>
        <motion.li>Lead Generation: Convert visitors into customers with effective lead capture mechanisms.</motion.li>
        <motion.li>Brand Credibility: Establish trust and credibility by presenting a polished online presence.</motion.li>
      </motion.ul>
    </div>
  );
};

export default About;
