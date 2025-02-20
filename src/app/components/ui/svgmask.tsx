"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const updateMousePosition = (e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", updateMousePosition);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);

  const maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("w-screen h-screen relative overflow-hidden", className)}
      animate={{
        backgroundColor: isHovered ? "#1f0236" : "var(--white)",
      }}
    >
      {/* Masked Background */}
      <motion.div
        className="w-screen h-screen flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-white 
        [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
        }}
        transition={{
          duration: 0,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black h-full w-full z-0 opacity-50" />

        {/* Hoverable Content */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="max-w-4xl mx-auto text-center text-white text-4xl font-bold relative z-20"
        >
          {children}
        </div>
      </motion.div>

      {/* Reveal Text (Appears When Hovering) */}
      <div className="w-screen h-screen flex items-center justify-center text-white">
        {revealText}
      </div>
    </motion.div>
  );
};
