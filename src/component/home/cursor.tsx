"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/60 transition-all duration-150"
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-[99999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}