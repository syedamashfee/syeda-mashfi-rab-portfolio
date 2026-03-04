"use client";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      aria-label="Toggle dark mode"
      className="focus-ring rounded-md border px-3 py-2 text-sm font-medium hover:opacity-85"
      onClick={toggleTheme}
      type="button"
    >
      Toggle Theme
    </button>
  );
}
