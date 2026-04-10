"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/i18n";

export default function Providers({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  return <LanguageProvider initialLang={initialLang}>{children}</LanguageProvider>;
}
