import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section">
      <div className="site-container grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            Professional Portfolio
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[var(--brand)] md:text-5xl">
            Syeda Mashfi Rab
          </h1>
          <p className="mt-4 text-lg font-medium text-[var(--text)] md:text-xl">
            Aspiring Product-Focused Technologist
          </p>
          <p className="mt-5 max-w-2xl text-[var(--muted)]">
            Computer Science graduate with hands-on experience in user-centric web
            applications, automation, and IT infrastructure. Focused on building
            impactful digital products with technical execution and user empathy.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              className="focus-ring rounded-md bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
              href="/projects"
            >
              View Projects
            </Link>
            <Link
              className="focus-ring rounded-md border border-[var(--brand)] px-4 py-2 text-sm font-semibold text-[var(--brand)] hover:bg-[var(--brand-soft)]"
              href="/Syeda-Mashfi-Rab-Resume.pdf"
            >
              Download Resume
            </Link>
            <Link
              className="focus-ring rounded-md border px-4 py-2 text-sm font-semibold hover:bg-[var(--brand-soft)]"
              href="/contact"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-xs">
          <div className="card p-3">
            <Image
              alt="Syeda Mashfi Rab profile"
              className="h-auto w-full rounded-lg object-cover"
              height={620}
              priority
              src="/profile-mashfee.jpg"
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
