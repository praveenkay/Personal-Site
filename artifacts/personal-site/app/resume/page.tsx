"use client";

import { certifications, caseStudies, profile } from "@/lib/profile";

const fullExperience = [
  {
    company: "Travelex Insurance Services (Cover-More / Zurich Insurance Group)",
    role: "Program Manager – Technology Product Delivery, Governance & Compliance",
    period: "Dec 2023 – Present",
    location: "Remote, Lakeville MN",
    bullets: [
      "Generated $23M+ in Costco Travel Insurance revenue with ~150% growth in 6 months by leading end-to-end product launch — scoping vendor partnerships, orchestrating API integrations, driving cross-functional delivery across engineering, legal, compliance, and operations, and managing stakeholder communications to the executive level.",
      "Reduced program operating costs by >20% as measured by vendor contract audits and workflow analysis reports, by renegotiating third-party agreements, consolidating redundant services, and establishing leaner governance checkpoints across the program.",
      "Achieved 98% ISO 27001:2022 compliance score with zero audit findings by designing and executing an end-to-end audit preparation program — establishing full traceability across controls, requirements, owners, evidence artifacts, risks, and remediation actions.",
      "Eliminated all compliance gaps in sanctions screening as measured by zero MoveIT transfer errors post-launch, by diagnosing a 113-column UTF-8 data defect, coordinating resolution across Zurich, Cover-More, and downstream vendor systems, and validating through structured regression testing.",
      "Improved Apple Pay checkout conversion by ~3% as measured by post-launch analytics, by leading QA validation strategy, release coordination, and cross-team stakeholder alignment throughout the payment integration delivery lifecycle.",
      "Established and operated a technology governance framework covering product roadmap oversight, release gate criteria, risk registers, and compliance readiness dashboards — enabling Zurich executive leadership to make data-driven investment decisions.",
      "Managed vendor relationships and SLA performance for 5+ technology partners, conducting quarterly business reviews, escalating delivery risks, and driving contract amendments to protect program timelines and budget integrity.",
      "Led SAFe Agile delivery cadence for cross-functional squads across 4 time zones — facilitating PI planning, sprint ceremonies, backlog prioritization, and executive steering committee reporting on a bi-weekly cadence.",
      "Integrated AI governance considerations into product planning processes, ensuring AI-adjacent features met privacy, compliance, and audit-readiness standards from inception — establishing review gates before development commitment."
    ]
  },
  {
    company: "Bank of the West / BNP Paribas",
    role: "VP Technology Manager",
    period: "Oct 2018 – Dec 2023",
    location: "Omaha, NE",
    bullets: [
      "Reduced manual testing effort by ~70% and saved $250K+ in annual QA costs as measured by defect escape rates and labor hour tracking, by architecting and deploying an enterprise QA automation framework spanning Selenium WebDriver, REST API testing, and performance testing across 15+ banking applications.",
      "Saved ~$200K annually and freed ~200 hours per release cycle as measured by release velocity reports and CI/CD audit logs, by designing and implementing automated build, test, and deployment pipelines across 12+ enterprise banking systems.",
      "Accelerated delivery of 6 regulatory compliance features on time and within budget by leading end-to-end program management across engineering, compliance, legal, and operations teams under BNP Paribas global governance standards.",
      "Scaled and led a QA team of 12+ engineers (onshore and offshore) as measured by team capacity and coverage metrics, by establishing career development frameworks, performance management processes, and technical mentorship programs.",
      "Managed $3M+ annual technology budget by building zero-based budget models, tracking actuals against forecasts monthly, and presenting variance analysis to VP and C-suite stakeholders — achieving under-budget delivery for 3 consecutive fiscal years.",
      "Reduced production defect escape rate by establishing shift-left quality practices — embedding QA engineers within development squads, implementing peer code review gates, and requiring unit test coverage thresholds before any release promotion.",
      "Drove vendor quality accountability for 3 offshore development partners by establishing measurable SLAs, quarterly quality scorecards, and escalation protocols that reduced vendor-introduced defects by 40%+."
    ]
  },
  {
    company: "Bank of the West / BNP Paribas",
    role: "AVP Senior Lead Quality Engineer",
    period: "Dec 2017 – Oct 2018",
    location: "San Ramon, CA",
    bullets: [
      "Established enterprise-wide test strategy and quality standards as measured by a 25% reduction in critical production incidents, by defining shift-left testing practices, root cause analysis protocols, and mandatory test planning templates adopted by all development teams.",
      "Reduced regression testing cycle time from 3 weeks to 5 days by leading migration from manual test execution to a Selenium-based automation suite with 1,200+ automated test cases covering core banking workflows.",
      "Built and mentored a QA Center of Excellence (CoE) for 8 engineers, conducting weekly technical training sessions, establishing a shared automation framework library, and creating certification-based learning paths for team upskilling."
    ]
  },
  {
    company: "Bank of the West / BNP Paribas",
    role: "Sr QA Consultant / Scrum Master",
    period: "Dec 2015 – Dec 2017",
    location: "San Ramon, CA",
    bullets: [
      "Improved sprint throughput by 20%+ for 3 cross-functional Agile teams as Scrum Master by facilitating SAFe® ceremonies, removing organizational blockers, clarifying acceptance criteria, and establishing transparent velocity and backlog health reporting.",
      "Established QA consulting practice for 5 digital banking product teams — defining test plans, API testing strategies, and integration testing frameworks for mobile and web platforms serving 500K+ bank customers.",
      "Led Agile transformation workshops for 30+ developers and business analysts, driving adoption of story mapping, definition of done, and continuous feedback loops that reduced rework by 30%+ within two program increments."
    ]
  },
  {
    company: "Apple Inc.",
    role: "Test Architect · Retail QA Test Manager · Scrum Master / Process Manager",
    period: "Dec 2010 – Feb 2014",
    location: "Cupertino, CA",
    bullets: [
      "Improved Apple Pay checkout conversion by ~3% as measured by post-launch transaction analytics, by designing end-to-end QA test architecture covering NFC payment flows, error handling, and cross-device compatibility across iPhone, iPad, and Mac platforms.",
      "Scaled Retail QA program to support 400+ Apple Store locations globally as measured by zero launch-day critical defects across 3 major product launches, by creating standardized test suites, device coverage matrices, and release-readiness scorecards.",
      "Reduced retail software release cycle time by 35% as Test Architect by designing a risk-based testing strategy that prioritized high-impact customer workflows and eliminated low-value manual test cases from the critical path.",
      "Improved engineering team Agile maturity as Scrum Master / Process Manager by establishing sprint cadence, retrospective discipline, and executive reporting cadence across 4 hardware-software delivery squads serving iOS and macOS platforms.",
      "Built cross-functional testing partnerships with Apple Retail, Engineering, and Operations teams, enabling earlier defect detection and reducing post-release customer-facing incident rates across point-of-sale and inventory management systems."
    ]
  },
  {
    company: "American Express",
    role: "Senior QA Engineer – Card Platform",
    period: "Feb 2014 – Sep 2014",
    location: "Salt Lake City, UT",
    bullets: [
      "Delivered end-to-end QA coverage for enterprise card processing platform initiatives as measured by 100% test case execution and zero post-release critical defects, by designing structured test plans covering functional, regression, and integration scenarios in Amex's PCI-DSS regulated environment.",
      "Partnered with business analysts and developers to define acceptance criteria and test entry/exit gates — reducing ambiguous requirements by 40%+ and improving sprint predictability across two product delivery teams."
    ]
  },
  {
    company: "First Tech Federal Credit Union",
    role: "Senior QA Lead / Scrum Master – Digital Banking",
    period: "Sep 2014 – Dec 2015",
    location: "Beaverton, OR",
    bullets: [
      "Accelerated digital banking feature release frequency from quarterly to bi-monthly as measured by release calendar records, by leading QA and Agile delivery reforms including automated regression suites, continuous integration, and sprint-based test execution for mobile and online banking platforms.",
      "Ensured compliance alignment with NCUA and federal credit union regulatory standards by embedding compliance checkpoints within the QA test plan — achieving zero regulatory audit findings during the 2015 annual examination."
    ]
  },
  {
    company: "Microsoft Corporation",
    role: "QA Lead – ALES & Rhythm of Business · Senior STE – MSDN",
    period: "Dec 2005 – Dec 2010",
    location: "Hyderabad, India",
    bullets: [
      "Delivered zero-defect releases for MSDN Developer Platform as measured by post-release incident reports, by leading a team of 6 STEs in structured test planning, scenario-based execution, and stakeholder sign-off across the Windows developer ecosystem.",
      "Elevated Rhythm of Business (RoB) reporting quality as measured by senior leadership adoption of QA dashboards, by designing automated data validation pipelines and executive-ready metrics views consumed weekly by Microsoft VP-level stakeholders.",
      "Led ALES (Application Lifecycle Engineering Services) quality assurance for internal Microsoft tooling by establishing test automation baselines, defect categorization frameworks, and release readiness criteria adopted across the Hyderabad engineering hub.",
      "Mentored and performance-managed a 6-person QA team by conducting weekly technical reviews, 1:1 career coaching sessions, and cross-functional pairing with development teams — reducing team defect re-open rate by 50%+ over 18 months."
    ]
  },
  {
    company: "Infosys · Accenture · Alamy · Informa Technologies",
    role: "QA Engineer / Test Lead",
    period: "2002 – 2005",
    location: "India",
    bullets: [
      "Built foundational expertise in software testing, test lifecycle management, and structured QA methodology across enterprise content management, media, and publishing platforms at four technology firms.",
      "Led functional, regression, and UAT execution cycles for enterprise platforms serving global clients — establishing early proficiency in test planning, defect management, and stakeholder reporting."
    ]
  }
];

