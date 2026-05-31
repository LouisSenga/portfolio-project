import type { CSSProperties, ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  tone?: "default" | "violet" | "success" | "warning";
  style?: CSSProperties;
};

const toneStyles: Record<NonNullable<TagProps["tone"]>, CSSProperties> = {
  default: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#94a3b8",
  },
  violet: {
    background: "rgba(139,92,246,0.1)",
    border: "1px solid rgba(139,92,246,0.2)",
    color: "#c4b5fd",
  },
  success: {
    background: "rgba(16,185,129,0.12)",
    border: "1px solid rgba(16,185,129,0.3)",
    color: "#34d399",
  },
  warning: {
    background: "rgba(245,158,11,0.12)",
    border: "1px solid rgba(245,158,11,0.25)",
    color: "#fbbf24",
  },
};

export default function Tag({ children, tone = "default", style }: TagProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        width: "fit-content",
        fontSize: "0.7rem",
        padding: "4px 10px",
        borderRadius: "999px",
        fontWeight: 500,
        ...toneStyles[tone],
        ...style,
      }}>
      {children}
    </span>
  );
}
