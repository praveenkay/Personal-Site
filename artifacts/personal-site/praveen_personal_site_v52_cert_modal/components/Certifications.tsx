"use client";

import { ExternalLink, X } from "lucide-react";
import { certifications } from "@/lib/profile";
import { useEffect, useState } from "react";

type Certification = (typeof certifications)[number];

export function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {certifications.map((cert) => (
          <button
            key={cert.name}
            type="button"
            onClick={() => setSelected(cert)}
            className="rounded-xl border p-4 text-left text-sm transition hover:-translate-y-0.5 hover:shadow-soft"
            style={{
              borderColor: "var(--line)",
              background: "var(--card)",
              color: "var(--muted)"
            }}
          >
            <span className="block text-base font-semibold tracking-[-0.02em]" style={{ color: "var(--ink)" }}>
              {cert.name}
            </span>
            <span className="mt-1 block">{cert.issuer}</span>
          </button>
        ))}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-5 backdrop-blur-sm"
          onMouseDown={() => setSelected(null)}
        >
          <div
            className="w-full max-w-lg rounded-[1.5rem] border p-6 shadow-soft"
            style={{
              borderColor: "var(--line)",
              background: "var(--card)",
              color: "var(--ink)"
            }}
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} certification details`}
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "var(--muted)" }}>
                  Certification
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                  {selected.name}
                </h3>
                <p className="mt-1" style={{ color: "var(--muted)" }}>
                  {selected.issuer}
                </p>
              </div>

              <button
                type="button"
                aria-label="Close certification modal"
                onClick={() => setSelected(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border"
                style={{ borderColor: "var(--line)", background: "var(--paper)" }}
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-6 space-y-4 leading-7" style={{ color: "var(--muted)" }}>
              <p>{selected.summary}</p>
              <p>{selected.detail}</p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {selected.link ? (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
                  style={{ background: "var(--ink)", color: "var(--paper)" }}
                >
                  Verify credential <ExternalLink size={15} />
                </a>
              ) : null}

              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium"
                style={{ borderColor: "var(--line)", background: "var(--paper)" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
