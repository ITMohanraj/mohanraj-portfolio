"use client";

import React from "react";
import { Trophy, Star, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

interface Achievement {
  title: string;
  badgeText: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    title: "2nd Place in AI Paper Presentation",
    badgeText: "🏆 Symposium Award",
    description: "Presented research papers on emerging Artificial Intelligence implementations, securing the second-place trophy in the technical symposium.",
    icon: <Trophy className="h-6 w-6 text-primary" />,
  },
  {
    title: "2nd Place in Innovation Day Project",
    badgeText: "🏆 Project Expo",
    description: "Designed and presented assistive computer vision software on Innovation Day, recognized with a runner-up award among college projects.",
    icon: <Trophy className="h-6 w-6 text-primary" />,
  },
  {
    title: "SAP Internship at Accenture",
    badgeText: "✔ Completed",
    description: "Succesfully completed rigorous SAP application development training modules, collaborating inside enterprise sandboxes.",
    icon: <Star className="h-6 w-6 text-primary" />,
  },
  {
    title: "Web Dev Internship Completion",
    badgeText: "✔ Completed",
    description: "Successfully built multiple responsive interface layouts, acquiring practical training in modern frontend design systems.",
    icon: <CheckSquare className="h-6 w-6 text-primary" />,
  },
];

export default function Achievements() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/10 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left space-y-3">
          <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm">
            06 / Awards
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
            Key Achievements
          </h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-panel border border-border flex flex-col justify-between glow-card glow-border"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/5 border border-primary/10 px-2.5 py-1 rounded-full">
                    {item.badgeText}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-lg text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
