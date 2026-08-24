import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { messages } from "./messages";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem("ta-lang");
      if (saved === "en" || saved === "es") return saved;
    } catch {
      // ignore
    }
    return "es";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("ta-lang", lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value = useMemo(() => {
    const dict = messages[lang] || messages.es;
    const t = (key, fallback = "") => {
      const parts = key.split(".");
      let cur = dict;
      for (const p of parts) {
        if (cur == null || typeof cur !== "object") return fallback || key;
        cur = cur[p];
      }
      return typeof cur === "string" ? cur : fallback || key;
    };
    return {
      lang,
      setLang: setLangState,
      toggleLang: () => setLangState((l) => (l === "es" ? "en" : "es")),
      t,
      m: dict,
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
