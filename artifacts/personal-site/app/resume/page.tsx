"use client";

import { certifications, caseStudies, profile, skillCategories } from "@/lib/profile";

const fullExperience = [
  {
    company: "Travelex Insurance Services — Zurich Insurance Group / Cover-More Group",
    role: "Program Manager — Technology Delivery, Governance and Compliance",
    period: "Dec 2023 – Present",
    location: "Remote, MN",
    bullets: [
      "Coordinate delivery across engineering, QA, business analysis, infrastructure, operations, and business stakeholders.",
      "Support ISO 27001, internal-control, PCI, and third-party risk initiatives through evidence coordination, ownership tracking, and audit response.",
      "Improve cross-functional delivery governance, accountability, and executive visibility.",
      "Explore AI-enabled approaches to governance documentation, evidence management, and delivery operations.",
      "Spearheaded Third-Party Risk Management (TPRM) process implementation with cross-functional stakeholders.",
      "Lead release governance across planning, readiness, deployment coordination, production validation, and closure.",
      "Coach multiple delivery teams in planning, dependency management, continuous improvement, and predictable execution.",
      "Manage sanction screening governance including rollout support, production monitoring, and file cadence oversight.",
      "Develop release runbooks, deployment plans, validation standards, release calendars, and leadership communications.",
      "Built and maintain centralized evidence repositories in Confluence and SharePoint, improving audit response efficiency.",
      "Develop control traceability across RACE, Zurich control frameworks, and internal implementation activities.",
      "Coordinate evidence collection, action-item follow-up, and meeting preparation for audit, risk, and compliance reviews.",
      "Received the Care and Collaboration Award for outstanding contributions in audit and compliance improvements."
    ]
  },
  {
    company: "Bank of the West — BNP Paribas",
    role: "Vice President — Technology Manager / Scrum Master",
    period: "Oct 2018 – Dec 2023",
    location: "Omaha, NE",
    bullets: [
      "Led enterprise technology upgrade and transformation programs across retail banking operations.",
      "Managed global teams, vendors, software delivery risk, and cross-functional execution.",
      "Delivered ~20% delivery productivity improvement through Agile transformation and process redesign.",
      "Reduced manual testing ~70% through automation engineering and DevOps practices.",
      "Delivered documented savings exceeding $250K through automation and operating-model improvements.",
      "Created project delivery and maturity roadmaps across UI, API, and database layers aligned with strategic objectives.",
      "Established quality, release, and delivery controls for critical banking platforms.",
      "Led globally co-located teams to execute short-term and long-term projects, fostering innovation and high performance.",
      "Spearheaded seamless delivery of multi-million-dollar technology upgrades across all branches as trusted SME."
    ]
  },
  {
    company: "Bank of the West — BNP Paribas",
    role: "Associate Vice President — Senior Lead Quality Assurance",
    period: "Dec 2017 – Oct 2018",
    location: "Omaha, NE",
    bullets: [
      "Led 15-member geographically distributed QA team supporting critical core banking initiatives.",
      "Developed CI/CD-based automation frameworks for cross-browser, API, and mainframe legacy applications.",
      "Delivered zero-defect releases saving $200,000; designed automation solutions saving 200+ hours.",
      "Promoted BDD and TDD best practices across delivery teams.",
      "Used Agile practices: Daily Stand-ups, Sprint Planning, Prioritized backlogs, Retrospectives, and MVPs."
    ]
  },
  {
    company: "Bank of the West — BNP Paribas",
    role: "Senior QA Consultant — Global Banking CRM",
    period: "Dec 2015 – Dec 2017",
    location: "San Ramon, CA",
    bullets: [
      "Served as Scrum Master and Senior QA Consultant on core banking and CRM transformation projects.",
      "Single-handedly designed and managed critical automation initiative contributing to zero-defect releases with $250,000 in savings.",
      "Used PL/SQL, HP UFT, HP ALM, Jira, Confluence, and Xray to strengthen quality engineering.",
      "Led Scrum Ceremonies and maintained delivery velocity for the projects."
    ]
  },
  {
    company: "Apple · American Express · First Tech FCU · Infosys · Accenture",
    role: "Technology Leadership — Quality Engineering & Program Management",
    period: "2002 – 2018",
    location: "Various, US & India",
    bullets: [
      "Implemented scalable test automation and delivery-governance practices across CRM, banking, data, and enterprise applications.",
      "Led distributed technology and quality teams across onsite and offshore delivery models.",
      "Progressed through quality engineering, automation, consulting, test management, and process-transformation roles.",
      "Delivered zero-defect releases for core banking applications saving $200,000+ per engagement.",
      "Built QA gating processes and implemented Agile methodologies across sales CRM at Apple.",
      "Established fast-paced Agile processes and streamlined testing workflows at American Express.",
      "Implemented Kanban approach in leading enterprise-solutions team at First Tech Federal Credit Union."
    ]
  }
];

