"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border mt-auto bg-black/5 dark:bg-white/[0.002]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs opacity-70 space-y-4 md:space-y-0">
        <p>© {new Date().getFullYear()} Mohanraj Kulanthaivel. All Rights Reserved.</p>
        <p className="font-display">
          Built with <span className="text-primary font-bold">Next.js</span> &amp; <span className="text-primary font-bold">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
