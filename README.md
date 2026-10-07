<div align="center">

# 🖨️ Printing Shop

### A vibrant landing page for a commercial printing business — services, products, and a one-tap quote.

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-printing--shop--delta.vercel.app-ec4899?style=for-the-badge)](https://printing-shop-delta.vercel.app)

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## Overview

**Printing Shop** is a marketing website for a commercial / offset printing business. It walks a visitor from an eye-catching hero through services, a product catalogue (business cards, brochures, banners, packaging, stationery, catalogues), a work gallery, and a clear process — then closes with testimonials and a contact section. A WhatsApp helper keeps enquiries one tap away.

## ✨ Highlights

- 🎯 **Hero + scrolling marquee** that immediately communicates the brand
- 🧾 **Services & Products** — business cards, brochures, banners, packaging, stationery, catalogues
- 🖼️ **Gallery** of printed work and a **step-by-step Process** section
- 💬 **Testimonials**, **Why Choose Us**, and a **Contact** block
- 📲 **Floating actions + WhatsApp** (`whatsapp.ts`) for instant quotes
- 📐 **Responsive**, imagery-rich, conversion-focused layout

## 🧱 Tech Stack

- **React 18.3 + TypeScript** on **Vite**
- **Tailwind-style utility CSS** with MUI + Radix UI primitives

## 🚀 Getting Started

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # production build → dist/
```

## 🚢 Deploy to Vercel

Framework preset **Vite** · build `npm run build` · output `dist/`.

## 🗂️ Structure

```
src/app/
├── components/   # Navigation, Hero, ScrollingMarquee, Services, Products,
│                 # Gallery, WhyChooseUs, Process, Testimonials, Contact,
│                 # Footer, FloatingActions
├── whatsapp.ts   # WhatsApp enquiry helper
└── App.tsx       # composes the landing page
```

---

<div align="center">

Built by **[Sayak Satpathi](https://github.com/sayaksatpathi)** · [Live Demo](https://printing-shop-delta.vercel.app)

</div>
