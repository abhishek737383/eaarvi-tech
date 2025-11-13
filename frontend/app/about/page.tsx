"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Target, Zap, Calendar } from "lucide-react";

export default function AboutPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50 md:dark:from-zinc-900 md:dark:to-zinc-800 py-12">
      <div className="mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl bg-white/60 md:dark:bg-zinc-900/50 p-8 md:p-12 shadow-xl backdrop-blur-sm">
          <div className="absolute -left-32 -top-20 h-64 w-64 rounded-full bg-gradient-to-tr from-indigo-300/30 via-pink-200/20 to-rose-200/0 blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl font-extrabold">Who We Are</h1>
              <p className="mt-4 text-zinc-600 md:dark:text-zinc-300 leading-relaxed">
                eAarvi Tech is a Performance Enablement & Training Consulting organization committed to transforming sales teams, professionals,
                and students into confident, performance-driven individuals.
              </p>

              <p className="mt-3 text-zinc-600 md:dark:text-zinc-300 leading-relaxed">
                Our programs are designed by professionals with over <strong>20 years</strong> of real sales and business experience — not just theory-based trainers.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white font-medium shadow hover:scale-[1.012] transition-transform"
                >
                  Schedule a Discussion
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 font-medium md:dark:border-zinc-700 hover:bg-zinc-100 md:dark:hover:bg-zinc-800 transition"
                >
                  Explore Programs
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="order-first md:order-last"
            >
              <div className="aspect-[16/10] w-full rounded-xl border border-zinc-100 md:dark:border-zinc-800 p-4 flex items-center justify-center bg-gradient-to-br from-white to-zinc-50 md:dark:from-zinc-900/40">
                <div className="w-full max-w-sm">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-500 p-8 text-white">
                      <h3 className="text-lg font-semibold">Performance & Field-led Training</h3>
                      <p className="mt-2 text-sm text-white/90">Practical role-plays, case-based learning and live field coaching.</p>
                    </div>
                    <div className="p-4 bg-white md:dark:bg-zinc-900">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-indigo-50 md:dark:bg-indigo-900/30 p-2">
                          <Briefcase className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium">Field Experience</div>
                          <div className="text-xs text-zinc-500 md:dark:text-zinc-400">Trainers with real sales experience</div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-zinc-500 md:dark:text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>Teams & Individuals</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>On-site & Live</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          <span>Outcome-focused</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          <span>Measurable Results</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Philosophy & Vision */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white/60 md:dark:bg-zinc-900/50 p-6 shadow"
          >
            <h4 className="text-sm font-semibold">Our Philosophy</h4>
            <p className="mt-3 text-zinc-600 md:dark:text-zinc-300 text-sm leading-relaxed">
              Sales and performance cannot be learned in theory. It’s learned in the field — with real customers, objections, and outcomes. All our programs
              include practical role-plays, case-based learning, and live field coaching.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white/60 md:dark:bg-zinc-900/50 p-6 shadow"
          >
            <h4 className="text-sm font-semibold">Our Vision</h4>
            <p className="mt-3 text-zinc-600 md:dark:text-zinc-300 text-sm leading-relaxed">
              To empower professionals, students, and organizations to achieve measurable business performance through practical, outcome-oriented learning and consulting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white/60 md:dark:bg-zinc-900/50 p-6 shadow"
          >
            <h4 className="text-sm font-semibold">Our Approach</h4>
            <ol className="mt-3 list-decimal list-inside text-sm text-zinc-600 md:dark:text-zinc-300 leading-relaxed">
              <li>Diagnose – Identify gaps in your sales process or team performance</li>
              <li>Design – Tailored training content and approach per team or industry</li>
              <li>Deliver – Field-experienced trainers conduct on-site and live modules</li>
              <li>Drive – Extended engagement with measurable results and reports</li>
            </ol>
          </motion.div>
        </section>

        {/* Founder */}
        <section className="mt-10 rounded-2xl bg-gradient-to-br from-white/60 to-zinc-50/60 md:dark:from-zinc-900/40 md:dark:to-zinc-800/40 p-6 shadow-md">
          <div className="md:flex md:items-center md:gap-8">
            <motion.div
              initial={{ x: -8, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <div className="h-36 w-36 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center text-white text-2xl font-semibold shadow-lg">
                {/* placeholder for founder image or initials */}
                YN
              </div>
            </motion.div>

            <div className="mt-4 md:mt-0">
              <h3 className="text-xl font-semibold">About the Founder</h3>
              <p className="mt-2 text-sm text-zinc-600 md:dark:text-zinc-300 leading-relaxed">
                Mr. Yateendra Shrivastava , Founder & Lead Trainer at eAarvi Tech, brings over 20 years of field sales and business management experience across engineering,
                construction, and technology industries. He has led high-performing sales teams, developed channel networks, and built practical training models
                that deliver measurable sales outcomes.
              </p>

              <div className="mt-4 flex gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white font-medium shadow hover:scale-[1.01] transition">
                  Connect with Us
                </a>

                <a href="/schedule" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 font-medium hover:bg-zinc-100 md:dark:border-zinc-700 transition">
                  Schedule a Discussion
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / footer CTA */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} className="rounded-xl bg-white/60 md:dark:bg-zinc-900/50 p-6 shadow text-center">
            <div className="text-2xl font-extrabold">+20</div>
            <div className="text-sm text-zinc-500 md:dark:text-zinc-400">Years of sales experience</div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="rounded-xl bg-white/60 md:dark:bg-zinc-900/50 p-6 shadow text-center">
            <div className="text-2xl font-extrabold">100+</div>
            <div className="text-sm text-zinc-500 md:dark:text-zinc-400">Teams & professionals trained</div>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="rounded-xl bg-white/60 md:dark:bg-zinc-900/50 p-6 shadow text-center">
            <div className="text-2xl font-extrabold">Measurable</div>
            <div className="text-sm text-zinc-500 md:dark:text-zinc-400">Outcome-driven results</div>
          </motion.div>
        </section>

        <div className="mt-12 text-center text-sm text-zinc-500">© {currentYear} eAarvi Tech — Built for performance</div>
      </div>
    </main>
  );
}
