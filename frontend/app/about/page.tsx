"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Zap, 
  Briefcase, 
  Globe, 
  TrendingUp, 
  Star, 
  CheckCircle,
  ArrowRight,
  BookOpen,
  Shield,
  Lightbulb
} from "lucide-react";

export default function AboutPage() {
  const currentYear = new Date().getFullYear();

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
        staggerChildren: 0.2
      }
    },
    viewport: { once: true }
  };

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Field-experienced sales training",
      description: "Practical training from professionals with real field experience"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "On-field coaching",
      description: "Real-time coaching during customer visits and presentations"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Lead generation & closures",
      description: "Complete support from prospecting to deal closure"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Territory development",
      description: "Market entry strategy and new geography penetration"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Sales consulting",
      description: "3-month structured consulting engagement"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Software training",
      description: "All kind of Design engineering software training"
    }
  ];

  const whatWeDo = [
    {
      title: "Corporate Sales Training",
      description: "Practical, field-focused programs on prospecting, pipeline creation, negotiation, forecasting, objection handling, and closures tailored to your business.",
      icon: "🎯"
    },
    {
      title: "On-Field Sales Coaching & Handholding",
      description: "We accompany your team on customer visits, calls, and presentations to correct their approach in real time and build confidence.",
      icon: "🚀"
    },
    {
      title: "3-Month Extended Sales Consulting",
      description: "A structured engagement covering sales process diagnosis, funnel setup, forecasting, team reviews, and territory growth ensuring measurable improvement.",
      icon: "📈"
    }
  ];

  const whoWeServe = [
    "Corporates",
    "Working Professionals",
    "Students & Institutes",
    "Engineering & Technical Teams"
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
              <Star className="w-4 h-4" />
              About eAarviTech
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Why Aarvi • <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">What Aarvi</span> • Who Aarvi
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Transforming engineering and tech companies through <span className="font-semibold text-slate-900">practical, field-experienced</span> sales training and consulting.
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
                <Zap className="w-5 h-5" />
                Schedule a Discussion
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-700 font-semibold shadow-xl hover:shadow-2xl border border-slate-200 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Explore Programs
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
              Comprehensive Performance Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to transform your sales team and business performance
            </p>
          </motion.div>

          <motion.div
            {...staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-slate-100 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white"
                  >
                    {service.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Aarvi Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Aarvi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeInUp}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                eAarviTech exists to solve the real challenges engineering and technical companies face on the field. Sales teams struggle with prospecting, follow-ups, forecasting, objections, closures, and entering new geographies and we step in exactly where they need help the most.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                We are different because our training is not theory-based. Everything is designed around your product, your customers, and your market. Our trainers come with 20+ years of real field experience, ensuring your team learns what actually works in real situations.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Companies choose Aarvi because we don't just "train and leave." We support, guide, and handhold your team until they start performing confidently and consistently.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:shadow-2xl transition-all duration-300"
                >
                  <Lightbulb className="w-5 h-5" />
                  Solve Your Challenges
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "20+", label: "Years Experience" },
                { number: "100+", label: "Teams Trained" },
                { number: "∞", label: "Real Solutions" },
                { number: "✓", label: "Proven Results" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Aarvi Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Aarvi
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions to improve your sales performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-blue-100 transition-all duration-500"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Aarvi Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who Aarvi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-700 leading-relaxed">
                eAarviTech is founded and led by professionals with over 20 years of real sales, technical, and business development experience across engineering, construction, infrastructure, and technology industries.
              </p>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                We understand the ground realities: customer objections, competitive pressure, delayed decisions, price negotiations, low follow-ups, and market expansion challenges.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-slate-900">Our purpose is to be a trusted growth partner empowering:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {whoWeServe.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed font-semibold">
                We help you close more deals, build better teams, and grow faster using methods that have worked in real markets, not classrooms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Trusted Expertise</h3>
                    <p className="text-blue-100">20+ years field experience</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Real market experience, not theory",
                    "Practical, measurable outcomes",
                    "Continuous support & guidance",
                    "Tailored to your specific needs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-blue-100">{item}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-6"
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Partner With Us
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Sales Performance?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our field-experienced approach can help your team close more deals and grow faster.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Zap className="w-6 h-6" />
                Start Your Transformation
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © {currentYear} eAarviTech — Built for real-world performance
          </p>
        </div>
      </footer>
    </main>
  );
}