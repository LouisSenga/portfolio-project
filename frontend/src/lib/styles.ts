import type { CSSProperties } from "react";

export const fontHeading: CSSProperties = {
  fontFamily: "var(--font-syne,'Syne',sans-serif)",
};

export const mutedText = "#94a3b8";
export const softText = "#cbd5e1";
export const violet = "#8b5cf6";
export const cyan = "#06b6d4";

export const projectGradients: Record<string, { from: string; to: string }> = {
  "violet-cyan": { from: "#8b5cf6", to: "#06b6d4" },
  "blue-violet": { from: "#3b82f6", to: "#8b5cf6" },
  "cyan-blue": { from: "#06b6d4", to: "#3b82f6" },
  "emerald-cyan": { from: "#10b981", to: "#06b6d4" },
  "orange-pink": { from: "#f97316", to: "#ec4899" },
};
