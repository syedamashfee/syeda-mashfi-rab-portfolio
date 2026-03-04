import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience in ICT research, networking support, VLAN configuration, and infrastructure documentation.",
};

export default function ExperiencePage() {
  return (
    <section className="section">
      <div className="site-container">
        <h1 className="section-title">Experience</h1>
        <p className="section-subtitle">
          Practical exposure to network infrastructure and ICT support in
          structured environments.
        </p>
        <article className="card mt-6 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[var(--brand)]">
            ICT Research and Networking Support
          </h2>
          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>
              • Assisted in enterprise network configuration and
              troubleshooting.
            </li>
            <li>
              • Configured VLANs and IP addressing for secure connectivity.
            </li>
            <li>
              • Contributed to ICT research and infrastructure documentation.
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
