import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import FloatingElements from "@/components/FloatingElements";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const siteUrl = "https://syeda-mashfee-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Syeda Mashfi Rab | Product & Technology Portfolio",
    template: "%s | Syeda Mashfi Rab",
  },
  description:
    "Professional portfolio of Syeda Mashfi Rab, focused on product thinking, web development, automation, and digital solutions.",
  keywords: [
    "Syeda Mashfi Rab",
    "Product Management",
    "Web Development",
    "Automation",
    "JavaScript",
    "Python",
    "Portfolio",
  ],
  openGraph: {
    title: "Syeda Mashfi Rab Portfolio",
    description:
      "Portfolio focused on product mindset, user-centric web apps, and practical automation.",
    url: siteUrl,
    siteName: "Syeda Mashfi Rab Portfolio",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
(function() {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = storedTheme ? storedTheme === "dark" : prefersDark;
  document.documentElement.classList.toggle("dark", shouldUseDark);
})();`;

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable}`} id="top">
        <FloatingElements />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
