import Hero from "@/components/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section pt-0">
        <div className="site-container space-y-6">
          <div className="card p-6 md:p-8">
            <h2 className="section-title">Professional Focus</h2>
            <p className="section-subtitle">
              Building practical, user-centric digital products using technical
              execution, product thinking, and data-driven decisions.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <article className="rounded-lg border p-4">
                <h3 className="font-semibold text-[var(--brand)]">
                  Product Development
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  User research, feature prioritization, roadmapping, and MVP
                  planning for meaningful product outcomes.
                </p>
              </article>
              <article className="rounded-lg border p-4">
                <h3 className="font-semibold text-[var(--brand)]">
                  Automation & Data
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Experience automating reporting workflows and handling
                  structured data for operations and decision support.
                </p>
              </article>
              <article className="rounded-lg border p-4">
                <h3 className="font-semibold text-[var(--brand)]">
                  Infrastructure & Operations
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Hands-on support in enterprise networking, VLAN
                  configuration, and ICT documentation.
                </p>
              </article>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="card p-6">
              <h3 className="text-lg font-semibold text-[var(--brand)]">
                Certifications & Training
              </h3>
              <p className="mt-3 text-[var(--muted)]">
                View full training history and certifications.
              </p>
              <Link
                className="focus-ring mt-4 inline-block rounded-md border border-[var(--brand)] px-4 py-2 text-sm font-semibold text-[var(--brand)] hover:bg-[var(--brand-soft)]"
                href="/certifications"
              >
                Open Certifications
              </Link>
            </article>

            <article className="card p-6">
              <h3 className="text-lg font-semibold text-[var(--brand)]">
                Leadership & Activities
              </h3>
              <p className="mt-3 text-[var(--muted)]">
                Explore extracurricular leadership and volunteer activities.
              </p>
              <Link
                className="focus-ring mt-4 inline-block rounded-md border border-[var(--brand)] px-4 py-2 text-sm font-semibold text-[var(--brand)] hover:bg-[var(--brand-soft)]"
                href="/extracurricular"
              >
                Open Extracurricular
              </Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