const coreLeadershipAreas = [
  "Program & Portfolio Management",
  "Technology Governance & Compliance",
  "Quality Engineering & Test Automation",
  "Agile & SAFe® Delivery Leadership",
  "Governance, Risk & Compliance (GRC)",
  "Executive Stakeholder Management",
  "Technology Product Management",
  "Vendor & Contract Management",
  "Release Management & DevOps Delivery",
  "Cross-functional Team Leadership",
  "Budget Planning & Cost Optimization",
  "Digital Transformation & AI Delivery"
];

const innovationAI = [
  "Accelerated program reporting by 40%+ by integrating GitHub Copilot, ChatGPT, and Azure OpenAI into delivery workflows — automating status summaries, sprint notes, risk registers, and backlog refinement documentation.",
  "Built executive-facing delivery intelligence dashboards in Azure DevOps and Jira using AI-assisted data aggregation, surfacing real-time KPIs on velocity, defect trends, compliance posture, and budget burn for C-suite decision-making.",
  "Applied AI governance frameworks to product planning at Zurich/Cover-More — establishing pre-development review gates for AI-adjacent features covering data privacy, bias risk, auditability, and regulatory compliance.",
  "Championed AI-assisted QA innovation by evaluating and piloting intelligent test generation tools that reduced manual test authoring by 30%+ across regression suites, improving coverage while reducing cycle time.",
  "Led knowledge-sharing sessions on responsible AI adoption for delivery teams — covering prompt engineering, AI governance principles, risk classification, and acceptable-use policies for enterprise AI tool deployment."
];

