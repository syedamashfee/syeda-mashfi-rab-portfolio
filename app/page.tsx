import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="section pt-0">
        <div className="site-container card p-6 md:p-8">
          <h2 className="section-title">Professional Focus</h2>
          <p className="section-subtitle">
            Building a career at the intersection of banking operations and
            modern technology with practical knowledge in compliance, data,
            software, and digital systems.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-lg border p-4">
              <h3 className="font-semibold text-[var(--brand)]">
                Digital Banking
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Interest in digital financial workflows, user experience, and
                operational efficiency.
              </p>
            </article>
            <article className="rounded-lg border p-4">
              <h3 className="font-semibold text-[var(--brand)]">
                Data &amp; Programming
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Hands-on learning in Python, JavaScript, C/C++, and database
                fundamentals for problem solving.
              </p>
            </article>
            <article className="rounded-lg border p-4">
              <h3 className="font-semibold text-[var(--brand)]">
                Networking &amp; ICT
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">
                Practical experience in network setup, VLAN segmentation, and
                documentation for secure connectivity.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
