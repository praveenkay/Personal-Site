"use client";

import { certifications, caseStudies, experience, profile, skillCategories } from "@/lib/profile";

const fullExperience = [
  {
    company: "Travelex Insurance Services — Zurich / Cover-More Group",
    role: "Program Manager / Scrum Master — Release, Governance & Compliance",
    period: "Dec 2023 – Present",
    location: "Remote, MN",
    bullets: [
      "Own end-to-end release governance across three delivery teams: sprint readiness, release planning, production deployment coordination, validation, and closure.",
      "Lead production deployment calls managing order of operations, real-time issue resolution, rollback decisions, and day-plus-one validation across Dev, QA, BA, and Infrastructure.",
      "Author deployment runbooks, release calendars, production validation documents, and executive-level release communications.",
      "Coordinate ISO 27001, ICIF, and PCI audit programs; maintain centralized evidence repositories and control traceability in Confluence and SharePoint.",
      "Drive Third-Party Risk Management (TPRM) governance, sanction screening oversight, and Zurich/RACE control framework alignment.",
      "Applied AI to delivery operations — built UnderwriterAI (multi-agent underwriting platform) and AgentVerse (governance automation); used generative AI for control documentation and audit prep.",
      "Coach three Agile delivery teams in Scrum, self-management, and predictable execution cadence."
    ]
  },
  {
    company: "Bank of the West — BNP Paribas",
    role: "Vice President, Technology Manager & Scrum Master — Global Retail Banking",
    period: "Oct 2018 – Dec 2023",
    location: "Omaha, NE",
    bullets: [
      "Led enterprise technology delivery and quality governance for multi-million-dollar retail banking programs as VP-level delivery SME.",
      "Managed vendor relationships, software risk management, and delivery governance across high-visibility banking technology portfolios.",
      "Drove enterprise Agile transformation achieving 20% productivity improvement and 40% time savings — contributing $150K+ in cost savings.",
      "Established automation engineering and DevOps practices, reducing manual testing effort by 70% and improving release quality.",
      "Delivered zero-defect releases for core banking platforms coordinated across Jira, Confluence, XRAY, and CI/CD pipelines.",
      "Built and mentored cross-functional delivery teams across business analysis, QA, infrastructure, and vendor stakeholders."
    ]
  },
  {
    company: "Bank of the West — BNP Paribas",
    role: "Associate Vice President — Senior Lead Quality Assurance",
    period: "Dec 2017 – Oct 2018",
    location: "Omaha, NE",
    bullets: [
      "Led a 15-member geographically distributed QA team supporting critical core banking transformation programs.",
      "Developed CI/CD-based automation frameworks for cross-browser, API, and mainframe legacy applications.",
      "Delivered zero-defect releases contributing to $200K in project savings.",
      "Drove adoption of BDD and TDD practices across delivery teams, improving release confidence and upstream defect prevention."
    ]
  },
  {
    company: "Bank of the West — BNP Paribas",
    role: "Senior QA Consultant — Global Banking CRM, Solutions Delivery",
    period: "Dec 2015 – Dec 2017",
    location: "San Ramon, CA",
    bullets: [
      "Led Scrum ceremonies and QA delivery on core banking and Salesforce CRM transformation programs.",
      "Designed and delivered automation initiatives contributing to zero-defect releases with $250K in project savings.",
      "Strengthened quality engineering across UI, API, and database layers using PL/SQL, HP UFT, Jira, Confluence, and XRAY."
    ]
  },
  {
    company: "First Tech Federal Credit Union",
    role: "Scrum Master & Senior QA Consultant — Core Banking & Salesforce CRM",
    period: "Sep 2014 – Dec 2015",
    location: "Portland, OR",
    bullets: [
      "Led Scrum ceremonies and QA delivery across two large credit union and banking implementation programs.",
      "Implemented Kanban to improve enterprise team throughput and delivery cadence.",
      "Improved production issue resolution by collaborating with engineering and transition teams."
    ]
  },
  {
    company: "American Express",
    role: "Scrum Master & Test Manager — Global Banking Technology",
    period: "Feb 2014 – Sep 2014",
    location: "Salt Lake City, UT",
    bullets: [
      "Led Scrum ceremonies and test management for a data services and reporting program in the global banking technology portfolio.",
      "Established Agile delivery workflows, ETL validation processes, and CI/CD-integrated testing practices."
    ]
  },
  {
    company: "Apple",
    role: "Process Implementation Manager / Scrum Master / QA Lead — Sales CRM",
    period: "Dec 2010 – Feb 2014",
    location: "Cupertino, CA",
    bullets: [
      "Managed QA delivery and Scrum leadership for Apple's Sales Systems CRM portfolio across onsite and offshore teams.",
      "Established QA gating, Agile delivery standards, and automation frameworks — reducing test cycle time by 20%.",
      "Led multi-team coordination for large CRM releases with cross-boundary delivery partners."
    ]
  },
  {
    company: "Infosys, Accenture, Alamy, Informa Technologies",
    role: "Technical Test Lead / Senior Software Test Engineer",
    period: "May 2002 – Dec 2010",
    location: "India",
    bullets: [
      "Led test automation and QA delivery for enterprise clients across insurance, banking, and media domains.",
      "Managed onsite-offshore delivery models and coordinated multi-team releases across distributed organizations."
    ]
  }
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
            Technology Delivery Leader · Program Manager · Release Governance · Audit & Compliance · Agile Transformation
          </p>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            {profile.email} · linkedin.com/in/praveenkay · Lakeville, MN
          </p>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em]">Professional Summary</h2>
          <p className="mt-3 leading-7 text-sm" style={{ color: "var(--muted)" }}>
            Technology Delivery Leader with 22+ years of experience driving enterprise technology programs, release governance, audit readiness, Agile transformation, and quality engineering across banking, financial services, and insurance. Proven track record leading multi-million-dollar technology portfolios, coordinating ISO 27001, ICIF, and PCI audit programs, and delivering measurable improvements in release predictability, team productivity, and operational governance. Brings executive-level stakeholder communication, cross-functional alignment, and AI-enabled delivery improvement mindset.
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: "var(--muted)" }}>
            Certifications: PMP® · SAFe® 6 Agilist · AWS Certified Cloud Practitioner · Certified Scrum Master
          </p>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-5">Work Experience</h2>
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
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-4">Innovation & AI Initiatives</h2>
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

        {/* Skills */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-4">Core Competencies</h2>
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
            {certifications.filter(c => c.link || c.issuer !== "Bangalore University").slice(0, 4).map((c) => (
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
