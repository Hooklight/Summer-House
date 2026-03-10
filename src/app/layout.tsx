import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";

import { Analytics } from "@/components/analytics";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    images: [
      {
        url: "https://summerhousemedspa.com/images/salon-suite.webp",
        width: 1200,
        height: 630,
        alt: "Summer House Medspa treatment suite in Dallas",
      },
    ],
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
      <body className={`${spaceGrotesk.variable} ${fraunces.variable} antialiased`}>
        {children}
        {gaMeasurementId ? <Analytics measurementId={gaMeasurementId} /> : null}
      </body>
    </html>
  );
}
