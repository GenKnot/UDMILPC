import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://Montrealic.ca"),
  title: { default: "Collège International Montréal", template: "%s" },
  description: "Language, academic foundation, and university pathway programs in Montréal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>{children}</body>
    </html>
  );
}
