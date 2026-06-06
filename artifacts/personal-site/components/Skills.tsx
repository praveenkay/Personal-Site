import { skillCategories } from "@/lib/profile";
import { Certifications } from "./Certifications";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills & Credentials" title="Leadership, governance, Agile, compliance, and technology fluency.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-[1.25rem] border p-5"
            style={{ borderColor: "var(--line)", background: "var(--card)" }}
          >
            <h3 className="text-sm font-semibold tracking-[-0.02em]">{category.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{ borderColor: "var(--line)", background: "var(--paper)", color: "var(--muted)" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <p className="font-mono text-xs uppercase tracking-[0.22em] mb-4" style={{ color: "var(--muted)" }}>
          Certifications
        </p>
        <Certifications />
      </div>
    </Section>
  );
}
