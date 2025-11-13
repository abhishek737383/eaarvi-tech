"use client";

import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Briefcase, MapPin, Clock, Layers, BookOpen, Download, Play } from "lucide-react";

/* ---------- simple animation variants (fast & snappy) ---------- */
const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, when: "beforeChildren", duration: 0.28 },
  },
} as const;
const itemVariant = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28 } },
} as const;

/* ---------- Types ---------- */
type AccordionProps = {
  title: string;
  children?: ReactNode;
};

type ServiceCardProps = {
  title: string;
  Icon: React.ComponentType<any>;
  children?: ReactNode;
  accent?: string;
};

/* ---------- Accordion (accessible, animated) ---------- */
function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="rounded-lg border border-zinc-100 md:dark:border-zinc-800 overflow-hidden">
      <button
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-4 py-3 bg-white md:dark:bg-zinc-900/60 text-left text-sm font-medium md:dark:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: reduce ? 0 : 0.18 }}
          className="inline-block"
          aria-hidden
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.22 }}
            className="px-4 pt-3 pb-4 bg-white/60 md:dark:bg-zinc-900/50 text-sm text-zinc-600 md:dark:text-zinc-300"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- ServiceCard (compact + responsive) ---------- */
function ServiceCard({ title, Icon, children, accent = "from-indigo-50 to-indigo-100" }: ServiceCardProps) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      variants={itemVariant}
      whileHover={reduce ? {} : { y: -6, boxShadow: "0 10px 30px rgba(2,6,23,0.08)" }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="rounded-2xl p-5 md:p-6 bg-white/70 md:dark:bg-zinc-900/50 border border-zinc-100 md:dark:border-zinc-800 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className={`rounded-xl p-3 bg-gradient-to-br ${accent} flex items-center justify-center shrink-0`}>
          <Icon className="h-5 w-5 text-white" />
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 md:dark:text-zinc-100">{title}</h3>
          <p className="mt-2 text-sm text-zinc-600 md:dark:text-zinc-300 leading-relaxed">{children}</p>
        </div>
      </div>
    </motion.article>
  );
}

