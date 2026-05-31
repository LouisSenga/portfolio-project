"use client";

import { motion } from "framer-motion";
import { heroBadges } from "../../data/hero-data";

function Avatar() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id="ag" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <clipPath id="ac">
          <circle cx="100" cy="100" r="90" />
        </clipPath>
      </defs>
      <circle cx="100" cy="100" r="90" fill="url(#ag)" opacity="0.2" />
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="url(#ag)"
        strokeWidth="2"
      />
      <ellipse
        cx="100"
        cy="160"
        rx="45"
        ry="35"
        fill="url(#ag)"
        opacity="0.6"
        clipPath="url(#ac)"
      />
      <circle cx="100" cy="82" r="32" fill="url(#ag)" opacity="0.8" />
      <text
        x="100"
        y="90"
        textAnchor="middle"
        fontSize="20"
        fill="white"
        fontFamily="monospace"
        fontWeight="bold">
        &lt;/&gt;
      </text>
    </svg>
  );
}

export default function HeroAvatar() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ position: "relative", width: "320px", height: "320px" }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "2px dashed rgba(139,92,246,0.3)",
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: "16px",
            borderRadius: "50%",
            border: "1px dashed rgba(6,182,212,0.2)",
          }}
        />
        <div
          className="glow-violet"
          style={{
            position: "absolute",
            inset: "32px",
            borderRadius: "50%",
            overflow: "hidden",
          }}>
          <Avatar />
        </div>
        {heroBadges.map((badge) => (
          <motion.div
            key={badge.label}
            animate={{ y: badge.y }}
            transition={{
              duration: badge.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              ...badge.position,
              background: "#0d1220",
              border: `1px solid ${badge.border}`,
              borderRadius: "10px",
              padding: "8px 12px",
              fontSize: "0.75rem",
              fontWeight: 600,
              color: badge.color,
            }}>
            {badge.label}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
