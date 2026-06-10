import { targetRoles } from "@/lib/profile";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/profile";
import { Section } from "./Section";

export function TargetRoles() {
  return (
    <Section
      id="opportunities"
      eyebrow="Opportunities"
      title="Leadership roles aligned with my experience."
      description="Focused on senior leadership opportunities involving technology governance, technology risk and controls, AI governance, enterprise transformation, delivery excellence, regulatory technology, and operational resilience. Target roles include Director, Senior Manager, Principal Program Manager, and senior individual-contributor leadership positions."
    >
      <div className="flex flex-wrap gap-3">
        {targetRoles.map((role) => (
          <span
            key={role}
            className="rounded-full border px-4 py-2 text-sm font-medium"
            style={{ borderColor: "var(--line)", background: "var(--card)" }}
          >
            {role}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
          style={{ background: "var(--ink)", color: "var(--paper)" }}
        >
          Contact Praveen <ArrowUpRight size={15} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium"
          style={{ borderColor: "var(--line)", background: "var(--card)" }}
        >
          LinkedIn <ArrowUpRight size={15} />
        </a>
        <a
          href={profile.resumePdf}
          className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium"
          style={{ borderColor: "var(--line)", background: "var(--card)" }}
        >
          Download Resume
        </a>
      </div>
    </Section>
  );
}
