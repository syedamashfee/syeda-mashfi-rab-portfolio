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
      "Built a lightweight invoice management system using HTML and Google Sheets to automate monthly billing for 3 local clients, reducing manual effort by 60% and improving invoice accuracy.",
    technologies: ["HTML", "Google Sheets", "Automation"],
  },
  {
    title: "Flappy Bird Clone (Academic Project)",
    description:
      "Developed a browser-based Flappy Bird clone using JavaScript and HTML5 Canvas, optimized for 60+ FPS, and tested across major browsers. Reached over 500 users during internal launch/testing.",
    technologies: ["JavaScript", "HTML5 Canvas", "Game Loop Optimization"],
  },
  {
    title: "Responsive E-Commerce Website",
    description:
      "Created a fully responsive online store using HTML, CSS, and JavaScript with a mobile-first UX and cross-device compatibility, achieving a 95+ Google Lighthouse performance score.",
    technologies: ["HTML", "CSS", "JavaScript", "UX", "Lighthouse"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="site-container">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">
          Practical projects focused on automation, user experience, and web
          performance.
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
