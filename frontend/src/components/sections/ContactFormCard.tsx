"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import Card from "@/components/ui/Card";
import TextField from "@/components/ui/TextField";
import { createClient } from "@/lib/supabase/client";
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
      <h3
        style={{
          ...fontHeading,
          fontWeight: 700,
          color: "#fff",
          fontSize: "1.25rem",
          marginBottom: "8px",
        }}>
        Message envoyé !
      </h3>
      <p style={{ color: "#94a3b8", fontSize: "0.875rem" }}>
        Je vous répondrai dans les plus brefs délais.
      </p>
    </motion.div>
  );
}

export default function ContactFormCard({ inView }: { inView: boolean }) {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.subject ||
      !payload.message
    ) {
      setError("Veuillez remplir tous les champs avant d'envoyer le message.");
      return;
    }

    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.from("contact_messages").insert(payload);

    if (error) {
      console.error("Error inserting contact message:", error);
      setError(
        "Impossible d'envoyer le message pour le moment. Réessayez dans un instant.",
      );
      setLoading(false);
      return;
    }

    setForm({ name: "", email: "", subject: "", message: "" });
    setSent(true);
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}>
      <Card className="contact-form-card" style={{ padding: "32px" }}>
        {sent ? (
          <SuccessMessage />
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              className="form-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}>
              <TextField
                label="Nom"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                disabled={loading}
              />
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                type="email"
                required
                disabled={loading}
              />
            </div>
            <TextField
              label="Sujet"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Mission freelance, collaboration..."
              required
              disabled={loading}
            />
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Décrivez votre projet..."
              rows={5}
              required
              disabled={loading}
            />
            {error ? (
              <p
                role="alert"
                style={{
                  margin: 0,
                  color: "#fca5a5",
                  fontSize: "0.8125rem",
                  lineHeight: 1.5,
                }}>
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={loading}
              className="submit-button"
              style={{ opacity: loading ? 0.6 : 1 }}>
              {loading ? (
                <span className="spinner" />
              ) : (
                <>
                  <Send size={15} /> Envoyer le message
                </>
              )}
            </button>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#475569",
                textAlign: "center",
              }}>
              Ou écrivez à{" "}
              <a
                href={`mailto:${personalInfo.email}`}
                style={{ color: "#a78bfa", textDecoration: "none" }}>
                {personalInfo.email}
              </a>
            </p>
          </form>
        )}
      </Card>
    </motion.div>
  );
}
