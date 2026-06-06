import { achievements, metrics } from "@/lib/profile";
import { Section } from "./Section";

export function Achievements() {
  return (
    <Section
      id="impact"
      eyebrow="Delivery Impact"
      title="Measurable outcomes and leadership signals."
      description="Concrete results from 22+ years of enterprise delivery, release governance, quality engineering, and Agile transformation."
    >
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {metrics.map(([value, label]) => (
          <div key={label} className="rounded-2xl border p-5 text-center" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
            <p className="text-3xl font-semibold tracking-[-0.04em]">{value}</p>
            <p className="mt-1 text-xs leading-5 capitalize" style={{ color: "var(--muted)" }}>{label}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {achievements.map((achievement) => (
          <div key={achievement} className="rounded-[1.25rem] border p-5 text-sm leading-6" style={{ borderColor: "var(--line)", background: "var(--card)", color: "var(--muted)" }}>
            <span style={{ color: "var(--ink)" }}>›</span> {achievement}
          </div>
        ))}
      </div>
    </Section>
  );
}
