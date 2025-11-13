"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

/**
 * Home page with video cards and modal — App Router (client component)
 */

/* --- Types --- */
type Video = { id: string; title: string };

type VideoCardProps = {
  id: string;
  title: string;
  onOpen: (id: string) => void;
};

type VideoModalProps = {
  id: string | null;
  onClose: () => void;
};

/* --- Components --- */
function VideoCard({ id, title, onOpen }: VideoCardProps) {
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <motion.button
      onClick={() => onOpen(id)}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.99 }}
      className="group w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow bg-white focus:outline-none"
      aria-label={`Open ${title}`}
    >
      <div className="relative aspect-video bg-slate-100">
        <img
          src={thumb}
          alt={title}
          loading="lazy"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm w-14 h-14 shadow-lg">
            <Play className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="p-3 bg-white">
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">Short preview — opens in modal</p>
      </div>
    </motion.button>
  );
}

function VideoModal({ id, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {id && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <div className="aspect-video bg-black">
              <iframe
                title="YouTube preview"
                src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 rounded-lg bg-white/90 px-3 py-1 text-sm shadow focus:outline-none"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* --- Page --- */
export default function Home() {
  const videos: Video[] = [
    { id: "QkVBNV-f5uM", title: "eAarvi Intro" },
    { id: "1WK85VuIchM", title: "Training sample" },
  ];

  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <main className="space-y-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* HERO */}
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid gap-8 md:grid-cols-2 items-center"
      >
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
            Practical Sales Training from Field-Experienced Professionals
          </h1>

          <p className="mt-4 text-lg text-slate-700 max-w-2xl">
            We teach what works <span className="font-semibold">“because we’ve done it multiple times.”</span>
          </p>

          <p className="mt-4 text-slate-600 max-w-2xl">
            <strong>We help organizations and individuals improve real-world sales performance</strong> through practical
            training, on-field coaching, and extended consulting engagements.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.a
              whileHover={{ translateY: -3, boxShadow: "0px 14px 30px rgba(99,102,241,0.12)" }}
              href="#contact"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold shadow-lg transform transition-transform focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200"
            >
              Book a free consultation
            </motion.a>

            <a
              href="/about"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Learn more
              <span className="absolute left-0 -bottom-1 h-0.5 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 bg-gradient-to-r from-indigo-500 to-purple-500 rounded" />
            </a>
          </div>
        </div>

        {/* VIDEO LIST */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videos.map((v) => (
              <VideoCard key={v.id} id={v.id} title={v.title} onOpen={setOpenVideo} />
            ))}
          </div>
        </div>
      </motion.header>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-slate-900">About</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          eAarvi Tech is a Performance Enablement Consulting company specializing in Sales Training, Consulting, and
          Technical Software Training for corporates, working professionals, and students. Our programs are designed by
          <span className="font-medium"> 20+ years experienced professionals</span> who have learned sales and business
          growth on the field — not in classrooms.
        </p>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 md:grid-cols-2"
      >
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Key Services Overview</h2>

          <ul className="mt-4 list-none space-y-3">
            {[
              "Corporate Sales Training Programs",
              "On-Field Sales Coaching & Handholding",
              "3-Month Extended Sales Consulting Engagements",
              "Dealer & Channel Partner Development",
              "Software Training for Engineering Professionals (STAAD, CAD, BIM, etc.)",
            ].map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-150"
              >
                <span className="mt-1 inline-flex w-8 h-8 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 text-white font-semibold shadow">
                  ✓
                </span>
                <span className="text-slate-700">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Why Choose eAarvi Tech</h2>

          <ul className="mt-4 list-disc ml-6 space-y-2 text-slate-700">
            <li>Designed and Delivered by Field-Experienced Sales Professionals</li>
            <li>20+ Years of Industry Expertise</li>
            <li>Practical, Measurable Outcomes</li>
            <li>Tailored for Corporates, Working Professionals, and Students</li>
            <li>Multi-domain experience: Engineering, Construction, Infrastructure, Manufacturing</li>
          </ul>
        </div>
      </motion.section>

      {/* TESTIMONIAL */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl p-6 shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-slate-900">Testimonial</h2>
        <blockquote className="mt-4 border-l-4 border-slate-100 pl-5 italic text-slate-700">
          “The difference between classroom training and eAarvi’s field-based approach is unbelievable. Our team learned
          what actually works in the market.”
        </blockquote>
        <cite className="block mt-3 font-medium">— Sanjay Nair — Sanjay Mechanicals</cite>
      </motion.section>

      {/* CONTACT CTA */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl p-6"
      >
        <div className="bg-gradient-to-r from-indigo-50 to-white rounded-2xl p-6 shadow-inner">
          <h3 className="text-xl font-semibold text-slate-900">Ready to improve real-world sales performance?</h3>
          <p className="mt-2 text-slate-700">Book a free consultation and we'll design a practical program for your team.</p>
          <div className="mt-4">
            <a
              href="mailto:hello@eaarvitech.com?subject=Consultation%20Request"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-semibold shadow-lg hover:-translate-y-1 transition-transform"
            >
              Email us to book
            </a>
          </div>
        </div>
      </motion.section>

      {/* modal for video playback */}
      <VideoModal id={openVideo} onClose={() => setOpenVideo(null)} />
    </main>
  );
}
