"use client";
import { personalInfo } from "@/data/portfolio";
import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "40px 0",
      }}>
      <div
        className="section-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}>
        <div>
          <span
            style={{
              fontFamily: "var(--font-syne,'Syne',sans-serif)",
              fontWeight: 800,
              color: "#fff",
              fontSize: "1.1rem",
            }}>
            FS<span style={{ color: "#8b5cf6" }}>.</span>
          </span>
          <p
            style={{ fontSize: "0.75rem", color: "#334155", marginTop: "4px" }}>
            Fenoanjara SENGA — Développeur Full Stack
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {[
            {
              href: personalInfo.github,
              icon: <GithubIcon />,
              hoverColor: "#fff",
            },
            {
              href: `mailto:${personalInfo.email}`,
              icon: <Mail size={15} />,
              hoverColor: "#a78bfa",
            },
          ].map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64748b",
                textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = btn.hoverColor;
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#64748b";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
              }}>
              {btn.icon}
            </a>
          ))}
        </div>
        <p style={{ fontSize: "0.75rem", color: "#1e293b" }}>
          © {new Date().getFullYear()} Fenoanjara SENGA. Construit avec Next.js
          & Tailwind.
        </p>
      </div>
    </footer>
  );
}