const techProficiency = [
  { category: "Program & Delivery", tools: "Jira, Confluence, Azure DevOps, Rally, MS Project, ServiceNow, Aha!, SharePoint" },
  { category: "QA & Test Automation", tools: "Selenium WebDriver, Appium, Postman, REST Assured, Cucumber/BDD, TestNG, JUnit, LoadRunner, JMeter, SoapUI, Charles Proxy, Zephyr, qTest" },
  { category: "Cloud & Infrastructure", tools: "Microsoft Azure (AZ-400 certified), AWS (Cloud Practitioner), Docker, Kubernetes (working knowledge), Terraform (knowledge)" },
  { category: "DevOps & CI/CD", tools: "Jenkins, GitHub Actions, GitLab CI, Azure Pipelines, Git, BitBucket, ArgoCD (knowledge), SonarQube" },
  { category: "Data & Analytics", tools: "SQL (MS SQL Server, Oracle, MySQL, PostgreSQL), Power BI, Tableau, Excel (advanced: pivot, VBA, Power Query)" },
  { category: "Integration & APIs", tools: "REST API, SOAP/WSDL, MoveIT, IBM MQ, Kafka (knowledge), Swagger/OpenAPI, JSON, XML" },
  { category: "Compliance & Security", tools: "ISO 27001:2022 audit support, SOC 2 awareness, NIST 800-53 (knowledge), HIPAA (knowledge), PCI-DSS awareness" },
  { category: "Collaboration & Productivity", tools: "Microsoft Teams, Slack, Zoom, Miro, Mural, Confluence, Notion" },
  { category: "Frameworks & Methodologies", tools: "SAFe® 6 Agilist, Scrum, Kanban, Waterfall, ITIL (knowledge), Six Sigma (knowledge)" }
];

