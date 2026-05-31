"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Zap } from "lucide-react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { useSectionInView } from "@/hooks/useSectionInView";
import { fontHeading } from "@/lib/styles";
import { education, highlights, personalInfo, stats } from "@/data/portfolio";

const highlightIcons = { Zap, Code2, GraduationCap };

function HighlightList({ inView }: { inView: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {highlights.map(({ icon, color, bg, border, text }, index) => {
        const Icon = highlightIcons[icon as keyof typeof highlightIcons];

        return (
          <motion.div
            key={text}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + index * 0.1 }}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              padding: "14px 16px",
              borderRadius: "12px",
              background: bg,
              border: `1px solid ${border}`,
            }}>
            <Icon size={18} style={{ color, marginTop: "2px", flexShrink: 0 }} />
            <p style={{ color: "#cbd5e1", fontSize: "0.875rem", lineHeight: 1.6 }}>
              {text}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}

function StatsGrid({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.2 }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        marginBottom: "24px",
      }}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.08 }}>
          <Card style={{ padding: "24px", textAlign: "center" }}>
            <p
              className="gradient-text"
              style={{ ...fontHeading, fontSize: "1.875rem", fontWeight: 800, marginBottom: "4px" }}>
              {stat.value}
            </p>
            <p style={{ color: "#64748b", fontSize: "0.8rem" }}>{stat.label}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

function EducationCard({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5 }}>
      <Card style={{ padding: "24px" }}>
        <h3
          style={{
            ...fontHeading,
            fontWeight: 700,
            color: "#fff",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
          <GraduationCap size={18} style={{ color: "#a78bfa" }} /> Formation
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {education.map((item) => (
            <div key={item.degree} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: "rgba(139,92,246,0.1)",
                  border: "1px solid rgba(139,92,246,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#a78bfa" }}>
                  {item.year}
                </span>
              </div>
              <div>
                <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem", lineHeight: 1.4 }}>
                  {item.degree}
                </p>
                <p style={{ color: "#64748b", fontSize: "0.75rem", marginTop: "4px" }}>
                  {item.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default function About() {
  const { ref, inView } = useSectionInView();

  return (
    <Section id="about" innerRef={ref} style={{ overflow: "hidden" }}>
      <SectionHeader
        label="Qui suis-je"
        title={
          <>
            À propos de <span className="gradient-text">moi</span>
          </>
        }
        inView={inView}
      />

      <div
        className="about-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}>
          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
              whiteSpace: "pre-line",
            }}>
            {personalInfo.about}
          </p>
          <HighlightList inView={inView} />
        </motion.div>

        <div>
          <StatsGrid inView={inView} />
          <EducationCard inView={inView} />
        </div>
      </div>

      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
    </Section>
  );
}
