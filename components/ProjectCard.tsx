"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  highlights: string[];
};

export default function ProjectCard({
  title,
  description,
  technologies,
  impact,
  highlights,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <motion.article
        className="card group flex h-full flex-col p-5"
        initial={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ y: -4 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-semibold text-[var(--brand-strong)]">{title}</h2>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">{description}</p>
        <p className="mt-4 text-sm font-semibold text-[var(--brand)]">{impact}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-strong)]"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          className="focus-ring btn btn-secondary mt-6 w-fit"
          onClick={() => setOpen(true)}
          type="button"
        >
          Open Case Study
        </button>
      </motion.article>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="w-full max-w-2xl rounded-2xl border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-2xl"
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold text-[var(--brand-strong)]">{title}</h3>
                <button
                  aria-label="Close modal"
                  className="focus-ring btn btn-ghost px-3 py-1.5 text-xs"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  Close
                </button>
              </div>

              <p className="mt-4 leading-relaxed text-[var(--muted)]">{description}</p>

              <div className="mt-5 rounded-lg bg-[var(--brand-soft)] p-4">
                <p className="text-sm font-semibold text-[var(--brand-strong)]">Impact</p>
                <p className="mt-1 text-sm text-[var(--text)]">{impact}</p>
              </div>

              <div className="mt-5">
                <p className="text-sm font-semibold text-[var(--brand-strong)]">Highlights</p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--muted)]">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
