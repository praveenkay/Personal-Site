import { ArrowUpRight, Download, MapPin } from "lucide-react";
import { heroCapabilities, profile } from "@/lib/profile";

export function Hero() {
  return (
    <section className="site-bg border-b" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>
            {profile.roleLine}
          </p>
          <p className="mt-1 text-sm font-medium" style={{ color: "var(--accent)" }}>
            {profile.roleSubline}
          </p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-4 text-sm leading-6" style={{ color: "var(--muted)" }}>
            {profile.intro}
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-y-2 gap-x-4">
            {heroCapabilities.map((cap) => (
              <li key={cap} className="flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <span className="font-semibold" style={{ color: "var(--accent)" }}>✔</span>
                {cap}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
            <MapPin size={15} />
            {profile.location}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium" style={{ background: "var(--ink)", color: "var(--paper)" }}>
              Contact Praveen <ArrowUpRight size={15} />
            </a>
            <a href={profile.resumePdf} className="inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
              Download Resume <Download size={15} />
            </a>
            <a href={profile.resumePage} className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
              View Resume
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-[1.5rem] border p-3 shadow-soft" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
            <img src={profile.headshot} alt="Professional headshot of Praveen Kothapally" className="aspect-[4/3] w-full rounded-[1rem] object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
