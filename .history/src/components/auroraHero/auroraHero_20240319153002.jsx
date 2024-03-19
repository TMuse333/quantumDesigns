import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import "./auroraHero.css";

const AuroraHero = () => {
  const colors = [
    "#0080ff", // Slightly darker shade of blue
    "#00ccff", // Lighter shade of blue
    "#7f5af0", // Slight purple shade
    "yellow", // Lighter shade of the slight purple
  ];

  const colorIndex = useMotionValue(0);
  const color = useMotionValue(colors[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextColorIndex = (colorIndex.get() + 1) % colors.length;
      animate(colorIndex, nextColorIndex, {
        ease: "easeInOut",
        duration: 10,
      });
    }, 10000); // 10 seconds

    return () => clearInterval(intervalId);
  }, [colorIndex, colors]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextColor = colors[colorIndex.get()];
      animate(color, nextColor, {
        ease: "easeInOut",
        duration: 10,
      });
    }, 10000); // 10 seconds

    return () => clearInterval(intervalId);
  }, [color, colorIndex, colors]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ##00bfff 50%, ${color})`;

  return (
    <motion.section className="aurora-hero-container" style={{ backgroundImage }}>
      <h1>Being a real one is very important,</h1>
      <h2>Improve your focus and discipline</h2>
    </motion.section>
  );
};

export default AuroraHero;
