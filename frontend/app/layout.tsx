// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Your Site",
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f2f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen antialiased text-[var(--foreground)] bg-[var(--background)]"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          backgroundColor: "var(--background)",
        }}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full">
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
