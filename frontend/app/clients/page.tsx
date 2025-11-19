"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare, 
  X, 
  Play,
  Download,
  Image,
  Video,
  Star,
  Users,
  Quote,
  FileText
} from "lucide-react";

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

type Video = {
  id: string;
  title: string;
  description: string;
  category: string;
};

type Photo = {
  id: string;
  title: string;
  category: string;
  placeholder: string;
};

type Brochure = {
  id: string;
  title: string;
  description: string;
  image: string;
  file: string;
};

const CASES: CaseStudy[] = [
  {
    id: "sanjay",
    title: "Sanjay Mechanical - Building a Productive Sales Team",
    client: "Sanjay Mechanical Works",
    contact: "Mr. Sanjay Nair, Managing Partner",
    engagement: "3-Month Sales Consulting & Team Development",
    summary:
      "We took full responsibility for developing and managing the client's sales operations — process design, weekly reviews and field coaching.",
    details:
      "When we met Mr. Sanjay Nair, he was struggling to take his sales team on the field effectively and faced recruiting challenges due to frequent travel. Over a structured 3-month engagement, eAarviTech designed a clear sales process, implemented weekly review structure, and coached his team on-field. Outcome: Field productivity improved by 60%, hiring became streamlined, and an independent sales operation was established.",
    quote:
      "I was short on time and struggling to build my sales team. eAarviTech's practical support and field coaching helped us establish a strong sales foundation within just a few months.",
  },
  {
    id: "planet",
    title: "Planet Geotech - GIS Project & Tender Success",
    client: "Planet Geotech Pvt. Ltd.",
    contact: "Project Director",
    engagement: "Business Consulting & Project Development Support",
    summary:
      "Strategic bid preparation and tender support for a major GIS & Land Records project.",
    details:
      "Planet Geotech partnered with eAarviTech to strengthen its bid for a major GIS project. Our team guided proposal positioning, documentation and tender preparation. Outcome: Planet Geotech secured the Andhra Pradesh Land Records GIS tender, expanding market presence.",
    quote:
      "The eAarviTech team worked like an internal partner — they helped us strategize, structure, and close one of our biggest GIS tenders.",
  },
  {
    id: "saitech",
    title: "Saitech Instruments - Instrumentation Sales Transformation",
    client: "Saitech Instruments",
    contact: "Mr. Sachin Khot, Managing Director",
    engagement: "Freelance Sales Consulting & Channel Development",
    summary:
      "Product repositioning, channel optimization and disciplined lead follow-up.",
    details:
      "We restructured product positioning, optimized channel performance, and implemented disciplined follow-ups. Outcome: Saitech rooted out competition in key territories and achieved steady growth in high-value projects.",
    quote:
      "The consulting engagement with eAarviTech completely transformed our sales structure. We now lead our segment in key regions.",
  },
  {
    id: "unify",
    title: "Unify Engineers - Training & Export Growth",
    client: "Unify Engineers",
    contact: "Sales Head",
    engagement: "Corporate Sales Training Program",
    summary:
      "Customized technical & communication training which led to export market entry.",
    details:
      "eAarviTech trained the sales team on communication, product presentation and technical sales. Post-training, Unify expanded into export markets across China and Southeast Asia. Outcome: improved confidence, client communications, and measurable export business growth.",
    quote:
      "Our team's approach to customer engagement completely changed after the training. Today, we're proudly exporting our products to new global markets.",
  },
];

const VIDEOS: Video[] = [
  {
    id: "QkVBNV-f5uM",
    title: "eAarviTech - Company Introduction",
    description: "Learn about our mission and field-experienced approach",
    category: "Company"
  },
  {
    id: "1WK85VuIchM",
    title: "Sales Training Sample Session",
    description: "Preview of our practical sales training methodology",
    category: "Training"
  }
];

const PHOTOS: Photo[] = [
  {
    id: "1",
    title: "Corporate Training Session",
    category: "Training",
    placeholder: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=300&fit=crop"
  },
  {
    id: "2",
    title: "Field Coaching Workshop",
    category: "Coaching",
    placeholder: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  },
  {
    id: "3",
    title: "Team Building Activity",
    category: "Workshops",
    placeholder: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
  },
  {
    id: "4",
    title: "Client Success Celebration",
    category: "Success",
    placeholder: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop"
  },
  {
    id: "5",
    title: "Technical Software Training",
    category: "Training",
    placeholder: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop"
  },
  {
    id: "6",
    title: "Strategy Planning Session",
    category: "Consulting",
    placeholder: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=300&fit=crop"
  }
];

