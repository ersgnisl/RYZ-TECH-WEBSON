"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/work", label: t.nav.work },
    { href: "/team", label: t.nav.team },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        ref={navRef}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-[rgba(6,6,15,0.85)] border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        )}
        style={{ height: "var(--nav-height)" }}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between"
          aria-label="Ana navigasyon"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            aria-label="RYZ Tech Ana Sayfa"
          >
            <Image
              src="/logo1.png"
              alt="RYZ Tech Digital Agency"
              width={152}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div
            className="hidden md:flex items-center gap-1 relative"
            onMouseLeave={() => setHoveredHref(null)}
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  style={{
                    color: active ? "var(--text-primary)" : "var(--text-secondary)",
                  }}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  aria-current={active ? "page" : undefined}
                >
                  {hoveredHref === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA + Language Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center rounded-lg border border-white/[0.08] overflow-hidden text-xs font-semibold">
              <button
                onClick={() => setLang("tr")}
                className={cn(
                  "px-3 py-1.5 transition-all duration-200",
                  lang === "tr"
                    ? "bg-indigo-500 text-white"
                    : "text-[var(--text-muted)] hover:text-white"
                )}
                aria-label="Türkçe"
              >
                TR
              </button>
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-3 py-1.5 transition-all duration-200",
                  lang === "en"
                    ? "bg-indigo-500 text-white"
                    : "text-[var(--text-muted)] hover:text-white"
                )}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <Link
              href="/contact"
              className="btn-primary text-sm py-2.5 px-5"
              aria-label={t.nav.cta}
            >
              {t.nav.cta}
              <ArrowUpRight size={15} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[rgba(10,10,26,0.98)] border-l border-white/[0.06] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[var(--nav-height)] border-b border-white/[0.06]">
                <span className="text-[var(--text-primary)] font-bold text-lg">{t.nav.menu}</span>
                <div className="flex items-center gap-3">
                  {/* Mobile Language Toggle */}
                  <div className="flex items-center rounded-lg border border-white/[0.08] overflow-hidden text-xs font-semibold">
                    <button
                      onClick={() => setLang("tr")}
                      className={cn(
                        "px-3 py-1.5 transition-all duration-200",
                        lang === "tr" ? "bg-indigo-500 text-white" : "text-[var(--text-muted)]"
                      )}
                    >
                      TR
                    </button>
                    <button
                      onClick={() => setLang("en")}
                      className={cn(
                        "px-3 py-1.5 transition-all duration-200",
                        lang === "en" ? "bg-indigo-500 text-white" : "text-[var(--text-muted)]"
                      )}
                    >
                      EN
                    </button>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-[var(--text-secondary)]"
                    aria-label={t.nav.closeMenu}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Mobil navigasyon">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between w-full px-4 py-4 rounded-xl text-xl font-semibold transition-all duration-200",
                          active
                            ? "text-white bg-white/[0.06] border border-white/[0.1]"
                            : "text-[var(--text-secondary)] hover:text-white hover:bg-white/[0.04]"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        <span>{link.label}</span>
                        {active && (
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="px-8 pb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.3 }}
                >
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center text-base py-4"
                  >
                    {t.nav.cta}
                    <ArrowUpRight size={18} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
