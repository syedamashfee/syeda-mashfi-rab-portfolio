import type { Metadata } from "next";
import SkillCard from "@/components/SkillCard";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Comprehensive skills of Syeda Mashfi Rab across banking, technology, analytics, product, and professional competencies.",
};

const skillGroups = [
  {
    category: "Banking & Financial Basics",
    skills: [
      "Banking operations (basic)",
      "KYC and compliance awareness",
      "Financial documentation handling",
      "Transaction process understanding",
      "Digital banking systems familiarity",
    ],
  },
  {
    category: "Programming & Technical Foundation",
    skills: [
      "Python (fundamentals)",
      "JavaScript (fundamentals)",
      "C",
      "C++",
      "SQL (basic)",
      "Database fundamentals",
      "System troubleshooting",
      "Networking basics",
      "Digital system familiarity",
    ],
  },
  {
    category: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React (basic)",
      "Bootstrap",
    ],
  },
  {
    category: "Databases & Data Handling",
    skills: [
      "MySQL",
      "Firebase (basic)",
      "MS Excel (data analysis and reporting)",
      "Data handling in Google Sheets",
      "Data validation",
      "Record maintenance",
      "MIS basics",
    ],
  },
  {
    category: "Product Skills",
    skills: [
      "User research",
      "Roadmapping",
      "Agile methodology",
      "Feature prioritization",
      "MVP planning",
      "Customer support orientation",
    ],
  },
  {
    category: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Google Colab",
      "Canva",
      "Notion",
      "Jira",
      "Trello",
      "Figma (basic)",
      "Miro (basic)",
      "Google Analytics (basic)",
    ],
  },
  {
    category: "Analytical Skills",
    skills: [
      "Market research",
      "Data analysis",
      "Reporting",
      "Data standardization",
      "Problem solving",
    ],
  },
  {
    category: "Professional Competencies",
    skills: [
      "Communication skills",
      "Team collaboration",
      "Teamwork",
      "Adaptability",
      "Time management",
      "Customer service orientation",
    ],
  },
];

export default function SkillsPage() {
  return (
    <section className="section">
      <div className="site-container">
        <h1 className="section-title">Skills</h1>
        <p className="section-subtitle">
          Full skill set combining banking knowledge, technical foundations,
          product thinking, analytics, and workplace competencies.
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
