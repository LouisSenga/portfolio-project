"use client";

import ContactFormCard from "@/components/sections/ContactFormCard";
import ContactInfoList from "@/components/sections/ContactInfoList";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Contact() {
  const { ref, inView } = useSectionInView();

  return (
    <Section id="contact" innerRef={ref} style={{ overflow: "hidden" }}>
      <SectionHeader
        label="Travaillons ensemble"
        title={
          <>
            Me <span className="gradient-text">contacter</span>
          </>
        }
        description="Disponible pour des missions freelance, des collaborations ou simplement pour discuter d'un projet."
        align="center"
        inView={inView}
      />

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
        <ContactInfoList inView={inView} />
        <ContactFormCard inView={inView} />
      </div>

      <style>{`
        .contact-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-subtitle {
          font-size: 0.7rem;
          color: #475569;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          border-radius: 12px;
          background: #7c3aed;
          color: #fff;
          font-weight: 600;
          font-size: 0.95rem;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .submit-button:hover { background: #6d28d9; }
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top: 2px solid #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin{to{transform:rotate(360deg)}}
        @media(max-width:768px){
          .contact-grid,.form-row{grid-template-columns:1fr!important;}
        }
      `}</style>
    </Section>
  );
}
