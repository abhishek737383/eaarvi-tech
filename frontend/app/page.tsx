"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, Target, Zap, ChevronRight, CheckCircle, ArrowRight, Users, Clock, Phone, Mail } from "lucide-react";

/**
 * Home page — Updated with pricing at bottom and removed flash messages
 */

type Video = { id: string; title: string };

type VideoCardProps = { id: string; title: string; onOpen: (id: string) => void };

type VideoModalProps = { id: string | null; onClose: () => void };

function VideoCard({ id, title, onOpen }: VideoCardProps) {
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <motion.button
      onClick={() => onOpen(id)}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none bg-white w-full"
      aria-label={`Open ${title}`}
    >
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <img
          src={thumb}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl" />
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex items-center justify-center rounded-full bg-red-600 w-16 h-16 shadow-2xl group-hover:bg-red-700 transition-colors"
          >
            <Play className="w-6 h-6 text-white ml-1" />
          </motion.div>
        </div>

        {/* Video duration badge */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-sm">
          2:30
        </div>
      </div>

      <div className="p-4 bg-white">
        <h3 className="font-semibold text-slate-900 text-base mb-2 text-left leading-tight">{title}</h3>
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span>eAarvi Tech</span>
          <span>• 1.2K views</span>
        </div>
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
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} aria-hidden />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl"
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
              className="absolute top-4 right-4 z-10 rounded-full bg-black/80 text-white w-10 h-10 flex items-center justify-center shadow-lg hover:bg-black transition-colors"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Pricing Table Component
function PricingTable() {
  const standardPricing = [
    { duration: "1-hour Online Session (Diagnostic)", price: "₹4,000" },
    { duration: "3-hour Online Session (Any two Modules)", price: "₹8,500" },
    { duration: "Full-Day Online Session (4 Modules)", price: "₹10,000" }
  ];

  const crashCourses = [
    { course: "Lead Generation Crash Session", duration: "2 hours", price: "₹7,999", type: "Online" },
    { course: "MQL → SQL Conversion Crash Session", duration: "2 hours", price: "₹7,999", type: "Online" }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 space-y-8"
    >
      {/* Section Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Training Programs & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Pricing</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Transparent pricing for all our online training programs. Team discounts available for groups of 4+.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Standard Online Training */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl border border-blue-100"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Standard Online Training</h3>
              <p className="text-slate-600">Team Training Programs</p>
            </div>
          </div>

          <div className="space-y-4">
            {standardPricing.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <h4 className="font-semibold text-slate-900">{item.duration}</h4>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">{item.price}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-6 bg-yellow-50 border border-yellow-200 rounded-2xl p-4"
          >
            <p className="text-sm text-yellow-800 text-center">
              <strong>For on-premise offline sessions and pricing</strong><br />
              Please reach us on +91-8433965315 or mail us on Business@eaarvitech.com
            </p>
          </motion.div>
        </motion.div>

        {/* Crash Courses */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 shadow-xl border border-purple-100"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Crash Courses</h3>
              <p className="text-slate-600">Intensive 2-hour Sessions</p>
            </div>
          </div>

          <div className="space-y-4">
            {crashCourses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 text-lg">{course.course}</h4>
                    <p className="text-slate-600 text-sm mt-1">{course.duration} • {course.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{course.price}</div>
                  </div>
                </div>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us Now
                </motion.a>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600 mb-4">
              <strong>Team of 4+ gets special discount!</strong>
            </p>
            <motion.a
              href="tel:+918433965315"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call for Team Discounts
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Contact CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your training needs and get a customized proposal for your team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+918433965315"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call +91-8433965315
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-700 font-semibold rounded-xl hover:shadow-lg border border-slate-200 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default function Home() {
  const videos: Video[] = [
    { id: 'QkVBNV-f5uM', title: 'eAarvi Tech - Company Introduction' },
    { id: '1WK85VuIchM', title: 'Sales Training Sample Session' },
  ];

  const [openVideo, setOpenVideo] = useState<string | null>(null);

  const premiumFeatures = [
    "Sales Training & Coaching",
    "Lead Generation Support", 
    "Pipeline Development",
    "Market Entry Strategy",
    "Design Engineering Software Training",
    "Dealer & Channel Partner Development"
  ];

  return (
    <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8 sm:py-12">
      {/* HEADING SECTION */}
      <section className="mb-12 sm:mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight text-center mb-6 sm:mb-8"
        >
          We Help Engineering &amp; Tech Firms{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Close More Deals
          </span>
        </motion.h1>

        {/* PARAGRAPH BELOW HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
            At eAarvi Tech, we help engineering and tech companies close more deals and grow faster through practical 
            sales training, lead generation support, and software training programs.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN - CONTENT CARDS */}
        <div className="xl:col-span-2 space-y-6 sm:space-y-8">
          {/* INTRO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  Tailored Approach, Not Generic Training
                </h3>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                  Our approach is built around your product, your customers, and your market. 
                  We understand the actual challenges your team faces — objections, prospecting, 
                  customer conversations, and closures.
                </p>
              </div>
            </div>
          </motion.div>

          {/* EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-3 sm:p-4 shadow-lg">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  20+ Years Real Field Experience
                </h3>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
                  With 20+ years of real field sales experience, we provide practical solutions 
                  your team can use immediately. Our purpose is to guide and support your sales 
                  team with field-tested strategies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* GROWTH CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-lg">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  Lead Generation & Market Expansion
                </h3>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-4">
                  We help teams improve lead generation, pipeline creation, targeting, and follow-up discipline. 
                  For growing companies, we provide support in entering new territories and geographies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* TECHNICAL TRAINING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200"
          >
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-3 sm:p-4 shadow-lg">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  Comprehensive Engineering Software Training
                </h3>
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg mb-6">
                  All kind of Design engineering and engineering software training for corporates and students. 
                  Our goal is simple: enable your people and your business to perform better, faster, and smarter.
                </p>

                {/* Features Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {premiumFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN - VIDEOS ONLY (No Flash Messages) */}
        <div className="space-y-8">
          {/* VIDEOS SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sticky top-8"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-2">Watch & Learn</h3>
              <p className="text-slate-300 text-sm mb-6">See how we transform sales teams</p>
              
              <div className="space-y-6">
                {videos.map((v, index) => (
                  <motion.div
                    key={v.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <VideoCard id={v.id} title={v.title} onOpen={setOpenVideo} />
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA in Video Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 pt-6 border-t border-slate-700"
              >
                <p className="text-slate-300 text-sm mb-4 text-center">Ready to transform your team?</p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/contact"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us Now
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRAINING PROGRAMS & PRICING SECTION - MOVED TO BOTTOM */}
      <PricingTable />

      {/* BOTTOM EMPOWERING BUSINESS */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 sm:mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-24 h-24 bg-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-12 -left-12 w-24 h-24 bg-white/5 rounded-full"
          />
          
          <div className="relative z-10">
            <motion.h2
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
            >
              eAarvitech — Empowering Business Excellence
            </motion.h2>
            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-6 sm:mb-8">
              Enabling your people and your business to perform better, faster, and smarter
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white text-slate-900 font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                Start Your Success Journey Today
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <VideoModal id={openVideo} onClose={() => setOpenVideo(null)} />
    </main>
  );
}