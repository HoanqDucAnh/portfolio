# Portfolio Project Instructions

## Project Overview

- Next.js 12.1.5 portfolio, deployed on **Netlify** (`minhbphamportfolio.netlify.app`)
- Tailwind CSS + GSAP animations + SCSS globals + Firebase Firestore
- Repo: `HoanqDucAnh/portfolio`, branch `main` auto-deploys

## Key File Structure

- `constants.ts` — all data (TIMELINE, COMMENTS, MENULINKS, SOCIAL_LINKS, NAVBARITEMS, skills)
- `components/home/` — homepage sections (hero, skills, projects, timeline, comment, collaboration)
- `components/common/` — shared (header, footer, project-tile, button, menu)
- `pages/aboutme/` — passion + startup subpages (orange theme `#f27d0d`)
- `pages/myarticle/` — article pages (redirected to Substack via next.config.js)
- `styles/globals.scss` — global styles, scrollbar, progress bar, text selection

## Critical Gotchas

- **Next.js 12.1.5**: `images.unoptimized` config requires 12.3+. Currently using `loader: 'akamai', path: '/'` for Netlify compatibility
- **Netlify**: No `/_next/image` API — images must resolve to static paths
- **TypeScript**: Use `ReturnType<typeof setTimeout>` not `NodeJS.Timeout` for timer types (CI compatibility)
- **Header hamburger menu**: Do NOT hide on desktop with `md:hidden` — mobile users need it and it breaks the mobile menu
- **ESLint**: Use `<Link>` wrapper for internal `<a>` tags (`@next/next/no-html-link-for-pages`)
- **Hero animation**: Opacity starts at 0.05 with 0.8s GSAP duration

## Brand Colors

- Primary purple: `#9146FF`, light purple: `#BF94FF`
- Purple accents: `border-[#9146FF]/30`, `shadow-[#9146FF]/10`
- Startup/passion pages: orange `#f27d0d`
- Project card hover text: `text-[#BF94FF]` (not yellow)