/* ---------- Main page ---------- */
export default function ServicesPage() {
  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-white to-zinc-50 md:dark:from-zinc-900 md:dark:to-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={containerVariants}
          className="rounded-3xl bg-white/70 md:dark:bg-zinc-900/50 p-6 sm:p-8 md:p-10 shadow-lg"
        >
          <div className="md:flex md:items-center md:justify-between gap-6">
            <motion.div variants={itemVariant} className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 md:dark:text-zinc-100">
                Services & Training Programs
              </h1>
              <p className="mt-3 text-sm sm:text-base text-zinc-600 md:dark:text-zinc-300">
                eAarvi Tech offers short-term training, extended consulting engagements and technical software training —
                designed for measurable business outcomes and real-world adoption.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white font-medium shadow-sm hover:shadow-md transition-shadow"
                >
                  Request Custom Proposal
                </a>

                <a
                  href="/contact"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 md:dark:border-zinc-700 px-3 py-2 font-medium hover:bg-zinc-100 md:dark:hover:bg-zinc-800 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download Brochure
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-200 md:dark:border-zinc-700 px-3 py-2 font-medium hover:bg-zinc-100 md:dark:hover:bg-zinc-800 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  Book a Demo
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariant} className="mt-6 md:mt-0 md:w-96">
              <div className="rounded-xl overflow-hidden border border-zinc-100 md:dark:border-zinc-800 shadow-sm bg-gradient-to-br from-indigo-600 to-purple-500 text-white p-5">
                <div className="text-xs font-semibold">Featured</div>
                <div className="mt-2 text-lg font-bold">3-Month Extended Sales Consulting</div>
                <p className="mt-2 text-sm text-white/90">Strategy, field coaching, dashboards and KPI-driven delivery to embed sustained growth.</p>
                <div className="mt-4 flex gap-2">
                  <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm">Get Proposal</a>
                  <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">Book slot</a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SERVICES GRID */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Corporate Sales Training" Icon={Briefcase} accent="from-indigo-500 to-indigo-600">
            Strengthen sales process & habits — modules include funnel management, negotiation, prospecting and value selling. Delivery: Classroom | Online | Hybrid.
          </ServiceCard>

          <ServiceCard title="On-Field Sales Coaching" Icon={MapPin} accent="from-emerald-500 to-emerald-600">
            Real-world coaching: accompany sales calls, daily debriefs, weekly tracking and corrective feedback for faster adoption.
          </ServiceCard>

          <ServiceCard title="3-Month Extended Consulting" Icon={Clock} accent="from-amber-500 to-amber-600">
            Structured engagement with diagnostics, KPI setup, field coaching, reporting dashboards and execution accountability.
          </ServiceCard>

          <ServiceCard title="Dealer & Channel Development" Icon={Layers} accent="from-sky-500 to-sky-600">
            Dealer onboarding, channel training, incentive design and partner audits to build a consistent network performance.
          </ServiceCard>

          <ServiceCard title="Software Training (Engineering)" Icon={BookOpen} accent="from-violet-500 to-violet-600">
            Courses: STAAD Pro, AutoCAD, Revit/BIM, SolidWorks/CATIA/Creo — programs for corporates, professionals & students.
          </ServiceCard>

          <motion.div variants={itemVariant} className="rounded-2xl p-5 bg-white/70 md:dark:bg-zinc-900/50 border border-zinc-100 md:dark:border-zinc-800 shadow-sm flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-semibold">Custom Programs</div>
              <p className="mt-2 text-sm text-zinc-600 md:dark:text-zinc-300">Tailored content, assessments & on-site support — request a custom proposal for your industry.</p>
              <a href="/contact" className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600 text-white text-sm">Request custom</a>
            </div>
          </motion.div>
        </motion.section>

        {/* MODULES + SOFTWARE DETAILS */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div variants={itemVariant} className="rounded-2xl p-6 bg-white/60 md:dark:bg-zinc-900/50 shadow">
            <h3 className="text-xl font-semibold md:dark:text-zinc-100">Corporate Sales Training — Modules</h3>
            <div className="mt-4 grid gap-3">
              <Accordion title="Sales Process & Funnel Management">
                <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-600 md:dark:text-zinc-300">
                  <li>Funnel stages, qualification & forecasting</li>
                  <li>Pipeline hygiene & CRM best practices</li>
                </ul>
              </Accordion>

              <Accordion title="Communication, Negotiation & Objection Handling">
                <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-600 md:dark:text-zinc-300">
                  <li>Structured discovery & consultative selling</li>
                  <li>Handling price & technical objections</li>
                </ul>
              </Accordion>

              <Accordion title="Prospecting & Opportunity Creation">
                <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-600 md:dark:text-zinc-300">
                  <li>Lead sourcing, outreach sequences & qualification</li>
                </ul>
              </Accordion>

              <Accordion title="Effective Closures & Follow-ups">
                <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-600 md:dark:text-zinc-300">
                  <li>Value-based closing techniques & follow-up cadences</li>
                </ul>
              </Accordion>

              <Accordion title="Presentation & Value Selling">
                <ul className="list-disc pl-4 space-y-1 text-sm text-zinc-600 md:dark:text-zinc-300">
                  <li>Outcome-focused pitches & demo-to-close playbooks</li>
                </ul>
              </Accordion>
            </div>
          </motion.div>

          <motion.div variants={itemVariant} className="rounded-2xl p-6 bg-white/60 md:dark:bg-zinc-900/50 shadow">
            <h3 className="text-xl font-semibold md:dark:text-zinc-100">Software Training for Engineering Professionals</h3>
            <p className="mt-3 text-sm text-zinc-600 md:dark:text-zinc-300">Corporate and institutional training across key design & engineering tools — for working professionals and students.</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "STAAD Pro", desc: "Structural Analysis & Design" },
                { name: "AutoCAD", desc: "2D & 3D Design" },
                { name: "Revit & BIM", desc: "BIM workflows & documentation" },
                { name: "SolidWorks / CATIA / Creo", desc: "Advanced modules on demand" },
              ].map((s) => (
                <div key={s.name} className="rounded-lg p-3 border border-zinc-100 md:dark:border-zinc-800 bg-white md:dark:bg-zinc-900/40">
                  <div className="text-sm font-semibold md:dark:text-zinc-100">{s.name}</div>
                  <div className="text-xs text-zinc-500 md:dark:text-zinc-400 mt-1">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-3 flex-wrap">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white font-medium shadow">Request Custom Program</a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 md:dark:border-zinc-700 px-4 py-2 font-medium hover:bg-zinc-100 md:dark:hover:bg-zinc-800" target="_blank" rel="noreferrer"><BookOpen className="h-4 w-4" /> Download Syllabus</a>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA strip */}
        <motion.section variants={itemVariant} className="mt-10 rounded-2xl p-5 bg-gradient-to-r from-indigo-600 to-purple-500 text-white shadow-lg">
          <div className="md:flex md:items-center md:justify-between gap-4">
            <div>
              <div className="text-lg md:text-xl font-bold">Ready to accelerate sales performance?</div>
              <div className="mt-1 text-sm text-white/90">Book a free consultation — we'll design a practical program for your team.</div>
            </div>

            <div className="mt-3 md:mt-0 flex gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10">Request Proposal</a>
              <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-indigo-600 font-medium">Book Demo</a>
            </div>
          </div>
        </motion.section>

        <div className="mt-10 text-center text-sm text-zinc-500 md:dark:text-zinc-400">© {new Date().getFullYear()} eAarvi Tech — Built for performance</div>
      </div>
    </main>
  );
}
