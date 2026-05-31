"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, education } from "@/data/portfolio";
import { GraduationCap, Code2, Zap } from "lucide-react";

const stats = [
  { value: "3+", label: "Années d'expérience" },
  { value: "10+", label: "Projets livrés" },
  { value: "2", label: "Apps sur Play Store" },
  { value: "M2", label: "Diplôme obtenu" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      style={{ position: "relative", padding: "7rem 0", overflow: "hidden" }}>
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}>
          <span className="section-label" style={{ marginBottom: "12px" }}>
            Qui suis-je
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne,'Syne',sans-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "12px",
            }}>
            À propos de <span className="gradient-text">moi</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="about-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}>
            <p
              style={{
                color: "#cbd5e1",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "2rem",
                whiteSpace: "pre-line",
              }}>
              {personalInfo.about}
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                {
                  Icon: Zap,
                  color: "#a78bfa",
                  bg: "rgba(139,92,246,0.08)",
                  border: "rgba(139,92,246,0.2)",
                  text: "Spécialiste NestJS — mon framework favori pour des APIs robustes et scalables.",
                },
                {
                  Icon: Code2,
                  color: "#22d3ee",
                  bg: "rgba(6,182,212,0.08)",
                  border: "rgba(6,182,212,0.2)",
                  text: "Intégration d'IA (OpenAI, Gemini) et services Google dans des projets réels.",
                },
                {
                  Icon: GraduationCap,
                  color: "#60a5fa",
                  bg: "rgba(59,130,246,0.08)",
                  border: "rgba(59,130,246,0.2)",
                  text: "Master II en Science des Données et Intelligence Artificielle — EMIT Fianarantsoa.",
                },
              ].map(({ Icon, color, bg, border, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    background: bg,
                    border: `1px solid ${border}`,
                  }}>
                  <Icon
                    size={18}
                    style={{ color, marginTop: "2px", flexShrink: 0 }}
                  />
                  <p
                    style={{
                      color: "#cbd5e1",
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                    }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "24px",
              }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="card"
                  style={{ padding: "24px", textAlign: "center" }}>
                  <p
                    className="gradient-text"
                    style={{
                      fontFamily: "var(--font-syne,'Syne',sans-serif)",
                      fontSize: "1.875rem",
                      fontWeight: 800,
                      marginBottom: "4px",
                    }}>
                    {s.value}
                  </p>
                  <p style={{ color: "#64748b", fontSize: "0.8rem" }}>
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="card"
              style={{ padding: "24px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-syne,'Syne',sans-serif)",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}>
                <GraduationCap size={18} style={{ color: "#a78bfa" }} />{" "}
                Formation
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}>
                {education.map((e, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "10px",
                        background: "rgba(139,92,246,0.1)",
                        border: "1px solid rgba(139,92,246,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: "#a78bfa",
                        }}>
                        {e.year}
                      </span>
                    </div>
                    <div>
                      <p
                        style={{
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          lineHeight: 1.4,
                        }}>
                        {e.degree}
                      </p>
                      <p
                        style={{
                          color: "#64748b",
                          fontSize: "0.75rem",
                          marginTop: "4px",
                        }}>
                        {e.school}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
