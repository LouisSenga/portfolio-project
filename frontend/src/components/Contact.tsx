"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Send, Phone, ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#fff",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
  boxSizing: "border-box",
};

const apps = [
  {
    emoji: "🏆",
    name: "Koékip",
    desc: "App sportive — Google Play Store",
    href: "https://play.google.com/store/apps/details?id=com.koekip.app",
    color: "rgba(6,182,212,0.05)",
    border: "rgba(6,182,212,0.2)",
    textColor: "#22d3ee",
    labelColor: "rgba(6,182,212,0.6)",
  },
  {
    emoji: "🗳️",
    name: "Rankocracy",
    desc: "App citoyenne — Google Play Store",
    href: "https://play.google.com/store/apps/details?id=com.rankocracy.app",
    color: "rgba(139,92,246,0.05)",
    border: "rgba(139,92,246,0.2)",
    textColor: "#c4b5fd",
    labelColor: "rgba(139,92,246,0.6)",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  const contacts = [
    {
      Icon: Mail,
      color: "#a78bfa",
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      Icon: Phone,
      color: "#60a5fa",
      label: "Téléphone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      Icon: MapPin,
      color: "#22d3ee",
      label: "Localisation",
      value: personalInfo.location,
      href: "#",
    },
    {
      Icon: GithubIcon,
      color: "#e2e8f0",
      label: "GitHub",
      value: "github.com/LouisSenga",
      href: personalInfo.github,
    },
  ];

  return (
    <section
      id="contact"
      style={{ position: "relative", padding: "7rem 0", overflow: "hidden" }}>
      <div ref={ref} className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label" style={{ marginBottom: "12px" }}>
            Travaillons ensemble
          </span>
          <h2
            style={{
              fontFamily: "var(--font-syne,'Syne',sans-serif)",
              fontSize: "clamp(2rem,4vw,3rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "12px",
              marginBottom: "16px",
            }}>
            Me <span className="gradient-text">contacter</span>
          </h2>
          <p style={{ color: "#94a3b8", maxWidth: "28rem", margin: "0 auto" }}>
            Disponible pour des missions freelance, des collaborations ou
            simplement pour discuter d&apos;un projet.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
          className="contact-grid">
          {/* Left — infos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {contacts.map(({ Icon, color, label, value, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                  <Icon color={color} />
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "#64748b",
                      marginBottom: "2px",
                    }}>
                    {label}
                  </p>
                  <p
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                    }}>
                    {value}
                  </p>
                </div>
                <ExternalLink size={12} style={{ color: "#334155" }} />
              </motion.a>
            ))}

            {/* 2 Apps live */}
            <div
              style={{
                marginTop: "4px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "#475569",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}>
                📱 Applications live sur Play Store
              </p>
              {apps.map((app, i) => (
                <motion.a
                  key={app.name}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 16px",
                    borderRadius: "14px",
                    background: app.color,
                    border: `1px solid ${app.border}`,
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                  <span style={{ fontSize: "1.4rem" }}>{app.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: "0.7rem",
                        color: app.labelColor,
                        marginBottom: "2px",
                      }}>
                      Application live
                    </p>
                    <p
                      style={{
                        color: app.textColor,
                        fontWeight: 600,
                        fontSize: "0.875rem",
                      }}>
                      {app.name} — Google Play Store
                    </p>
                  </div>
                  <ExternalLink size={12} style={{ color: app.labelColor }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
            style={{ padding: "32px" }}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "32px 0",
                }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎉</div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne,'Syne',sans-serif)",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "1.25rem",
                    marginBottom: "8px",
                  }}>
                  Message envoyé !
                </h3>
                <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </motion.div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}>
                  {[
                    { name: "name", label: "Nom", ph: "Votre nom" },
                    { name: "email", label: "Email", ph: "votre@email.com" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label
                        style={{
                          fontSize: "0.75rem",
                          color: "#64748b",
                          display: "block",
                          marginBottom: "6px",
                          fontWeight: 500,
                        }}>
                        {f.label}
                      </label>
                      <input
                        name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={f.ph}
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "rgba(139,92,246,0.5)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor =
                            "rgba(255,255,255,0.08)")
                        }
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "0.75rem",
                      color: "#64748b",
                      display: "block",
                      marginBottom: "6px",
                      fontWeight: 500,
                    }}>
                    Sujet
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Mission freelance, collaboration..."
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(139,92,246,0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                    }
                  />
                </div>
                <div>
                  <label
                    style={{
                      fontSize: "0.75rem",
                      color: "#64748b",
                      display: "block",
                      marginBottom: "6px",
                      fontWeight: 500,
                    }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet..."
                    rows={5}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(139,92,246,0.5)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.08)")
                    }
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "14px 24px",
                    borderRadius: "12px",
                    background: "#7c3aed",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    opacity: loading ? 0.6 : 1,
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) =>
                    !loading &&
                    ((e.currentTarget as HTMLElement).style.background =
                      "#6d28d9")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background =
                      "#7c3aed")
                  }>
                  {loading ? (
                    <span
                      style={{
                        width: "16px",
                        height: "16px",
                        border: "2px solid rgba(255,255,255,0.3)",
                        borderTop: "2px solid #fff",
                        borderRadius: "50%",
                        animation: "spin 0.8s linear infinite",
                      }}
                    />
                  ) : (
                    <>
                      <Send size={15} /> Envoyer le message
                    </>
                  )}
                </button>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#475569",
                    textAlign: "center",
                  }}>
                  Ou écrivez à{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    style={{ color: "#a78bfa", textDecoration: "none" }}>
                    {personalInfo.email}
                  </a>
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
