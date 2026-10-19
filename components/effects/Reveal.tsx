'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Props = { children: React.ReactNode; delay?: number; y?: number };

// Fades + lifts a section into view once as it enters the viewport.
export default function Reveal({ children, delay = 0, y = 48 }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
