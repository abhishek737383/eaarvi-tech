"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Calendar, 
  Map, 
  Layers, 
  BookOpen, 
  Zap, 
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
  Briefcase,
  Lightbulb
} from "lucide-react";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Sales Training for Engineering & Technical Teams",
      description: "eAarviTech provides industry-specific sales training designed for engineering, industrial, and technology companies.",
      details: "We help your sales team improve prospecting, lead generation, pipeline creation, technical presentations, objections, and closures using your real products and customers.",
      keywords: ["engineering sales training", "technical sales training India", "B2B sales training for engineers", "industrial sales training"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "On-Field Sales Coaching & Real-Time Handholding",
      description: "Our trainers work on the field with your team joining client meetings, demos, and calls to help them solve real sales challenges.",
      details: "We correct sales approach, guide communication, and help the team handle customers confidently.",
      keywords: ["on-field sales coaching India", "practical sales coaching", "real sales support", "sales handholding for engineering teams"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "3-Month Extended Sales Consulting Program",
      description: "We fix your entire sales system through a structured 3-month consulting model.",
      details: "This includes sales process diagnostic, funnel creation, forecasting, team reviews, KPIs, opportunity tracking, and closure improvement.",
      keywords: ["sales consulting India", "B2B sales consulting", "sales process improvement", "pipeline and forecasting consultant"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "New Territory & Market Expansion Support",
      description: "We help companies enter new territories and geographies where they have zero presence.",
      details: "Our support includes market entry planning, customer cluster identification, first meeting support, dealer setup, and initial pipeline creation.",
      keywords: ["territory expansion consulting", "how to enter new markets India", "B2B market entry support", "new geography penetration"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Dealer & Channel Partner Development",
      description: "We help build and strengthen your dealer and channel network to increase product reach and sales coverage.",
      details: "This includes dealer onboarding, sales training, incentive planning, and territory development.",
      keywords: ["channel partner development", "dealer network training", "channel sales improvement India"],
      gradient: "from-indigo-500 to-blue-500",
      bgGradient: "from-indigo-50 to-blue-50"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Engineering Software Training for Corporates and Students",
      description: "eAarviTech offers professional software training for corporates, working professionals, and students.",
      details: "All kind of Design engineering and engineering software training including Structural design softwares, CAD and BIM software trainings and many more.",
      keywords: ["engineering software training", "CAD training", "BIM training", "corporate technical training"],
      gradient: "from-teal-500 to-green-500",
      bgGradient: "from-teal-50 to-green-50"
    }
  ];

  const whyAarvi = [
    "20+ years of field sales experience",
    "Industry-specific practical training",
    "Real-world, measurable outcomes",
    "Continuous support & guidance",
    "Tailored to your specific needs"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-15">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6"
            >
              <Zap className="w-4 h-4" />
              Premium Services
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Improve Sales • <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Enter New Markets</span> • Train Engineering Teams
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions to transform your sales performance, expand your market reach, and build technical capabilities.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Briefcase className="w-5 h-5" />
                Get Custom Proposal
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-700 font-semibold shadow-xl hover:shadow-2xl border border-slate-200 transition-all duration-300"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions designed for engineering and tech companies to drive growth and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services List */}
            <motion.div
              {...staggerChildren}
              className="space-y-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  onClick={() => setActiveService(index)}
                  className={`group cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
                    activeService === index 
                      ? `border-${service.gradient.split('-')[1]}-500 bg-gradient-to-r ${service.bgGradient} shadow-2xl scale-105`
                      : 'border-slate-200 bg-white hover:bg-slate-50 hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                        activeService === index 
                          ? `bg-gradient-to-r ${service.gradient} text-white`
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      {service.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                        activeService === index 
                          ? `text-${service.gradient.split('-')[1]}-600`
                          : 'text-slate-900 group-hover:text-slate-700'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Keywords */}
                      <div className="mt-3 flex flex-wrap gap-2">
                        {service.keywords.map((keyword, keyIndex) => (
                          <span
                            key={keyIndex}
                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-8"
            >
              <div className={`bg-gradient-to-br ${services[activeService].bgGradient} rounded-3xl p-8 shadow-2xl border border-slate-200`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${services[activeService].gradient} rounded-2xl flex items-center justify-center text-white`}>
                    {services[activeService].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {services[activeService].title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {services[activeService].description}
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {services[activeService].details}
                  </p>

                  {/* Features */}
                  <div className="mt-6 space-y-3">
                    <h4 className="font-semibold text-slate-900">Key Features:</h4>
                    {services[activeService].keywords.map((keyword, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-slate-700"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>{keyword}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mt-8"
                  >
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-slate-900 to-slate-700 text-white font-semibold hover:shadow-xl transition-all duration-300"
                    >
                      <Lightbulb className="w-5 h-5" />
                      Get Started with {services[activeService].title.split(' ')[0]}
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Aarvi Tech Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Aarvi Tech
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We combine 20+ years of field sales experience, industry knowledge, and practical teaching to deliver real results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyAarvi.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl text-white"
                  >
                    <Star className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">
                      {point}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-slate-300 mb-6 max-w-3xl mx-auto">
              Our programs help companies improve lead generation, forecasting, closures, and market expansion with measurable outcomes.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <TrendingUp className="w-6 h-6" />
                Start Your Transformation
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our clients achieve significant improvements across key performance metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "40%+", label: "Increase in Lead Quality" },
              { metric: "35%+", label: "Faster Deal Closure" },
              { metric: "50%+", label: "Improved Pipeline Velocity" },
              { metric: "100%", label: "Client Satisfaction" }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    {result.metric}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {result.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our field-experienced approach can help your team close more deals, enter new markets, and achieve measurable growth.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Briefcase className="w-6 h-6" />
                Get Custom Proposal
                <ArrowRight className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <Calendar className="w-6 h-6" />
                Schedule Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} eAarviTech — Built for real-world performance
          </p>
        </div>
      </footer>
    </main>
  );
}