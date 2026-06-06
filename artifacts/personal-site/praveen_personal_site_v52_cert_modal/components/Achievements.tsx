import { achievements } from "@/lib/profile";
import { Section } from "./Section";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Selected achievements"
      title="Measurable outcomes and leadership signals."
      description="Short proof points designed for recruiters, hiring managers, technology leaders, directors, and CIO-office audiences."
    >
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
