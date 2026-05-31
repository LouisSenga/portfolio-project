"use client";

import { motion } from "framer-motion";
import HeroAvatar from "@/components/sections/HeroAvatar";
import HeroIntro from "@/components/sections/HeroIntro";

function HeroGlow() {
  return (
    <>
      <div className="animate-blob hero-glow hero-glow-left" />
      <div className="animate-blob animation-delay-2000 hero-glow hero-glow-right" />
      <div className="animate-blob animation-delay-4000 hero-glow hero-glow-bottom" />
    </>
  );
}

function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}>
      <span
        style={{
          fontSize: "0.7rem",
          color: "#334155",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}>
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, #8b5cf6, transparent)",
        }}
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}>
      <HeroGlow />
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "8rem 1.5rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}>
        <HeroIntro />
        <HeroAvatar />
      </div>
      <ScrollCue />

      <style>{`
        .hero-glow {
          position: absolute;
          width: 24rem;
          height: 24rem;
          border-radius: 50%;
          filter: blur(64px);
        }
        .hero-glow-left {
          top: -8rem;
          left: -8rem;
          background: rgba(124,58,237,0.2);
        }
        .hero-glow-right {
          top: 50%;
          right: -8rem;
          background: rgba(37,99,235,0.2);
        }
        .hero-glow-bottom {
          bottom: -8rem;
          left: 33%;
          background: rgba(8,145,178,0.15);
        }
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          animation: pulse 2s infinite;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 6rem !important;
          }
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
