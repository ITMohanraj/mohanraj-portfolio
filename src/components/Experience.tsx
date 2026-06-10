"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Accenture",
    role: "Package Application Development Associate (SAP Intern)",
    duration: "May 2025 – July 2025",
    highlights: [
      "Gained hands-on experience with SAP ERP systems and database management.",
      "Assisted in analyzing and designing business process integration schemas.",
      "Developed understanding of enterprise workflows, pipelines, and modules.",
      "Participated in agile Scrum standups and team project briefings.",
    ],
  },
  {
    company: "Acmegrade",
    role: "Web Development Intern",
    duration: "January 2024 – February 2024",
    highlights: [
      "Engineered fully responsive, mobile-first frontend pages and mock layouts.",
      "Utilized modern UI implementation practices to construct accessible templates.",
      "Tested and debugged layouts cross-browser for style compatibility.",
      "Collaborated on small-scale code integration pipelines.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/10 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left space-y-3">
          <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm">
            03 / History
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
            Work Experience
          </h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 md:pl-0">
          {/* Vertical Center Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute top-1.5 md:top-1/2 left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="h-6 w-6 rounded-full border-4 border-background bg-primary shadow-md shadow-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8"
                  >
                    <div className="p-8 rounded-2xl glass-panel border border-border glow-card glow-border space-y-4">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="space-y-1">
                          <h3 className="font-display font-extrabold text-xl text-primary leading-none">
                            {exp.company}
                          </h3>
                          <p className="text-base font-semibold font-display text-foreground/90">
                            {exp.role}
                          </p>
                        </div>
                        
                        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-500/10 border border-border text-xs opacity-75 font-semibold">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3 pt-3 border-t border-border/40">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="h-4.5 w-4.5 text-primary/80 mt-0.5 flex-shrink-0" />
                            <span className="opacity-80 leading-normal font-sans">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
