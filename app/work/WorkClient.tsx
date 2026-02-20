"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WorkPage() {
  const { t, lang } = useLanguage();
  const [logoErrors, setLogoErrors] = useState<Record<string, boolean>>({});

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 70% 20%, rgba(34,211,238,0.06), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow={t.projects.eyebrow}
              title={t.projects.title}
              titleHighlight={t.projects.titleHighlight}
              subtitle={t.projects.subtitle}
            />
          </FadeIn>
        </div>
      </section>

      {/* Projects grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="glass-card flex flex-col h-full group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label={project.title}
                >
                  {/* Cover — logo placeholder 200x60px */}
                  <div
                    className="h-56 relative overflow-hidden flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${project.coverColor}30, ${project.coverColor}08)`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at 70% 30%, ${project.coverColor}, transparent 60%)`,
                      }}
                    />
                    {/* Logo box */}
                    <div
                      className="relative z-10 bg-white/90 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ width: 200, height: 60 }}
                    >
                      {logoErrors[project.slug] ? (
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest px-4 text-center">
                          {project.client}
                        </span>
                      ) : (
                        <img
                          src={project.logo}
                          alt={project.client}
                          onError={() => setLogoErrors((p) => ({ ...p, [project.slug]: true }))}
                          className="object-contain"
                          style={{ maxWidth: 180, maxHeight: 48 }}
                        />
                      )}
                    </div>
                    {project.websiteUrl && (
                      <div className="absolute top-4 right-4">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
                          Web
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                      <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <ArrowUpRight size={15} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-semibold text-[var(--text-muted)] mb-1">
                      {project.client} · {project.year}
                    </p>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-5">
                      {lang === "tr" ? project.shortDesc : project.shortDescEn}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(lang === "tr" ? project.tags : project.tagsEn).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium rounded bg-white/[0.04] border border-white/[0.06] text-[var(--text-muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 pt-4 border-t border-white/[0.05]">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <p className="text-base font-black gradient-text">
                            {lang === "tr" ? m.value : m.valueEn}
                          </p>
                          <p className="text-xs text-[var(--text-muted)]">
                            {lang === "tr" ? m.label : m.labelEn}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
