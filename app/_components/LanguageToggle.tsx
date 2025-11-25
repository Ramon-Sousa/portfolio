"use client";

import * as React from "react";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "../_context/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const nextLanguage = language === "pt-br" ? "en" : "pt-br";
    setLanguage(nextLanguage);
  };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`text-lg transition-opacity duration-300 ${
          language === "pt-br" ? "opacity-100" : "opacity-50"
        }`}
      >
        🇧🇷
      </span>
      <Switch
        onCheckedChange={toggleLanguage}
        checked={language === "en"}
        aria-label="Toggle language"
      />
      <span
        className={`text-lg transition-opacity duration-300 ${
          language === "en" ? "opacity-100" : "opacity-50"
        }`}
      >
        🇺🇸
      </span>
    </div>
  );
}
