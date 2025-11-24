"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionary, Language, Dictionary } from "../_lib/dictionary";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt-br");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language;
    if (storedLanguage && (storedLanguage === "pt-br" || storedLanguage === "en")) {
      setLanguage(storedLanguage);
    }
    setMounted(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Prevent hydration mismatch by rendering children only after mount, 
  // or accept that the initial render might differ. 
  // For a language toggle, it's better to render with a default and update, 
  // but to avoid flash of wrong content, we might want to wait.
  // However, for SEO and performance, we should render something.
  // Since this is a client component, the initial server render will use the default state ("pt-br").
  // If the user has "en" in local storage, it will switch on client side.
  
  const value = {
    language,
    setLanguage: handleSetLanguage,
    dict: dictionary[language],
  };

  if (!mounted) {
      // Optional: return null or a loader if you want to strictly wait for client side
      // But for SEO it's better to render default. 
      // We will render default (pt-br) and then useEffect will update it.
      // To avoid hydration errors, we can just render children.
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
