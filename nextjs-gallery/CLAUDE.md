# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Refactoring UI Style Gallery** - a Next.js portfolio showcasing 9 different design styles, all applying the same Refactoring UI principles but with different visual expressions (colors, typography, border-radius, spacing, tone).

**Live URL**: https://nextjs-gallery-sigma.vercel.app

## Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- styled-jsx for component-scoped styles

### Page Structure

```
src/app/
├── page.tsx           # Gallery home - 9 style cards linking to each style
├── learn/page.tsx     # Design principles guide with 9 chapters + AI prompt generator
├── balanced/page.tsx  # Style 1: Cyan palette, SaaS dashboard
├── playful/page.tsx   # Style 2: Purple/pink pastels, consumer SaaS
├── professional/page.tsx  # Style 3: Navy blue, enterprise
├── elegant/page.tsx   # Style 4: Gold/dark navy, luxury
├── bold/page.tsx      # Style 5: Orange, startup energy
├── minimal/page.tsx   # Style 6: Black/white, agency portfolio
├── dark/page.tsx      # Style 7: Dark mode, developer tools
├── organic/page.tsx   # Style 8: Green, eco/wellness
└── gradient/page.tsx  # Style 9: Blue/cyan gradients, fintech/AI
```

### Style Page Pattern

Each style page is a self-contained landing page with:
- **styled-jsx global styles**: CSS custom properties (design tokens) defined inline
- **Sections**: Hero, Features, Pricing, Testimonials, CTA, Footer
- **Midjourney images**: Located in `/public/images/{style-name}/` (hero.png, feature.png, team.png, background.png)

All styles follow Refactoring UI principles but vary in:
- Color palette (050-900 scale)
- Border radius (4px professional → 24px+ playful)
- Typography (Inter, serif fonts, monospace)
- Spacing scale
- Shadow depth
- Language tone (formal vs casual)

### Key Files

- `MIDJOURNEY_PROMPTS.md` - AI image prompts for each style's visual assets
- `src/app/learn/page.tsx` - Contains copyable AI prompt for design refinement (Chapter 09)

## Deployment

- **Vercel project**: `nextjs-gallery` (not `refactoring-ui-practice`)
- Deploy with: `vercel --prod` from the `nextjs-gallery` directory
- The repo root contains multiple projects; this Next.js app is in `nextjs-gallery/` subfolder
