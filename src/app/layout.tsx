import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Minuka Dinsitha — Personal Portfolio",
    template: "%s — Minuka Dinsitha",
  },
  description: "Minuka Dinsitha — Cybersecurity undergraduate, developer, mathematics tutor, and aspiring entrepreneur based in Ganemulla, Sri Lanka.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col bg-background">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-full bg-ink px-6 py-3 text-background focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
