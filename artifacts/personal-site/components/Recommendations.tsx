import { recommendations } from "@/lib/profile";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

export function Recommendations() {
  return (
    <Section
      id="recommendations"
      eyebrow="Recommendations"
      title="What colleagues and leaders say."
      description="Pulled directly from LinkedIn. 7 recommendations on file — 2 visible publicly without login."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {recommendations.map((rec) => (
          <article
            key={rec.name}
            className="flex flex-col rounded-[1.5rem] border p-6"
            style={{ borderColor: "var(--line)", background: "var(--card)" }}
          >
            <p className="flex-1 text-base leading-7" style={{ color: "var(--muted)" }}>
              <span className="text-2xl leading-none" style={{ color: "var(--ink)", fontFamily: "Georgia, serif" }}>"</span>
              {rec.quote}
              <span className="text-2xl leading-none" style={{ color: "var(--ink)", fontFamily: "Georgia, serif" }}>"</span>
            </p>
            <div className="mt-5 flex items-center justify-between border-t pt-5" style={{ borderColor: "var(--line)" }}>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>{rec.name}</p>
                {rec.title && (
                  <p className="mt-0.5 text-xs" style={{ color: "var(--muted)" }}>{rec.title}</p>
                )}
              </div>
              {rec.linkedin && (
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs"
                  style={{ color: "var(--accent)" }}
                >
                  LinkedIn <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-4 rounded-xl border px-5 py-4 text-sm" style={{ borderColor: "var(--line)", background: "var(--card)", color: "var(--muted)" }}>
        <span style={{ color: "var(--ink)" }}>7 recommendations on LinkedIn.</span>{" "}
        <a
          href="https://www.linkedin.com/in/praveenkay"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-70"
        >
          View all on LinkedIn ↗
        </a>
      </div>
    </Section>
  );
}
