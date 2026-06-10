import { targetRoles } from "@/lib/profile";
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
    </Section>
  );
}
