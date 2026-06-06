# Project Structure & Quick Reference

## Essential Files ✓

```
✓ app/                    - Next.js app folder
  ├── page.tsx           - Home page
  ├── layout.tsx         - Root layout with metadata
  └── globals.css        - Global styles

✓ components/            - All React components
  ├── Hero.tsx          - Hero section
  ├── Nav.tsx           - Navigation
  ├── About.tsx         - About section
  ├── Experience.tsx    - Experience section
  ├── Projects.tsx      - Projects section
  ├── Skills.tsx        - Skills & credentials
  ├── Contact.tsx       - Contact section
  ├── Footer.tsx        - Footer
  └── Section.tsx       - Reusable wrapper

✓ lib/                  - Data & utilities
  └── profile.ts       - All profile content

✓ public/              - Static assets
  └── site.webmanifest - PWA configuration

✓ Configuration Files
  ├── package.json     - Dependencies & scripts
  ├── tsconfig.json    - TypeScript config
  ├── tailwind.config.ts - Tailwind CSS config
  ├── next.config.mjs  - Next.js config
  ├── postcss.config.mjs - PostCSS config
  └── next-env.d.ts    - TypeScript definitions
```

## Quick Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `bash cleanup.sh` | Remove old version directories |

## Key Features

- ✅ Fast performance with Next.js 14
- ✅ Responsive design with Tailwind CSS
- ✅ Type-safe with TypeScript
- ✅ SEO optimized with metadata
- ✅ Vercel Analytics integrated
- ✅ PWA ready (web manifest)
- ✅ Beautiful icon library (Lucide React)

## Content Management

All content is managed in `lib/profile.ts`:
- **profile** - Personal info & headline
- **metrics** - Key achievements
- **executiveThemes** - Core competencies
- **experience** - Work history
- **projects** - Portfolio projects
- **skills** - Technical & leadership skills
- **certifications** - Credentials

## Customization Guide

1. **Update your profile** → Edit `lib/profile.ts`
2. **Change colors** → Edit `tailwind.config.ts` (colors section)
3. **Add resume** → Place PDF in `public/` folder
4. **Modify content** → Update relevant component files
5. **Deploy** → Push to GitHub, deploy on Vercel

## Environment Variables (Optional)

Create `.env.local`:
```
# Add any environment variables here if needed
```

## Files to Remove (Legacy)

These directories should be removed (run `bash cleanup.sh`):
- `praveen_personal_site_v2_executive/`
- `praveen_personal_site_v3_executive/`

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Auto-deploys on every push

### Other Platforms
```bash
npm run build
# Deploy the .next/ folder
```

---
**Last Updated:** 2026-06-05
