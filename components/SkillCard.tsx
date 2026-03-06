"use client";

import { motion } from "framer-motion";

type SkillCardProps = {
  category: string;
  skills: string[];
};

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <motion.article
      className="card h-full p-5"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -3 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-xl font-semibold text-[var(--brand-strong)]">{category}</h2>
      <ul className="mt-4 space-y-2 text-[var(--muted)]">
        {skills.map((skill) => (
          <li className="flex items-start gap-2" key={skill}>
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
