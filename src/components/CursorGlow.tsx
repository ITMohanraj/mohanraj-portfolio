"use client";

import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const updateMouseCoordinates = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", updateMouseCoordinates);
    return () => {
      window.removeEventListener("mousemove", updateMouseCoordinates);
    };
  }, []);

  return null;
}
