import { bio, focusAreas } from "@/lib/profile";
import { Section } from "./Section";

export function Bio() {
  return (
    <Section
      id="bio"
      eyebrow="Profile"
      title="A practical operator for regulated technology delivery."
      description="Focused on the work leaders actually need done: alignment, governance, execution, evidence, communication, and follow-through."
    >
      <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.5rem] border p-6" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
          <div className="space-y-4">
            {bio.map((p) => <p key={p} className="leading-7" style={{ color: "var(--muted)" }}>{p}</p>)}
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
