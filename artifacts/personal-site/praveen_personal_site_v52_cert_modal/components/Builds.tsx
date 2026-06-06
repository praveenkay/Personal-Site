import { caseStudies } from "@/lib/profile";
import { Section } from "./Section";

export function Builds() {
  return (
    <Section
      id="builds"
      eyebrow="What I build"
      title="AI and workflow products from real operational pain points."
      description="A builder-style section for hiring managers who want to see initiative, product thinking, and applied AI beyond day-to-day delivery."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {caseStudies.map((project) => (
          <article key={project.title} className="rounded-[1.5rem] border p-6 shadow-soft" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
            <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>{project.label}</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{project.title}</h3>
            <div className="mt-5 grid gap-4 text-sm leading-6" style={{ color: "var(--muted)" }}>
              <p><span style={{ color: "var(--ink)" }}>Problem:</span> {project.problem}</p>
              <p><span style={{ color: "var(--ink)" }}>Approach:</span> {project.approach}</p>
              <p><span style={{ color: "var(--ink)" }}>Outcome:</span> {project.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