const BROCHURES: Brochure[] = [
  {
    id: "1",
    title: "Company Brochure 2024",
    description: "Complete overview of our services, training programs, and success stories",
    image: "/1Brochure.jpg",
    file: "/1Brochure.jpg"
  },
  {
    id: "2",
    title: "Training Programs Catalog",
    description: "Detailed catalog of all our training programs and pricing",
    image: "2Brochure.jpg",
    file: "eAARVIBrochure.pdf"
  }
];

type TabType = "photos" | "videos" | "stories" | "brochures";

function VideoCard({ video, onOpen }: { video: Video; onOpen: (video: Video) => void }) {
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer"
      onClick={() => onOpen(video)}
    >
      <div className="relative aspect-video bg-slate-100">
        <img
          src={thumb}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="flex items-center justify-center rounded-full bg-red-600 w-16 h-16 shadow-2xl group-hover:bg-red-700 transition-colors"
          >
            <Play className="w-6 h-6 text-white ml-1" />
          </motion.div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
          2:30
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-slate-600 text-sm mb-3 line-clamp-2">{video.description}</p>
        <div className="flex items-center justify-between">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">{video.category}</span>
          <span className="text-slate-500 text-xs">eAarviTech</span>
        </div>
      </div>
    </motion.div>
  );
}

