"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="h-[1.2rem] w-[1.2rem]" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center transition-transform hover:scale-110 duration-200"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-gray-800 dark:text-gray-300" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-gray-800 dark:text-gray-300" />
      )}
    </button>
  );
}