"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { CSSProperties } from "react";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Expériences", href: "#experiences" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const activeLinkStyle: CSSProperties = {
  color: "#fff",
  background: "rgba(139,92,246,0.18)",
  boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.26)",
};

const inactiveLinkStyle: CSSProperties = {
  color: "#94a3b8",
  background: "transparent",
  boxShadow: "inset 0 0 0 1px transparent",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(links[0].href);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => link.href.slice(1))
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      const currentSection =
        sections.findLast((section) => section.offsetTop <= marker) ??
        sections[0];

      if (currentSection) {
        setActiveHref(`#${currentSection.id}`);
      }
    };

    const frame = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
    setOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s",
          background: scrolled ? "rgba(8,11,20,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(139,92,246,0.1)" : "none",
        }}>
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.05 }}
            style={{ textDecoration: "none" }}>
            <span
              className="gradient-text"
              style={{
                fontFamily: "var(--font-syne,'Syne',sans-serif)",
                fontWeight: 800,
                fontSize: "1.2rem",
              }}>
              FS<span style={{ color: "#8b5cf6" }}>.</span>
            </span>
          </motion.a>

          {/* Desktop */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            className="hidden md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                aria-current={activeHref === l.href ? "page" : undefined}
                onClick={() => handleLinkClick(l.href)}
                style={{
                  padding: "8px 16px",
                  fontSize: "0.875rem",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "all 0.2s",
                  ...(activeHref === l.href ? activeLinkStyle : inactiveLinkStyle),
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background =
                    activeHref === l.href
                      ? activeLinkStyle.background?.toString() ?? ""
                      : "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    activeHref === l.href ? "#fff" : "#94a3b8";
                  e.currentTarget.style.background =
                    activeHref === l.href
                      ? activeLinkStyle.background?.toString() ?? ""
                      : "transparent";
                }}>
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:flex"
            onClick={() => handleLinkClick("#contact")}
            style={{
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "10px",
              background: "#7c3aed",
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#6d28d9")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#7c3aed")
            }>
            Me contacter
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer",
            }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "rgba(8,11,20,0.98)",
              backdropFilter: "blur(20px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
            }}>
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "20px",
                right: "24px",
                background: "none",
                border: "none",
                color: "#94a3b8",
                cursor: "pointer",
              }}>
              <X size={24} />
            </button>
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => handleLinkClick(l.href)}
                aria-current={activeHref === l.href ? "page" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "var(--font-syne,'Syne',sans-serif)",
                  fontWeight: 700,
                  color: activeHref === l.href ? "#fff" : "#cbd5e1",
                  textDecoration: "none",
                  borderBottom:
                    activeHref === l.href
                      ? "2px solid rgba(6,182,212,0.8)"
                      : "2px solid transparent",
                }}>
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
