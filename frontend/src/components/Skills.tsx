"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" style={{ position: "relative", padding: "7rem 0" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom,transparent,rgba(30,58,138,0.04),transparent)",
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
            Mon arsenal
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne,'Syne',sans-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "12px",
            }}>
            Compétences <span className="gradient-text">techniques</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
          className="skills-grid">
          {skills.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card"
              style={{ padding: "24px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                }}>
                <span style={{ fontSize: "1.5rem" }}>{g.icon}</span>
                <h3
                  style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "0.95rem",
                  }}>
                  {g.category}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {g.items.map((item, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: i * 0.08 + j * 0.04 }}
                    style={{
                      fontSize: "0.8rem",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#cbd5e1",
                      fontWeight: 500,
                      cursor: "default",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(139,92,246,0.4)";
                      (e.currentTarget as HTMLElement).style.color = "#c4b5fd";
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(139,92,246,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.color = "#cbd5e1";
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.04)";
                    }}>
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="card"
          style={{ padding: "24px", marginTop: "24px" }}>
          <h3
            style={{
              fontFamily: "var(--font-syne,'Syne',sans-serif)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "20px",
              fontSize: "0.95rem",
            }}>
            🌍 Langues
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "24px",
            }}
            className="lang-grid">
            {[
              { lang: "Malagasy", level: "Langue maternelle", pct: 100 },
              { lang: "Français", level: "Avancé", pct: 80 },
              { lang: "Anglais", level: "Débutant", pct: 25 },
            ].map(({ lang, level, pct }) => (
              <div key={lang}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}>
                  <span
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    }}>
                    {lang}
                  </span>
                  <span style={{ color: "#64748b", fontSize: "0.75rem" }}>
                    {level}
                  </span>
                </div>
                <div
                  style={{
                    height: "6px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "999px",
                    overflow: "hidden",
                  }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      borderRadius: "999px",
                      background: "linear-gradient(to right,#8b5cf6,#06b6d4)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:1024px){.skills-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:640px){.skills-grid,.lang-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
