import { experience } from "@/lib/profile";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Professional Experience" title="Selected leadership experience." description="Senior technology leadership across banking, financial services, and insurance.">
      <div className="grid gap-4">
        {experience.map((job) => (
          <article key={job.company} className="rounded-[1.5rem] border p-6" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>{job.period}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{job.company}</h3>
                {job.companyNote ? (
                  <p className="mt-0.5 text-xs italic" style={{ color: "var(--muted)" }}>{job.companyNote}</p>
                ) : null}
                <p className="mt-1 font-medium" style={{ color: "var(--muted)" }}>{job.role}</p>
              </div>
            </div>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="text-sm leading-6" style={{ color: "var(--muted)" }}>
                  <span style={{ color: "var(--ink)" }}>›</span> {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
