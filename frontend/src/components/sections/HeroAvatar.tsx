"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroBadges } from "../../data/hero-data";

function Avatar() {
  return (
    <Image
      src="/images/avatar.jpeg"
      alt="Avatar"
      fill
      priority
      sizes="256px"
      style={{
        objectFit: "cover",
        objectPosition: "center calc(50% + 25px)",
      }}
    />
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
