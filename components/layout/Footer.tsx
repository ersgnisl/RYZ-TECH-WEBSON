"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="relative border-t border-white/[0.06] bg-[rgba(6,6,15,0.8)]"
      role="contentinfo"
      aria-label="Site alt bilgisi"
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="flex items-center mb-6 w-fit"
              aria-label="RYZ Tech"
            >
              <Image
                src="/logo1.png"
                alt="RYZ Tech Digital Agency"
                width={133}
                height={28}
                className="h-7 w-auto"
              />
            </Link>

            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs mb-6">
              {t.footer.tagline}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/[0.08] text-[var(--text-muted)] hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-6 md:col-start-6 grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                {t.footer.services}
              </p>
              <ul className="space-y-2.5">
                {t.footer.links.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                {t.footer.explore}
              </p>
              <ul className="space-y-2.5">
                {t.footer.links.explore.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">
              {t.footer.cta.eyebrow}
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {t.footer.cta.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              {t.footer.cta.desc}
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            {t.footer.cta.button}
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.05]">
          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} RYZ Tech. {t.footer.copyright}
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-[var(--text-muted)]">{t.footer.city}</span>
            <span className="mx-2 text-white/10">·</span>
            <span className="text-xs text-[var(--text-muted)]">{t.footer.agencyType}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
