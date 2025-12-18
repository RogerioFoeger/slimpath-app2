import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlimPath AI - Discover Your Metabolism Type",
  description: "Transform your habits with AI-powered personalized weight loss guidance tailored to your unique metabolic profile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

