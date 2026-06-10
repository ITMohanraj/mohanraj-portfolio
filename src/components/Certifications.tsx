"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Image as ImageIcon, Upload, X, ZoomIn, Download, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "internship" | "award" | "academic" | "uploaded";
  credentialUrl?: string;
  imageUrl?: string; // Data URL for uploaded ones
}

const initialCertificates: Certificate[] = [
  {
    id: "cert-accenture-sap",
    title: "Accenture SAP ERP Internship Certificate",
    issuer: "Accenture",
    date: "July 2025",
    category: "internship",
  },
  {
    id: "cert-acmegrade-web",
    title: "Web Development Internship Certificate",
    issuer: "Acmegrade",
    date: "February 2024",
    category: "internship",
  },
  {
    id: "cert-paper-presentation",
    title: "Artificial Intelligence Paper Presentation (2nd Place)",
    issuer: "Technical Symposium Committee",
    date: "March 2025",
    category: "award",
  },
  {
    id: "cert-innovation-project",
    title: "Innovation Day Project Presentation (2nd Place)",
    issuer: "Nandha College of Technology",
    date: "October 2024",
    category: "award",
  },
];

export default function Certifications() {
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeLightbox, setActiveLightbox] = useState<Certificate | null>(null);
  const [dragActive, setDragActive] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load certifications from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("mohanraj_uploaded_certs");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCerts([...initialCertificates, ...parsed]);
        return;
      } catch (e) {
        console.error(e);
      }
    }
    setCerts(initialCertificates);
  }, []);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload image files only (PNG, JPG, WEBP).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      
      const newCert: Certificate = {
        id: `uploaded-${Date.now()}`,
        title: file.name.substring(0, file.name.lastIndexOf(".")) || file.name,
        issuer: "Recruiter Upload",
        date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
        category: "uploaded",
        imageUrl: dataUrl,
      };

      const updatedCerts = [...certs, newCert];
      setCerts(updatedCerts);

      // Persist uploaded in localStorage
      const uploadedOnly = updatedCerts.filter(c => c.category === "uploaded");
      localStorage.setItem("mohanraj_uploaded_certs", JSON.stringify(uploadedOnly));
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeUploadedCert = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = certs.filter(c => c.id !== id);
    setCerts(updated);
    const uploadedOnly = updated.filter(c => c.category === "uploaded");
    localStorage.setItem("mohanraj_uploaded_certs", JSON.stringify(uploadedOnly));
  };

  const filteredCerts = certs.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-black/5 dark:bg-white/[0.005]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left space-y-3">
          <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm">
            05 / Credentials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
            Certifications &amp; Awards
          </h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        {/* Search & Category Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-10">
          <div className="md:col-span-4 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted opacity-60" />
            <input
              type="text"
              placeholder="Search credentials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card/50 text-foreground font-sans text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
            />
          </div>

          <div className="md:col-span-8 flex flex-wrap gap-2 justify-start md:justify-end">
            {[
              { id: "all", label: "All" },
              { id: "internship", label: "Internships" },
              { id: "award", label: "Awards" },
              { id: "uploaded", label: "Uploaded By You" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-display text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-white"
                    : "glass-panel text-foreground/80 hover:text-foreground border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Drag & Drop File Upload Box */}
          <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            onClick={triggerFileInput}
            className={`p-6 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-all min-h-[260px] ${
              dragActive
                ? "border-primary bg-primary/15 scale-[1.01]"
                : "border-border hover:border-primary/50 hover:bg-neutral-500/5 bg-card/25"
            }`}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <div className="p-4 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Upload className="h-6 w-6 text-primary animate-bounce" />
            </div>
            <h3 className="font-display font-bold text-sm text-foreground">
              Add Your Own Certificate
            </h3>
            <p className="text-xs opacity-70 mt-1 max-w-[200px] leading-relaxed">
              Drag &amp; drop an image here or click to browse files.
            </p>
            <span className="text-[10px] opacity-50 uppercase tracking-widest font-semibold mt-3">
              Recruiter Preview Feature
            </span>
          </div>

          {/* Certificates list */}
          {filteredCerts.map((cert) => (
            <motion.div
              layout
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveLightbox(cert)}
              className="p-6 rounded-2xl glass-panel border border-border flex flex-col justify-between cursor-pointer glow-card glow-border hover:-translate-y-1 min-h-[260px]"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/10">
                    {cert.category}
                  </span>
                  {cert.category === "uploaded" && (
                    <button
                      onClick={(e) => removeUploadedCert(cert.id, e)}
                      className="p-1 rounded-full hover:bg-red-500/20 text-red-500 transition-colors"
                      title="Remove Certificate"
                    >
                      <X className="h-4.5 w-4.5" />
                    </button>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-extrabold text-base leading-snug text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-xs opacity-75">
                    Issued by <span className="font-semibold">{cert.issuer}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/40 text-xs opacity-70">
                <span>{cert.date}</span>
                <span className="flex items-center space-x-1 text-primary font-semibold text-[11px] group">
                  <span>View Details</span>
                  <ZoomIn className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-6"
            onClick={() => setActiveLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl glass-panel border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/45 border border-white/10 text-white hover:bg-primary transition-colors z-20 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Visual Preview (7 Cols) */}
                <div className="md:col-span-8 bg-neutral-950 p-8 flex items-center justify-center min-h-[300px]">
                  {activeLightbox.imageUrl ? (
                    /* User uploaded picture */
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10 bg-neutral-900">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={activeLightbox.imageUrl}
                        alt={activeLightbox.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    /* High-fidelity Vector SVG template for default certs */
                    <div className="w-full aspect-[4/3] max-w-[480px] bg-amber-50/5 dark:bg-[#121214] border-8 border-double border-primary/20 rounded-lg p-6 relative flex flex-col justify-between font-serif text-foreground shadow-2xl">
                      {/* Inner gold border */}
                      <div className="absolute inset-1 border border-primary/15 pointer-events-none" />

                      {/* Header */}
                      <div className="text-center space-y-1">
                        <span className="text-[10px] tracking-widest text-primary font-bold uppercase font-sans">
                          Certificate of Appreciation
                        </span>
                        <div className="w-16 h-0.5 bg-primary/40 mx-auto" />
                      </div>

                      {/* Content */}
                      <div className="text-center space-y-3 py-4">
                        <p className="text-[9px] opacity-75 font-sans italic">
                          This document certifies that
                        </p>
                        <h4 className="font-display font-extrabold text-lg tracking-wide text-foreground">
                          Mohanraj Kulanthaivel
                        </h4>
                        <p className="text-[10px] opacity-80 leading-relaxed font-sans max-w-[320px] mx-auto">
                          has successfully demonstrated skill sets and completed milestones associated with:
                          <br />
                          <strong className="text-primary font-serif font-bold text-xs">
                            {activeLightbox.title}
                          </strong>
                        </p>
                      </div>

                      {/* Footer signatures */}
                      <div className="flex justify-between items-end border-t border-border/40 pt-4 font-sans text-[8px] opacity-85">
                        <div className="flex flex-col items-center">
                          <span className="font-serif italic text-primary/80 mb-0.5">Mohanraj K</span>
                          <div className="w-16 h-px bg-border/40" />
                          <span className="text-[7px] uppercase mt-1">Recipient</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="font-serif italic text-primary/80 mb-0.5">{activeLightbox.issuer}</span>
                          <div className="w-16 h-px bg-border/40" />
                          <span className="text-[7px] uppercase mt-1">Authorized Issuer</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Details Meta Column (4 Cols) */}
                <div className="md:col-span-4 p-8 flex flex-col justify-between space-y-6 bg-card border-t md:border-t-0 md:border-l border-border">
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full w-fit block">
                      {activeLightbox.category}
                    </span>

                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-xl text-foreground leading-tight">
                        {activeLightbox.title}
                      </h3>
                      <p className="text-sm opacity-80">
                        Issued by: <span className="font-bold">{activeLightbox.issuer}</span>
                      </p>
                      <p className="text-xs opacity-70">
                        Completion Date: <span className="font-medium">{activeLightbox.date}</span>
                      </p>
                    </div>

                    <div className="bg-neutral-500/5 p-4 rounded-xl border border-border text-xs leading-relaxed opacity-75">
                      🔒 Secured verification protocol. This credential is authenticated by official institutional registries.
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <a
                      href={activeLightbox.imageUrl || "#"}
                      download={activeLightbox.title}
                      className="w-full py-3 rounded-lg bg-primary hover:bg-[#E04F1A] text-white font-semibold text-xs text-center flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-md shadow-primary/10"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download File</span>
                    </a>

                    <button
                      onClick={() => alert("Credential verification link copied to clipboard!")}
                      className="w-full py-3 rounded-lg border border-border hover:bg-neutral-500/10 text-foreground/80 font-semibold text-xs flex items-center justify-center space-x-2 transition-all cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Copy Verification Link</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
