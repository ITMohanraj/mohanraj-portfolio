"use client";

import React from "react";
import { GraduationCap, Award, BrainCircuit, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  // SVG radius calculations for CGPA circle
  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const cgpaValue = 8.1;
  const maxCgpa = 10;
  const strokeDashoffset = circumference - (cgpaValue / maxCgpa) * circumference;

  const cards = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      title: "Vision & Philosophy",
      description: "Building intelligent software systems that bridge the gap between artificial intelligence and practical human experiences.",
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-primary" />,
      title: "Problem Solving",
      description: "Approaching engineering puzzles with structured algorithms and a continuous desire to learn and integrate emerging frameworks.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left space-y-3">
          <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm">
            01 / Background
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Column 1: Main Story (8 Cols on md) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 flex flex-col justify-between p-8 rounded-2xl glass-panel border border-border glow-card glow-border"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-foreground">
                Engineering Smarter Solutions
              </h3>
              <p className="text-base opacity-85 leading-relaxed font-sans">
                I am a B.Tech Information Technology student passionate about Artificial Intelligence, Software Development, Computer Vision, and Web Technologies.
              </p>
              <p className="text-base opacity-85 leading-relaxed font-sans">
                I enjoy solving real-world problems through innovative software solutions. Whether it is coding full-stack web applications, interfacing with IoT hardware, or training vision models for object recognition, I continuously push myself to learn and create.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 mt-6 border-t border-border/40">
              {cards.map((c, idx) => (
                <div key={idx} className="flex space-x-4">
                  <div className="mt-1 flex-shrink-0">{c.icon}</div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-foreground">
                      {c.title}
                    </h4>
                    <p className="text-xs opacity-75 mt-1 leading-normal">
                      {c.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Education Info (4 Cols on md) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl glass-panel border border-border flex flex-col justify-between glow-card glow-border flex-1"
            >
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-xl w-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="text-xs text-primary font-bold uppercase tracking-wider font-display">
                    Education
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-foreground mt-1">
                    Nandha College of Technology
                  </h3>
                  <p className="text-sm opacity-80 font-medium">
                    B.Tech Information Technology
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-border/40 text-xs opacity-70">
                Erode, Tamil Nadu, India
              </div>
            </motion.div>

            {/* CGPA radial progress card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl glass-panel border border-border flex items-center justify-between glow-card glow-border"
            >
              <div className="space-y-1">
                <span className="text-xs text-primary font-bold uppercase tracking-wider font-display">
                  Academic Standings
                </span>
                <h3 className="font-display text-lg font-bold text-foreground">
                  CGPA Profile
                </h3>
                <p className="text-xs opacity-70">
                  Consistently strong academic credentials.
                </p>
              </div>

              {/* Progress Circle */}
              <div className="relative flex items-center justify-center h-24 w-24">
                <svg className="transform -rotate-90 w-full h-full">
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    stroke="var(--border)"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    className="opacity-40"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    stroke="#FF5A1F"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                {/* Center text */}
                <div className="absolute flex flex-col items-center justify-center">
                  <span className="font-display font-extrabold text-xl leading-none">
                    {cgpaValue}
                  </span>
                  <span className="text-[10px] opacity-65 font-medium mt-0.5">
                    / 10
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
