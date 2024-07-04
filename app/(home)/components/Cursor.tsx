'use client'
import { useState, useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Ensure the default cursor is hidden across the entire document
    document.documentElement.style.cursor = "none"; 

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // Restore default cursor on unmount (optional)
      document.documentElement.style.cursor = "auto"; 
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50"
      style={{
        top: mousePosition.y,
        left: mousePosition.x,
        width: "40px",   // Double the original size
        height: "40px",
      }}
    >
      <div
        className="backdrop-blur-sm bg-zinc-800/50 border border-zinc-700/50 rounded-full w-full h-full"
      />
    </div>
  );
}

export default Cursor;
