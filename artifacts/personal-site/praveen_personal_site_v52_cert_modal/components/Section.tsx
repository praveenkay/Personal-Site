export function Section({
  id,
  eyebrow,
  title,
  description,
  children
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b" style={{ borderColor: "var(--line)" }}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mb-9 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: "var(--muted)" }}>{eyebrow}</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{title}</h2>
          {description ? <p className="mt-5 text-base leading-7" style={{ color: "var(--muted)" }}>{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
