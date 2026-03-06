import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-[var(--border)] py-8">
      <div className="site-container flex flex-col items-start justify-between gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center">
        <p>Copyright {new Date().getFullYear()} Syeda Mashfi Rab. All rights reserved.</p>
        <div className="flex gap-4">
          <Link className="focus-ring rounded hover:text-[var(--brand-strong)]" href="/">
            Home
          </Link>
          <Link
            className="focus-ring rounded hover:text-[var(--brand-strong)]"
            href="/contact"
          >
            Contact
          </Link>
          <a className="focus-ring rounded hover:text-[var(--brand-strong)]" href="#top">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
