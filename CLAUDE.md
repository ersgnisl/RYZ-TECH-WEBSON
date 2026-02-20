# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build (run this to verify no TypeScript/build errors)
npm run lint     # ESLint check
```

Always run `npm run build` after making changes to confirm there are no errors before finishing.

## Architecture

**Next.js 14 App Router** site for RYZ Tech, a digital marketing agency. All content is driven by static TypeScript data files — there is no CMS or database.

### Data Layer (`/data/`)

All page content lives here. Modifying these files automatically updates all related pages:

- `data/services.ts` — 5 services with full detail (slugs, icons, colors, FAQs, KPIs, etc.)
- `data/projects.ts` — 4 client case studies with metrics and logos
- `data/team.ts` — 2 co-founders; `photo` field points to `/public/team/*.jpg`
- `data/blog.ts` — Blog posts

**Key pattern:** Dynamic `[slug]` pages call `generateStaticParams()` which reads directly from these data arrays — adding an item to the array automatically creates a new static page.

### Icon Mapping Pattern

Icons are stored as **strings** in data files (e.g. `icon: "TrendingUp"`) and resolved to lucide-react components via a `Record<string, React.ElementType>` map inside each page component. When adding a new service or section that needs an icon, extend the `iconMap` in the relevant page file (`app/services/page.tsx`, `app/services/[slug]/page.tsx`).

### Styling Conventions

- **Tailwind CSS** + **CSS variables** defined in `globals.css` (e.g. `--accent-primary`, `--glow-primary`)
- Utility classes defined in `globals.css`: `.glass-card`, `.section-padding`, `.btn-primary`, `.btn-ghost`, `.gradient-text`, `.input-field`, `.display-md`, `.heading-sm`, `.body-lg`
- Dynamic theming uses inline styles with hex colors from data files (e.g. `background: \`${service.color}15\`` for 15% opacity tint)
- Use `<img>` tags (not `next/image`) for client logos and team photos — logo paths may not exist yet and `<img>` handles missing files gracefully with `onError` state

### Internationalization

`useLanguage()` hook from `contexts/LanguageContext.tsx` provides `t` (translations) and `lang`. All UI strings must come from `lib/i18n.ts` translation objects (Turkish `tr` + English `en`). Never hardcode Turkish/English strings directly in components.

### Contact Form & Email

- Form in `app/contact/ContactClient.tsx` POSTs to `/api/contact`
- API route at `app/api/contact/route.ts` uses **nodemailer** to send to `info@ryztechdigital.com`
- Requires `.env.local` with: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
- See `.env.local.example` for the full template

### Static Assets

- Client logos: `public/clients/[name].png` (loleslogo, micheallogo, momentalogo, godslogo)
- Team photos: `public/team/ahmet.jpg`, `public/team/ersagun.jpg`
- Site logo: `public/logo1.png`

### Animations

`FadeIn` component (`components/motion/FadeIn.tsx`) wraps elements for scroll-triggered fade-in. Use `delay={i * 0.1}` for staggered siblings. All other animations use Framer Motion directly.
