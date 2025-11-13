/* -------------------------
FILE: app/layout.tsx
Put this exact file at: /app/layout.tsx
------------------------- */


import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
title: "eAarvi Tech",
description:
"Practical sales training, on-field coaching and software upskilling for corporates, professionals and students.",
viewport: "width=device-width, initial-scale=1",
};


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
{/*
Important: keep the body transparent (we set the page background on html/#__next)
Also add the Tailwind class that uses the CSS variable as a safety net: bg-[var(--background)]
*/}
<body
className="min-h-screen antialiased text-[var(--foreground)] bg-[var(--background)]"
style={{
paddingTop: "env(safe-area-inset-top)",
paddingBottom: "env(safe-area-inset-bottom)",
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