const grcExpertise = [
  "ISO 27001 audit readiness and coordination",
  "Internal technology controls and ICIF control coordination",
  "PCI assessment support",
  "Evidence management and centralized repositories",
  "Control ownership and traceability",
  "Risk identification and remediation tracking",
  "Third-party technology risk governance (TPRM)"
];

const allCerts = [
  { name: "PMP®", issuer: "Project Management Institute", detail: "2021" },
  { name: "SAFe® 6 Agilist", issuer: "Scaled Agile", detail: "2023" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", detail: "2024" },
  { name: "Scrum Master Accredited Certification", issuer: "International Scrum Institute", detail: "2020" },
  { name: "AZ-400 Designing and Implementing Microsoft DevOps Solutions", issuer: "Microsoft", detail: "" }
];

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <div className="no-print mb-6 flex flex-wrap gap-3">
        <a href="/" className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: "var(--line)" }}>← Back to site</a>
        <a href={profile.resumePdf} className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: "var(--line)" }}>Download PDF</a>
        <button onClick={() => window.print()} className="rounded-full border px-4 py-2 text-sm" style={{ borderColor: "var(--line)" }}>Print / Save as PDF</button>
      </div>

      <section className="rounded-2xl border p-8 space-y-8" style={{ borderColor: "var(--line)", background: "var(--card)" }}>

        {/* Header */}
        <div className="border-b pb-6" style={{ borderColor: "var(--line)" }}>
          <h1 className="text-4xl font-semibold tracking-[-0.04em]">{profile.name}</h1>
          <p className="mt-2 text-base font-medium" style={{ color: "var(--muted)" }}>
            Technology Governance & Transformation Leader
          </p>
          <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
            AI Governance · Technology Risk · Delivery Excellence · Regulatory Readiness
          </p>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            {profile.email} · +1 (408) 242-9200 · linkedin.com/in/praveenkay · praveenkay.me · Lakeville, MN
          </p>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em]">Professional Summary</h2>
          <p className="mt-3 leading-7 text-sm" style={{ color: "var(--muted)" }}>
            Technology Governance & Transformation Leader with 22+ years across banking, financial services, and insurance. Expertise connecting technology delivery with ISO 27001, ICIF, PCI, third-party risk, evidence management, audit response, and remediation tracking. Hands-on AI practitioner building production-ready GRC prototypes. Certified PMP, SAFe 6 Agilist, AWS Cloud Practitioner, and Scrum Master.
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: "var(--muted)" }}>
            Core Competencies: ISO 27001 · Technology Risk · Audit & Compliance · GRC · Regulatory Readiness · Third-Party Risk · Evidence Management · AI Governance
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-5">Professional Experience</h2>
          <div className="space-y-7">
            {fullExperience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="border-l-2 pl-5" style={{ borderColor: "var(--line)" }}>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-semibold text-sm">{job.company}</h3>
                  <p className="text-sm font-medium" style={{ color: "var(--muted)" }}>{job.role}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{job.period} · {job.location}</p>
                </div>
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="text-sm leading-6" style={{ color: "var(--muted)" }}>
                      <span style={{ color: "var(--ink)" }}>›</span> {b}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* AI Initiatives */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-4">AI & Innovation Initiatives</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {caseStudies.map((p) => (
              <div key={p.title} className="rounded-xl border p-4" style={{ borderColor: "var(--line)", background: "var(--paper)" }}>
                <p className="text-sm font-semibold">{p.title}</p>
                <p className="mt-1 text-xs leading-5" style={{ color: "var(--muted)" }}>{p.label}</p>
                <p className="mt-2 text-xs leading-5" style={{ color: "var(--muted)" }}>{p.outcome}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GRC Expertise */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-3">Governance & Compliance Expertise</h2>
          <p className="text-sm leading-6 mb-3" style={{ color: "var(--muted)" }}>
            My differentiator is the ability to work across both delivery and governance — embedding ownership, evidence, and repeatable controls into day-to-day technology operations.
          </p>
          <ul className="space-y-2">
            {grcExpertise.map((item) => (
              <li key={item} className="text-sm leading-6" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--ink)" }}>›</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-4">Technical Skills</h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {skillCategories.map((cat) => (
              <div key={cat.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-2" style={{ color: "var(--ink)" }}>{cat.title}</p>
                <p className="text-xs leading-6" style={{ color: "var(--muted)" }}>{cat.skills.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em]">Education</h2>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            <strong>Bangalore University</strong> — B.E., Electrical & Electronics Engineering (1998–2001)
          </p>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-3">Certifications</h2>
          <ul className="space-y-2">
            {allCerts.map((c) => (
              <li key={c.name} className="text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--ink)" }}>›</span> <strong>{c.name}</strong> — {c.issuer}
                {c.detail ? <span className="ml-1 text-xs">({c.detail})</span> : null}
              </li>
            ))}
          </ul>
        </div>

      </section>
    </main>
  );
}
