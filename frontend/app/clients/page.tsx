"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MessageSquare, X } from "lucide-react";

type CaseStudy = {
  id: string;
  title: string;
  client: string;
  contact: string;
  engagement: string;
  summary: string;
  details: string;
  quote: string;
};

const CASES: CaseStudy[] = [
  {
    id: "sanjay",
    title: "Sanjay Mechanical  Building a Productive Sales Team",
    client: "Sanjay Mechanical Works",
    contact: "Mr. Sanjay Nair, Managing Partner",
    engagement: "3-Month Sales Consulting & Team Development",
    summary:
      "We took full responsibility for developing and managing the client's sales operations — process design, weekly reviews and field coaching.",
    details:
      "When we met Mr. Sanjay Nair, he was struggling to take his sales team on the field effectively and faced recruiting challenges due to frequent travel. Over a structured 3-month engagement, eAarvi Tech designed a clear sales process, implemented weekly review structure, and coached his team on-field. Outcome: Field productivity improved by 60%, hiring became streamlined, and an independent sales operation was established.",
    quote:
      "I was short on time and struggling to build my sales team. eAarvi Tech’s practical support and field coaching helped us establish a strong sales foundation within just a few months.",
  },
  {
    id: "planet",
    title: "Planet Geotech  GIS Project & Tender Success",
    client: "Planet Geotech Pvt. Ltd.",
    contact: "Project Director",
    engagement: "Business Consulting & Project Development Support",
    summary:
      "Strategic bid preparation and tender support for a major GIS & Land Records project.",
    details:
      "Planet Geotech partnered with eAarvi Tech to strengthen its bid for a major GIS project. Our team guided proposal positioning, documentation and tender preparation. Outcome: Planet Geotech secured the Andhra Pradesh Land Records GIS tender, expanding market presence.",
    quote:
      "The eAarvi Tech team worked like an internal partner — they helped us strategize, structure, and close one of our biggest GIS tenders.",
  },
  {
    id: "saitech",
    title: "Saitech Instruments  Instrumentation Sales Transformation",
    client: "Saitech Instruments",
    contact: "Mr. Sachin Khot, Managing Director",
    engagement: "Freelance Sales Consulting & Channel Development",
    summary:
      "Product repositioning, channel optimization and disciplined lead follow-up.",
    details:
      "We restructured product positioning, optimized channel performance, and implemented disciplined follow-ups. Outcome: Saitech rooted out competition in key territories and achieved steady growth in high-value projects.",
    quote:
      "The consulting engagement with eaarvi Tech completely transformed our sales structure. We now lead our segment in key regions.",
  },
  {
    id: "unify",
    title: "Unify Engineers  Training & Export Growth",
    client: "Unify Engineers",
    contact: "Sales Head",
    engagement: "Corporate Sales Training Program",
    summary:
      "Customized technical & communication training which led to export market entry.",
    details:
      "eAarvi Tech trained the sales team on communication, product presentation and technical sales. Post-training, Unify expanded into export markets across China and Southeast Asia. Outcome: improved confidence, client communications, and measurable export business growth.",
    quote:
      "Our team’s approach to customer engagement completely changed after the training. Today, we’re proudly exporting our products to new global markets.",
  },
];

const pageVariant = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.04 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
};

function initialsFromClient(name: string): string {
  if (!name) return "";
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
}

