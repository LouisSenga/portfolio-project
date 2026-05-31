"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const colorMap: Record<string, { from: string; to: string }> = {
  "violet-cyan": { from: "#8b5cf6", to: "#06b6d4" },
  "blue-violet": { from: "#3b82f6", to: "#8b5cf6" },
  "cyan-blue": { from: "#06b6d4", to: "#3b82f6" },
  "emerald-cyan": { from: "#10b981", to: "#06b6d4" },
  "orange-pink": { from: "#f97316", to: "#ec4899" },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      style={{ position: "relative", padding: "7rem 0", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "-10rem",
          right: "-10rem",
          width: "24rem",
          height: "24rem",
          background: "rgba(8,145,178,0.08)",
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
          style={{ marginBottom: "4rem" }}>
          <span className="section-label" style={{ marginBottom: "12px" }}>
            Ce que j&apos;ai construit
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne,'Syne',sans-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "12px",
            }}>
            Mes <span className="gradient-text">projets</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "24px",
          }}
          className="projects-grid">
          {projects.map((p, i) => {
            const c = colorMap[p.color] ?? { from: "#8b5cf6", to: "#06b6d4" };
            return (
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
                  overflow: "hidden",
                }}>
                {/* Top color line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(to right, ${c.from}, ${c.to})`,
                    opacity: 0.8,
                  }}
                />

                {/* Badge + actions */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      padding: "4px 10px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#94a3b8",
                      fontWeight: 500,
                    }}>
                    {p.badge}
                  </span>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#64748b",
                          textDecoration: "none",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#fff")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#64748b")
                        }>
                        <GithubIcon />
                      </a>
                    )}
                    {p.playstore && (
                      <a
                        href={p.playstore}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          background: "rgba(6,182,212,0.06)",
                          border: "1px solid rgba(6,182,212,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#22d3ee",
                          textDecoration: "none",
                          transition: "all 0.2s",
                          fontSize: "0.75rem",
                        }}
                        title="Voir sur Play Store"
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(6,182,212,0.5)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.borderColor =
                            "rgba(6,182,212,0.2)")
                        }>
                        ▶
                      </a>
                    )}
                    {p.link && !p.playstore && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#64748b",
                          textDecoration: "none",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#22d3ee")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#64748b")
                        }>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "1.05rem",
                    marginBottom: "10px",
                  }}>
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "0.855rem",
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: "18px",
                  }}>
                  {p.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.7rem",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "rgba(139,92,246,0.1)",
                        border: "1px solid rgba(139,92,246,0.2)",
                        color: "#c4b5fd",
                        fontWeight: 500,
                      }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.projects-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){.projects-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  );
}
