import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://glp1weightlossdallas.com";
const SUMMER_HOUSE_BOOK = "https://summerhousemedspa.com/contact";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | GLP-1 Weight Loss Dallas",
    default: "GLP-1 Weight Loss Dallas | Physician-Supervised Semaglutide & Tirzepatide",
  },
  description:
    "Physician-supervised GLP-1 weight loss programs in Dallas — semaglutide, tirzepatide, and structured support from a licensed medical team in Uptown.",
  openGraph: {
    siteName: "GLP-1 Weight Loss Dallas",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const NAV_LINKS = [
  { href: "/semaglutide", label: "Semaglutide" },
  { href: "/tirzepatide", label: "Tirzepatide" },
  { href: "/how-it-works", label: "How It Works" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="site-nav">
          <div className="container site-nav-inner">
            <a href="/" className="nav-brand">GLP-1 Weight Loss Dallas</a>
            <div className="nav-links">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
              <a
                href={SUMMER_HOUSE_BOOK}
                className="btn-primary"
                style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}
              >
                Book Consultation
              </a>
            </div>
          </div>
        </nav>

        {children}

        <footer className="site-footer">
          <div className="container">
            <div className="footer-inner">
              <div>
                <p className="footer-brand">GLP-1 Weight Loss Dallas</p>
                <p style={{ marginTop: "0.5rem", maxWidth: "360px" }}>
                  Physician-supervised weight loss programs at Summer House Medspa, Uptown Dallas.
                </p>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>Programs</p>
                <div className="footer-links" style={{ flexDirection: "column", gap: "0.5rem" }}>
                  {NAV_LINKS.map((link) => (
                    <a key={link.href} href={link.href}>{link.label}</a>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>Summer House Medspa</p>
                <div className="footer-links" style={{ flexDirection: "column", gap: "0.5rem" }}>
                  <a href="https://summerhousemedspa.com">summerhousemedspa.com</a>
                  <a href="https://summerhousemedspa.com/contact">Book a Consultation</a>
                  <a href="https://summerhousemedspa.com/about">About the Medical Team</a>
                </div>
              </div>
            </div>
            <div className="footer-legal">
              <p>
                This site provides general information about GLP-1 weight loss medications. It does not
                constitute medical advice. Consult a licensed physician before starting any weight
                management program. Programs offered through Summer House Medspa, Dallas TX.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                &copy; {new Date().getFullYear()} Summer House Medspa · Uptown Dallas, TX ·{" "}
                <a href="https://summerhousemedspa.com" style={{ color: "#a8b8cc" }}>summerhousemedspa.com</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
