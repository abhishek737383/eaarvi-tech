"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/partners", label: "Partners" }, // Add this line
  { href: "/clients", label: "NewsRoom" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  return (
    <header
      ref={containerRef}
      className="sticky top-0 z-50 backdrop-blur bg-white/70 shadow-md"
      role="banner"
    >
      <div className="mx-full px-4 md:px-6 flex items-center justify-between h-16">
        {/* ---- LOGO SECTION ---- */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Go to home">
          <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.jpeg"
              alt="eAarviTech Logo"
              fill
              className="object-contain rounded-lg shadow-sm"
              sizes="(max-width: 768px) 40px, 48px"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="font-semibold text-slate-900 text-lg tracking-tight">eAarviTech</div>
            <div className="text-xs text-slate-500">Performance Enablement</div>
          </div>
        </Link>

        {/* ---- DESKTOP NAV ---- */}
        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Primary navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative px-2 py-1 rounded-md group outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                {l.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 bg-gradient-to-r from-indigo-500 to-purple-500 rounded" />
            </Link>
          ))}
        </nav>

        {/* ---- MOBILE MENU BUTTON ---- */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative w-10 h-10 flex items-center justify-center rounded-lg border bg-white/60 shadow-sm transition-shadow duration-200 hover:shadow-md"
            type="button"
          >
            <span
              className={`block w-5 h-px bg-slate-700 transition-transform duration-200 ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`block w-5 h-px bg-slate-700 absolute transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-px bg-slate-700 transition-transform duration-200 ${
                open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* ---- MOBILE MENU ---- */}
      <div
        id="mobile-menu"
        className={`md:hidden px-4 pb-4 overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 transform scale-100" : "max-h-0 opacity-0 transform scale-95"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-3 mt-3" aria-label="Mobile navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors duration-150"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}