# 🌿 Tashin Mahmud Khan // Portfolio Architecture

[![Next.js](https://img.shields.io/badge/Next.js-15.5-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind--CSS-3.4-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer--Motion-12-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Supabase](https://img.shields.io/badge/Supabase-Database-3FCF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

A premium, production-grade, highly-interactive portfolio and content management architecture highlighting expertise in Machine Learning, full-stack systems integration, and autonomous AI agents. Built with advanced modern web physics, high-performance canvas systems, and dynamic database integrations to reflect a premium 2026 developer standard.

* **Production Live Site**: [https://tashin-mahmud.vercel.app](https://tashin-mahmud.vercel.app)
* **Interactive Admin Dashboard**: [https://tashin-mahmud.vercel.app/admin/login](https://tashin-mahmud.vercel.app/admin/login)

---

## 🏗️ System Architecture & Data Flow

The architecture is built on Next.js 15 App Router, combining Server-Side Rendering (SSR) for initial load efficiency with incremental revalidation, backed by Supabase for real-time portfolio management.

```
                      [ HTTPS Traffic ]
                             │
                  [ Vercel Edge Network ]
                             │
              ┌──────────────┴──────────────┐
              ▼                             ▼
    [ Next.js Frontend ]           [ Supabase Backend ]
       App Router (SSR)          PostgreSQL / RLS Enabled
     • Client / Server Actions   • Projects & Tech Loadout
     • Dynamic Resend Contact    • Experience & Bio Config
```

### Dynamic Data Strategy
* **On-Demand Hydration**: Server components fetch live portfolio configurations from Supabase with a `revalidate = 60` threshold, ensuring database mutations reflect within 60 seconds.
* **Fault-Tolerant Fallbacks**: If the database is empty or connection-throttled, the system seamlessly cascades back to static configurations loaded from `src/data/portfolio.ts` to guarantee 100% uptime.
* **Granular Security**: Row-Level Security (RLS) policies enable public-read access to content tables while locking create, update, and delete actions strictly behind Supabase authenticated user sessions.

---

## ⚡ Tech Stack & Core Libraries

* **Core Framework**: [Next.js 15](https://nextjs.org/) (App Router & Server Actions)
* **State & Components**: [React 19](https://react.dev/) (Concurrent rendering, Suspense, and hooks)
* **Styling & Layout**: Tailwind CSS with custom utility components and animations
* **Physics & Motions**: [Framer Motion 12](https://www.framer.com/motion/) (Snappy layout transitions and 3D space transforms)
* **Database & Auth**: [Supabase Suite](https://supabase.com/) (`@supabase/ssr` & `@supabase/supabase-js`)
* **Dynamic PDF Generation**: [React-PDF Renderer](https://react-pdf.org/) (`@react-pdf/renderer`)
* **Email System**: [Resend](https://resend.com/) (Asynchronous routing of inquiries)
* **Icons & Assets**: Lucide React

---

## 🌟 Key Interactive Components

### 1. 3D Coverflow Execution Canvas (`CoverflowProjects.tsx`)
A bespoke, 60fps 3D carousel powered entirely by Framer Motion's mathematical engines. It dynamically calculates scaling, distancing, Y-axis perspective rotation, and Z-index depth for a flawless Apple-style coverflow architecture with an interactive hover-pause timeout system.

### 2. Holographic Academic Accordion (`AcademicAccordion.tsx`)
An ultra-fluid Flex-Basis expanding carousel. Rather than standard layout transitions, it utilizes mathematically intensive `<motion.div layout>` bounding boxes to instantly re-calculate and redraw screen-width shares seamlessly on interaction.

### 3. Native Background Particle Mesh (`ParticleNetwork.tsx`)
A completely custom, high-performance HTML5 `<canvas>` rendering engine. It generates an infinite geometric node network running behind the entire DOM `z-0` layer, mapping node-distance thresholds, and calculating intense connection beams locally to the `useRef` tracked user cursor for an "AI/Neural" atmosphere.

### 4. Interactive Hero Terminal (`HeroTerminal.tsx`)
A fully-functional, auto-scrolling terminal simulation mimicking an asynchronous FastAPI logging terminal, directly wired to accept predefined user text inputs and execute rendering logic dynamically.

### 5. Unified Admin Control Center (`/admin/*`)
An automated admin panel where the site owner can control general bios, contact endpoints, experience bullet points, the interactive tech loadout, and portfolio project arrays without redeploying code.

### 6. Dynamic CV Compiler (`CVGenerator.tsx`)
An on-the-fly resume compiling module built with `@react-pdf/renderer` that fetches current experiences, projects, and bio details directly from the database and compiles a printable, single-page professional PDF.

---

## 🚀 Local Development Quick Start

### 1. Prerequisites
Ensure you have the following installed locally:
* Node.js (v18.0.0 or higher)
* npm (v9.0.0 or higher)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/TashinMahmud/portfolio_website_Tashin.git
cd portfolio_website_Tashin

# Install dependencies
npm install
```

### 3. Environment Configuration
Create a `.env.local` file in the root directory and populate it with your environment keys:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Email Contact Gateway
RESEND_API_KEY=re_123456789...
```

### 4. Local Execution
Run the development environment locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your local instance.

---

## 💾 Database Schema Setup

To initialize or migrate the database tables on your Supabase instance, run the entire contents of [supabase_schema.sql](file:///c:/Users/Tashin%20Mahmud%20Khan/Desktop/Tashin%20Mahmud%20Khan/Projects/portfolio_website_Tashin/supabase_schema.sql) in your **Supabase Dashboard → SQL Editor**. 

This script:
1. Creates the `site_config`, `projects`, `skills`, and `experience` schemas.
2. Seeds default values matching the static file fallbacks.
3. Automatically configures appropriate Row-Level Security (RLS) select and insert policies.

---

*Designed & Engineered by Tashin Mahmud Khan.*
