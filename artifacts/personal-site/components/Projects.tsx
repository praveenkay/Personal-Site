import { caseStudies } from "@/lib/profile";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="AI and innovation"
      title="Practical AI prototypes for insurance, audit, quality, and delivery workflows."
      description="These projects show hands-on product thinking, prompt engineering, agentic AI experimentation, and the ability to turn operational pain points into working concepts."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {caseStudies.map((project) => (
          <article key={project.title} className="rounded-[1.75rem] border border-white/15 p-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">{project.label}</p>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">{project.title}</h3>
            <p className="mt-4 leading-7 text-white/60">{project.outcome}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
