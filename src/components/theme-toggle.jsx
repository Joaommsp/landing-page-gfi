import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-zinc-300 dark:border-zinc-600 
                 bg-white dark:bg-zinc-800 
                 text-zinc-700 dark:text-zinc-300
                 hover:bg-zinc-50 dark:hover:bg-zinc-700
                 transition-colors duration-200"
      aria-label={`Trocar para tema ${isDark ? "claro" : "escuro"}`}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

// Versão com texto
export function ThemeToggleWithText() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-lg 
                 bg-zinc-100 dark:bg-zinc-800 
                 text-zinc-700 dark:text-zinc-300
                 hover:bg-zinc-200 dark:hover:bg-zinc-700
                 transition-colors duration-200"
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4" />
          <span>Modo Claro</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4" />
          <span>Modo Escuro</span>
        </>
      )}
    </button>
  );
}
