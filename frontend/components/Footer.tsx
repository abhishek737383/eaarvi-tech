"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Mail, Phone, ShieldCheck, ArrowUpRight, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const [toast, setToast] = useState(null);
  const reduce = useReducedMotion();

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(null), 2600);
  }

  async function copy(text, label) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${label} copied`);
    } catch (e) {
      // fallback: select and prompt (rare case)
      showToast("Copy failed — please copy manually");
    }
  }

  const enter = reduce ? {} : { initial: { y: 6, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.28 } };

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-transparent">
      {/* full-width background strip */}
      <div className="w-full bg-gradient-to-b from-white/40 to-transparent dark:from-zinc-900/40">
        {/* centered inner container */}
        <div className="mx-full px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            {...enter}
            className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-zinc-900/50 p-5 md:p-6 shadow-sm backdrop-blur-sm"
          >
            <div className="absolute -right-16 -top-10 hidden md:block w-44 h-44 rounded-full bg-gradient-to-tr from-indigo-200/40 to-rose-200/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
              {/* brand */}
              <div className="flex items-start gap-3">
                <motion.div
                  {...(reduce ? {} : { initial: { scale: 0.96 }, animate: { scale: 1 }, transition: { type: "spring", stiffness: 160, damping: 16 } })}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-500 text-white font-semibold text-lg shadow"
                  aria-hidden
                >
                  ET
                </motion.div>

                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">eAarvi Tech</div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">Performance Enablement & Training</div>

                  <div className="mt-3 flex items-center gap-2 text-xs">
                    <a href="mailto:business@eaarvitech.com" className="inline-flex items-center gap-2">
                      <Mail className="w-4 h-4 text-indigo-600" />
                      <span className="hidden sm:inline text-zinc-600 dark:text-zinc-300">business@eaarvitech.com</span>
                      <span className="sm:hidden text-zinc-600 dark:text-zinc-300">Email</span>
                    </a>

                    <a href="tel:+918433965315" className="inline-flex items-center gap-2 ml-2">
                      <Phone className="w-4 h-4 text-indigo-600" />
                      <span className="hidden sm:inline text-zinc-600 dark:text-zinc-300">+91-84339-65315</span>
                      <span className="sm:hidden text-zinc-600 dark:text-zinc-300">Call</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* middle - actions / quick links */}
              <div className="flex flex-col items-start md:items-center gap-3">
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => copy("business@eaarvitech.com", "Email")}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/40 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-sm"
                    aria-label="Copy email"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline">Copy Email</span>
                    <span className="sm:hidden">Copy</span>
                  </button>

                  <button
                    onClick={() => copy("+918433965315", "Phone")}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/40 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition text-sm"
                    aria-label="Copy phone"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="hidden sm:inline">Copy Phone</span>
                    <span className="sm:hidden">Copy</span>
                  </button>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:opacity-95 transition"
                  >
                    Contact form
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 text-center md:text-center">
                  Quick actions — we typically reply within 1 business day.
                </div>
              </div>

              {/* right - legal + social */}
              <div className="flex flex-col items-start md:items-end gap-3">
                <div className="flex gap-3">
                  <a href="/privacy" className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-indigo-600">Privacy Policy</a>
                  <a href="/terms" className="text-sm text-zinc-600 dark:text-zinc-300 hover:text-indigo-600">Terms of Service</a>
                </div>

                <div className="flex items-center gap-3">
                  {/* social icons - always visible on mobile as icons */}
                  <a
                    href="https://www.linkedin.com/company/eaarvitech"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/40 dark:bg-zinc-900/40 hover:scale-105 transition-transform shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 text-indigo-700" />
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCXXXXX" // replace as needed
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/40 dark:bg-zinc-900/40 hover:scale-105 transition-transform shadow-sm"
                  >
                    <Youtube className="w-4 h-4 text-red-600" />
                  </a>

                  {/* larger label link for desktop */}
                  <a
                    href="https://www.linkedin.com/company/eaarvitech"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/30 dark:bg-zinc-900/30 hover:bg-white/50 transition text-sm"
                  >
                    Follow on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* bottom divider + small note */}
            <div className="mt-4 border-t border-zinc-100 dark:border-zinc-800 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure payments and trusted training</span>
              </div>

              <div>© {new Date().getFullYear()} eAarvi Tech — Built with care</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.22 }}
            className="fixed right-4 bottom-6 z-50 rounded-md bg-zinc-900/95 px-4 py-2 text-sm text-white shadow-lg"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
