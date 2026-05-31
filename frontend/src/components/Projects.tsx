"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Card from "@/components/ui/Card";
import GithubIcon from "@/components/ui/GithubIcon";
import IconLink from "@/components/ui/IconLink";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { useSectionInView } from "@/hooks/useSectionInView";
import { fontHeading, projectGradients } from "@/lib/styles";
import { projects } from "@/data/portfolio";

type Project = (typeof projects)[number];

function ProjectActions({ project }: { project: Project }) {
  return (
    <div style={{ display: "flex", gap: "6px" }}>
      {project.github && (
        <IconLink href={project.github}>
          <GithubIcon size={14} />
        </IconLink>
      )}
      {project.playstore && (
        <IconLink
          href={project.playstore}
          title="Voir sur Play Store"
          color="#22d3ee"
          background="rgba(6,182,212,0.06)"
          borderColor="rgba(6,182,212,0.2)">
          ▶
        </IconLink>
      )}
      {project.link && !project.playstore && (
        <IconLink href={project.link}>
          <ExternalLink size={13} />
        </IconLink>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  const colors = projectGradients[project.color] ?? projectGradients["violet-cyan"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}>
      <Card style={{ padding: "24px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: `linear-gradient(to right, ${colors.from}, ${colors.to})`,
            opacity: 0.8,
          }}
        />

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
          <Tag>{project.badge}</Tag>
          <ProjectActions project={project} />
        </div>

        <h3 style={{ ...fontHeading, fontWeight: 700, color: "#fff", fontSize: "1.05rem", marginBottom: "10px" }}>
          {project.title}
        </h3>
        <p style={{ color: "#94a3b8", fontSize: "0.855rem", lineHeight: 1.7, flex: 1, marginBottom: "18px" }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {project.tags.map((tag) => (
            <Tag key={tag} tone="violet" style={{ borderRadius: "6px" }}>
              {tag}
            </Tag>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useSectionInView();

  return (
    <Section id="projects" innerRef={ref} style={{ overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "-10rem",
          right: "-10rem",
          width: "24rem",
          height: "24rem",
          background: "rgba(8,145,178,0.08)",
          borderRadius: "50%",
          filter: "blur(64px)",
          pointerEvents: "none",
        }}
      />
      <SectionHeader
        label="Ce que j'ai construit"
        title={
          <>
            Mes <span className="gradient-text">projets</span>
          </>
        }
        inView={inView}
      />

      <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} inView={inView} />
        ))}
      </div>

      <style>{`
        @media(max-width:1024px){.projects-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){.projects-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </Section>
  );
}
