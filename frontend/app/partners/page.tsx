"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Briefcase, 
  Handshake, 
  Globe, 
  Users,
  Target,
  ArrowRight,
  Star,
  Zap
} from "lucide-react";

export default function PartnersPage() {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const technologyPartners = [
    {
      name: "ESurveying Softech (India) Pvt. Ltd.",
      role: "Business Development Partner",
      website: "https://esurveying.net",
      description: "Leading provider of engineering software solutions for surveying, mapping, and infrastructure design.",
      products: [
        "Survey and Mapping Softwares",
        "Road and Highway design Softwares",
        "Hydraulics and Water distribution"
      ]
    },
    {
      name: "Unify & Unify Enterprises",
      role: "Business Development Partner",
      website: "https://www.unifyandunify.com",
      description: "Specialized in fastening solutions and machinery for industrial applications.",
      products: [
        "Snap Button Machines",
        "Riveting Machines",
        "Manual Button Fixing Machines",
        "Snap Buttons and fastener accessories"
      ]
    }
  ];

  const partnershipBenefits = [
    {
      title: "Market Expansion",
      description: "Helping partners enter new markets and territories with local expertise",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Lead Generation",
      description: "Creating conversion-ready opportunities through targeted outreach",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Technical Enablement",
      description: "Training and supporting partner teams on product implementation",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Strategic Collaboration",
      description: "Long-term partnerships focused on mutual growth and success",
      icon: <Handshake className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
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
              <Handshake className="w-4 h-4" />
              Strategic Partnerships
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technology Partners</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We work with selected engineering and technology companies as their authorised business development partner, helping them expand into new markets and create conversion-ready opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Partners Section - MOVED TO TOP */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Strategic Partners
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {technologyPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-slate-200 transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  {/* Partner Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {partner.name}
                      </h3>
                      <motion.a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                        aria-label={`Visit ${partner.name} website`}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </motion.a>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                      <Briefcase className="w-4 h-4" />
                      {partner.role}
                    </div>
                    
                    <p className="text-slate-600 mb-6">
                      {partner.description}
                    </p>
                  </div>

                  {/* Products Section */}
                  <div className="mb-6 flex-grow">
                    <h4 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500" />
                      Products & Offerings:
                    </h4>
                    <ul className="space-y-3">
                      {partner.products.map((product, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-slate-700"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="flex-grow">{product}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Visit Button */}
                  <motion.a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold group mt-auto"
                  >
                    <span>Visit Partner Website</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits - MOVED BELOW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Partnership Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We build strategic relationships that drive growth for both parties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-blue-100 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
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
              Interested in Partnership?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your technology company expand into new markets and create more opportunities.
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
                Become a Partner
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