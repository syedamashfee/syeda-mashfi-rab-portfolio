import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects covering digital banking, Python analysis, networking, and SQL use cases.",
};

const projects = [
  {
    title: "Digital Banking Chatbot Prompt Design",
    description:
      "Designed structured prompts for a banking support chatbot to improve query handling quality and response consistency.",
    technologies: ["Prompt Engineering", "Fintech", "Customer Support Design"],
    githubUrl: "https://github.com/username/digital-banking-chatbot-prompts",
  },
  {
    title: "Banking Data Analysis with Python",
    description:
      "Analyzed sample banking transaction data to identify trends, anomalies, and reporting insights.",
    technologies: ["Python", "Pandas", "Data Visualization"],
    githubUrl: "https://github.com/username/banking-data-analysis-python",
  },
  {
    title: "Network Configuration Lab (VLAN and IP addressing)",
    description:
      "Built a network lab scenario with VLAN segmentation and IP planning for secure and structured connectivity.",
    technologies: ["Networking", "VLAN", "IP Addressing"],
    githubUrl: "https://github.com/username/network-configuration-lab",
  },
  {
    title: "SQL Banking Database Queries",
    description:
      "Created SQL queries for account, customer, and transaction datasets to support operational reporting.",
    technologies: ["SQL", "Database", "Data Retrieval"],
    githubUrl: "https://github.com/username/sql-banking-queries",
  },
];

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="site-container">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">
          Example project work aligned with digital banking, technology, and
          problem-solving across data and infrastructure.
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
