import { grcItems } from "@/lib/profile";
import { Section } from "./Section";

export function GRC() {
  return (
    <Section
      id="grc"
      eyebrow="Governance, Risk & Compliance"
      title="A differentiator most program managers cannot claim."
      description="Direct experience supporting regulatory audit programs, coordinating evidence management, and maintaining control frameworks across banking and insurance organizations."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {grcItems.map((item) => (
          <div
            key={item}
            className="rounded-[1.25rem] border p-5 text-sm leading-6"
            style={{ borderColor: "var(--line)", background: "var(--card)", color: "var(--muted)" }}
          >
            <span style={{ color: "var(--ink)" }}>›</span> {item}
          </div>
        ))}
      </div>
      <div
        className="mt-6 rounded-[1.5rem] border p-6"
        style={{ borderColor: "var(--line)", background: "var(--card)" }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
          Current context
        </p>
        <p className="mt-4 leading-7" style={{ color: "var(--muted)" }}>
          At Travelex Insurance / Zurich-Cover-More, I support ISO 27001 audit coordination, ICIF controls, PCI compliance, third-party risk governance, evidence repository management, and cross-functional audit response across engineering and compliance teams.
        </p>
      </div>
    </Section>
  );
}
