import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const siteUrl = "https://syeda-mashfee-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Syeda Mashfee | Digital Banking & Technology Portfolio",
    template: "%s | Syeda Mashfee",
  },
  description:
    "Professional portfolio of Syeda Mashfee, aspiring digital banking and technology professional.",
  keywords: [
    "Syeda Mashfee",
    "Digital Banking",
    "Fintech",
    "Data Analysis",
    "Programming",
    "Networking",
  ],
  openGraph: {
    title: "Syeda Mashfee Portfolio",
    description:
      "Modern professional portfolio focused on digital banking, fintech, programming, and analytics.",
    url: siteUrl,
    siteName: "Syeda Mashfee Portfolio",
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
      <body id="top">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
