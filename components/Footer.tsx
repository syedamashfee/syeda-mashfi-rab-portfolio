import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-8 border-t py-6">
      <div className="site-container flex flex-col items-start justify-between gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center">
        <p>Copyright {new Date().getFullYear()} Syeda Mashfi Rab. All rights reserved.</p>
        <div className="flex gap-4">
          <Link className="focus-ring rounded hover:text-[var(--brand)]" href="/">
            Home
          </Link>
          <Link
            className="focus-ring rounded hover:text-[var(--brand)]"
            href="/contact"
          >
            Contact
          </Link>
          <a className="focus-ring rounded hover:text-[var(--brand)]" href="#top">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
