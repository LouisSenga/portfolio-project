"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fontHeading } from "@/lib/styles";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  inView?: boolean;
  align?: "left" | "center";
  action?: ReactNode;
  description?: ReactNode;
};

export default function SectionHeader({
  label,
  title,
  inView = true,
  align = "left",
  action,
  description,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        display: action ? "flex" : "block",
        flexWrap: "wrap",
        alignItems: "flex-end",
        justifyContent: action ? "space-between" : undefined,
        gap: "24px",
        textAlign: align,
        marginBottom: "4rem",
      }}>
      <div>
        <span className="section-label" style={{ marginBottom: "12px" }}>
          {label}
        </span>
        <h2
          style={{
            ...fontHeading,
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 700,
            color: "#fff",
            marginTop: "12px",
            marginBottom: description ? "16px" : 0,
          }}>
          {title}
        </h2>
        {description && (
          <p style={{ color: "#94a3b8", maxWidth: "28rem", margin: "0 auto" }}>
            {description}
          </p>
        )}
      </div>
      {action}
    </motion.div>
  );
}
