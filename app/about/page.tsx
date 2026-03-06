import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Syeda Mashfi Rab: Computer Science background, product mindset, and technical experience in web apps, automation, and IT infrastructure.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="site-container">
        <Reveal>
          <h1 className="section-title">About</h1>
          <p className="section-subtitle">
            Aspiring product-focused technologist with a Computer Science
            background and practical experience in web development, automation,
            and infrastructure support.
          </p>
        </Reveal>

        <Reveal className="card mt-6 p-6 md:p-8" delay={0.05}>
          <h2 className="text-xl font-semibold text-[var(--brand-strong)]">
            Profile Summary
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Eager to contribute technical expertise, user empathy, and
            problem-solving to digital product development and improvement.
          </p>
        </Reveal>

        <Reveal className="card mt-6 p-6 md:p-8" delay={0.1}>
          <h2 className="text-xl font-semibold text-[var(--brand-strong)]">Education</h2>
          <ul className="mt-4 space-y-3 text-[var(--muted)]">
            <li>
              <span className="font-semibold text-[var(--text)]">
                B.Sc. in Computer Science & Engineering
              </span>{" "}
              - Institute of Science and Technology (2020 - November 2025), GPA
              3.52
            </li>
            <li>
              Relevant coursework: Data Structures, Algorithms, OOP, Web
              Development, AI
            </li>
            <li>
              <span className="font-semibold text-[var(--text)]">
                Higher Secondary Certificate
              </span>{" "}
              - Birshreshtha Noor Mohammad Public College, Dhaka (2019), GPA
              4.83
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
