# Wedding Elegant Template

A sophisticated and functional wedding website template built with **Next.js (App Router)**, **Tailwind CSS v4**, and **shadcn/ui**.

This template is meticulously designed for high-quality wedding websites, featuring a **Classic & Elegant** aesthetic with a focus on refined whitespace and gold accents.

## 💍 Marzena & Wojciech – June 20, 2028

This repository contains the "Marzena & Wojciech" wedding website, designed to provide guests with all ceremony details, their journey, and a seamless RSVP experience.

## ✨ Features

- **Next.js App Router** – Modern routing with server-side rendering and performance optimizations.
- **Tailwind CSS v4** – Leveraging the latest CSS engine for high-performance styling and native variables.
- **shadcn/ui** – Polished, accessible, and customizable UI components.
- **Access Gate** – Security feature to protect private event details with a password/code.
- **Multilingual Support (i18n)** – Built-in support for multiple languages (currently Polish and English).
- **Smooth Animations** – Subtle and elegant motion using **Framer Motion**.
- **Responsive Design** – Optimized for all devices, from desktop to mobile.
- **Classic Aesthetic** – Strictly enforced light theme with gold (#D4AF37) and navy (#2C3E50) accents.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://motion.dev/)
- **State/Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)

## 🛠️ Quick Start

### Prerequisites

- Node.js (LTS recommended)
- pnpm (recommended) or npm/yarn

### Install & Run

```bash
pnpm install
pnpm dev
```

The site will be available at `http://localhost:3000`.

## ⚙️ Configuration

### 1) Personalize Site Metadata

Edit `config/site.ts` to set the event details:

- `NAME`: The couple's names.
- `DESCRIPTION`: SEO-friendly meta description.
- `NAV_ROUTES`: Navigation links for the one-page scroll.

### 2) Content & Translations

Manage all text content in the `messages/` folder:

- `pl.json`: Polish translations (primary).
- `en.json`: English translations.

### 3) Visual Assets

- Replace images in `public/images/`.
- Update the favicons and Open Graph images in the `app/` directory (`icon.tsx`, `opengraph-image.tsx`).

### 4) Access Control

The `AccessGate` component in `app/(main)/page.tsx` handles entrance security. Configure your access logic or remove it if a public site is desired.

## 📂 Project Structure

- `app/` – Next.js routes, layouts, and metadata.
- `components/` – React components (Hero, Story, Details, RSVP, etc.).
  - `components/ui/` – Base UI elements from shadcn/ui.
- `config/` – Global site configuration and constants.
- `i18n/` – Internationalization setup.
- `lib/` – Utility functions and shared logic.
- `messages/` – Translation dictionaries (JSON).
- `public/` – Static assets (images, fonts).
- `styles/` – Global CSS and Tailwind configuration.

## 📝 Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new).

```bash
# Example build command
pnpm build
```

---

_Made with ❤️ for Marzena & Wojciech._

## 📝 Notes

- The example page includes an external image URL (Unsplash). Replace it for production usage if needed.
- No environment variables are required by default.
