'use client';

import React from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react';

// Fixed, page-long ambient background: three soft gradient blobs that drift and
// shift as the page scrolls. Colours come from the live theme tokens, so the
// admin theme editor recolours it too.
export default function AuroraBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.6 });

  const aY = useTransform(p, [0, 1], ['-10vh', '60vh']);
  const aX = useTransform(p, [0, 1], ['-10vw', '25vw']);
  const bY = useTransform(p, [0, 1], ['70vh', '-10vh']);
  const bX = useTransform(p, [0, 1], ['60vw', '10vw']);
  const cScale = useTransform(p, [0, 0.5, 1], [0.8, 1.4, 0.9]);
  const cRot = useTransform(p, [0, 1], [0, 140]);

  return (
    <div aria-hidden="true" className="kx-aurora">
      <motion.div className="kx-blob kx-blob-a" style={reduce ? undefined : { y: aY, x: aX }} />
      <motion.div className="kx-blob kx-blob-b" style={reduce ? undefined : { y: bY, x: bX }} />
      <motion.div className="kx-blob kx-blob-c" style={reduce ? undefined : { scale: cScale, rotate: cRot }} />
      <div className="kx-aurora-grain" />
    </div>
  );
}
