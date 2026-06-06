"use client";

import { certifications, experience, profile, skills } from "@/lib/profile";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <div className="no-print mb-6 flex flex-wrap gap-3">
        <a href="/" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: "var(--line)" }}>Back to site</a>
        <a href={profile.resumePdf} className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: "var(--line)" }}>Download PDF</a>
        <button onClick={() => window.print()} className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: "var(--line)" }}>Print / Save as PDF</button>
      </div>

      <section className="rounded-2xl border p-8" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
        <h1 className="text-4xl font-semibold tracking-[-0.04em]">{profile.name}</h1>
        <p className="mt-2 text-lg">{profile.roleLine}</p>
        <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
          {profile.email} · linkedin.com/in/praveenkay
        </p>

        <h2 className="mt-8 text-xl font-semibold">Professional Summary</h2>
        <p className="mt-3 leading-7" style={{ color: "var(--muted)" }}>{profile.intro}</p>

        <h2 className="mt-8 text-xl font-semibold">Selected Experience</h2>
        <div className="mt-4 space-y-6">
          {experience.map((job) => (
            <article key={job.company}>
              <h3 className="font-semibold">{job.company}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{job.role} · {job.period}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5" style={{ color: "var(--muted)" }}>
                {job.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <h2 className="mt-8 text-xl font-semibold">Skills</h2>
        <p className="mt-3 leading-7" style={{ color: "var(--muted)" }}>{skills.join(", ")}</p>

        <h2 className="mt-8 text-xl font-semibold">Certifications</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5" style={{ color: "var(--muted)" }}>
          {certifications.map((c) => <li key={c.name}>{c.name} — {c.issuer}</li>)}
        </ul>
      </section>
    </main>
  );
}
