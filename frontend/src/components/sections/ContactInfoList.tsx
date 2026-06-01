"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { liveApps } from "@/data/portfolio";
import { contactItems } from "../../data/contact-data";

function LiveApps({ inView }: { inView: boolean }) {
  return (
    <div
      style={{
        marginTop: "4px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}>
      <p className="contact-subtitle">📱 Applications live sur Play Store</p>
      {liveApps.map((app, index) => (
        <motion.a
          key={app.name}
          href={app.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 + index * 0.1 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "14px 16px",
            borderRadius: "14px",
            background: app.color,
            border: `1px solid ${app.border}`,
            textDecoration: "none",
            minWidth: 0,
          }}>
          <span style={{ fontSize: "1.4rem" }}>{app.emoji}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
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
                overflowWrap: "anywhere",
              }}>
              {app.name} — Google Play Store
            </p>
          </div>
          <ExternalLink size={12} style={{ color: app.labelColor }} />
        </motion.a>
      ))}
    </div>
  );
}

export default function ContactInfoList({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {contactItems.map(({ Icon, color, label, value, href }, index) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 + index * 0.08 }}
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "16px",
            textDecoration: "none",
            minWidth: 0,
          }}>
          <div className="contact-icon">
            <Icon color={color} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
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
                overflowWrap: "anywhere",
              }}>
              {value}
            </p>
          </div>
          <ExternalLink size={12} style={{ color: "#334155" }} />
        </motion.a>
      ))}
      <LiveApps inView={inView} />
    </motion.div>
  );
}
