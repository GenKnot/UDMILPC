import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://Montrealic.ca"),
  title: { default: "Collège International Montréal", template: "%s" },
  description: "Study in Montréal at Collège International Montréal — offering language preparation, academic foundation, and university pathway programs on the Université de Montréal campus.",
  openGraph: {
    siteName: "Collège International Montréal",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Collège International Montréal" }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
