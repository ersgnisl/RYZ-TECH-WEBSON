"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp, Palette, LayoutGrid, ShoppingCart, Globe } from "lucide-react";
import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import GlowCard from "@/components/ui/GlowCard";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Palette,
  LayoutGrid,
  ShoppingCart,
  Globe,
};

export default function ServicesClient() {
  const { t, lang } = useLanguage();

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 30%, rgba(99,102,241,0.08), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow={t.servicesPage.eyebrow}
              title={t.servicesPage.title}
              titleHighlight={t.servicesPage.titleHighlight}
              subtitle={t.servicesPage.subtitle}
            />
          </FadeIn>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const serviceTitle = lang === "tr" ? service.title : service.titleEn;
            const serviceTagline = lang === "tr" ? service.tagline : service.taglineEn;
            const serviceDescription = lang === "tr" ? service.description : service.descriptionEn;
            const serviceWhatWeDo = lang === "tr" ? service.whatWeDo : service.whatWeDoEn;
            const serviceDeliverables = lang === "tr" ? service.deliverables : service.deliverablesEn;

            return (
              <FadeIn key={service.slug} delay={i * 0.1}>
                <GlowCard glowColor={`${service.color}25`} tilt={false}>
                  <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Left: info */}
                    <div className="md:col-span-7">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            background: `${service.color}15`,
                            border: `1px solid ${service.color}30`,
                          }}
                        >
                          <Icon size={22} style={{ color: service.color }} strokeWidth={1.75} />
                        </div>
                        <div>
                          <p
                            className="text-xs font-semibold uppercase tracking-widest"
                            style={{ color: service.color }}
                          >
                            {serviceTagline}
                          </p>
                          <h2 className="text-2xl font-bold text-white">{serviceTitle}</h2>
                        </div>
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                        {serviceDescription}
                      </p>

                      {/* What we do */}
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                        {t.servicesPage.whatWeDo}
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {serviceWhatWeDo.slice(0, 6).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                              style={{ background: service.color }}
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/services/${service.slug}`}
                        className="btn-primary inline-flex"
                        style={{
                          background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`,
                        }}
                        aria-label={`${serviceTitle} ${t.servicesPage.viewDetailsAria}`}
                      >
                        {t.services.details}
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>

                    {/* Right: tools + deliverables */}
                    <div className="md:col-span-5 space-y-6">
                      <div className="bg-white/[0.02] rounded-xl p-5 border border-white/[0.05]">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                          {t.servicesPage.tools}
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

                      <div className="bg-white/[0.02] rounded-xl p-5 border border-white/[0.05]">
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                          {t.servicesPage.deliverables}
                        </p>
                        <ul className="space-y-2">
                          {serviceDeliverables.map((d) => (
                            <li key={d} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: service.color }}
                                aria-hidden="true"
                              />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div
              className="glass-card p-10 md:p-16 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05))",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <p className="tag inline-flex mb-4">{t.servicesPage.ctaTag}</p>
                <h2 className="display-md mb-4">
                  {t.servicesPage.ctaTitle}
                </h2>
                <p className="body-lg max-w-xl mx-auto mb-8">
                  {t.servicesPage.ctaSubtitle}
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

