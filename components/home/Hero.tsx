"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import AnimatedOrbs from "@/components/motion/AnimatedOrbs";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-label="Anasayfa hero bölümü"
    >
      {/* Animated background orbs */}
      <AnimatedOrbs />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border-default) 1px, transparent 1px), linear-gradient(90deg, var(--border-default) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="tag mb-6 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              {t.hero.eyebrow}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="display-xl text-balance mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            {t.hero.title}{" "}
            <span className="gradient-text">{t.hero.titleHighlight}</span>{" "}
            {t.hero.titleEnd}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="body-lg max-w-xl text-balance mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link
              href="/contact"
              className="btn-primary text-base px-7 py-4"
              aria-label={t.hero.cta}
            >
              {t.hero.cta}
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </Link>
            <Link
              href="/work"
              className="btn-ghost text-base px-7 py-4 group"
              aria-label={t.hero.ctaSecondary}
            >
              {t.hero.ctaSecondary}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--bg-primary))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
