import type { Metadata } from "next";
import SkillCard from "@/components/SkillCard";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Skills in banking operations, programming, SQL, networking, and technical support.",
};

const skillGroups = [
  {
    category: "Banking & Finance",
    skills: [
      "Banking operations",
      "KYC compliance",
      "Digital banking systems",
      "Financial documentation",
    ],
  },
  {
    category: "Programming",
    skills: ["Python", "JavaScript", "C", "C++"],
  },
  {
    category: "Technical Skills",
    skills: [
      "SQL",
      "Database fundamentals",
      "Networking basics",
      "System troubleshooting",
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="site-container">
        <h1 className="section-title">Skills</h1>
        <p className="section-subtitle">
          A balanced profile combining banking domain knowledge with programming
          and technical infrastructure fundamentals.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard
              category={group.category}
              key={group.category}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
