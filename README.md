# Wedding Elegant Template

A premium, sophisticated, and timeless wedding website starter built with **Next.js 15+ (App Router)**, **Tailwind CSS v4**, and **shadcn/ui**.

This template is meticulously designed for couples seeking a **classic and regal** aesthetic. It focuses on high-end typography, a clean gold-accented palette, and a formal narrative flow.

## ✨ Key Features

- **🏆 Classic & Elegant Aesthetic** – Refined design system featuring gold (#D4AF37), cream (#FAFAFA), and deep navy (#2C3E50).
- **🖋️ Sophisticated Typography** – Elegant Serif headings (Playfair Display) paired with clean Sans-Serif body text (Inter).
- **🌆 Full Viewport Hero** – A grand first impression with full-height imagery and clear event announcements.
- **🔐 Privacy & Access Gate** – Built-in security to protect private event details with a password/code.
- **🌍 Multilingual Support (i18n)** – Full support for Polish and English content parity via `next-intl`.
- **🗺️ Integrated Logistics** – Dedicated sections for Ceremony and Reception with embedded maps and parking info.
- **💍 Formal RSVP** – A structured, user-friendly form for formal wedding confirmations.
- **⚡ Modern Stack** – Next.js 15+, Tailwind CSS v4, and shadcn/ui for top-tier performance.

## 🚀 Quick Start

### Prerequisites

- Node.js (LTS recommended)
- `npm`

### Install & Run

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## 🛠️ Configuration & Personalization

### 1. Wedding Identity

Edit [`config/site.ts`](file:///c:/Users/olive/OneDrive/Obrazy/Dokumenty/Playground/wedding-elegant-template/config/site.ts) to set your global details:

- `NAME`: Your names (e.g., "Marzena & Wojciech").
- `DESCRIPTION`: Formal SEO and social share message.
- `NAV_ROUTES`: Customize the navigation menu links.
- `FIXED_THEME`: Locked to `'light'` for traditional elegance and accessibility.

### 2. Content & Translations

Manage all text content in the `messages/` folder:

- [`pl.json`](file:///c:/Users/olive/OneDrive/Obrazy/Dokumenty/Playground/wedding-elegant-template/messages/pl.json) – Polish translations (primary).
- [`en.json`](file:///c:/Users/olive/OneDrive/Obrazy/Dokumenty/Playground/wedding-elegant-template/messages/en.json) – English translations.

### 3. Sections & Workflow

The main entry point is [`app/[locale]/page.tsx`](file:///c:/Users/olive/OneDrive/Obrazy/Dokumenty/Playground/wedding-elegant-template/app/[locale]/page.tsx). Customize the following sections:

- **Hero:** Names and "The Big Day" announcement.
- **Our Story:** Documentation of your shared journey.
- **Details:** Logistics for Ceremony and Reception.
- **Practical Info:** Dress code (Black Tie), gift preferences, and guest tips.
- **RSVP:** Interactive confirmation form.

## 📂 Project Structure

- `app/` – Next.js routes, layouts, and metadata.
- `components/` – Custom wedding components.
- `components/ui/` – Foundation UI components (shadcn/ui).
- `config/` – Global site configuration and constants.
- `messages/` – Translation files (PL/EN).
- `styles/globals.css` – Tailwind v4 theme and design tokens.

## 📖 Technical Reference

### Commands

```bash
npm run dev      # run local dev server
npm run build    # create production build
npm run start    # run production server
npm run lint     # run eslint check
npm run format   # run prettier formatting
```

### Adding New UI Components

This project is configured with `components.json`.

```bash
npx shadcn@latest add [component-name]
```

## 📝 Notes

- **Theming:** This template is strictly enforced as Light Mode to maintain its regal, bright aesthetic.
- **Privacy:** Configure the `AccessGate` in the root page to manage event visibility.
