import { whatISolve } from "@/lib/profile";
import { Section } from "./Section";

export function WhatISolve() {
  return (
    <Section
      id="what-i-solve"
      eyebrow="Where I create value"
      title="The problems organizations bring me in to solve."
      description="Senior technology leaders engage me when they need governance clarity, delivery accountability, regulatory readiness, and operational discipline — not just process facilitation."
    >
      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
        {whatISolve.map((item) => (
          <div
            key={item}
            className="rounded-[1.25rem] border p-5"
            style={{ borderColor: "var(--line)", background: "var(--card)" }}
          >
            <span
              className="mr-2 text-base font-semibold"
              style={{ color: "var(--accent)" }}
            >
              ✔
            </span>
            <span className="text-sm leading-6" style={{ color: "var(--muted)" }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
