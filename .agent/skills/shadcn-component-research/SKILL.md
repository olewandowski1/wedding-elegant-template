---
name: shadcn-component-research
description: Maps landing page requirements, visual identity, motion, and SEO goals to shadcn/ui components and implementation patterns using Next.js and Tailwind.
---

# Shadcn Landing Page Component Research Skill

This skill translates structured landing page requirements into concrete
component choices, layout patterns, motion strategies, and SEO-friendly
structures.

## When to use this skill

- Requirements and vibe are defined
- Component-level planning is needed
- SEO and theme consistency matter

## Assumed tech stack

- Next.js (App Router)
- TypeScript
- shadcn/ui
- Tailwind CSS
- Motion: **Framer Motion or Tailwind animations**
- `next-themes`

## How to use this skill

1. Read the output from **shadcn-requirements**
2. Map each section to:
   - shadcn/ui components
   - Semantic HTML structure
   - Motion approach
3. Use the Shadcn MCP server to verify components and install commands

## Required output format

### Global Setup

- Semantic layout structure (`header`, `main`, `section`, `footer`)
- Theme token strategy (shadcn variables)
- Light/dark mode handling with `next-themes`
- Global SEO considerations (metadata, headings)

### Typography & Content Mapping

- Heading hierarchy per section
- Text density recommendations
- Responsive typography strategy

### Section-by-Section Mapping

For each section:

**shadcn/ui components**
- Component names
- Purpose in the section

**Layout & composition**
- Container strategy
- Grid / flex usage
- Reusability notes

**Motion & interaction**
- Animation method (Framer Motion or Tailwind)
- Scope and intensity
- Reduced-motion handling

**SEO notes**
- Heading level usage
- Content relevance
- Crawl-friendly structure

**Installation**
- Required `shadcn/ui` CLI commands

## Rules & constraints

- Prefer semantic HTML over div-only layouts
- Motion must not block content rendering
- Avoid animations that harm CLS or LCP
- Call out custom components explicitly

## Handoff

End with an **Implementation Plan Summary**:
- Theme readiness
- SEO readiness
- Section complexity

This output is intended for **shadcn-ui-builder**.