"use client";

import React, { useState } from "react";
import { GitBranch, Star, Code2, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GithubSection() {
  const [hoveredCell, setHoveredCell] = useState<{ day: number; count: number } | null>(null);

  // Generate mock contributions grid (53 weeks * 7 days)
  const columns = 28; // Reduced columns for clean responsive mobile-to-desktop grid fitting
  const rows = 7;
  const generateGrid = () => {
    const grid = [];
    for (let c = 0; c < columns; c++) {
      const col = [];
      for (let r = 0; r < rows; r++) {
        // Mock weights for green shades using a deterministic formula to avoid hydration mismatches
        const weight = (c * 7 + r * 13) % 5;
        col.push(weight);
      }
      grid.push(col);
    }
    return grid;
  };

  const gridData = generateGrid();

  const getCellColor = (weight: number) => {
    switch (weight) {
      case 1:
        return "bg-emerald-950 dark:bg-[#0e4429]";
      case 2:
        return "bg-emerald-700 dark:bg-[#006d32]";
      case 3:
        return "bg-emerald-500 dark:bg-[#26a641]";
      case 4:
        return "bg-primary dark:bg-[#39d353]";
      default:
        return "bg-neutral-200 dark:bg-[#161b22]";
    }
  };

  const stats = [
    { label: "Repositories", value: "15+", icon: <Code2 className="h-4 w-4" /> },
    { label: "Total Commits", value: "320+", icon: <GitBranch className="h-4 w-4" /> },
    { label: "Stars Earned", value: "12", icon: <Star className="h-4 w-4" /> },
    { label: "Followers", value: "10+", icon: <Users className="h-4 w-4" /> },
  ];

  const languages = [
    { name: "Java", pct: 40, color: "bg-orange-500" },
    { name: "Python", pct: 30, color: "bg-blue-500" },
    { name: "JavaScript", pct: 20, color: "bg-yellow-500" },
    { name: "HTML & CSS", pct: 10, color: "bg-red-500" },
  ];

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left space-y-3">
          <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm">
            07 / Activity
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
            GitHub Statistics
          </h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        {/* Outer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Calendar Box (8 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 p-8 rounded-2xl glass-panel border border-border flex flex-col justify-between glow-card glow-border h-full"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* GitHub Brand Mark Icon */}
                  <svg className="h-6 w-6 text-foreground fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <h3 className="font-display font-bold text-lg text-foreground">
                    ITMohanraj
                  </h3>
                </div>
                
                <a
                  href="https://github.com/ITMohanraj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-primary text-xs font-bold font-display uppercase hover:underline"
                >
                  <span>Visit GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <p className="text-xs opacity-75 font-sans">
                Summary of software contributions, updates, and open-source activities.
              </p>
            </div>

            {/* Contribution Graph Calendar View */}
            <div className="relative pt-6 overflow-x-auto">
              <div className="flex space-x-1.5 min-w-[340px]">
                {gridData.map((col, cIdx) => (
                  <div key={cIdx} className="flex flex-col space-y-1.5">
                    {col.map((weight, rIdx) => {
                      const dayNumber = cIdx * 7 + rIdx + 1;
                      const commitsCount = weight === 0 ? 0 : weight * ((cIdx + rIdx) % 3 + 1);

                      return (
                        <div
                          key={rIdx}
                          onMouseEnter={() => setHoveredCell({ day: dayNumber, count: commitsCount })}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`h-3 w-3 rounded-xs transition-colors cursor-pointer ${getCellColor(
                            weight
                          )}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
              
              {/* Scale indicator legend */}
              <div className="flex items-center space-x-1 justify-end text-[9px] opacity-70 mt-3.5 pr-2">
                <span>Less</span>
                <div className="h-2.5 w-2.5 bg-neutral-200 dark:bg-[#161b22] rounded-xs" />
                <div className="h-2.5 w-2.5 bg-emerald-950 dark:bg-[#0e4429] rounded-xs" />
                <div className="h-2.5 w-2.5 bg-emerald-700 dark:bg-[#006d32] rounded-xs" />
                <div className="h-2.5 w-2.5 bg-emerald-500 dark:bg-[#26a641] rounded-xs" />
                <div className="h-2.5 w-2.5 bg-primary dark:bg-[#39d353] rounded-xs" />
                <span>More</span>
              </div>

              {/* Tooltip Overlay */}
              {hoveredCell && (
                <div className="absolute top-0 left-0 bg-neutral-900 border border-white/10 text-white font-mono text-[9px] p-2 rounded shadow-lg z-30">
                  {hoveredCell.count === 0 ? "No" : hoveredCell.count} commits on day {hoveredCell.day}
                </div>
              )}
            </div>
          </motion.div>

          {/* Side stats Column (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full">
            {/* Numeric Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl glass-panel border border-border glow-card glow-border grid grid-cols-2 gap-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="p-4 bg-neutral-500/5 rounded-xl border border-border/40 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-primary">
                    {s.icon}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xl font-display font-extrabold text-foreground">{s.value}</h4>
                    <span className="text-[10px] opacity-70 font-sans tracking-wide">{s.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Languages Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl glass-panel border border-border glow-card glow-border space-y-4"
            >
              <h4 className="font-display font-bold text-sm text-foreground">
                Languages Breakdown
              </h4>

              {/* Stacked bar strip */}
              <div className="w-full h-3 rounded-full flex overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                {languages.map((l) => (
                  <div
                    key={l.name}
                    style={{ width: `${l.pct}%` }}
                    className={`${l.color} h-full`}
                    title={`${l.name}: ${l.pct}%`}
                  />
                ))}
              </div>

              {/* Language labels grid */}
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-center space-x-1.5 font-sans font-medium">
                    <span className={`h-2.5 w-2.5 rounded-full ${l.color}`} />
                    <span className="opacity-75">{l.name}</span>
                    <span className="opacity-50">({l.pct}%)</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
