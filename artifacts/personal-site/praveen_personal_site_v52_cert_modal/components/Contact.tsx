import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/lib/profile";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Let's talk" title="Open to senior delivery, program, release, Agile, governance, and AI-enabled execution roles.">
      <div className="rounded-[1.5rem] border p-6" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
        <p className="leading-7" style={{ color: "var(--muted)" }}>
          Best fit: Senior Program Manager, Release Manager, Agile Delivery Lead, PMO Lead, Technology Governance, QA Transformation, and AI-enabled delivery roles.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <a className="flex items-center justify-between rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--paper)" }} href={`mailto:${profile.email}`}>
            <span className="flex items-center gap-3"><Mail size={17} /> {profile.email}</span><ArrowUpRight size={17} />
          </a>
          <a className="flex items-center justify-between rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--paper)" }} href={`tel:${profile.phone}`}>
            <span className="flex items-center gap-3"><Phone size={17} /> {profile.phone}</span><ArrowUpRight size={17} />
          </a>
          <a className="flex items-center justify-between rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--paper)" }} href={profile.linkedin}>
            <span className="flex items-center gap-3"><Linkedin size={17} /> LinkedIn</span><ArrowUpRight size={17} />
          </a>
          <a className="flex items-center justify-between rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--paper)" }} href={profile.github}>
            <span className="flex items-center gap-3"><Github size={17} /> GitHub</span><ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </Section>
  );
}
