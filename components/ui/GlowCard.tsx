"use client";

import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tilt?: boolean;
}

export default function GlowCard({
  children,
  className,
  glowColor = "rgba(99,102,241,0.3)",
  tilt = true,
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "glass-card relative overflow-hidden cursor-default group glow-card-lite",
        tilt && "glow-card-lite-tilt",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[inherit]"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${glowColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
