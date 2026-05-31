"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useEffect, useState } from "react";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const roles = [
  "Développeur Backend NestJS",
  "Développeur Laravel",
  "Développeur React Native",
  "Développeur Full Stack",
  "Intégrateur d'APIs IA",
];

function TypeWriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length)
      t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 1800);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    else
      t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      }, 0);

    return () => clearTimeout(t);
  }, [displayed, deleting, index]);

  return (
    <span
      className="gradient-text"
      style={{
        fontFamily: "var(--font-syne,'Syne',sans-serif)",
        fontWeight: 700,
      }}>
      {displayed}
      <span className="cursor" style={{ color: "#8b5cf6" }}>
        |
      </span>
    </span>
  );
}

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

const btnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 24px",
  borderRadius: "12px",
  fontWeight: 600,
  fontSize: "0.95rem",
  textDecoration: "none",
  cursor: "pointer",
  transition: "all 0.2s",
};

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
      {/* Blobs */}
      <div
        className="animate-blob"
        style={{
          position: "absolute",
          top: "-8rem",
          left: "-8rem",
          width: "24rem",
          height: "24rem",
          background: "rgba(124,58,237,0.2)",
          borderRadius: "50%",
          filter: "blur(64px)",
        }}
      />
      <div
        className="animate-blob animation-delay-2000"
        style={{
          position: "absolute",
          top: "50%",
          right: "-8rem",
          width: "24rem",
          height: "24rem",
          background: "rgba(37,99,235,0.2)",
          borderRadius: "50%",
          filter: "blur(64px)",
        }}
      />
      <div
        className="animate-blob animation-delay-4000"
        style={{
          position: "absolute",
          bottom: "-8rem",
          left: "33%",
          width: "24rem",
          height: "24rem",
          background: "rgba(8,145,178,0.15)",
          borderRadius: "50%",
          filter: "blur(64px)",
        }}
      />

      <div
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
        }}
        className="hero-grid">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "24px",
            }}>
            <span className="section-label">Disponible pour freelance</span>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#34d399",
                animation: "pulse 2s infinite",
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-syne,'Syne',sans-serif)",
              fontSize: "clamp(2.5rem,5vw,3.75rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "16px",
              color: "#fff",
            }}>
            {personalInfo.name.split(" ")[0]}{" "}
            <span style={{ color: "#94a3b8" }}>
              {personalInfo.name.split(" ")[1]}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "1.25rem",
              color: "#cbd5e1",
              marginBottom: "24px",
              minHeight: "40px",
            }}>
            <TypeWriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              color: "#94a3b8",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "24px",
              maxWidth: "28rem",
            }}>
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#64748b",
              fontSize: "0.875rem",
              marginBottom: "40px",
            }}>
            <MapPin size={14} style={{ color: "#06b6d4" }} />
            <span>{personalInfo.location}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a
              href="#contact"
              style={{ ...btnBase, background: "#7c3aed", color: "#fff" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#6d28d9")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#7c3aed")
              }>
              <Mail size={16} /> Me contacter
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...btnBase,
                background: "transparent",
                color: "#cbd5e1",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(139,92,246,0.5)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#cbd5e1";
              }}>
              <GithubIcon /> GitHub
            </a>
            <a
              href={personalInfo.playstore}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...btnBase,
                background: "transparent",
                color: "#22d3ee",
                border: "1px solid rgba(6,182,212,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(6,182,212,0.6)";
                e.currentTarget.style.background = "rgba(6,182,212,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(6,182,212,0.3)";
                e.currentTarget.style.background = "transparent";
              }}>
              <ExternalLink size={16} /> Koékip sur Play Store
            </a>
          </motion.div>
        </div>

        {/* Right — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ position: "relative", width: "320px", height: "320px" }}>
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
            {/* Badge bas gauche */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "-8px",
                left: "-16px",
                background: "#0d1220",
                border: "1px solid rgba(139,92,246,0.3)",
                borderRadius: "10px",
                padding: "8px 12px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#c4b5fd",
              }}>
              ⚡ NestJS
            </motion.div>

            {/* Badge haut droite */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: "-8px",
                right: "-16px",
                background: "#0d1220",
                border: "1px solid rgba(6,182,212,0.3)",
                borderRadius: "10px",
                padding: "8px 12px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#67e8f9",
              }}>
              📱 React Native
            </motion.div>

            {/* Badge milieu droite */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "45%",
                right: "-40px",
                background: "#0d1220",
                border: "1px solid rgba(59,130,246,0.3)",
                borderRadius: "10px",
                padding: "8px 12px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#93c5fd",
              }}>
              🤖 IA
            </motion.div>

            {/* Badge haut gauche */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: "-8px",
                left: "-16px",
                background: "#0d1220",
                border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: "10px",
                padding: "8px 12px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#6ee7b7",
              }}>
              🚀 2 Apps publiées
            </motion.div>

            {/* Badge bas droite */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                bottom: "-8px",
                right: "-16px",
                background: "#0d1220",
                border: "1px solid rgba(245,158,11,0.3)",
                borderRadius: "10px",
                padding: "8px 12px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#fcd34d",
              }}>
              💳 Stripe & SaaS
            </motion.div>

            {/* Badge milieu gauche — Next.js */}
            <motion.div
              animate={{ y: [3, -3, 3] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                top: "45%",
                left: "-40px",
                background: "#0d1220",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "10px",
                padding: "8px 12px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#e2e8f0",
              }}>
              ▲ Next.js
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
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

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; padding-top: 6rem !important; }
          .hero-grid > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
