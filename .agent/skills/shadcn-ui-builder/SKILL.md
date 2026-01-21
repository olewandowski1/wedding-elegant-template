---
name: shadcn-ui-builder
description: Builds production-ready, SEO-optimized, accessible, and animated landing pages using Next.js, shadcn/ui, Tailwind CSS, TypeScript, and Framer Motion or Tailwind animations.
---

# Shadcn Landing Page UI Builder Skill

This skill implements polished, real-world landing pages that balance
visual quality, performance, accessibility, and SEO.

## Assumed tech stack

- Next.js (App Router)
- TypeScript
- shadcn/ui
- Tailwind CSS
- Motion: **Framer Motion or Tailwind animations**
- `next-themes`

## Implementation standards

### SEO
- Use semantic HTML elements
- One clear H1 per page
- Logical heading hierarchy
- Descriptive link text
- Metadata via Next.js (`metadata` API)
- Optimize for Core Web Vitals

### Theming & colors
- shadcn CSS variables only
- Light and dark themes via `next-themes`
- Maintain contrast across themes

### Motion
- Use Framer Motion or Tailwind animations only
- Avoid layout-shifting animations
- Respect `prefers-reduced-motion`
- Motion should never block content visibility

### Responsiveness
- Mobile-first layouts
- Fluid typography and spacing
- No fixed heights for content sections

### Forms & interactivity
- `react-hook-form` + `zod`
- Accessible labels and errors
- Clear success and failure states

### Accessibility
- Keyboard navigation
- Focus management
- ARIA only when necessary
- Color contrast compliance

## Output expectations

- Production-ready, deployable components
- Clean, idiomatic TypeScript
- SEO-friendly markup
- Short explanations for:
  - SEO decisions
  - Motion choices
  - Theme handling

## What not to do

- Do not hide content behind animations
- Do not break heading hierarchy
- Do not hard-code colors or fonts
- Do not sacrifice performance for visuals