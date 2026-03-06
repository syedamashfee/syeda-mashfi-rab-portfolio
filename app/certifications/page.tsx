import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Certifications and training completed by Syeda Mashfi Rab.",
};

const certifications = [
  "UI/UX Design Career Track Program (Ostad, ongoing)",
  "Network of Operations, Research and Development (Bangladesh Computer Council, 2026)",
  "Product Management Fundamentals (Keeron, 2025)",
  "Digital Marketing Basics (Google Garage, 2024)",
  "SEO & WordPress Training (LEDP Bangladesh, 2024)",
  "Intro to Coding: From Zero to One (Programming Club of IST, 2024)",
  "Python Programming & Google Data Analytics (Coursera, 2022)",
  "MS Office & Presentation Boost Up Training (Business & Communication Club of IST, 2022)",
];

export default function CertificationsPage() {
  return (
    <section className="section">
      <div className="site-container">
        <Reveal>
          <h1 className="section-title">Certifications</h1>
          <p className="section-subtitle">
            Training programs completed across product, technical, and professional
            development areas.
          </p>
        </Reveal>
        <Reveal className="card mt-6 p-6 md:p-8" delay={0.06}>
          <ul className="list-disc space-y-3 pl-5 text-[var(--muted)]">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
