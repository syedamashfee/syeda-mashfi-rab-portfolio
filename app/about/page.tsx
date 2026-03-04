import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Syeda Mashfee's background in banking operations, KYC, digital systems, and programming.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="site-container">
        <h1 className="section-title">About</h1>
        <p className="section-subtitle">
          I am interested in the intersection of banking, technology, and
          digital financial systems. My learning path combines practical banking
          understanding with technical skills that support modern financial
          innovation.
        </p>
        <div className="card mt-6 p-6 md:p-8">
          <h2 className="text-xl font-semibold text-[var(--brand)]">
            Knowledge Areas
          </h2>
          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>• Banking operations and financial service workflows</li>
            <li>• KYC compliance and documentation awareness</li>
            <li>• Digital banking systems and process understanding</li>
            <li>• Database fundamentals and structured data handling</li>
            <li>• Programming foundations for technical problem solving</li>
          </ul>
          <p className="mt-5 text-[var(--muted)]">
            My goal is to contribute to digital banking innovation and fintech
            solutions by combining operational clarity with technology-driven
            execution.
          </p>
        </div>
      </div>
    </section>
  );
}
