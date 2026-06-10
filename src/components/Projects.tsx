"use client";
 
import React from "react";
import { Cpu, Eye, CloudRain, ShieldCheck, Tag, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  icon: React.ReactNode;
  mockup: React.ReactNode;
  github?: string;
  demo?: string;
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      id: "cv-object-detection",
      title: "Blind People Object Detection System",
      category: "AI + Computer Vision",
      description: "An assistive real-time computer vision system built to detect object classes, label environmental colors, and stream descriptive voice feedback for visually impaired users.",
      features: ["Real-Time Object Detection", "Color Recognition", "Voice Output System", "Accessibility Focused"],
      tech: ["Python", "OpenCV", "Machine Learning"],
      icon: <Eye className="h-5 w-5 text-primary" />,
      github: "https://github.com/ITMohanraj/Object-Detection",
      mockup: (
        <div className="w-full h-48 bg-neutral-900 rounded-xl relative border border-white/10 overflow-hidden flex flex-col justify-between p-3 font-mono text-[10px] text-green-400">
          {/* Camera overlay */}
          <div className="absolute top-2 right-2 flex items-center space-x-1">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-[8px] uppercase tracking-wider text-red-500 font-bold">Live Feed</span>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            {/* Viewfinder brackets */}
            <div className="absolute top-4 left-6 border-t-2 border-l-2 border-white/40 w-4 h-4" />
            <div className="absolute top-4 right-6 border-t-2 border-r-2 border-white/40 w-4 h-4" />
            <div className="absolute bottom-4 left-6 border-b-2 border-l-2 border-white/40 w-4 h-4" />
            <div className="absolute bottom-4 right-6 border-b-2 border-r-2 border-white/40 w-4 h-4" />
            
            {/* Detection Bounding Box 1 */}
            <div className="absolute top-8 left-12 border border-primary bg-primary/10 rounded px-1.5 py-0.5 text-[8px] flex flex-col font-bold">
              <span className="text-white">Person: 96%</span>
              <div className="w-16 h-20 border border-primary/40 rounded-sm mt-0.5" />
            </div>

            {/* Detection Bounding Box 2 */}
            <div className="absolute bottom-8 right-12 border border-[#FF5A1F] bg-[#FF5A1F]/10 rounded px-1.5 py-0.5 text-[8px] flex flex-col font-bold">
              <span className="text-white">Bottle: 89%</span>
              <div className="w-12 h-12 border border-[#FF5A1F]/40 rounded-sm mt-0.5" />
            </div>
          </div>

          {/* Voice Output text bar */}
          <div className="bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10 flex items-center justify-between text-white text-[9px]">
            <span>🔊 Audio: &quot;Person detected directly ahead. Bottle to the right.&quot;</span>
            <div className="flex items-center space-x-0.5">
              <span className="h-3 w-0.5 bg-primary animate-[bounce_1s_infinite_100ms]" />
              <span className="h-2 w-0.5 bg-primary animate-[bounce_1s_infinite_300ms]" />
              <span className="h-4 w-0.5 bg-primary animate-[bounce_1s_infinite_200ms]" />
              <span className="h-1.5 w-0.5 bg-primary animate-[bounce_1s_infinite_400ms]" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "iot-irrigation",
      title: "IoT Agricultural Irrigation System",
      category: "IoT + Embedded Systems",
      description: "An automated smart water management project designed to monitor soil moisture parameters via ESP32 microcontrollers and execute automatic valve controls.",
      features: ["Soil Moisture Monitoring", "Automatic Irrigation Control", "Smart Water Management", "Microcontroller Interfacing"],
      tech: ["ESP32", "Arduino", "Embedded C"],
      icon: <Cpu className="h-5 w-5 text-primary" />,
      github: "https://github.com/ITMohanraj",
      mockup: (
        <div className="w-full h-48 bg-neutral-900 rounded-xl relative border border-white/10 p-4 font-mono text-xs text-slate-300 flex flex-col justify-between">
          {/* Dashboard Header */}
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="text-[10px] text-primary font-bold uppercase tracking-wider">ESP32 Dashboard</span>
            <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold">Online</span>
          </div>

          {/* Core Info Grid */}
          <div className="grid grid-cols-2 gap-4 py-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex flex-col justify-center">
              <span className="text-[9px] text-muted opacity-75">Soil Moisture</span>
              <span className="text-lg font-bold text-white mt-1">68.4%</span>
              <span className="text-[8px] text-emerald-400 font-bold mt-0.5">✔ Status: Optimal</span>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex flex-col justify-center">
              <span className="text-[9px] text-muted opacity-75">Solenoid Valve</span>
              <span className="text-lg font-bold text-white mt-1">CLOSED</span>
              <span className="text-[8px] text-amber-400 font-bold mt-0.5">● Mode: Auto</span>
            </div>
          </div>

          {/* Raw console logging */}
          <div className="bg-black p-2 rounded border border-white/5 text-[9px] text-primary/80 overflow-hidden whitespace-nowrap">
            &gt; Reading sensors... Moisture: 68% | Relay: 0 | Loop: 250ms
          </div>
        </div>
      ),
    },
    {
      id: "weather-prediction",
      title: "Climate Weather Prediction Web App",
      category: "Web Development",
      description: "A highly responsive meteorological forecast platform utilizing API integration to render live climate datasets and historical trends in high-fidelity graphics.",
      features: ["Weather Forecasting", "Real-Time API Data", "Interactive Climate Graphics"],
      tech: ["HTML5", "CSS3", "JavaScript"],
      icon: <CloudRain className="h-5 w-5 text-primary" />,
      github: "https://github.com/ITMohanraj/Weather-Application",
      demo: "https://padix-flask.vercel.app",
      mockup: (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-900 via-slate-900 to-neutral-900 rounded-xl relative border border-white/10 p-4 text-white flex flex-col justify-between">
          {/* Current weather card */}
          <div className="flex justify-between items-start">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase tracking-widest text-indigo-300 font-bold">Current Weather</span>
              <h4 className="text-sm font-bold">Erode, India</h4>
              <p className="text-[10px] opacity-70">Scatter clouds, light rain</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-extrabold font-display">28°C</span>
              <p className="text-[9px] opacity-70">Feels like 31°C</p>
            </div>
          </div>

          {/* Simple forecast row */}
          <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/10">
            {[
              { day: "Mon", temp: "29°", active: false },
              { day: "Tue", temp: "27°", active: true },
              { day: "Wed", temp: "28°", active: false },
              { day: "Thu", temp: "30°", active: false },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-1.5 rounded-lg flex flex-col items-center justify-center text-[10px] ${
                  item.active ? "bg-primary text-white" : "bg-white/5"
                }`}
              >
                <span className="opacity-70">{item.day}</span>
                <span className="font-bold mt-0.5">{item.temp}</span>
              </div>
            ))}
          </div>

          {/* Visual Sparkline graph */}
          <div className="h-6 w-full flex items-end space-x-1.5 pt-1">
            {[20, 40, 35, 55, 45, 60, 50, 70, 65, 80].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-primary/80 to-primary rounded-t-sm"
              />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left space-y-3">
          <span className="text-primary font-display font-semibold tracking-wider uppercase text-sm">
            04 / Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        {/* Projects Column layout */}
        <div className="space-y-12">
          {projects.map((proj, idx) => {
            const isReverse = idx % 2 === 1;

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 rounded-2xl glass-panel border border-border glow-card glow-border items-center"
              >
                {/* Left Side: Mockups */}
                <div className={`lg:col-span-5 ${isReverse ? "lg:order-last" : ""}`}>
                  <div className="p-2 bg-neutral-950 dark:bg-neutral-900 rounded-2xl border border-border shadow-inner relative group">
                    <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {proj.mockup}
                  </div>
                </div>

                {/* Right Side: Copy & Info */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      {proj.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider font-display text-primary bg-primary/5 border border-primary/10 px-2 py-0.5 rounded-full">
                      {proj.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-extrabold text-foreground">
                      {proj.title}
                    </h3>
                    <p className="text-sm opacity-85 leading-relaxed font-sans">
                      {proj.description}
                    </p>
                  </div>

                  {/* Core Features */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {proj.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-xs">
                        <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="opacity-80 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                    {proj.tech.map((t) => (
                      <div
                        key={t}
                        className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-neutral-500/10 border border-border text-xs font-semibold opacity-80"
                      >
                        <Tag className="h-3 w-3 text-primary" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border/40">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary/10 text-xs font-semibold transition-all duration-300 flex items-center space-x-1.5 cursor-pointer"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>GitHub Repo</span>
                      </a>
                    )}
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-primary hover:bg-[#E04F1A] text-white text-xs font-semibold transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg flex items-center space-x-1.5 cursor-pointer"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
