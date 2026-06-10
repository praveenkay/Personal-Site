import { executiveSummary, focusAreas } from "@/lib/profile";
import { Section } from "./Section";

export function Bio() {
  return (
    <Section
      id="summary"
      eyebrow="Leadership Profile"
      title="Turning fragmented technology operations into governed outcomes."
      description="Organizations often struggle because delivery, risk, compliance, quality, and technology teams operate through disconnected processes. I help leadership establish the structure needed to improve execution and reduce risk."
    >
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.5rem] border p-6" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
          <div className="space-y-4">
            {executiveSummary.map((p) => <p key={p} className="leading-7" style={{ color: "var(--muted)" }}>{p}</p>)}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {focusAreas.map((area) => (
            <article key={area.title} className="rounded-[1.25rem] border p-5" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{area.title}</h3>
              <p className="mt-3 text-sm leading-6" style={{ color: "var(--muted)" }}>{area.body}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
