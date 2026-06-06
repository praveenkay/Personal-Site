import { profile } from "@/lib/profile";

export function Footer() {
  return (
    <footer className="px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 text-sm md:flex-row" style={{ color: "var(--muted)" }}>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Executive portfolio · Next.js · no Vercel dependency</p>
      </div>
    </footer>
  );
}
