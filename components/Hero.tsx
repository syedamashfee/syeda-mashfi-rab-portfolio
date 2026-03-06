"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const badges = ["Product Thinking", "Web Engineering", "Automation"];

export default function Hero() {
  return (
    <section className="section">
      <div className="site-container grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Professional Portfolio
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[var(--brand-strong)] md:text-6xl">
            Syeda Mashfi Rab
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium leading-relaxed text-[var(--text)] md:text-xl">
            Aspiring Product-Focused Technologist building practical digital
            products with user empathy and measurable impact.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {badges.map((badge, index) => (
              <motion.span
                animate={{ opacity: 1, y: 0 }}
                className="glass-pill rounded-full px-3 py-1 text-xs font-semibold text-[var(--brand-strong)]"
                initial={{ opacity: 0, y: 8 }}
                key={badge}
                transition={{ delay: 0.12 + index * 0.07 }}
              >
                {badge}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="focus-ring btn btn-primary"
              href="/projects"
            >
              View Projects
            </Link>
            <Link
              className="focus-ring btn btn-secondary"
              href="/Syeda-Mashfi-Rab-Resume.pdf"
            >
              Download Resume
            </Link>
            <Link
              className="focus-ring btn btn-ghost"
              href="/contact"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="mx-auto w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="card dot-grid relative overflow-hidden p-3">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[var(--brand-soft)] blur-2xl" />
            <Image
              alt="Syeda Mashfi Rab profile"
              className="relative h-auto w-full rounded-xl object-cover"
              height={620}
              priority
              src="/profile-mashfee.jpg"
              width={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
