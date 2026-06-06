import { profile } from "@/lib/profile";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  ["Experience", "#experience"],
  ["GRC", "#grc"],
  ["AI Initiatives", "#builds"],
  ["Opportunities", "#opportunities"],
  ["Contact", "#contact"]
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: "var(--line)", background: "color-mix(in srgb, var(--paper) 88%, transparent)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">
          Praveen K.
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex" style={{ color: "var(--muted)" }}>
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:opacity-70">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href={profile.resumePdf} className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: "var(--line)", background: "var(--card)" }}>
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
