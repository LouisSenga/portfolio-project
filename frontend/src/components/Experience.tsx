"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { useSectionInView } from "@/hooks/useSectionInView";
import { fontHeading } from "@/lib/styles";
import { experiences } from "@/data/portfolio";

type ExperienceItem = (typeof experiences)[number];

function ExperienceHeader({ experience }: { experience: ExperienceItem }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "12px",
        marginBottom: "16px",
      }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
          <h3 style={{ ...fontHeading, fontWeight: 700, color: "#fff", fontSize: "1.05rem" }}>
            {experience.title}
          </h3>
          {experience.current && <Tag tone="success">En cours</Tag>}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          <span style={{ color: "#a78bfa", fontWeight: 600, fontSize: "0.875rem" }}>
            {experience.company}
          </span>
          {experience.location && (
            <>
              <span style={{ color: "#1e293b" }}>·</span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#64748b", fontSize: "0.75rem" }}>
                <MapPin size={11} />
                {experience.location}
              </span>
            </>
          )}
        </div>
      </div>
      <Tag style={{ borderRadius: "8px", padding: "6px 12px", whiteSpace: "nowrap" }}>
        {experience.period}
      </Tag>
    </div>
  );
}

function TaskList({ tasks }: { tasks: string[] }) {
  return (
    <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {tasks.map((task) => (
        <li key={task} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.875rem", color: "#94a3b8" }}>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "rgba(139,92,246,0.6)",
              marginTop: "8px",
              flexShrink: 0,
            }}
          />
          {task}
        </li>
      ))}
    </ul>
  );
}

function TimelineItem({
  experience,
  index,
  inView,
}: {
  experience: ExperienceItem;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ position: "relative", paddingLeft: "4rem" }}>
      <div
        className="timeline-icon"
        style={{
          position: "absolute",
          left: 0,
          top: "24px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#080b14",
          border: "2px solid rgba(139,92,246,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Briefcase size={14} style={{ color: "#a78bfa" }} />
      </div>
      <Card style={{ padding: "24px" }}>
        <ExperienceHeader experience={experience} />
        <TaskList tasks={experience.tasks} />
      </Card>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useSectionInView();

  return (
    <Section
      id="experiences"
      innerRef={ref}
      containerClassName=""
      containerStyle={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom,transparent,rgba(109,40,217,0.03),transparent)",
          pointerEvents: "none",
        }}
      />
      <SectionHeader
        label="Mon parcours"
        title={
          <>
            Expériences <span className="gradient-text">professionnelles</span>
          </>
        }
        inView={inView}
      />

      <div style={{ position: "relative" }}>
        <div className="timeline-line" style={{ position: "absolute", left: "20px", top: 0, bottom: 0, width: "1px", opacity: 0.3 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {experiences.map((experience, index) => (
            <TimelineItem key={`${experience.company}-${experience.period}`} experience={experience} index={index} inView={inView} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .timeline-item {
            padding-left: 2.25rem !important;
          }

          .timeline-icon {
            width: 28px !important;
            height: 28px !important;
            top: 20px !important;
          }

          .timeline-line {
            left: 14px !important;
          }
        }
      `}</style>
    </Section>
  );
}
