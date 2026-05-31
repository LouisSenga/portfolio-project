"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PenLine, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Comment j'ai intégré l'API OpenAI dans une app Laravel",
    date: "Mai 2025",
    tag: "IA & Backend",
    emoji: "🤖",
    description:
      "Retour d'expérience sur l'intégration de GPT-4 dans un projet Laravel en production.",
    draft: true,
  },
  {
    title: "NestJS vs Express : lequel choisir pour une API REST ?",
    date: "Avril 2025",
    tag: "Backend",
    emoji: "⚡",
    description:
      "Comparaison technique entre les deux frameworks Node.js les plus populaires.",
    draft: true,
  },
  {
    title: "Déployer une app React Native sur le Google Play Store",
    date: "Mars 2025",
    tag: "Mobile",
    emoji: "📱",
    description:
      "Guide complet du build à la publication, avec les erreurs à éviter.",
    draft: true,
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="blog"
      style={{ position: "relative", padding: "7rem 0", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          bottom: "-10rem",
          left: "-10rem",
          width: "24rem",
          height: "24rem",
          background: "rgba(109,40,217,0.06)",
          borderRadius: "50%",
          filter: "blur(64px)",
          pointerEvents: "none",
        }}
      />
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "4rem",
          }}>
          <div>
            <span className="section-label" style={{ marginBottom: "12px" }}>
              Mes réflexions
            </span>
            <h2
              style={{
                fontFamily: "var(--font-syne,'Syne',sans-serif)",
                fontSize: "clamp(2rem,4vw,3rem)",
                fontWeight: 700,
                color: "#fff",
                marginTop: "12px",
              }}>
              Blog <span className="gradient-text">technique</span>
            </h2>
          </div>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.875rem",
              color: "#a78bfa",
              fontWeight: 600,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c4b5fd")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a78bfa")}>
            Voir tout <ArrowRight size={14} />
          </a>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "24px",
          }}
          className="blog-grid">
          {articles.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                cursor: "pointer",
              }}>
              {a.draft && (
                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    fontSize: "0.65rem",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    background: "rgba(245,158,11,0.12)",
                    border: "1px solid rgba(245,158,11,0.25)",
                    color: "#fbbf24",
                  }}>
                  Bientôt
                </span>
              )}
              <div style={{ fontSize: "1.75rem", marginBottom: "16px" }}>
                {a.emoji}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "12px",
                }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.2)",
                    color: "#a78bfa",
                    fontWeight: 500,
                  }}>
                  {a.tag}
                </span>
                <span style={{ fontSize: "0.75rem", color: "#334155" }}>
                  {a.date}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne,'Syne',sans-serif)",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  marginBottom: "12px",
                  flex: 1,
                }}>
                {a.title}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.875rem",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}>
                {a.description}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.75rem",
                  color: "#475569",
                  fontWeight: 500,
                }}>
                <PenLine size={12} /> Lire l&apos;article <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:1024px){.blog-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:640px){.blog-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
