---
name: shadcn-component-research
description: Maps approved landing page requirements to shadcn/ui components and external landing/marketing block registries, producing a concrete, performance-aware implementation plan.
---

# Shadcn Landing Page Component Research Skill

This skill translates an approved **`REQUIREMENTS.md`** document into a concrete,
implementation-ready **implementation plan**.

It MUST be invoked **after `shadcn-requirements`** and MUST use
`REQUIREMENTS.md` as its **only source of truth**.

This skill does NOT implement UI or write production code.

External landing/marketing registries are treated as first-class sources.

---

## Invocation Rule (MANDATORY)

- This skill MUST be invoked only after **`shadcn-requirements`**
- The input to this skill MUST be: `REQUIREMENTS.md`.
- No assumptions, reinterpretations, or new requirements may be introduced
- Any ambiguity found in `REQUIREMENTS.md` MUST be surfaced, not guessed

---

## Output Contract (MANDATORY)

- The output of this skill MUST be a file named: `IMPLEMENTATION_PLAN.md`
- `IMPLEMENTATION-PLAN.md` is the **single source of truth** for:
- Component and block selection
- Section structure and composition
- Asset requirements (images, icons, media)
- Motion and SEO intent

- This skill MUST stop after producing `IMPLEMENTATION-PLAN.md`

- No UI implementation may begin until this file exists

---

## When to Use This Skill

- `REQUIREMENTS.md` has been completed and approved
- Proven landing page patterns are preferred
- Performance, SEO, and accessibility must be preserved

---

## Assumed Tech Stack

- Next.js (App Router)
- TypeScript
- shadcn/ui
- Tailwind CSS
- Framer Motion
- SEO via Next.js metadata APIs

---

## Component Sources

The researcher MAY use:

- shadcn/ui components
- External landing / marketing block registries (e.g. Tailark)

External blocks may be installed and adapted as needed.

---

## Hero Section Rule (MANDATORY)

- The Hero section MUST:
- Be the first visible section
- Occupy full viewport height (100vh)
- Contain the primary H1
- Clearly communicate the core value proposition

---

## Performance Considerations (MANDATORY)

- Prefer lightweight, content-first blocks
- Avoid heavy background media
- Avoid excessive DOM complexity
- Hero content must render immediately
- Media must not block LCP

---

## Theme Alignment

- All selected blocks must align with the **preferred theme**
- Blocks must not rely on automatic or system theme switching
- Any assumptions about dual-theme behavior MUST be flagged

---

## IMPLEMENTATION-PLAN.md Structure

The `IMPLEMENTATION-PLAN.md` file MUST include the following sections:

---

### 1. Global Architecture Notes

- Semantic HTML structure (`header`, `main`, `section`, `footer`)
- SEO considerations
- Theme alignment
- Motion usage strategy

---

### 2. Global Asset Overview

- Total number of images
- Image types (photography, illustration, decorative)
- Aspect ratio guidance
- Priority images (above-the-fold)

---

### 3. Section-by-Section Plan

For EACH section, include:

---

#### Section: <Section Name>

**Purpose**
- What this section communicates

**Chosen Source**
- shadcn/ui
- External registry (name)

**Components / Blocks**
- Component or block names
- Installation notes if applicable

**Layout & Composition**
- Grid / flex strategy
- Content alignment
- Responsive behavior

**Assets Required**
- Number of images
- Image type (photo / illustration / decorative)
- Placement (e.g. right-aligned hero image)
- Content guidance (e.g. “green floral imagery”, “event photography”)

**Motion & Interaction**
- Framer Motion usage
- Animation intent and scope

**SEO Notes**
- Heading level usage
- Content placement and hierarchy

---

### 4. Open Questions & Risks

- Missing assets
- Unclear content
- Performance or accessibility risks

---

## Rules & Constraints

- Do NOT write production UI code
- Do NOT reference internal file paths
- Do NOT assume implementation details
- All final UI components must fit inside `@/components`
- All recommendations must respect performance and accessibility constraints

---

## Handoff Rule

- `IMPLEMENTATION-PLAN.md` is the **only valid input** for `shadcn-ui-builder`
- Builders MUST follow this plan exactly
- Deviations MUST be explicitly justified