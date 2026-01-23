---
name: shadcn-requirements
description: Transforms high-level landing page ideas into structured, SEO-aware, performance-conscious, implementation-ready requirements with clear visual identity and theme intent.
---

# Shadcn Landing Page Requirements Skill

This skill converts loosely defined landing page ideas into a structured,
production-oriented requirements document optimized for high-quality landing
websites.

This is a **planning-only skill**.

## Output Contract (MANDATORY)

- The output of this skill MUST be a file named: `REQUIREMENTS.md`
- `REQUIREMENTS.md` is the **single source of truth** for:
- Visual identity
- Structure and layout intent
- Theme and accessibility decisions
- SEO and performance constraints

- **No further skills may proceed**
until `REQUIREMENTS.md` is completed and approved.

- This skill MUST stop after producing `REQUIREMENTS.md`.

## When to Use This Skill

- The user requests a custom landing page
- Visual direction, branding, or SEO requirements are unclear
- Alignment is required before research or implementation

## Assumed Tech Stack

- Next.js (App Router)
- TypeScript
- shadcn/ui
- Tailwind CSS
- Framer Motion
- SEO via Next.js metadata APIs

## REQUIREMENTS.md Structure

The `REQUIREMENTS.md` file MUST include the following sections:

### 1. Project Context
- Landing page type
- Target audience
- Primary business goal

### 2. Website Vibe & Visual Identity
- Overall mood
- 3–5 brand adjectives
- Inspiration (explicit or inferred)

### 3. Color System
- Primary brand color
- Secondary/accent colors
- Neutral/background strategy
- Contrast considerations

### 4. Typography
- Heading style and tone
- Body text style and readability
- Emphasis patterns

### 5. Theme Strategy
- Define a **preferred theme** (light OR dark)
- Explicitly state whether theme switching is:
- Enabled, or
- Disabled
- Theme choice must be intentional and documented

### 6. Page Structure & Narrative Flow
- Section order
- Content hierarchy for SEO
- Persistent elements (navigation, CTA)

### 7. Hero Section (MANDATORY)
- First section on the page
- Full viewport height (100vh)
- Contains the primary H1
- Clear value proposition

### 8. Content & Data
- Static vs dynamic content
- Forms and interactions
- Validation expectations

### 9. SEO Considerations
- Target keywords
- Heading hierarchy
- Content depth expectations

### 10. Performance & Constraints (MANDATORY)
- Performance is a first-class feature
- Avoid heavy media in the hero section
- Visual decisions must not compromise load time or layout stability

### 11. Responsiveness & Accessibility
- Mobile-first priorities
- Keyboard navigation
- Contrast and font scaling
- WCAG 2.1 AA baseline expectations

### 12. Assumptions & Open Questions
- Missing assets or copy
- Explicit assumptions
- Items requiring confirmation

## Rules & Constraints

- Do NOT reference specific UI components
- Do NOT write code
- Do NOT assume implementation details
- Focus on intent, hierarchy, constraints, and decisions

## Handoff Rule

- `REQUIREMENTS.md` is the **only valid input** for `shadcn-component-research`
- Any ambiguity must be resolved at this stage
- Later skills MUST NOT reinterpret intent