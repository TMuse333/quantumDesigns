const animations = [
  {
    initial: { x: 300, y: 100, opacity: 1, scale: 0.1 },
    animate: { x: 0, y: 0, opacity: 1, scale: 1 },
    transition: { scale: { delay: 0.3 }, opacity: { delay: 0 } },
  },
  {
    initial: { x: -200, y: 100, opacity: 1, scale: 0.2 },
    animate: { x: 0, y: 0, opacity: 1, scale: 1 },
    transition: { delay: 0.3, scale: { delay: 0.6 }, opacity: { delay: 0.3 } },
  },
  {
    initial: { x: 20, y: 20, opacity: 1, scale: 0.2 },
    animate: { x: 0, y: 0, opacity: 1, scale: 1 },
    transition: { delay: 0.6, scale: { delay: 1.8 }, opacity: { delay: 1.8 } },
  },
  {
    initial: { x: 200, y: -100, opacity: 1, scale: 0.2 },
    animate: { x: 0, y: 0, opacity: 1, scale: 1 },
    transition: { delay: 0.9, scale: { delay: 1 }, opacity: { delay: 1 } },
  },
  {
    initial: { x: -200, y: -100, opacity: 1, scale: 0.2 },
    animate: { x: 0, y: 0, opacity: 1, scale: 1 },
    transition: { delay: 1.2, scale: { delay: 1.4 }, opacity: { delay: 1.4 } },
  },
];

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