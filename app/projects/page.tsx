import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Syeda Mashfi Rab in automation, web development, and browser-based game engineering.",
};

const projects = [
  {
    title: "Invoice Automation Bot for F-Commerce Clients",
    description:
      "Built a lightweight invoice management system using HTML and Google Sheets to automate monthly billing workflows for local clients.",
    technologies: ["HTML", "Google Sheets", "Automation"],
    impact:
      "Reduced manual billing effort by 60% while improving monthly invoice accuracy.",
    highlights: [
      "Mapped the full billing process and removed repetitive manual copy tasks.",
      "Added structured spreadsheet formulas and validation to reduce entry errors.",
      "Designed a reusable monthly workflow suitable for multiple clients.",
    ],
  },
  {
    title: "Flappy Bird Clone (Academic Project)",
    description:
      "Developed a browser-based Flappy Bird clone using JavaScript and HTML5 Canvas with smooth gameplay and reliable browser performance.",
    technologies: ["JavaScript", "HTML5 Canvas", "Game Loop Optimization"],
    impact:
      "Maintained 60+ FPS target and reached 500+ users in internal launch/testing.",
    highlights: [
      "Built physics and collision logic with a predictable frame update cycle.",
      "Optimized render loops for smooth motion across laptop and desktop browsers.",
      "Captured user testing feedback and tuned difficulty curves for engagement.",
    ],
  },
  {
    title: "Responsive E-Commerce Website",
    description:
      "Created a fully responsive online store with a mobile-first user experience and cross-device compatibility.",
    technologies: ["HTML", "CSS", "JavaScript", "UX", "Lighthouse"],
    impact:
      "Achieved a 95+ Google Lighthouse performance score on core pages.",
    highlights: [
      "Structured layouts with a mobile-first approach and clear visual hierarchy.",
      "Improved loading and image strategies to raise performance scores.",
      "Tested key flows across screen sizes and browsers for consistent behavior.",
    ],
  },
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="site-container">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">
          Practical projects focused on automation, user experience, and web
          performance. Open each card to view the case-study modal.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
