import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { companyInfo } from "../data/companyInfo";

type HexagonBackgroundProps = {
  variant?: "light" | "dark" | "gradient";
  opacity?: number;
  size?: "small" | "medium" | "large";
  className?: string;
  animated?: boolean;
  density?: "low" | "medium" | "high";
};

export default function HexagonBackground({
  variant = "dark",
  opacity = 0.05,
  size = "medium",
  className = "",
  animated = true,
  density = "medium",
}: HexagonBackgroundProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Erkennung von mobilen Geräten beim Client-Rendering
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Bestimme die Farbe basierend auf der Variante
  let color;
  switch (variant) {
    case "light":
      color = "#f3f4f6";
      break;
    case "gradient":
      color = "url(#hex-gradient)";
      break;
    case "dark":
    default:
      color = "#13B7A5";
      break;
  }

  // Bestimme die Größe der Hexagone basierend auf dem Gerät
  let dimensions;
  switch (size) {
    case "small":
      dimensions = {
        width: isMobile ? 50 : 80,
        height: isMobile ? 50 : 80,
        viewBox: "0 0 251 251",
        borderRadius: 15,
      };
      break;
    case "large":
      dimensions = {
        width: isMobile ? 120 : 200,
        height: isMobile ? 120 : 200,
        viewBox: "0 0 251 251",
        borderRadius: 30,
      };
      break;
    case "medium":
    default:
      dimensions = {
        width: isMobile ? 70 : 120,
        height: isMobile ? 70 : 120,
        viewBox: "0 0 251 251",
        borderRadius: 25,
      };
      break;
  }

  // Hexagon-Positionen basierend auf Gerätetyp und Dichte
  let hexagons;

  // Basis-Hexagone für Desktop
  const desktopHexagons = [
    { x: "5%", y: "10%", delay: 0 },
    { x: "15%", y: "70%", delay: 0.5 },
    { x: "40%", y: "20%", delay: 0.3 },
    { x: "65%", y: "85%", delay: 0.7 },
    { x: "75%", y: "35%", delay: 0.2 },
    { x: "90%", y: "15%", delay: 0.6 },
  ];

  // Basis-Hexagone für Mobile (weniger und anders positioniert)
  const mobileHexagons = [
    { x: "10%", y: "15%", delay: 0 },
    { x: "80%", y: "25%", delay: 0.3 },
    { x: "20%", y: "85%", delay: 0.6 },
  ];

  // Je nach Dichte weitere Hexagone hinzufügen oder entfernen
  if (isMobile) {
    // Mobile Dichte-Anpassungen
    switch (density) {
      case "high":
        hexagons = [...mobileHexagons, { x: "85%", y: "70%", delay: 0.4 }];
        break;
      case "low":
        hexagons = mobileHexagons.slice(0, 2); // Nur die ersten 2
        break;
      case "medium":
      default:
        hexagons = mobileHexagons;
        break;
    }
  } else {
    // Desktop Dichte-Anpassungen
    switch (density) {
      case "high":
        hexagons = [
          ...desktopHexagons,
          { x: "25%", y: "40%", delay: 0.4 },
          { x: "60%", y: "50%", delay: 0.2 },
        ];
        break;
      case "low":
        hexagons = desktopHexagons.slice(0, 3); // Nur die ersten 3
        break;
      case "medium":
      default:
        hexagons = desktopHexagons;
        break;
    }
  }

  // Passe die Opazität für mobile Geräte an (subtiler)
  const adjustedOpacity = isMobile ? opacity * 0.7 : opacity;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg width="0" height="0">
        <defs>
          <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(19, 183, 165, 0.8)" />
            <stop offset="100%" stopColor="rgba(1, 57, 65, 0.8)" />
          </linearGradient>
        </defs>
      </svg>

      {hexagons.map((hexagon, index) => (
        <motion.div
          key={index}
          initial={animated ? { opacity: 0, scale: 0.8 } : {}}
          animate={animated ? { opacity: adjustedOpacity, scale: 1 } : {}}
          transition={{
            duration: 1.5,
            delay: hexagon.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: hexagon.x,
            top: hexagon.y,
            transform: "translate(-50%, -50%)",
            width: dimensions.width,
            height: dimensions.height,
            opacity: animated ? 0 : adjustedOpacity,
          }}
        >
          <svg
            viewBox={dimensions.viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <path
              d="M97.6302 250.5L67.9823 198.671L97.6302 146.843H156.919L186.565 198.671L156.919 250.5H97.6302Z"
              fill={color}
              fillOpacity={variant === "gradient" ? 1 : adjustedOpacity * 10}
              stroke={variant === "gradient" ? "none" : color}
              strokeOpacity={adjustedOpacity * 5}
              strokeWidth="1"
              rx={dimensions.borderRadius}
            />
            <path
              d="M33.7727 143.182L4.12485 91.3534L33.7727 39.5248L93.0618 39.5248L122.708 91.3534L93.0618 143.182H33.7727Z"
              fill={color}
              fillOpacity={variant === "gradient" ? 1 : adjustedOpacity * 8}
              stroke={variant === "gradient" ? "none" : color}
              strokeOpacity={adjustedOpacity * 4}
              strokeWidth="1"
              rx={dimensions.borderRadius}
            />
            <path
              d="M30.2239 212.362L0.576026 160.534L30.2239 108.705H89.513L119.159 160.534L89.513 212.362H30.2239Z"
              fill={color}
              fillOpacity={variant === "gradient" ? 1 : adjustedOpacity * 15}
              stroke={variant === "gradient" ? "none" : color}
              strokeOpacity={adjustedOpacity * 6}
              strokeWidth="1"
              rx={dimensions.borderRadius}
            />
            <path
              d="M157.943 136.973L128.295 85.1448L157.943 33.3162L217.232 33.3162L246.878 85.1448L217.232 136.973H157.943Z"
              fill={color}
              fillOpacity={variant === "gradient" ? 1 : adjustedOpacity * 8}
              stroke={variant === "gradient" ? "none" : color}
              strokeOpacity={adjustedOpacity * 4}
              strokeWidth="1"
              rx={dimensions.borderRadius}
            />
            <path
              d="M161.49 212.362L131.842 160.534L161.49 108.705H220.779L250.425 160.534L220.779 212.362H161.49Z"
              fill={color}
              fillOpacity={variant === "gradient" ? 1 : adjustedOpacity * 15}
              stroke={variant === "gradient" ? "none" : color}
              strokeOpacity={adjustedOpacity * 6}
              strokeWidth="1"
              rx={dimensions.borderRadius}
            />
            <path
              d="M95.8567 104.157L66.2088 52.3286L95.8567 0.5L155.146 0.5L184.792 52.3286L155.146 104.157H95.8567Z"
              fill={color}
              fillOpacity={variant === "gradient" ? 1 : adjustedOpacity * 15}
              stroke={variant === "gradient" ? "none" : color}
              strokeOpacity={adjustedOpacity * 6}
              strokeWidth="1"
              rx={dimensions.borderRadius}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
