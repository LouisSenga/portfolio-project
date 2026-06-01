import type { CSSProperties, ReactNode } from "react";

type ActionButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost" | "cyan";
  target?: string;
  rel?: string;
  style?: CSSProperties;
};

const variants = {
  primary: {
    background: "#7c3aed",
    color: "#fff",
    border: "1px solid #7c3aed",
  },
  ghost: {
    background: "transparent",
    color: "#cbd5e1",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  cyan: {
    background: "transparent",
    color: "#22d3ee",
    border: "1px solid rgba(6,182,212,0.3)",
  },
};

export default function ActionButton({
  children,
  href,
  variant = "primary",
  target,
  rel,
  style,
}: ActionButtonProps) {
  return (
    <a
      className="action-button"
      href={href}
      target={target}
      rel={rel}
      style={{
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
        ...variants[variant],
        ...style,
      }}>
      {children}
    </a>
  );
}
