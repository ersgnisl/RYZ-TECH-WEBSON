"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Linkedin, Camera, Send } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/motion/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

interface FormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  website: string;
}

export default function ContactPage() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: t.contact.info.email,
      value: "info@ryztechdigital.com",
      href: "mailto:info@ryztechdigital.com",
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: "0542 142 1301",
      href: "tel:+905421421301",
    },
    {
      icon: MapPin,
      label: t.contact.info.office,
      value: "Şişli, İstanbul",
      href: "#",
    },
  ];

  const socials = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Camera, label: "Instagram", href: "#" },
  ];

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = t.contact.form.nameRequired;
    if (!form.email.trim()) {
      errs.email = t.contact.form.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = t.contact.form.emailInvalid;
    }
    if (!form.message.trim()) errs.message = t.contact.form.messageRequired;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Bir hata oluştu.");
      }

      setSent(true);
      toast.success(t.contact.form.successTitle);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Mail gönderilemedi. Lütfen tekrar deneyin.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 10% 30%, rgba(99,102,241,0.07), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeIn>
            <SectionHeader
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              titleHighlight={t.contact.titleHighlight}
              subtitle={t.contact.subtitle}
            />
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Form */}
            <FadeIn className="lg:col-span-7">
              <div className="glass-card p-8 md:p-10">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                      <span className="text-2xl" role="img" aria-label="Başarılı">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{t.contact.form.successTitle}</h3>
                    <p className="text-[var(--text-secondary)] max-w-sm">
                      {t.contact.form.successDesc}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="İletişim formu">
                    <h2 className="text-xl font-bold text-white mb-6">{t.contact.form.title}</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          {t.contact.form.name} <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder={t.contact.form.namePlaceholder}
                          className="input-field"
                          aria-required="true"
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-red-400" role="alert">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          {t.contact.form.email} <span className="text-red-400" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder={t.contact.form.emailPlaceholder}
                          className="input-field"
                          aria-required="true"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-400" role="alert">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          {t.contact.form.company}
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          value={form.company}
                          onChange={handleChange}
                          placeholder={t.contact.form.companyPlaceholder}
                          className="input-field"
                        />
                      </div>

                      <div className="hidden" aria-hidden="true">
                        <label htmlFor="website">Website</label>
                        <input
                          id="website"
                          name="website"
                          type="text"
                          tabIndex={-1}
                          autoComplete="off"
                          value={form.website}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                          {t.contact.form.budget}
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className="input-field select-field"
                        >
                          {t.budgetOptions.map((opt) => (
                            <option key={opt.value} value={opt.value} disabled={opt.value === ""} style={{ background: "#0a0a1a" }}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-7">
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                        {t.contact.form.message} <span className="text-red-400" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t.contact.form.messagePlaceholder}
                        rows={5}
                        className="input-field resize-none"
                        aria-required="true"
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-400" role="alert">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                      aria-busy={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t.contact.form.sending}
                        </span>
                      ) : (
                        <>
                          {t.contact.form.submit}
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact info sidebar */}
            <div className="lg:col-span-5 space-y-5">
              <FadeIn delay={0.1}>
                <div className="glass-card p-7">
                  <h3 className="text-lg font-bold text-white mb-6">{t.contact.info.title}</h3>
                  <div className="space-y-5">
                    {contactInfo.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-4 group"
                          aria-label={`${item.label}: ${item.value}`}
                        >
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-500/10 border border-indigo-500/20 shrink-0 group-hover:border-indigo-500/40 transition-colors">
                            <Icon size={16} className="text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-xs text-[var(--text-muted)] mb-0.5">{item.label}</p>
                            <p className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="glass-card p-7">
                  <h3 className="text-lg font-bold text-white mb-5">{t.contact.social.title}</h3>
                  <div className="flex items-center gap-3">
                    {socials.map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/[0.08] text-sm font-medium text-[var(--text-secondary)] hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
                      >
                        <Icon size={15} />
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="glass-card p-7 relative overflow-hidden">
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 100% 0%, rgba(99,102,241,0.1), transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10">
                    <p className="tag inline-flex mb-4">{t.contact.response.label}</p>
                    <p className="text-2xl font-black text-white mb-1">{t.contact.response.value}</p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {t.contact.response.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="glass-card p-10 md:p-14 text-center">
              <p className="tag inline-flex mb-4">{t.contact.howWeWork.eyebrow}</p>
              <h2 className="heading-sm mb-4">{t.contact.howWeWork.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-left">
                {t.contact.howWeWork.steps.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-3xl font-black text-indigo-500/20 select-none shrink-0" aria-hidden="true">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-bold text-white mb-1">{item.title}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
