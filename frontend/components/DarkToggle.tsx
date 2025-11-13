// components/DarkToggle.tsx
"use client";

import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    // initial read from localStorage only on client; fallback false
    if (typeof window === "undefined") return false;
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  // Sync <html> class whenever state changes
  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    } catch {}
  }, [isDark]);

  // Prevent flicker on first load: optional small effect to ensure class matches localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark") setIsDark(true);
      else if (saved === "light") setIsDark(false);
    } catch {}
  }, []);

  return (
    <button
      onClick={() => setIsDark((s) => !s)}
      className="rounded-full border px-3 py-2 text-sm transition hover:scale-105 dark:border-white/[.12]"
      aria-pressed={isDark}
    >
      {isDark ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}
