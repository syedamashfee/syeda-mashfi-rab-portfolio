"use client";

import { AnimatePresence, motion } from "framer-motion";
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
  { href: "/certifications", label: "Certifications" },
  { href: "/extracurricular", label: "Extracurricular" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-xl">
      <nav className="site-container flex min-h-18 items-center justify-between gap-4 py-2">
        <Link className="focus-ring rounded-md" href="/">
          <span className="text-base font-semibold tracking-tight text-[var(--brand-strong)] md:text-lg">
            Syeda Mashfi Rab
          </span>
        </Link>

        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          className="focus-ring btn btn-secondary md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          type="button"
        >
          {open ? "Close" : "Menu"}
        </button>

        <div className="hidden items-center gap-2 md:flex md:flex-wrap md:justify-end">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                className={`focus-ring relative rounded-lg px-3 py-2 text-sm font-medium ${
                  active
                    ? "text-[var(--brand-strong)]"
                    : "text-[var(--muted)] hover:text-[var(--brand-strong)]"
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}
                {active ? (
                  <motion.span
                    className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand)]"
                    layoutId="active-nav-link"
                  />
                ) : null}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="site-container overflow-hidden border-t border-[var(--border)] pb-4 pt-2 md:hidden"
            exit={{ opacity: 0, height: 0 }}
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            role="menu"
          >
            <div className="grid gap-1.5">
              {navLinks.map((link, index) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    animate={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -10 }}
                    key={link.href}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      className={`focus-ring rounded-lg px-3 py-2 text-sm font-medium ${
                        active
                          ? "bg-[var(--brand-soft)] text-[var(--brand-strong)]"
                          : "text-[var(--muted)] hover:bg-[var(--brand-soft)] hover:text-[var(--brand-strong)]"
                      }`}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      role="menuitem"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-1">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
