import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/profile";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Let's connect" title="Let's discuss delivery, governance, and transformation.">
      <div className="rounded-[1.5rem] border p-6" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
        <p className="leading-7" style={{ color: "var(--muted)" }}>
          Best fit: Senior Program Manager, Release Governance Lead, Delivery Excellence Lead, Technology Operations Manager, GRC Technology Program Manager, and Director-level Delivery & Governance roles.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <a className="flex items-center justify-between rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--paper)" }} href={`mailto:${profile.email}`}>
            <span className="flex items-center gap-3"><Mail size={17} /> {profile.email}</span><ArrowUpRight size={17} />
          </a>
          <a className="flex items-center justify-between rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--paper)" }} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center gap-3"><Linkedin size={17} /> LinkedIn</span><ArrowUpRight size={17} />
          </a>
          <a className="flex items-center justify-between rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--paper)" }} href={profile.resumePdf}>
            <span className="flex items-center gap-3">📄 Download Resume</span><ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </Section>
  );
}
