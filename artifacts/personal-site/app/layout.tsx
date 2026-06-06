import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praveen Kothapally | Technology Delivery Leader | Program Manager | Release Governance",
  description:
    "Technology Delivery Leader with 22+ years experience in Program Management, Release Governance, Agile Delivery, ISO 27001, Compliance, and Enterprise Transformation.",
  keywords: [
    "Praveen Kothapally",
    "Technology Delivery Leader",
    "Program Manager",
    "Release Governance",
    "Agile Transformation",
    "ISO 27001",
    "ICIF",
    "PCI",
    "GRC",
    "Release Manager",
    "Scrum Master",
    "BNP Paribas",
    "Travelex Insurance",
    "Zurich",
    "Cover-More"
  ],
  openGraph: {
    title: "Praveen Kothapally | Technology Delivery Leader | Program Manager | Release Governance",
    description:
      "Technology Delivery Leader with 22+ years in Program Management, Release Governance, Agile Delivery, ISO 27001, Compliance, and Enterprise Transformation.",
    type: "website",
    images: ["/og-image.svg"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Kothapally | Technology Delivery Leader",
    description: "Technology Delivery Leader with 22+ years in Program Management, Release Governance, Agile Delivery, ISO 27001, and Enterprise Transformation.",
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
