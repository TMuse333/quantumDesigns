// About.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/about.css';

const About = () => {
  // Define the animations for each list item
  const props = useSpring({
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500 },
    delay: [200, 400, 600, 800, 1000], // Adjust the delays as needed
  });

  return (
    <div className="about-container">
      <h2>Unlock Your Success with a Website</h2>
      <p>
        In today's hyper-digital world, not having a website is like not having a storefront on the busiest street in the city. Don't miss out on potential customers—tap into an untapped sea of opportunities!
      </p>
      <p>
        Your exceptional business idea deserves the spotlight of a vast online audience. Don't conceal your remarkable business any longer. Let me illuminate the path for you. Here are key benefits awaiting with the establishment of your distinguished website:
      </p>
      <animated.ul style={props}>
        <animated.li>Striking Design: Capture attention with a visually appealing and professional design.</animated.li>
        <animated.li>Competitive Edge: Gain a significant advantage—around 40% of small businesses still don't have a website.</animated.li>
        <animated.li>Compelling Content: Showcase your unique value proposition and engage your audience.</animated.li>
        <animated.li>Lead Generation: Convert visitors into customers with effective lead capture mechanisms.</animated.li>
        <animated.li>Brand Credibility: Establish trust and credibility by presenting a polished online presence.</animated.li>
      </animated.ul>
    </div>
  );
};

export default About;
