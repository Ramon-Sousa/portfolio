"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useEffect } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    // Altera o tema com base no tema atual
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  // Armazena o tema atual no localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("dark");
    }
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-opacity duration-300 text-gray-800 dark:text-gray-300`}
        aria-hidden="true" // Esconde o ícone da lua para leitores de tela quando não está visível
      />
      <Switch
        onCheckedChange={toggleTheme}
        checked={theme === "light"}
        aria-label="Toggle theme" // Acessibilidade
      />

      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-opacity duration-300 text-gray-800 dark:text-gray-300`}
        aria-hidden="true" // Esconde o ícone do sol para leitores de tela quando não está visível
      />
    </div>
  );
}