function CaseCard({ c, onOpen }: { c: CaseStudy; onOpen: (c: CaseStudy) => void }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      variants={cardVariant}
      whileHover={reduce ? {} : { y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="min-w-[280px] md:min-w-0 max-w-sm rounded-2xl p-5 bg-white/80 md:dark:bg-zinc-900/55 border border-zinc-100 md:dark:border-zinc-800 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-500 text-white flex items-center justify-center font-bold">
          {initialsFromClient(c.client)}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 md:dark:text-zinc-100">{c.title}</h3>
          <p className="mt-2 text-sm text-zinc-600 md:dark:text-zinc-300 line-clamp-3">{c.summary}</p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="text-xs text-zinc-500 md:dark:text-zinc-400">{c.engagement}</div>
            <button
              onClick={() => onOpen(c)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600 text-white text-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              aria-label={`Open case ${c.client}`}
            >
              View case
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function CaseModal({ caseData, onClose }: { caseData: CaseStudy | null; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (caseData && modalRef.current) {
      modalRef.current.focus?.();
    }
  }, [caseData]);

  return (
    <AnimatePresence>
      {caseData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm md:dark:bg-black/55" onClick={onClose} />

          <motion.div
            initial={{ y: 18, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative w-full max-w-4xl rounded-2xl bg-white md:dark:bg-zinc-900/75 p-6 shadow-2xl outline-none"
            tabIndex={-1}
            ref={modalRef}
          >
            <header className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold md:dark:text-zinc-100">{caseData.title}</h2>
                <div className="mt-1 text-sm text-zinc-500 md:dark:text-zinc-400">
                  {caseData.client} • {caseData.engagement}
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-md px-3 py-1 text-sm bg-zinc-100 md:dark:bg-zinc-800 focus:outline-none"
                aria-label="Close case modal"
              >
                <X className="w-4 h-4" />
              </button>
            </header>

            <div className="mt-4 space-y-4 text-sm text-zinc-700 md:dark:text-zinc-300">
              <p>{caseData.details}</p>

              <figure className="border-l-4 border-indigo-300 pl-4 italic text-zinc-800 md:dark:text-zinc-200">
                “{caseData.quote}”
                <figcaption className="mt-2 font-medium text-xs text-zinc-500 md:dark:text-zinc-400">— {caseData.contact}</figcaption>
              </figure>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm">
                  Talk to our team
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm">
                  View more cases
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function CaseStudiesPage() {
  const [active, setActive] = useState<CaseStudy | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  function scrollNext() {
    const el = carouselRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: w * 0.6, behavior: reduce ? "auto" : "smooth" });
  }
  function scrollPrev() {
    const el = carouselRef.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: -w * 0.6, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <main className="min-h-screen py-12 bg-gradient-to-b from-white to-zinc-50 md:dark:from-zinc-900 md:dark:to-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.section initial="hidden" animate="show" variants={pageVariant} className="rounded-3xl bg-white/70 md:dark:bg-zinc-900/55 p-6 md:p-10 shadow-lg">
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold md:dark:text-zinc-100">Client Success Stories & Testimonials</h1>
              <p className="mt-3 text-sm md:text-base text-zinc-600 md:dark:text-zinc-300">Real engagements, measurable outcomes. Browse client case studies, success metrics and feedback from businesses who grew with eAarvi Tech.</p>
            </div>

            <div className="mt-4 md:mt-0 flex gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white">Talk to Our Clients</a>
              <a href="/case-studies" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border">View All Case Studies</a>
            </div>
          </div>
        </motion.section>

        <motion.section className="mt-8 hidden md:grid md:grid-cols-2 gap-6">
          {CASES.slice(0, 2).map((c) => (
            <motion.article key={c.id} variants={cardVariant} className="rounded-2xl bg-white/85 md:dark:bg-zinc-900/60 p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-500 text-white font-bold flex items-center justify-center">{initialsFromClient(c.client)}</div>
                <div>
                  <h3 className="text-xl font-semibold md:dark:text-zinc-100">{c.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 md:dark:text-zinc-300">{c.summary}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <button onClick={() => setActive(c)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white">Read case</button>
                    <a href="/contact" className="text-sm text-indigo-600">Talk to the client</a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.section>

        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold md:dark:text-zinc-100">More success stories</h3>

            <div className="hidden md:flex items-center gap-2">
              <button onClick={scrollPrev} aria-label="Previous" className="rounded-full p-2 bg-white/80 md:dark:bg-zinc-800 border shadow-sm"><ChevronLeft /></button>
              <button onClick={scrollNext} aria-label="Next" className="rounded-full p-2 bg-white/80 md:dark:bg-zinc-800 border shadow-sm"><ChevronRight /></button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none md:overflow-visible"
          >
            {CASES.map((c) => (
              <div key={c.id} className="snap-center md:snap-none w-[88%] sm:w-[60%] md:w-auto md:flex-1">
                <CaseCard c={c} onOpen={setActive} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl bg-gradient-to-r from-indigo-50 to-white p-6 shadow-inner flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold md:dark:text-zinc-100">Trusted by businesses across India</h4>
            <p className="mt-2 text-sm text-zinc-600 md:dark:text-zinc-300">From sales development to technical software training, we enable measurable improvements.</p>
          </div>

          <div className="flex gap-3">
            <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white"><MessageSquare /> Talk to our clients</a>
            <a href="/case-studies" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border">View More Case Studies</a>
          </div>
        </section>

        <div className="mt-8 text-center text-sm text-zinc-500 md:dark:text-zinc-400">© {new Date().getFullYear()} eAarvi Tech — Real results, measurable growth</div>
      </div>

      <CaseModal caseData={active} onClose={() => setActive(null)} />
    </main>
  );
}
