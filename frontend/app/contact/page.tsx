"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  Building, 
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

type FormState = {
  name: string;
  org: string;
  email: string;
  mobile: string;
  program: string;
  message: string;
};

export default function ContactSimple() {
  const [form, setForm] = useState<FormState>({
    name: "",
    org: "",
    email: "",
    mobile: "",
    program: "Sales Training",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function buildSubject() {
    const who = form.name ? ` — ${form.name}` : "";
    return `eAarvi Tech Inquiry: ${form.program}${who}`;
  }

  function buildBody() {
    return [
      `Name: ${form.name || "-"}`,
      `Organization: ${form.org || "-"}`,
      `Email: ${form.email || "-"}`,
      `Mobile: ${form.mobile || "-"}`,
      `Program: ${form.program || "-"}`,
      "",
      "Message:",
      form.message || "-",
      "",
      "--",
      "Sent from eAarvi Tech website",
    ].join("\n");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // basic validation
    if (!form.name || !form.email || !form.mobile) {
      alert("Please fill Name, Email and Mobile.");
      return;
    }

    setSending(true);
    try {
      const to = "business@eaarvitech.com";
      const subject = buildSubject();
      const body = buildBody();

      // Gmail web compose link (opens Gmail compose in a new tab)
      const gmailUrl =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        `&to=${encodeURIComponent(to)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      // mailto fallback
      const mailtoUrl =
        `mailto:${encodeURIComponent(to)}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      // try to open Gmail web compose in a new tab. If popup blocked, fallback to mailto.
      const newWin = window.open(gmailUrl, "_blank");
      if (!newWin) {
        // popup blocked — use mailto (will trigger default mail client)
        window.location.href = mailtoUrl;
      } else {
        try {
          newWin.focus();
        } catch (err) {
          // ignore focus errors
        }
      }
      
      // Show success state
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      
    } catch (err) {
      // worst case: use mailto
      window.location.href = `mailto:business@eaarvitech.com?subject=${encodeURIComponent(
        buildSubject()
      )}&body=${encodeURIComponent(buildBody())}`;
    } finally {
      setSending(false);
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const programs = [
    "Sales Training for Engineering Teams",
    "On-Field Sales Coaching",
    "3-Month Sales Consulting",
    "Market Expansion Support",
    "Dealer & Channel Development",
    "Engineering Software Training",
    "Other"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6"
          >
            <Star className="w-4 h-4" />
            Get In Touch
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Success Story</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your sales performance? Fill the form below and we'll get back to you within 24 hours.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl h-full">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-300">Email Us</h3>
                    <p className="text-slate-300 mt-1">business@eaarvitech.com</p>
                    <p className="text-slate-400 text-sm">We'll respond within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-300">Call Us</h3>
                    <p className="text-slate-300 mt-1">+91-8433965315</p>
                    <p className="text-slate-400 text-sm">Mon-Fri from 9am-6pm</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-300">Visit Us</h3>
                    <p className="text-slate-300 mt-1">Navi Mumbai</p>
                    <p className="text-slate-400 text-sm">Maharashtra, India</p>
                  </div>
                </motion.div>
              </div>

              {/* Why Choose Section */}
              <div className="mt-8 pt-8 border-t border-slate-700">
                <h3 className="font-semibold text-slate-300 mb-4">Why Choose eAarvi Tech?</h3>
                <div className="space-y-3">
                  {[
                    "20+ Years Field Experience",
                    "Industry-Specific Solutions",
                    "Measurable Results",
                    "Continuous Support"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-slate-400 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent Successfully!</h3>
                  <p className="text-slate-600 mb-6">
                    Thank you for contacting eAarvi Tech. We've opened your email client to complete the process. 
                    We'll get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                  <p className="text-slate-600 mb-8">
                    Fill the form below and we'll open your email client with a pre-filled message. 
                    Just hit send to get started!
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      variants={staggerChildren}
                      initial="initial"
                      animate="animate"
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      <motion.div variants={fadeInUp} className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <User className="w-4 h-4" />
                          Your Name *
                        </label>
                        <input
                          required
                          name="name"
                          value={form.name}
                          onChange={update}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-slate-400"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <Building className="w-4 h-4" />
                          Organization
                        </label>
                        <input
                          name="org"
                          value={form.org}
                          onChange={update}
                          placeholder="Your company or institution"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-slate-400"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <Mail className="w-4 h-4" />
                          Email Address *
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={update}
                          placeholder="your.email@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-slate-400"
                        />
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <Phone className="w-4 h-4" />
                          Mobile Number *
                        </label>
                        <input
                          required
                          name="mobile"
                          value={form.mobile}
                          onChange={update}
                          placeholder="+91 12345 67890"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-slate-400"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <MessageCircle className="w-4 h-4" />
                        Program Interest
                      </label>
                      <select
                        name="program"
                        value={form.program}
                        onChange={update}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      >
                        {programs.map((program) => (
                          <option key={program} value={program}>
                            {program}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        <MessageCircle className="w-4 h-4" />
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={update}
                        rows={5}
                        placeholder="Tell us about your requirements, challenges, or what you'd like to achieve..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-slate-400 resize-none"
                      />
                    </motion.div>

                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {sending ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Opening Email...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-sm text-slate-500 text-center sm:text-left">
                        We respect your privacy — no spam, ever.
                      </p>
                    </motion.div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Quick Response Promise */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Response Promise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { time: "24h", description: "Response Time" },
                { time: "Free", description: "Initial Consultation" },
                { time: "Custom", description: "Tailored Solutions" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-2">{item.time}</div>
                  <div className="text-slate-600 text-sm">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}