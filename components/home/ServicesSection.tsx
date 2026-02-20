"use client";

import Link from "next/link";
import { TrendingUp, Palette, LayoutGrid, ShoppingCart, Globe, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceConfig = [
  {
    key: "performance" as const,
    href: "/services/performance-marketing",
    icon: TrendingUp,
    color: "#6366f1",
  },
  {
    key: "creative" as const,
    href: "/services/creative-production",
    icon: Palette,
    color: "#8b5cf6",
  },
  {
    key: "marketplace" as const,
    href: "/contact",
    icon: ShoppingCart,
    color: "#f59e0b",
  },
  {
    key: "web" as const,
    href: "/work",
    icon: Globe,
    color: "#22d3ee",
  },
  {
    key: "strategy" as const,
    href: "/services/campaign-content-strategy",
    icon: LayoutGrid,
    color: "#10b981",
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="section-padding" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            titleHighlight={t.services.titleHighlight}
            subtitle={t.services.subtitle}
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {serviceConfig.map((svc, i) => {
            const Icon = svc.icon;
            const serviceData = t.services.items[svc.key];
            return (
              <FadeIn key={svc.key} delay={i * 0.1}>
                <GlowCard
                  glowColor={`${svc.color}30`}
                  className="h-full"
                >
                  <div className="p-8 flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${svc.color}20, ${svc.color}08)`,
                        border: `1px solid ${svc.color}30`,
                      }}
                    >
                      <Icon
                        size={22}
                        style={{ color: svc.color }}
                        strokeWidth={1.75}
                      />
                    </div>

                    {/* Content */}
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: svc.color }}
                    >
                      {serviceData.tagline}
                    </p>
                    <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                      {serviceData.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-1">
                      {serviceData.description}
                    </p>

                    {/* Feature list */}
                    <ul className="space-y-2 mb-8">
                      {serviceData.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: svc.color }}
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={svc.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold group"
                      style={{ color: svc.color }}
                      aria-label={`${serviceData.title} hakkında daha fazla bilgi`}
                    >
                      {t.services.details}
                      <ArrowUpRight
                        size={15}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                      />
                    </Link>
                  </div>
                </GlowCard>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="btn-ghost inline-flex"
              aria-label={t.services.viewAll}
            >
              {t.services.viewAll}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
