"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/portfolio";
import { Briefcase, MapPin } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experiences"
      style={{ position: "relative", padding: "7rem 0" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom,transparent,rgba(109,40,217,0.03),transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        ref={ref}
        style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "4rem" }}>
          <span className="section-label" style={{ marginBottom: "12px" }}>
            Mon parcours
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne,'Syne',sans-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "12px",
            }}>
            Expériences <span className="gradient-text">professionnelles</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          <div
            className="timeline-line"
            style={{
              position: "absolute",
              left: "20px",
              top: 0,
              bottom: 0,
              width: "1px",
              opacity: 0.3,
            }}
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ position: "relative", paddingLeft: "4rem" }}>
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "24px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#080b14",
                    border: "2px solid rgba(139,92,246,0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <Briefcase size={14} style={{ color: "#a78bfa" }} />
                </div>
                <div className="card" style={{ padding: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "12px",
                      marginBottom: "16px",
                    }}>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "4px",
                        }}>
                        <h3
                          style={{
                            fontFamily: "var(--font-syne,'Syne',sans-serif)",
                            fontWeight: 700,
                            color: "#fff",
                            fontSize: "1.05rem",
                          }}>
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span
                            style={{
                              fontSize: "0.7rem",
                              padding: "2px 8px",
                              borderRadius: "999px",
                              background: "rgba(16,185,129,0.12)",
                              border: "1px solid rgba(16,185,129,0.3)",
                              color: "#34d399",
                              fontWeight: 500,
                            }}>
                            En cours
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          flexWrap: "wrap",
                        }}>
                        <span
                          style={{
                            color: "#a78bfa",
                            fontWeight: 600,
                            fontSize: "0.875rem",
                          }}>
                          {exp.company}
                        </span>
                        {exp.location && (
                          <>
                            <span style={{ color: "#1e293b" }}>·</span>
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                                color: "#64748b",
                                fontSize: "0.75rem",
                              }}>
                              <MapPin size={11} />
                              {exp.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "#64748b",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        whiteSpace: "nowrap",
                        fontWeight: 500,
                      }}>
                      {exp.period}
                    </span>
                  </div>
                  <ul
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}>
                    {exp.tasks.map((task, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "0.875rem",
                          color: "#94a3b8",
                        }}>
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "rgba(139,92,246,0.6)",
                            marginTop: "8px",
                            flexShrink: 0,
                          }}
                        />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
