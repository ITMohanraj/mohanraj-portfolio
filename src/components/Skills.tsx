"use client";

import React, { useState } from "react";
import { Code, Eye, Wrench, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  level: number; // Percentage
  desc: string;
}

interface SkillCategories {
  [key: string]: {
    icon: React.ReactNode;
    title: string;
    skills: Skill[];
  };
}

const skillData: SkillCategories = {
  programming: {
    icon: <Code className="h-5 w-5" />,
    title: "Programming",
    skills: [
      { name: "Java", level: 90, desc: "OOP, collections, data structures" },
      { name: "Python", level: 85, desc: "Scripting, AI modeling, OpenCV integration" },
      { name: "C Language", level: 80, desc: "System levels, core concepts" },
      { name: "JavaScript", level: 82, desc: "Modern frontend interactive logic" },
      { name: "HTML5 & CSS3", level: 92, desc: "Responsive layouts, styling structures" },
      { name: "MySQL", level: 80, desc: "Relational database queries, schema design" },
    ],
  },
  aiCv: {
    icon: <Eye className="h-5 w-5" />,
    title: "AI & Computer Vision",
    skills: [
      { name: "OpenCV", level: 88, desc: "Image manipulation, video flows" },
      { name: "Object Detection", level: 85, desc: "Real-time recognition, YOLO model frames" },
      { name: "Color Detection", level: 86, desc: "Hue/saturation range segmentations" },
      { name: "Machine Learning Fundamentals", level: 80, desc: "Supervised models, classifiers" },
    ],
  },
  tools: {
    icon: <Wrench className="h-5 w-5" />,
    title: "Tools & Technologies",
    skills: [
      { name: "SAP ERP", level: 82, desc: "Enterprise modules, ERP systems workflows" },
      { name: "Git", level: 88, desc: "Branching workflows, version tracking" },
      { name: "GitHub", level: 90, desc: "Repository systems, collaboration pipelines" },
      { name: "VS Code", level: 92, desc: "Productivity workspace extensions setup" },
      { name: "Arduino IDE", level: 84, desc: "Microcontroller coding, physical systems" },
    ],
  },
  softSkills: {
    icon: <Users className="h-5 w-5" />,
    title: "Professional Skills",
    skills: [
      { name: "Problem Solving", level: 92, desc: "Analytical mindset, debug tracking" },
      { name: "Team Collaboration", level: 90, desc: "Coordinating development tasks" },
      { name: "Communication", level: 88, desc: "Presenting slides, technical documentation" },
      { name: "Leadership", level: 85, desc: "Coordinating project steps, organizing tasks" },
    ],
  },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("programming");

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left space-y-3">
          <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm">
            02 / Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
            Technical Skills
          </h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        {/* Tab Buttons Grid */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-border/40 pb-4">
          {Object.keys(skillData).map((key) => {
            const category = skillData[key];
            const isActive = activeTab === key;

            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-2.5 px-5 py-3 rounded-lg font-display text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "glass-panel text-foreground/80 hover:text-foreground hover:bg-neutral-500/10 border border-border"
                }`}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills List Grid */}
        <div className="min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skillData[activeTab].skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="p-6 rounded-2xl glass-panel border border-border flex flex-col justify-between glow-card glow-border"
                >
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-end">
                      <h3 className="font-display font-bold text-lg text-foreground leading-none">
                        {skill.name}
                      </h3>
                      <span className="text-sm font-display font-extrabold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-xs opacity-70">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Progress Bar Container */}
                  <div className="w-full bg-neutral-200 dark:bg-neutral-800 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                      className="bg-primary h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
