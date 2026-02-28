import type { Metadata } from "next";
import { Jost, Libre_Baskerville } from "next/font/google";

import { Analytics } from "@/components/analytics";

import "leaflet/dist/leaflet.css";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const googleVerificationToken = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://summerhousemedspa.com"),
  title: "Summer House Medspa | Dallas Natural-Looking Aesthetic and Wellness Care",
  description:
    "Summer House Medspa provides natural-looking Botox, filler, laser, GLP-1 weight-loss, and peptide wellness programs in Dallas, TX.",
  ...(googleVerificationToken
    ? {
        verification: {
          google: googleVerificationToken,
        },
      }
    : {}),
  openGraph: {
    type: "website",
    url: "https://summerhousemedspa.com",
    title: "Summer House Medspa | Dallas Natural-Looking Aesthetic and Wellness Care",
    description:
      "Boutique Dallas medspa focused on natural injectable results, advanced laser care, and medically supervised wellness.",
    siteName: "Summer House Medspa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summer House Medspa | Dallas",
    description:
      "Natural-results Botox, filler, laser, and medically supervised wellness care in Dallas, TX.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body className={`${jost.variable} ${libreBaskerville.variable} antialiased`}>
        {children}
        {gaMeasurementId ? <Analytics measurementId={gaMeasurementId} /> : null}
      </body>
    </html>
  );
}
