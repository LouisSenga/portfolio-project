import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Fenoanjara SENGA — Développeur Full Stack",
  description:
    "Portfolio de Fenoanjara SENGA, Développeur Full Stack spécialisé NestJS, Laravel, React Native. Fianarantsoa, Madagascar.",
  keywords: [
    "développeur",
    "fullstack",
    "nestjs",
    "laravel",
    "react native",
    "madagascar",
    "freelance",
  ],
  authors: [{ name: "Fenoanjara SENGA" }],
  openGraph: {
    title: "Fenoanjara SENGA — Développeur Full Stack",
    description: "APIs robustes, applications mobiles, intégration IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