function PhotoCard({ photo, onOpen }: { photo: Photo; onOpen: (photo: Photo) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer"
      onClick={() => onOpen(photo)}
    >
      <div className="relative aspect-[4/3] bg-slate-100">
        <img
          src={photo.placeholder}
          alt={photo.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Image className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-2">{photo.title}</h3>
        <div className="flex items-center justify-between">
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">{photo.category}</span>
          <span className="text-slate-500 text-xs">View</span>
        </div>
      </div>
    </motion.div>
  );
}

function BrochureCard({ brochure, onOpen }: { brochure: Brochure; onOpen: (brochure: Brochure) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer"
      onClick={() => onOpen(brochure)}
    >
      <div className="relative aspect-[3/4] bg-slate-100">
        <img
          src={brochure.image}
          alt={brochure.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center">
            <FileText className="w-12 h-12 text-white mb-2" />
            <span className="text-white font-semibold text-sm">View Details</span>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
          PDF
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-2">{brochure.title}</h3>
        <p className="text-slate-600 text-sm mb-3 line-clamp-2">{brochure.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-slate-500 text-xs">Click to view</span>
          <motion.div
            whileHover={{ x: 3 }}
            className="inline-flex items-center gap-1 text-blue-600 text-xs font-medium"
          >
            Download
            <Download className="w-3 h-3" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function CaseCard({ c, onOpen }: { c: CaseStudy; onOpen: (c: CaseStudy) => void }) {
  const initials = c.client.split(" ").map(w => w[0]).join("").toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group rounded-2xl p-6 bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-2xl border border-blue-100 transition-all duration-300 cursor-pointer"
      onClick={() => onOpen(c)}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm">
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{c.title}</h3>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed line-clamp-3">{c.summary}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">{c.engagement}</span>
            <motion.div
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium"
            >
              Read Story
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-black"
        >
          <div className="aspect-video">
            <iframe
              title={video.title}
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
              className="w-full h-full"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full bg-black/80 text-white w-10 h-10 flex items-center justify-center shadow-lg hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function PhotoModal({ photo, onClose }: { photo: Photo | null; onClose: () => void }) {
  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={photo.placeholder}
            alt={photo.title}
            className="w-full h-full object-contain max-h-[80vh]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
            <h3 className="text-xl font-bold">{photo.title}</h3>
            <p className="text-white/80">{photo.category}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full bg-black/80 text-white w-10 h-10 flex items-center justify-center shadow-lg hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function BrochureModal({ brochure, onClose }: { brochure: Brochure | null; onClose: () => void }) {
  if (!brochure) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl bg-white"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8">
              <img
                src={brochure.image}
                alt={brochure.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{brochure.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{brochure.description}</p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-slate-700">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span>PDF Document</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <Download className="w-5 h-5 text-green-600" />
                    <span>Instant Download</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={brochure.file}
                  download
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex-1 justify-center"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold shadow-lg hover:shadow-xl border border-slate-200 transition-all flex-1 justify-center"
                >
                  <MessageSquare className="w-5 h-5" />
                  Contact Us
                </motion.a>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full bg-black/80 text-white w-10 h-10 flex items-center justify-center shadow-lg hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CaseModal({ caseData, onClose }: { caseData: CaseStudy | null; onClose: () => void }) {
  if (!caseData) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        >
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{caseData.title}</h2>
                <div className="mt-2 text-slate-600">
                  {caseData.client} • {caseData.engagement}
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-slate-700">
              <p className="text-lg leading-relaxed">{caseData.details}</p>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-blue-500">
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <blockquote className="text-lg italic text-slate-800 mb-4">
                  "{caseData.quote}"
                </blockquote>
                <figcaption className="font-semibold text-slate-900">
                  — {caseData.contact}
                </figcaption>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Talk to Our Team
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/brochure"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold shadow-lg hover:shadow-xl border border-slate-200 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Download Brochure
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<TabType>("stories");
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);
  const [activeBrochure, setActiveBrochure] = useState<Brochure | null>(null);

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

  const tabs = [
    { id: "stories" as TabType, label: "Success Stories", icon: <Star className="w-4 h-4" /> },
    { id: "videos" as TabType, label: "Videos", icon: <Video className="w-4 h-4" /> },
    { id: "photos" as TabType, label: "Photos", icon: <Image className="w-4 h-4" /> },
    { id: "brochures" as TabType, label: "Brochures", icon: <FileText className="w-4 h-4" /> }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6"
            >
              <Star className="w-4 h-4" />
              Our Gallery
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Success in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Action</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Explore our success stories, training videos, brochures, and memorable moments that showcase our impact on engineering and tech companies.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#brochures"
                onClick={() => setActiveTab("brochures")}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Company Brochure
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl"
                    : "bg-white text-slate-700 shadow-lg hover:shadow-xl border border-slate-200"
                }`}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {/* Success Stories Tab */}
            {activeTab === "stories" && (
              <motion.div
                key="stories"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  {...fadeInUp}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Client Success Stories
                  </h2>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Real engagements, measurable outcomes. See how we've helped engineering and tech companies achieve remarkable growth.
                  </p>
                </motion.div>

                <motion.div
                  {...staggerChildren}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  {CASES.map((caseStudy) => (
                    <CaseCard
                      key={caseStudy.id}
                      c={caseStudy}
                      onOpen={setActiveCase}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Videos Tab */}
            {activeTab === "videos" && (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  {...fadeInUp}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Training & Success Videos
                  </h2>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Watch our training sessions, client testimonials, and success stories in action.
                  </p>
                </motion.div>

                <motion.div
                  {...staggerChildren}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {VIDEOS.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      onOpen={setActiveVideo}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Photos Tab */}
            {activeTab === "photos" && (
              <motion.div
                key="photos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  {...fadeInUp}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Our Journey in Photos
                  </h2>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Memorable moments from our training sessions, workshops, and client engagements.
                  </p>
                </motion.div>

                <motion.div
                  {...staggerChildren}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {PHOTOS.map((photo) => (
                    <PhotoCard
                      key={photo.id}
                      photo={photo}
                      onOpen={setActivePhoto}
                    />
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Brochures Tab */}
            {activeTab === "brochures" && (
              <motion.div
                key="brochures"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                id="brochures"
              >
                <motion.div
                  {...fadeInUp}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    Company Brochures
                  </h2>
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Download our latest brochures to learn more about our services, training programs, and success stories.
                  </p>
                </motion.div>

                <motion.div
                  {...staggerChildren}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                  {BROCHURES.map((brochure) => (
                    <BrochureCard
                      key={brochure.id}
                      brochure={brochure}
                      onOpen={setActiveBrochure}
                    />
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 text-center"
                >
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Need More Information?</h3>
                    <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                      Contact us today to discuss your specific needs and get a customized proposal for your team.
                    </p>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="/contact"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Contact Our Team
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the growing list of engineering and tech companies that have transformed their sales performance with eAarviTech.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <MessageSquare className="w-6 h-6" />
                Start Your Journey
                <ArrowRight className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#brochures"
                onClick={() => setActiveTab("brochures")}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Download className="w-6 h-6" />
                Download Brochure
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} eAarviTech — Real results, measurable growth
          </p>
        </div>
      </footer>

      {/* Modals */}
      <CaseModal caseData={activeCase} onClose={() => setActiveCase(null)} />
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      <PhotoModal photo={activePhoto} onClose={() => setActivePhoto(null)} />
      <BrochureModal brochure={activeBrochure} onClose={() => setActiveBrochure(null)} />
    </main>
  );
}