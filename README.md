# Landing Template

A modern landing page starter built with **Next.js (App Router)**, **Tailwind CSS v4**, and **shadcn/ui**.

This template is meant to be a good base for marketing sites: fast iteration in dev, sensible defaults for typography/theme, and an opinionated SEO metadata helper.

## What’s inside

- **Next.js App Router** under `app/`
- **Tailwind CSS v4** with CSS variables + dark mode tokens in `styles/globals.css`
- **shadcn/ui** components pre-configured via `components.json` (style: `radix-nova`)
- **Theme support** using `next-themes` (`components/theme-provider.tsx`)
- **SEO metadata builder** with Open Graph + Twitter + canonical URLs (`lib/metadata.ts`)

## Quick start

### Prerequisites

- Node.js (LTS recommended)
- pnpm

### Install & run

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Commands

```bash
pnpm dev      # run local dev server
pnpm build    # create production build
pnpm start    # run production server
pnpm lint     # run eslint
pnpm format   # prettier (ts/tsx/mdx)
```

## Project structure

- `app/` – Next.js routes/layouts
  - `app/(main)/page.tsx` – current entry page (renders `ComponentExample`)
  - `app/layout.tsx` – global layout, fonts, metadata, theme provider
- `components/` – app components and examples
  - `components/ui/` – shared UI components (shadcn)
- `config/site.ts` – site name/URL/description/social handles + SEO defaults
- `lib/metadata.ts` – `createMetadata()` helper used by `app/layout.tsx`
- `styles/globals.css` – Tailwind v4 entry + design tokens (light/dark)

## Customization

### 1) Replace the demo page

The default route (`app/(main)/page.tsx`) currently renders a component showcase. Swap it for your landing sections (hero, features, pricing, CTA, etc.).

### 2) Update site metadata

Edit `config/site.ts` to set:

- `NAME`, `DESCRIPTION`
- `URL` (used to build absolute canonical and Open Graph image URLs)
- `REPO_URL`, author info, keywords

### 3) Open Graph image

`config/site.ts` defaults to `OG_IMAGE_URL: '/og-image.svg'`.

- Replace `public/og-image.svg`, or
- Change `OG_IMAGE_URL` to your preferred path/URL.

### 4) Theme behavior

Theme is configured in `app/layout.tsx`.

- Set `FIXED_THEME` in `config/site.ts` to `'light' | 'dark' | null`.
  - `null` enables system theme switching.

## Adding UI components (shadcn)

This repo is already configured with `components.json`.

```bash
pnpm shadcn add button
```

If your pnpm setup doesn’t expose the binary, use:

```bash
pnpm dlx shadcn@latest add button
```

Components are generated into `components/ui/` and are meant to be customized.

## Deployment

### Vercel

Deploy as a standard Next.js app.

- Build command: `pnpm build`
- Start command: `pnpm start`

### Self-hosting

```bash
pnpm build
pnpm start
```

## Notes

- The example page includes an external image URL (Unsplash). Replace it for production usage if needed.
- No environment variables are required by default.
