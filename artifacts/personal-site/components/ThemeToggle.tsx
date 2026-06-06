"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setDark((v) => !v)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm"
      style={{ borderColor: "var(--line)", background: "var(--card)" }}
    >
      {dark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
