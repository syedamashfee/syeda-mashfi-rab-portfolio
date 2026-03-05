import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Syeda Mashfi Rab in IT infrastructure and MIS operations.",
};

export default function ExperiencePage() {
  return (
    <section className="section">
      <div className="site-container">
        <h1 className="section-title">Experience</h1>
        <p className="section-subtitle">
          Internship experience across infrastructure operations and management
          information systems.
        </p>

        <div className="mt-6 grid gap-5">
          <article className="card p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[var(--brand)]">
              IT Infrastructure Intern
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Bangladesh Computer Council | January 2026 - February 2026
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
              <li>Assisted in enterprise network configuration and troubleshooting.</li>
              <li>Configured VLANs and IP addressing for secure connectivity.</li>
              <li>Contributed to ICT research and infrastructure documentation.</li>
            </ul>
          </article>

          <article className="card p-6 md:p-8">
            <h2 className="text-xl font-semibold text-[var(--brand)]">MIS Intern</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Ostello India Pvt. Ltd. | June 2022 - October 2022
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
              <li>
                Streamlined internal reporting using Google Apps Script,
                reducing manual work by 30%.
              </li>
              <li>Supported MIS documentation and data standardization workflows.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
