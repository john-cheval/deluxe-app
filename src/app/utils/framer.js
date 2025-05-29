export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: "easeOut",
    delay,
  },
  viewport: { once: true, amount: 0.4 },
});

export const fadeInUpSingle = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: "easeOut",
  },
  viewport: { once: true, amount: 0.2 },
};
