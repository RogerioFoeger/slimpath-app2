import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SlimPath AI",
  description: "Your Personalized Solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* --- 1. VÍDEOS VTURB (Mantenha este) --- */}
        <Script 
          src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js" 
          strategy="afterInteractive" 
        />

        {/* --- 2. UTMIFY (Script Principal) --- */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          data-utmify-ignore-iframe=""
          data-utmify-is-cartpanda=""
        />

        {/* --- 3. UTMIFY (Pixel e ID) --- */}
        <Script id="utmify-pixel" strategy="afterInteractive">
          {`
            window.pixelId = "6958995fd393f5ff43238cae";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `}
        </Script>

      </body>
    </html>
  );
}