import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HitBrand Media | Branding, Websites & Growth Marketing",
  description:
    "HitBrand Media helps businesses grow with premium branding, websites, social media, SEO, paid ads, and AI-powered marketing systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
