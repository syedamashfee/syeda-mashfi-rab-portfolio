import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Extracurricular",
  description:
    "Leadership and extracurricular activities of Syeda Mashfi Rab.",
};

const activities = [
  "General Secretary, IST Career Club (led 3 inter-departmental events)",
  "Secretary of Communication, IT Club BNMPC",
  "Volunteer, Career Carnival and Blood Donation Drive (IST Campus)",
  "Member, SCARS (Student Community for Action and Responsibility in Society)",
];

export default function ExtracurricularPage() {
  return (
    <section className="section">
      <div className="site-container">
        <Reveal>
          <h1 className="section-title">Extracurricular</h1>
          <p className="section-subtitle">
            Leadership and community involvement beyond formal academic and
            professional work.
          </p>
        </Reveal>
        <Reveal className="card mt-6 p-6 md:p-8" delay={0.06}>
          <ul className="list-disc space-y-3 pl-5 text-[var(--muted)]">
            {activities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
