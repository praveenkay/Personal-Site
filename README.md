# Praveen Kothapally — Personal Site

Personal portfolio and professional identity site for Praveen Kothapally, Technology Governance & Transformation Leader.

**Live site:** [praveenkay.me](https://praveenkay.me)

---

## About

This site positions Praveen's professional identity around technology governance, risk, delivery excellence, and AI governance — built for senior leadership roles in banking, financial services, and insurance.

### Sections

- **Hero** — Identity, headline, and key capabilities
- **Leadership Profile** — Executive summary and focus areas
- **Selected Outcomes** — Defensible career achievements with qualifiers
- **Where I Create Value** — Problem areas and value proposition
- **Professional Experience** — Travelex Insurance Services (Cover-More / Zurich), Bank of the West / BNP Paribas, and earlier roles
- **AI and Innovation** — AssureCore, UnderwriterAI, AgentVerse, and delivery tooling
- **Governance, Risk & Compliance** — GRC experience and current context
- **Recommendations** — Peer endorsements
- **Skills** — Categorized competency areas
- **Opportunities** — Target roles and seniority levels
- **Let's Connect** — Contact links

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v3
- **Language:** TypeScript
- **Package manager:** pnpm (monorepo workspace)
- **Hosting:** praveenkay.me

## Project Structure

```
artifacts/personal-site/
├── app/                   # Next.js App Router pages
│   ├── page.tsx           # Main page — section order
│   └── resume/page.tsx    # Resume page
├── components/            # One component per section
├── lib/
│   └── profile.ts         # Single source of truth for all content
└── public/                # Static assets (headshot, resume PDF/MD)
```

## Content Updates

All site content lives in `artifacts/personal-site/lib/profile.ts`. Edit that file to update:

- Identity, headline, and intro
- Capabilities, metrics, and achievements
- Experience entries and bullet points
- GRC items, target roles, case studies
- Skills and certifications

## Local Development

```bash
pnpm --filter @workspace/personal-site run dev
```

## Contact

- **Email:** praveenkay@gmail.com
- **LinkedIn:** [linkedin.com/in/praveenkay](https://www.linkedin.com/in/praveenkay)
- **Location:** Minneapolis, Minnesota
