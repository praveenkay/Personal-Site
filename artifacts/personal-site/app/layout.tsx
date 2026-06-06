import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praveen Kothapally | Technology Delivery Leader",
  description:
    "Executive portfolio for Praveen Kothapally — Program Manager, Scrum Master, Release Governance, Agile Transformation, Audit & Compliance, and AI-enabled delivery leader.",
  keywords: [
    "Praveen Kothapally",
    "Program Manager",
    "Scrum Master",
    "Release Manager",
    "Release Governance",
    "Agile Delivery",
    "ISO 27001",
    "ICIF",
    "PCI",
    "Technology Delivery Leader",
    "UnderwriterAI",
    "AgentVerse",
    "AuditReady OS"
  ],
  openGraph: {
    title: "Praveen Kothapally | Technology Delivery Leader",
    description:
      "Program Manager, Scrum Master, Release Governance, Agile Transformation, Audit & Compliance, and AI-enabled delivery leader.",
    type: "website",
    images: ["/og-image.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Kothapally | Technology Delivery Leader",
    description: "Executive portfolio for program, Agile, release governance, compliance, and AI-enabled delivery leadership.",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
