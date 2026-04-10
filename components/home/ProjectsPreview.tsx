"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjectsPreview() {
  const { t, lang } = useLanguage();
  const featured = projects.slice(0, 4);
  const [logoErrors, setLogoErrors] = useState<Record<string, boolean>>({});

  return (
    <section className="section-padding" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <FadeIn>
            <SectionHeader
              eyebrow={t.projects.eyebrow}
              title={t.projects.title}
              titleHighlight={t.projects.titleHighlight}
              subtitle={t.projects.subtitle}
              align="left"
              className="max-w-lg"
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/work" className="btn-ghost shrink-0" aria-label={t.projects.viewAll}>
              {t.projects.viewAll}
              <ArrowUpRight size={16} />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => {
            const shortDesc = lang === "en" ? project.shortDescEn : project.shortDesc;
            const tags = lang === "en" ? project.tagsEn : project.tags;
            return (
            <FadeIn key={project.slug} delay={i * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="glass-card flex flex-col h-full group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                aria-label={project.title}
              >
                {/* Cover — logo placeholder 200x60px */}
                <div
                  className="h-48 w-full relative overflow-hidden flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${project.coverColor}30, ${project.coverColor}08)` }}
                >
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{ background: `radial-gradient(circle at 70% 30%, ${project.coverColor}, transparent 60%)` }}
                  />
                  <div
                    className="relative z-10 bg-white/90 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ width: 200, height: 60 }}
                  >
                    {logoErrors[project.slug] ? (
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest px-4 text-center">
                        {project.client}
                      </span>
                    ) : (
                      <Image
                        src={project.logo}
                        alt={project.client}
                        width={180}
                        height={48}
                        onError={() => setLogoErrors((p) => ({ ...p, [project.slug]: true }))}
                        className="object-contain"
                        style={{ maxWidth: 180, maxHeight: 48 }}
                      />
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <ArrowUpRight size={14} className="text-white" />
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
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 mb-4">
                    {shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                    {tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium rounded bg-white/[0.04] border border-white/[0.06] text-[var(--text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
