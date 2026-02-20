"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
  once?: boolean;
}

const variants: Variants = {
  hidden: ({ y, x }: { y: number; x: number }) => ({
    opacity: 0,
    y,
    x,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  x = 0,
  className,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      custom={{ y, x }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{
        delay,
        duration,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
