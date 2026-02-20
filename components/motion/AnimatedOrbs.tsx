"use client";

import { motion } from "framer-motion";

interface OrbProps {
  className?: string;
  delay?: number;
  duration?: number;
}

function Orb({ className, delay = 0, duration = 8 }: OrbProps) {
  return (
    <motion.div
      className={`orb pointer-events-none select-none ${className}`}
      animate={{
        y: ["0px", "-30px", "15px", "-15px", "0px"],
        x: ["0px", "20px", "-10px", "15px", "0px"],
        scale: [1, 1.05, 0.97, 1.02, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function AnimatedOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large primary orb */}
      <Orb
        duration={10}
        delay={0}
        className="w-[500px] h-[500px] -top-40 -right-20 bg-indigo-600/20"
      />
      {/* Secondary violet orb */}
      <Orb
        duration={8}
        delay={1}
        className="w-[350px] h-[350px] bottom-0 -left-20 bg-violet-600/15"
      />
      {/* Cyan accent orb */}
      <Orb
        duration={12}
        delay={2}
        className="w-[250px] h-[250px] top-1/2 left-1/3 bg-cyan-500/10"
      />
      {/* Small accent */}
      <Orb
        duration={7}
        delay={0.5}
        className="w-[180px] h-[180px] top-1/4 right-1/3 bg-purple-600/12"
      />
    </div>
  );
}
