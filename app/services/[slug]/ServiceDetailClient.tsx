"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, TrendingUp, Palette, LayoutGrid, ShoppingCart, Globe, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import MetricCard from "@/components/ui/MetricCard";
import FadeIn from "@/components/motion/FadeIn";
import AccordionFAQ from "@/components/ui/AccordionFAQ";
import Badge from "@/components/ui/Badge";
import type { ServiceDetail } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Palette,
  LayoutGrid,
  ShoppingCart,
  Globe,
};

interface Props {
  service: ServiceDetail;
}

export default function ServiceDetailClient({ service }: Props) {
  const { t, lang } = useLanguage();
  const Icon = iconMap[service.icon];

  const title = lang === "tr" ? service.title : service.titleEn;
  const tagline = lang === "tr" ? service.tagline : service.taglineEn;
  const description = lang === "tr" ? service.description : service.descriptionEn;
  const whatWeDo = lang === "tr" ? service.whatWeDo : service.whatWeDoEn;
  const deliverables = lang === "tr" ? service.deliverables : service.deliverablesEn;
  const problem = lang === "tr" ? service.problem : service.problemEn;
  const approach = lang === "tr" ? service.approach : service.approachEn;
  const output = lang === "tr" ? service.output : service.outputEn;
  const faqItems = service.faq.map((item) => ({
    question: lang === "tr" ? item.question : item.questionEn,
    answer: lang === "tr" ? item.answer : item.answerEn,
  }));

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 20% 20%, ${service.color}10, transparent)`,
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/services"
                className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors group"
                aria-label={t.serviceDetail.backAria}
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                {t.serviceDetail.breadcrumbLabel}
              </Link>
              <span className="text-white/20">/</span>
              <span className="text-sm text-[var(--text-secondary)]">{title}</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: service.color }} strokeWidth={1.75} />
                  </div>
                  <Badge variant="default">{tagline}</Badge>
                </div>
                <h1 className="display-md mb-4">{title}</h1>
                <p className="body-lg mb-8">{description}</p>
                <Link
                  href="/contact"
                  className="btn-primary inline-flex"
                  aria-label={t.serviceDetail.ctaAria}
                >
                  {t.nav.cta}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </FadeIn>

            {/* KPI Cards */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {service.kpis.map((kpi) => (
                  <MetricCard
                    key={kpi.label}
                    label={lang === "tr" ? kpi.label : kpi.labelEn}
                    value={kpi.value}
                    change={lang === "tr" ? kpi.change : kpi.changeEn}
                    positive={kpi.positive}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem › Approach › Output */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: t.serviceDetail.problem, content: problem, icon: "??" },
              { label: t.serviceDetail.approach, content: approach, icon: "??" },
              { label: t.serviceDetail.output, content: output, icon: "?" },
            ].map((block, i) => (
              <FadeIn key={block.label} delay={i * 0.1}>
                <div className="glass-card p-7 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" role="img" aria-label={block.label}>{block.icon}</span>
                    <h2 className="text-lg font-bold text-white">{block.label}</h2>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{block.content}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <div>
                <p className="tag inline-flex mb-4">{t.serviceDetail.scopeTag}</p>
                <h2 className="heading-sm mb-6">{t.serviceDetail.whatWeDoTitle}</h2>
                <ul className="space-y-3">
                  {whatWeDo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-indigo-400 mt-0.5 shrink-0" strokeWidth={1.75} />
                      <span className="text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <div>
                  <p className="tag inline-flex mb-4">{t.serviceDetail.deliverablesTag}</p>
                  <h2 className="heading-sm mb-6">{t.serviceDetail.deliverablesTitle}</h2>
                  <ul className="space-y-3">
                    {deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ background: service.color }}
                          aria-hidden="true"
                        />
                        <span className="text-[var(--text-secondary)]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/[0.02] rounded-xl p-5 border border-white/[0.05]">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                    {t.serviceDetail.tools}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/[0.04] border border-white/[0.06] text-[var(--text-secondary)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="heading-sm mb-2 text-center">{t.serviceDetail.faqTitle}</h2>
            <p className="text-center text-[var(--text-secondary)] mb-10">
              {t.serviceDetail.faqSubtitle}
            </p>
          </FadeIn>
          <AccordionFAQ items={faqItems} accentColor={service.color} />
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div
              className="glass-card p-10 text-center relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${service.color}08, rgba(139,92,246,0.05))`,
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${service.color}15, transparent 70%)`,
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <h2 className="heading-sm mb-3">
                  {t.serviceDetail.readyTitle.replace("{service}", title)}
                </h2>
                <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                  {t.serviceDetail.readySubtitle}
                </p>
                <Link href="/contact" className="btn-primary inline-flex text-base px-8 py-4">
                  {t.nav.cta}
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

