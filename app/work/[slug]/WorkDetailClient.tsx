"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import MetricCard from "@/components/ui/MetricCard";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  others: Project[];
}

export default function WorkDetailClient({ project, others }: Props) {
  const { t, lang } = useLanguage();

  const category = lang === "tr" ? project.category : project.categoryEn;
  const shortDesc = lang === "tr" ? project.shortDesc : project.shortDescEn;
  const tags = lang === "tr" ? project.tags : project.tagsEn;
  const summary = lang === "tr" ? project.summary : project.summaryEn;
  const goal = lang === "tr" ? project.goal : project.goalEn;
  const solution = lang === "tr" ? project.solution : project.solutionEn;
  const results = lang === "tr" ? project.results : project.resultsEn;
  const services = lang === "tr" ? project.services : project.servicesEn;

  return (
    <main>
      {/* Cover hero */}
      <section className="relative overflow-hidden" style={{ minHeight: "50vh" }}>
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(160deg, ${project.coverColor}25 0%, ${project.coverColor}05 50%, var(--bg-primary) 100%)`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 80% 0%, ${project.coverColor}, transparent 60%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-16">
          {/* Breadcrumb */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-10">
              <Link
                href="/work"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors group"
                aria-label={t.projects.backAria}
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                {t.projects.breadcrumb}
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-sm text-[var(--text-secondary)] truncate">{project.title}</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="default">{category}</Badge>
                  <span className="text-xs text-[var(--text-muted)]">{project.year}</span>
                </div>
                <h1 className="display-md mb-3">{project.title}</h1>
                <p className="text-lg text-[var(--text-secondary)] mb-2">{project.client}</p>
                <p className="body-md mb-6">{shortDesc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.08] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors border border-indigo-500/30 rounded-lg px-4 py-2 hover:border-indigo-400/50 hover:bg-indigo-500/5"
                  >
                    <ExternalLink size={14} />
                    {t.projects.visitSite}
                  </a>
                )}
              </FadeIn>
            </div>

            {/* Logo visual */}
            <FadeIn delay={0.2} className="lg:col-span-5">
              <div
                className="rounded-2xl overflow-hidden border border-white/[0.06] flex items-center justify-center"
                style={{
                  height: "280px",
                  background: `linear-gradient(135deg, ${project.coverColor}30, ${project.coverColor}08)`,
                }}
              >
                {/* Logo area — recommended size: 240×80px PNG */}
                <div
                  className="bg-white/90 rounded-xl flex items-center justify-center shadow-xl"
                  style={{ width: 240, height: 80 }}
                >
                  <img
                    src={project.logo}
                    alt={project.client}
                    className="object-contain"
                    style={{ maxWidth: 220, maxHeight: 64 }}
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <MetricCard
                  key={m.label}
                  label={lang === "tr" ? m.label : m.labelEn}
                  value={lang === "tr" ? m.value : m.valueEn}
                  description={lang === "tr" ? m.description : m.descriptionEn}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Summary → Goal → Solution → Results */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {[
            { title: t.projects.summaryLabel, content: summary },
            { title: t.projects.goalLabel, content: goal },
            { title: t.projects.solutionLabel, content: solution },
            { title: t.projects.resultsLabel, content: results },
          ].map((block, i) => (
            <FadeIn key={block.title} delay={i * 0.1}>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
                  {block.title}
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed text-base">
                  {block.content}
                </p>
              </div>
              {i < 3 && <div className="divider mt-12" />}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services used */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="glass-card p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                  {t.projects.servicesUsed}
                </p>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <Badge key={s} variant="purple">{s}</Badge>
                  ))}
                </div>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                {t.projects.similarCta}
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Other projects */}
      {others.length > 0 && (
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <h2 className="text-xl font-bold text-white mb-8">{t.projects.otherProjects}</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {others.map((other, i) => {
                const otherShortDesc = lang === "tr" ? other.shortDesc : other.shortDescEn;
                return (
                  <FadeIn key={other.slug} delay={i * 0.1}>
                    <Link
                      href={`/work/${other.slug}`}
                      className="glass-card p-6 flex gap-5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                      aria-label={other.title}
                    >
                      <div className="w-16 h-16 rounded-xl shrink-0 bg-white/90 flex items-center justify-center overflow-hidden">
                        <img
                          src={other.logo}
                          alt={other.client}
                          className="object-contain"
                          style={{ maxWidth: 48, maxHeight: 32 }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-[var(--text-muted)] mb-1">{other.client}</p>
                        <p className="font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                          {other.title}
                        </p>
                        <p className="text-sm text-[var(--text-secondary)] mt-1 line-clamp-2">
                          {otherShortDesc}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="text-[var(--text-muted)] group-hover:text-white shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
