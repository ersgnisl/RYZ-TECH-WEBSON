"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  className?: string;
  once?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  y = 20,
  x = 0,
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: "-60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={cn("fade-in-lite", isVisible && "is-visible", className)}
      style={
        {
          "--fade-delay": `${delay}s`,
          "--fade-duration": `${duration}s`,
          "--fade-x": `${x}px`,
          "--fade-y": `${y}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
