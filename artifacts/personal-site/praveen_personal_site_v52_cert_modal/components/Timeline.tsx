import { timeline } from "@/lib/profile";
import { Section } from "./Section";

export function Timeline() {
  return (
    <Section id="path" eyebrow="My path" title="A career built around delivery maturity." description="From technical QA and automation to Agile leadership, release governance, audit readiness, and AI-enabled delivery.">
      <div className="grid gap-3">
        {timeline.map((item) => (
          <article key={item.title} className="grid gap-4 rounded-[1.25rem] border p-5 md:grid-cols-[160px_1fr]" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
            <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>{item.period}</p>
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="mt-2 leading-7" style={{ color: "var(--muted)" }}>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
