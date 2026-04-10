"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Lang } from "@/lib/i18n";

type T = typeof translations.tr;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: T;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "tr",
  setLang: () => {},
  t: translations.tr,
});

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    const saved = localStorage.getItem("ryz-lang") as Lang | null;
    if ((saved === "tr" || saved === "en") && saved !== lang) {
      setLangState(saved);
    }
  }, [lang]);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("ryz-lang", newLang);
    document.cookie = `ryz-lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] as T }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
