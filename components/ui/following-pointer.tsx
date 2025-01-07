"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { cn } from "@/app/_lib/utils";
import { ArrowUpRight } from "lucide-react"; // Importando o ícone solicitado

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Inicializamos como false

  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect());
      }
    };

    // Recalcula a posição do retângulo da área do card ao carregar
    updateRect();
    window.addEventListener("resize", updateRect);
    
    return () => window.removeEventListener("resize", updateRect);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX + 20); // Ajuste para afastar o motion div
      y.set(e.clientY - rect.top + scrollY + 20); // Ajuste para garantir que o div esteja mais próximo
    }
  };

  const handleMouseLeave = () => {
    setIsInside(false); // Cursor desaparece quando o mouse sai do card
  };

  const handleMouseEnter = () => {
    setIsInside(true); // Cursor aparece quando o mouse entra no card
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "pointer", // Oculta o cursor padrão
      }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />} {/* Exibe o cursor apenas quando hover */}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
}) => {
  return (
    <motion.div
      className="absolute z-50 inline-flex space-x-2 rounded-lg bg-white/40 backdrop-blur-lg px-6 py-4"
      style={{
        top: y,
        left: x,
        pointerEvents: "none", // Evita interações com o cursor
        whiteSpace: "nowrap", // Impede quebras de linha
      }}
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
      }}
    >
      <span className="text-lg text-gray-800">
        {title || `Ver case`}
      </span>
      <ArrowUpRight className="h-7 w-7 text-red-500" />
    </motion.div>
  );
};