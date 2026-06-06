import { skills } from "@/lib/profile";
import { Certifications } from "./Certifications";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Leadership, governance, Agile, AI, and engineering fluency.">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border px-3 py-1.5 text-sm" style={{ borderColor: "var(--line)", background: "var(--card)", color: "var(--muted)" }}>
            {skill}
          </span>
        ))}
      </div>
      <Certifications />
    </Section>
  );
}
