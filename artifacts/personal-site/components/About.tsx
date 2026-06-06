import { focusAreas } from "@/lib/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="Executive profile"
      title="A delivery leader who connects strategy, governance, execution, and measurable outcomes."
      description="Praveen is positioned for senior Program Manager, Release Manager, Delivery Lead, PMO, Agile leadership, and technology governance roles where execution discipline matters as much as stakeholder trust."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {focusAreas.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.75rem] border border-line bg-card p-7 shadow-crisp transition hover:-translate-y-1 hover:shadow-soft"
          >
            <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