const allCerts = [
  { name: "PMP®", issuer: "Project Management Institute (PMI)", detail: "" },
  { name: "SAFe® 6 Agilist", issuer: "Scaled Agile, Inc.", detail: "" },
  { name: "CSM — Certified Scrum Master", issuer: "Scrum Alliance", detail: "" },
  { name: "AZ-400 — Microsoft Azure DevOps Engineer Expert", issuer: "Microsoft", detail: "" },
  { name: "AWS Cloud Practitioner (CCP)", issuer: "Amazon Web Services", detail: "" }
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
            Technology Program, Governance & Quality Leader
          </p>
          <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
            PMP® · SAFe® 6 Agilist · CSM · AZ-400 · AWS Cloud Practitioner
          </p>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            {profile.email} · +1 (408) 242-9200 · linkedin.com/in/praveenkay · praveenkay.me · Lakeville, MN
          </p>
        </div>

        {/* Executive Profile */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em]">Executive Profile</h2>
          <p className="mt-3 leading-7 text-sm" style={{ color: "var(--muted)" }}>
            Versatile technology leader with 22+ years of progressive experience spanning program management, quality engineering, Agile delivery, and technology governance across insurance, fintech, banking, consumer technology, and enterprise software. PMP®, SAFe® 6 Agilist, and CSM certified, with a consistent track record of translating complex business requirements into measurable delivery outcomes.
          </p>
          <p className="mt-3 leading-7 text-sm" style={{ color: "var(--muted)" }}>
            Proven ability to lead cross-functional teams, drive enterprise-scale programs from inception through delivery, build high-performing QA organizations, and establish governance frameworks that survive audit scrutiny. Key career achievements include: <strong>$23M+</strong> in product revenue from a 6-month launch, <strong>$450K+</strong> in operational savings through QA and CI/CD automation, <strong>98% ISO 27001:2022</strong> audit score with zero findings, and Apple Pay checkout conversion improvement of <strong>~3%</strong>.
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

        {/* Core Leadership Areas */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-3">Core Leadership Areas</h2>
          <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {coreLeadershipAreas.map((area) => (
              <div key={area} className="text-sm leading-6" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--ink)" }}>›</span> {area}
              </div>
            ))}
          </div>
        </div>

        {/* Innovation & AI */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-4">Innovation & AI</h2>
          <ul className="space-y-3">
            {innovationAI.map((item) => (
              <li key={item} className="text-sm leading-6" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--ink)" }}>›</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* AI Initiatives / Projects */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-4">AI Projects & Initiatives</h2>
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

        {/* Technology Proficiency */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-4">Technology Proficiency</h2>
          <div className="space-y-3">
            {techProficiency.map((row) => (
              <div key={row.category} className="text-sm">
                <span className="font-semibold" style={{ color: "var(--ink)" }}>{row.category}: </span>
                <span style={{ color: "var(--muted)" }}>{row.tools}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em]">Education</h2>
          <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
            <strong>Bangalore University, India</strong> — B.E., Electrical & Electronics Engineering (2002)
          </p>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-lg font-semibold tracking-[-0.02em] mb-3">Certifications</h2>
          <ul className="space-y-2">
            {allCerts.map((c) => (
              <li key={c.name} className="text-sm" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--ink)" }}>›</span> <strong>{c.name}</strong> — {c.issuer}
              </li>
            ))}
          </ul>
        </div>

      </section>
    </main>
  );
}
