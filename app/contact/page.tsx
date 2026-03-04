import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Syeda Mashfee for digital banking, fintech, and technology opportunities.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="site-container">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle">
          Open to internships, entry-level roles, and collaborative
          opportunities in banking technology and fintech.
        </p>
        <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="card p-6">
            <h2 className="text-lg font-semibold text-[var(--brand)]">
              Contact Information
            </h2>
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              <li>
                <span className="font-semibold text-[var(--text)]">Email:</span>{" "}
                <a
                  className="focus-ring rounded text-[var(--brand)] underline underline-offset-4"
                  href="mailto:syeda.mashfee@example.com"
                >
                  syeda.mashfee@example.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">LinkedIn:</span>{" "}
                <a
                  className="focus-ring rounded text-[var(--brand)] underline underline-offset-4"
                  href="https://linkedin.com/in/your-profile"
                  rel="noreferrer"
                  target="_blank"
                >
                  linkedin.com/in/your-profile
                </a>
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">GitHub:</span>{" "}
                <a
                  className="focus-ring rounded text-[var(--brand)] underline underline-offset-4"
                  href="https://github.com/your-username"
                  rel="noreferrer"
                  target="_blank"
                >
                  github.com/your-username
                </a>
              </li>
            </ul>
          </aside>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
