"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { translations, type Dict, type Language } from "./translations";

export const LANG_COOKIE = "translite-lang";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dict;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({
  initialLang = "en",
  children,
}: {
  initialLang?: Language;
  children: React.ReactNode;
}) {
  // initialLang is provided by the server layout after reading the cookie,
  // so the very first render (server + client hydration) already shows the
  // correct language. No useEffect / no localStorage — no flash.
  const [lang, setLangState] = useState<Language>(initialLang);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
