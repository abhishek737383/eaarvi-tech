// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "eAarvi Tech — Performance Enablement",
  description:
    "Practical sales training, on-field coaching and software upskilling for corporates, professionals and students.",
  viewport: "width=device-width, initial-scale=1",
  // theme-color helps Android & some browsers paint the toolbar color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7dddd" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        // keep body transparent so root background from CSS variables shows
        className="min-h-screen antialiased text-[var(--foreground)]"
        // safe-area insets so content doesn't overlap notches on phones
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          backgroundColor: "var(--background)",
        }}
      >
        {/* Site wrapper - vertical layout so footer sticks below content */}
        <div className="min-h-screen flex flex-col">
          {/* Navbar is a client component (it has "use client") */}
          <Navbar />

          {/* main content grows to fill available space */}
          <main className="flex-1 w-full">
            {/* small container inside main to keep consistent max width/padding */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">{children}</div>
          </main>

          {/* Footer is a client component */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
