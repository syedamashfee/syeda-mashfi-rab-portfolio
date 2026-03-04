"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b bg-[var(--surface)]/95 backdrop-blur">
      <nav className="site-container flex min-h-16 items-center justify-between gap-4 py-2">
        <Link
          className="focus-ring rounded text-base font-bold text-[var(--brand)]"
          href="/"
        >
          Syeda Mashfee
        </Link>
        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          className="focus-ring rounded border px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          Menu
        </button>
        <div className="hidden items-center gap-3 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                className={`focus-ring rounded px-2 py-1 text-sm font-medium ${
                  active
                    ? "text-[var(--brand)] underline underline-offset-4"
                    : "text-[var(--muted)] hover:text-[var(--brand)]"
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
      {open ? (
        <div
          className="site-container border-t pb-4 pt-2 md:hidden"
          id="mobile-nav"
          role="menu"
        >
          <div className="grid gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  className={`focus-ring rounded px-2 py-2 text-sm font-medium ${
                    active
                      ? "bg-[var(--brand-soft)] text-[var(--brand)]"
                      : "text-[var(--muted)] hover:bg-[var(--brand-soft)] hover:text-[var(--brand)]"
                  }`}
                  href={link.href}
                  key={link.href}
                  onClick={() => setOpen(false)}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-1">
              <ThemeToggle />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
