// components/ui/brazil-map.jsx
"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "@/hooks/useTheme";

export default function BrazilMap({ connections = [], lineColor = "#0ea5e9" }) {
  const svgRef = useRef(null);
  const { theme } = useTheme();

  // ✅ Projeção focada no Brasil (mais zoom)
  const projectPoint = (lat, lng) => {
    // Coordenadas do Brasil: lat -5° a -34°, lng -35° a -73°
    const minLat = -34;
    const maxLat = 5;
    const minLng = -73;
    const maxLng = -35;
    
    const x = ((lng - minLng) / (maxLng - minLng)) * 800;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 600;
    
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 30;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[4/3] dark:bg-black bg-white rounded-lg relative font-sans border dark:border-neutral-800 border-neutral-200">
      {/* ✅ Mapa do Brasil em SVG simplificado */}
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full absolute inset-0 opacity-20"
      >
        {/* Contorno simplificado do Brasil */}
        <path
          d="M 200,100 L 300,80 L 400,90 L 500,120 L 580,200 L 600,300 L 580,400 L 520,480 L 400,520 L 300,500 L 250,450 L 200,350 L 180,250 Z"
          fill="none"
          stroke={theme === "dark" ? "#444" : "#ccc"}
          strokeWidth="2"
        />
      </svg>

      {/* ✅ Conexões entre estados */}
      <svg
        ref={svgRef}
        viewBox="0 0 800 600"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {connections.map((connection, i) => {
          const startPoint = projectPoint(connection.start.lat, connection.start.lng);
          const endPoint = projectPoint(connection.end.lat, connection.end.lng);
          
          return (
            <g key={`connection-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#brazil-gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="brazil-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* ✅ Pontos nos estados */}
        {connections.map((connection, i) => (
          <g key={`points-${i}`}>
            {/* Ponto de origem */}
            <circle
              cx={projectPoint(connection.start.lat, connection.start.lng).x}
              cy={projectPoint(connection.start.lat, connection.start.lng).y}
              r="4"
              fill={lineColor}
            />
            <circle
              cx={projectPoint(connection.start.lat, connection.start.lng).x}
              cy={projectPoint(connection.start.lat, connection.start.lng).y}
              r="4"
              fill={lineColor}
              opacity="0.5"
            >
              <animate
                attributeName="r"
                from="4"
                to="12"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="2s"
                begin="0s"
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Ponto de destino */}
            <circle
              cx={projectPoint(connection.end.lat, connection.end.lng).x}
              cy={projectPoint(connection.end.lat, connection.end.lng).y}
              r="3"
              fill={lineColor}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
