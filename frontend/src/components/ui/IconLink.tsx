import type { ReactNode } from "react";

type IconLinkProps = {
  href: string;
  children: ReactNode;
  title?: string;
  color?: string;
  borderColor?: string;
  background?: string;
};

export default function IconLink({
  href,
  children,
  title,
  color = "#64748b",
  borderColor = "rgba(255,255,255,0.08)",
  background = "rgba(255,255,255,0.04)",
}: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "8px",
        background,
        border: `1px solid ${borderColor}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color,
        textDecoration: "none",
        transition: "all 0.2s",
      }}>
      {children}
    </a>
  );
}
