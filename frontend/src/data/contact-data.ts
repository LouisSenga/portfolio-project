import { Mail, MapPin, Phone } from "lucide-react";
import GithubIcon from "@/components/ui/GithubIcon";
import { personalInfo } from "@/data/portfolio";

export const contactItems = [
  {
    Icon: Mail,
    color: "#a78bfa",
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    Icon: Phone,
    color: "#60a5fa",
    label: "Téléphone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    Icon: MapPin,
    color: "#22d3ee",
    label: "Localisation",
    value: personalInfo.location,
    href: "#",
  },
  {
    Icon: GithubIcon,
    color: "#e2e8f0",
    label: "GitHub",
    value: "github.com/LouisSenga",
    href: personalInfo.github,
  },
];
