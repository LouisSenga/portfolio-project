"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import Card from "@/components/ui/Card";
import TextField from "@/components/ui/TextField";
import { fontHeading } from "@/lib/styles";
import { personalInfo } from "@/data/portfolio";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function SuccessMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "32px 0",
      }}>
      <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎉</div>
      <h3 style={{ ...fontHeading, fontWeight: 700, color: "#fff", fontSize: "1.25rem", marginBottom: "8px" }}>
        Message envoyé !
      </h3>
      <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
        Je vous répondrai dans les plus brefs délais.
      </p>
    </motion.div>
  );
}

export default function ContactFormCard({ inView }: { inView: boolean }) {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSent(true);
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}>
      <Card style={{ padding: "32px" }}>
        {sent ? (
          <SuccessMessage />
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <TextField label="Nom" name="name" value={form.name} onChange={handleChange} placeholder="Votre nom" />
              <TextField label="Email" name="email" value={form.email} onChange={handleChange} placeholder="votre@email.com" />
            </div>
            <TextField label="Sujet" name="subject" value={form.subject} onChange={handleChange} placeholder="Mission freelance, collaboration..." />
            <TextField label="Message" name="message" value={form.message} onChange={handleChange} placeholder="Décrivez votre projet..." rows={5} />
            <button onClick={handleSubmit} disabled={loading} className="submit-button" style={{ opacity: loading ? 0.6 : 1 }}>
              {loading ? <span className="spinner" /> : <><Send size={15} /> Envoyer le message</>}
            </button>
            <p style={{ fontSize: "0.75rem", color: "#475569", textAlign: "center" }}>
              Ou écrivez à{" "}
              <a href={`mailto:${personalInfo.email}`} style={{ color: "#a78bfa", textDecoration: "none" }}>
                {personalInfo.email}
              </a>
            </p>
          </div>
        )}
      </Card>
    </motion.div>
  );
}
