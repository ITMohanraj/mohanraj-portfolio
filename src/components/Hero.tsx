"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

const roles = [
  "AI Engineer",
  "Software Developer",
  "Java Developer",
  "SAP Enthusiast",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeRole = roles[currentRoleIndex];

    if (!isDeleting) {
      // Typing
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);

      if (currentText === activeRole) {
        // Pause at end
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      // Deleting
      timer = setTimeout(() => {
        setCurrentText(activeRole.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);

      if (currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#FF5A1F]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glass-panel text-sm font-semibold border border-primary/20 w-fit"
          >
            <span className="animate-bounce">👋</span>
            <span className="text-primary tracking-wide">Hello There!</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none"
            >
              I&apos;m <span className="text-primary">Mohanraj Kulanthaivel</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-10 text-xl md:text-2xl font-display font-medium text-foreground/80 flex items-center"
            >
              <span className="border-r-2 border-primary pr-1.5 animate-pulse min-h-[30px]">
                {currentText}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl text-base md:text-lg opacity-85 leading-relaxed font-sans"
            >
              Building intelligent solutions that combine Artificial Intelligence, Computer Vision, IoT, and Modern Web Technologies. Passionate about solving enterprise business problems and coding clean architecture.
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-lg bg-primary hover:bg-[#E04F1A] text-white font-semibold transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/40 flex items-center space-x-2 group cursor-pointer"
            >
              <span>Hire Me</span>
              <Mail className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#projects"
              className="px-6 py-3.5 rounded-lg border border-primary text-primary hover:bg-primary/10 font-semibold transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3.5 rounded-lg glass-panel hover:bg-neutral-500/10 border border-border text-foreground/80 hover:text-foreground font-semibold transition-all duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Profile Image Frame */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-80 h-96 sm:w-96 sm:h-[450px]"
          >
            {/* Outline Box Behind */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded-2xl -z-10" />
            
            {/* Dots Grid Overlay */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(var(--border)_1.5px,transparent_1.5px)] [background-size:12px_12px] -z-10" />

            {/* Profile Image Wrapper */}
            <div className="w-full h-full rounded-2xl overflow-hidden glass-panel border border-border p-3 relative group">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#0B0B0C]">
                {/* Background Tint Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <Image
                  src="/profile.png"
                  alt="Mohanraj Kulanthaivel"
                  fill
                  priority
                  className="object-cover object-top select-none transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>
            </div>

            {/* Floating Badge 1: AI & ML */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-6 px-4 py-2.5 rounded-xl glass-panel shadow-xl border border-border flex items-center space-x-2 z-20"
            >
              <span className="text-lg">🤖</span>
              <span className="text-xs font-bold font-display tracking-wide uppercase">AI &amp; ML</span>
            </motion.div>

            {/* Floating Badge 2: Computer Vision */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
              className="absolute bottom-16 -left-8 px-4 py-2.5 rounded-xl glass-panel shadow-xl border border-border flex items-center space-x-2 z-20"
            >
              <span className="text-lg">👁️</span>
              <span className="text-xs font-bold font-display tracking-wide uppercase">OpenCV / CV</span>
            </motion.div>

            {/* Floating Badge 3: SAP Developer */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 2, ease: "easeInOut" }}
              className="absolute -bottom-4 right-4 px-4 py-2.5 rounded-xl glass-panel shadow-xl border border-border flex items-center space-x-2 z-20"
            >
              <span className="text-lg">⚙️</span>
              <span className="text-xs font-bold font-display tracking-wide uppercase">SAP Intern</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
