import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Syeda Mashfi Rab for product, software, and technology opportunities.",
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="site-container">
        <Reveal>
          <h1 className="section-title">Contact</h1>
          <p className="section-subtitle">
            Open to internships, entry-level roles, and collaborative
            opportunities in product and technology.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="card p-6" delay={0.05}>
            <h2 className="text-lg font-semibold text-[var(--brand-strong)]">
              Contact Information
            </h2>
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              <li>
                <span className="font-semibold text-[var(--text)]">Email:</span>{" "}
                <a
                  className="focus-ring rounded text-[var(--brand)] underline underline-offset-4"
                  href="mailto:syedamashfee@gmail.com"
                >
                  syedamashfee@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">Phone:</span>{" "}
                <a
                  className="focus-ring rounded text-[var(--brand)] underline underline-offset-4"
                  href="tel:+8801790446387"
                >
                  +8801790446387
                </a>
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">Location:</span>{" "}
                Dhaka, Bangladesh
              </li>
              <li>
                <span className="font-semibold text-[var(--text)]">LinkedIn:</span>{" "}
                <a
                  className="focus-ring rounded text-[var(--brand)] underline underline-offset-4"
                  href="https://linkedin.com/in/syeda-mashfee"
                  rel="noreferrer"
                  target="_blank"
                >
                  linkedin.com/in/syeda-mashfee
                </a>
              </li>
            </ul>
          </Reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
