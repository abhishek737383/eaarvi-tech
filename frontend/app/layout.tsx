/* -------------------------
FILE: app/layout.tsx
Put this exact file at: /app/layout.tsx
------------------------- */

import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "eAarviTech",
  description: "Business Consultant, Sales Trainer, Business Development Collaborator, and On-field Sales Trainer.",
  keywords: "business consultant, sales trainer, business development, on-field sales training, digital marketing, sales strategy, business growth, corporate training",
  authors: [{ name: "eAarviTech" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "eAarviTech",
    description: "Business Consultant, Sales Trainer, Business Development Collaborator, and On-field Sales Trainer",
    type: "website",
    locale: "en_US",
    siteName: "eAarviTech",
    url: "https://www.eaarvitech.com/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "eAarviTech - Business Consultant & Sales Trainer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eAarviTech - Business Consultant & Sales Trainer",
    description: "Business Consultant, Sales Trainer, Business Development Collaborator, and On-field Sales Trainer",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://www.eaarvitech.com/"),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.eaarvitech.com/" />
        <meta name="google-site-verification" content="your-verification-code" />
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body
        className="min-h-screen antialiased text-foreground bg-background font-sans"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        }}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1 w-full animate-fade-in">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 page-root">
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}