"use client";

import { motion } from "framer-motion";
import { Search, Map, Zap, BarChart3 } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

export default function ProcessSection() {
  const { t } = useLanguage();
  const stepIcons = [Search, Map, Zap, BarChart3];
  const stepColors = ["#6366f1", "#8b5cf6", "#a78bfa", "#22d3ee"];
  const steps = t.process.steps.map((step, i) => ({
    number: `0${i + 1}`,
    title: step.title,
    description: step.description,
    icon: stepIcons[i],
    color: stepColors[i],
  }));

  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.04), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <SectionHeader
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            titleHighlight={t.process.titleHighlight}
            subtitle={t.process.subtitle}
          />
        </FadeIn>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden lg:block absolute top-[28px] left-[25%] right-[25%] pointer-events-none" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute h-px origin-left"
                style={{
                  left: `${i * 33.33}%`,
                  width: "33.33%",
                  background: "linear-gradient(90deg, rgba(99,102,241,0.4), rgba(34,211,238,0.2))",
                }}
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
              />
            ))}
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} delay={i * 0.12}>
                <div className="glass-card p-6 h-full flex flex-col relative group hover:border-white/15 transition-colors">
                  {/* Step number + icon */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${step.color}15`,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <Icon size={20} style={{ color: step.color }} strokeWidth={1.75} />
                    </div>
                    <span
                      className="text-4xl font-black opacity-10 group-hover:opacity-20 transition-opacity select-none"
                      style={{ color: step.color }}
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                    {step.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="mt-5 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
                    aria-hidden="true"
                  />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
