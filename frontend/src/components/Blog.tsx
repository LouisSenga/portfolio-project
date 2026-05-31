"use client";

import { motion } from "framer-motion";
import { ArrowRight, PenLine } from "lucide-react";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Tag from "@/components/ui/Tag";
import { useSectionInView } from "@/hooks/useSectionInView";
import { fontHeading } from "@/lib/styles";
import { articles } from "@/data/portfolio";

type Article = (typeof articles)[number];

function BlogAction() {
  return (
    <a
      href="#"
      className="text-link"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "0.875rem",
        color: "#a78bfa",
        fontWeight: 600,
        textDecoration: "none",
      }}>
      Voir tout <ArrowRight size={14} />
    </a>
  );
}

function ArticleCard({
  article,
  index,
  inView,
}: {
  article: Article;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}>
      <Card style={{ padding: "24px", display: "flex", flexDirection: "column", position: "relative", cursor: "pointer" }}>
        {article.draft && (
          <Tag tone="warning" style={{ position: "absolute", top: "12px", right: "12px", borderRadius: "4px", padding: "2px 8px" }}>
            Bientôt
          </Tag>
        )}
        <div style={{ fontSize: "1.75rem", marginBottom: "16px" }}>
          {article.emoji}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
          <Tag tone="violet">{article.tag}</Tag>
          <span style={{ fontSize: "0.75rem", color: "#334155" }}>{article.date}</span>
        </div>
        <h3 style={{ ...fontHeading, fontWeight: 700, color: "#fff", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "12px", flex: 1 }}>
          {article.title}
        </h3>
        <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "20px" }}>
          {article.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.75rem", color: "#475569", fontWeight: 500 }}>
          <PenLine size={12} /> Lire l&apos;article <ArrowRight size={12} />
        </div>
      </Card>
    </motion.div>
  );
}

export default function Blog() {
  const { ref, inView } = useSectionInView();

  return (
    <Section id="blog" innerRef={ref} style={{ overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          bottom: "-10rem",
          left: "-10rem",
          width: "24rem",
          height: "24rem",
          background: "rgba(109,40,217,0.06)",
          borderRadius: "50%",
          filter: "blur(64px)",
          pointerEvents: "none",
        }}
      />
      <SectionHeader
        label="Mes réflexions"
        title={
          <>
            Blog <span className="gradient-text">technique</span>
          </>
        }
        action={<BlogAction />}
        inView={inView}
      />

      <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
        {articles.map((article, index) => (
          <ArticleCard key={article.title} article={article} index={index} inView={inView} />
        ))}
      </div>

      <style>{`
        .text-link:hover { color: #c4b5fd !important; }
        @media(max-width:1024px){.blog-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){.blog-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </Section>
  );
}
