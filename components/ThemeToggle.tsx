"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setIsDark(nextTheme === "dark");
  };

  return (
    <button
      aria-label="Toggle dark mode"
      className="focus-ring btn btn-secondary"
      onClick={toggleTheme}
      type="button"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
