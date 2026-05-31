"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { useSectionInView } from "@/hooks/useSectionInView";
import { fontHeading } from "@/lib/styles";
import { languages, skills } from "@/data/portfolio";

type SkillGroup = (typeof skills)[number];

function SkillCard({
  group,
  index,
  inView,
}: {
  group: SkillGroup;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}>
      <Card style={{ padding: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <span style={{ fontSize: "1.5rem" }}>{group.icon}</span>
          <h3 style={{ ...fontHeading, fontWeight: 700, color: "#fff", fontSize: "0.95rem" }}>
            {group.category}
          </h3>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {group.items.map((item, itemIndex) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.08 + itemIndex * 0.04 }}
              className="skill-pill">
              {item}
            </motion.span>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

function LanguageMeter({
  language,
  inView,
}: {
  language: (typeof languages)[number];
  inView: boolean;
}) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <span style={{ color: "#fff", fontWeight: 600, fontSize: "0.875rem" }}>
          {language.lang}
        </span>
        <span style={{ color: "#64748b", fontSize: "0.75rem" }}>
          {language.level}
        </span>
      </div>
      <div style={{ height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "999px", overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${language.pct}%` } : {}}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          style={{
            height: "100%",
            borderRadius: "999px",
            background: "linear-gradient(to right,#8b5cf6,#06b6d4)",
          }}
        />
      </div>
    </div>
  );
}

function LanguagesCard({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6 }}>
      <Card style={{ padding: "24px", marginTop: "24px" }}>
        <h3 style={{ ...fontHeading, fontWeight: 700, color: "#fff", marginBottom: "20px", fontSize: "0.95rem" }}>
          🌍 Langues
        </h3>
        <div className="lang-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
          {languages.map((language) => (
            <LanguageMeter key={language.lang} language={language} inView={inView} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, inView } = useSectionInView();

  return (
    <Section id="skills" innerRef={ref}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom,transparent,rgba(30,58,138,0.04),transparent)",
          pointerEvents: "none",
        }}
      />
      <SectionHeader
        label="Mon arsenal"
        title={
          <>
            Compétences <span className="gradient-text">techniques</span>
          </>
        }
        inView={inView}
      />

      <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
        {skills.map((group, index) => (
          <SkillCard key={group.category} group={group} index={index} inView={inView} />
        ))}
      </div>
      <LanguagesCard inView={inView} />

      <style>{`
        .skill-pill {
          font-size: 0.8rem;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #cbd5e1;
          font-weight: 500;
          cursor: default;
          transition: all 0.2s;
        }
        .skill-pill:hover {
          border-color: rgba(139,92,246,0.4);
          color: #c4b5fd;
          background: rgba(139,92,246,0.06);
        }
        @media(max-width:1024px){.skills-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){.skills-grid,.lang-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </Section>
  );
}
