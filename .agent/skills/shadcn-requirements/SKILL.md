---
name: shadcn-requirements
description: Transforms high-level landing page ideas into structured, SEO-aware, implementation-ready requirements including visual identity, theming, and motion, using Next.js and shadcn/ui.
---

# Shadcn Landing Page Requirements Skill

This skill converts loosely defined landing page ideas into a structured,
SEO-conscious specification optimized for modern, high-quality landing pages.

## When to use this skill

- The user wants a custom landing page (business, event, personal)
- Visual direction, branding, or SEO requirements are implicit or unclear
- A clear plan is needed before component research and implementation

## Assumed tech stack

- Next.js (App Router)
- TypeScript
- shadcn/ui
- Tailwind CSS
- Motion: **Framer Motion or Tailwind animations**
- `next-themes` for light/dark mode

## What this skill produces

Always output a **Landing Page Specification** with the following sections:

### 1. Project Context
- Landing page type (business, event, wedding, personal, portfolio)
- Target audience
- Primary goal (conversion, RSVP, contact, booking)

### 2. Website Vibe & Visual Identity
- Overall mood (elegant, playful, corporate, romantic, bold, etc.)
- 3–5 brand adjectives
- Inferred inspiration (if not provided)

### 3. Color System
- Primary brand color
- Secondary and accent colors
- Neutral/background strategy
- Contrast requirements for accessibility
- Light vs dark mode intent

### 4. Typography
- Heading font style and tone
- Body font style and readability goals
- Emphasis patterns (weights, spacing, casing)

### 5. Theme & Mode Strategy
- Default theme (light or dark)
- Dark mode behavior and parity
- Theme switching via `next-themes`
- System preference handling

### 6. Page Structure & Narrative Flow
- Section order and storytelling logic
- Content hierarchy for SEO
- Persistent elements (nav, CTA, footer)

### 7. Section Breakdown
For each section:
- Section name
- Purpose and message
- Key interactions
- Motion intent (none / subtle / expressive)

### 8. Content & Data
- Static vs dynamic content
- Forms (contact, RSVP, booking)
- Validation and submission expectations

### 9. SEO Considerations
- Primary and secondary keywords
- Heading hierarchy (H1–H6)
- Content depth expectations
- Internal linking opportunities

### 10. Responsiveness & Accessibility
- Mobile-first priorities
- Keyboard navigation
- Color contrast and readable font sizes

### 11. Assumptions & Open Questions
- Missing brand assets or copy
- Sensible defaults

## Output rules

- Do NOT reference specific shadcn/ui components
- Do NOT write code
- Emphasize clarity, hierarchy, and intent
- Keep output structured and scannable

This output is intended for **shadcn-component-research**.