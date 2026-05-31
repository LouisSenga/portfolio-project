"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import ActionButton from "@/components/ui/ActionButton";
import GithubIcon from "@/components/ui/GithubIcon";
import { useTypewriter } from "@/hooks/useTypewriter";
import { fontHeading } from "@/lib/styles";
import { personalInfo } from "@/data/portfolio";
import { roles } from "../../data/hero-data";

function TypeWriter() {
  const displayed = useTypewriter(roles);

  return (
    <span className="gradient-text" style={{ ...fontHeading, fontWeight: 700 }}>
      {displayed}
      <span className="cursor" style={{ color: "#8b5cf6" }}>
        |
      </span>
    </span>
  );
}

export default function HeroIntro() {
  const [firstName, lastName] = personalInfo.name.split(" ");

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "24px",
        }}>
        <span className="section-label">Disponible pour freelance</span>
        <span className="status-dot" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          ...fontHeading,
          fontSize: "clamp(2.5rem,5vw,3.75rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: "16px",
          color: "#fff",
        }}>
        {firstName} <span style={{ color: "#94a3b8" }}>{lastName}</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: "1.25rem",
          color: "#cbd5e1",
          marginBottom: "24px",
          minHeight: "40px",
        }}>
        <TypeWriter />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          color: "#94a3b8",
          fontSize: "1.05rem",
          lineHeight: 1.7,
          marginBottom: "24px",
          maxWidth: "28rem",
        }}>
        {personalInfo.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#64748b",
          fontSize: "0.875rem",
          marginBottom: "40px",
        }}>
        <MapPin size={14} style={{ color: "#06b6d4" }} />
        <span>{personalInfo.location}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <ActionButton href="#contact">
          <Mail size={16} /> Me contacter
        </ActionButton>
        <ActionButton
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          variant="ghost">
          <GithubIcon /> GitHub
        </ActionButton>
        <ActionButton
          href={personalInfo.playstore}
          target="_blank"
          rel="noopener noreferrer"
          variant="cyan">
          <ExternalLink size={16} /> Koékip sur Play Store
        </ActionButton>
      </motion.div>
    </div>
  );
}
