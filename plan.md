# Portfolio Website Implementation Plan

## Project Name
Syeda Mashfee Professional Portfolio

## Plan Governance
- This `plan.md` is the single source of truth for architecture, implementation order, and major feature decisions.
- All major changes must follow this plan.
- If a new major feature is requested, update this file first, then implement.

## 1. Project Goals
- Build a modern, minimal, and professional portfolio website for **Syeda Mashfee**.
- Position the profile for recruiters in banks, fintech, and technology firms.
- Highlight interests and capability areas: digital banking, technology, data analysis, programming, networking, and fintech.
- Ensure high readability, clean hierarchy, and accessible UX.
- Deliver production-ready deployment on Vercel.

## 2. Tech Stack
- **Framework:** Next.js (latest stable)
- **Routing:** App Router
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS
- **Theme:** Light/Dark mode via class strategy
- **Deployment:** Vercel
- **Quality & UX:** SEO metadata, responsive design, accessibility best practices

## 3. Folder Structure
Target project structure:

```text
/
  app/
    layout.tsx
    globals.css
    page.tsx
    about/page.tsx
    skills/page.tsx
    projects/page.tsx
    experience/page.tsx
    contact/page.tsx
  components/
    Navbar.tsx
    Hero.tsx
    ProjectCard.tsx
    SkillCard.tsx
    ContactForm.tsx
    Footer.tsx
    ThemeToggle.tsx
  public/
    profile.jpg
  plan.md
  package.json
  tailwind.config.ts
  postcss.config.js
  tsconfig.json
  next.config.ts (or next.config.js depending on scaffold)
```

## 4. Page Architecture
### Home (`/`)
- Hero section with:
  - Name: Syeda Mashfee
  - Headline: "Aspiring Digital Banking & Technology Professional"
  - Intro paragraph (banking systems, fintech, programming, data analysis)
  - CTAs: View Projects, Download CV, Contact Me
  - Profile photo placeholder (`/public/profile.jpg`)
- Quick highlights section (concise professional summary)

### About (`/about`)
- Narrative around banking + technology intersection
- Include:
  - Banking operations
  - KYC compliance
  - Digital banking systems
  - Database fundamentals
  - Programming knowledge
- Goal statement: contribution to digital banking innovation and fintech solutions

### Skills (`/skills`)
- Categorized skill groups using reusable cards:
  - Banking & Finance
  - Programming
  - Technical Skills

### Projects (`/projects`)
- Reusable project cards with:
  - Title
  - Description
  - Technology tags
  - GitHub placeholder link
- Initial project set:
  - Digital Banking Chatbot Prompt Design
  - Banking Data Analysis with Python
  - Network Configuration Lab (VLAN and IP addressing)
  - SQL Banking Database Queries

### Experience (`/experience`)
- Experience entry: ICT Research and Networking Support
- Responsibilities list:
  - Enterprise network configuration and troubleshooting
  - VLAN and IP addressing setup for secure connectivity
  - ICT research and infrastructure documentation

### Contact (`/contact`)
- Professional contact block:
  - Email
  - LinkedIn placeholder
  - GitHub placeholder
- Accessible contact form (name, email, message)
- Client-side validation and clear labels

## 5. Component Architecture
- `Navbar`
  - Logo/name
  - Nav links to all pages
  - Smooth-scroll support for in-page anchors (where applicable)
  - Mobile menu
  - Theme toggle integration

- `Hero`
  - Main identity content and CTA buttons
  - Profile image placeholder rendering

- `SkillCard`
  - Title + bullet list of skills
  - Reused across categories

- `ProjectCard`
  - Project metadata and action link
  - Consistent card height and responsive layout

- `ContactForm`
  - Accessible form controls
  - Keyboard friendly
  - Basic validation and success/error UI states

- `Footer`
  - Copyright
  - Quick links / social placeholders

- `ThemeToggle`
  - Dark mode class toggle
  - Persist preference in `localStorage`
  - Respect system preference on first load

## 6. Styling Strategy
- Tailwind-first design with custom utility combinations.
- Visual direction:
  - **Primary:** Navy blue
  - **Base:** White
  - **Accents:** Light gray
- Typography:
  - Professional sans-serif (e.g., Geist/Inter-like modern sans stack from Next setup)
  - Strong hierarchy for headings and readable paragraph widths
- Layout:
  - Max-width container, generous spacing, clean card grids
- Motion:
  - Minimal transitions only (hover/focus states, no flashy animation)
- Responsive breakpoints:
  - Mobile-first; tested at mobile, tablet, desktop sizes
- Accessibility:
  - AA-friendly contrast
  - Focus-visible states
  - Semantic landmarks (`header`, `main`, `footer`, `nav`)
  - Form labels and ARIA where needed

## 7. SEO & Metadata Strategy
- Use App Router metadata in `layout.tsx` and page-level metadata where useful.
- Include:
  - Title templates
  - Description
  - Open Graph basic fields
  - `robots` index/follow
- Ensure semantic headings and meaningful link text.

## 8. Deployment Plan (Vercel)
- Keep project compatible with default Next.js Vercel build pipeline.
- Validate production build locally (`npm run build`).
- Ensure environment-variable-free static portfolio baseline.
- Deploy via Vercel import from repository.
- Post-deploy checks:
  - Routing and page load
  - Mobile responsiveness
  - Dark mode persistence
  - Metadata presence

## 9. Implementation Sequence (Strict Workflow)
1. **Create and finalize `plan.md`** (this file).
2. **Review architecture against plan** before implementation.
3. **Scaffold Next.js + TypeScript + Tailwind** with App Router.
4. **Create page routes** for Home, About, Skills, Projects, Experience, Contact.
5. **Build reusable components** (`Navbar`, `Hero`, `SkillCard`, `ProjectCard`, `ContactForm`, `Footer`, `ThemeToggle`).
6. **Implement shared layout** (global nav/footer, container, metadata, theme support).
7. **Populate all pages with professional content** per requirements.
8. **Apply responsive and accessibility refinements**.
9. **Add smooth scrolling and dark mode toggle**.
10. **Run quality checks** (lint/build/manual responsive checks).
11. **Prepare deployment readiness** for Vercel.

## 10. Step-by-Step Implementation Checklist
- [x] Write complete implementation plan to `plan.md`.
- [x] Initialize Next.js latest project with TypeScript + Tailwind + App Router.
- [x] Configure global styles and base design tokens for navy/white/gray theme.
- [x] Implement `layout.tsx` with metadata, navbar, footer, and theme setup.
- [x] Create `Navbar` with responsive menu and `ThemeToggle`.
- [x] Create `Hero` component and integrate in Home page.
- [x] Create About page content aligned to banking-tech-fintech narrative.
- [x] Create `SkillCard` component and Skills page categorized sections.
- [x] Create `ProjectCard` component and Projects page grid.
- [x] Create Experience page with ICT Research and Networking Support entry.
- [x] Create Contact page with contact info and reusable `ContactForm`.
- [x] Add `public/profile.jpg` placeholder and image handling.
- [x] Add CTA actions (projects anchor/page, contact page, CV placeholder link).
- [x] Add smooth scrolling behavior.
- [x] Add accessibility checks (labels, focus, contrast, landmarks).
- [x] Verify responsive behavior across mobile/tablet/desktop.
- [x] Run `npm run lint` and `npm run build` successfully.
- [ ] Final deployment checklist for Vercel.

## 11. Risks and Mitigations
- Risk: Existing non-Next files in current root may conflict with expected structure.
  - Mitigation: Scaffold carefully and keep portfolio files isolated and explicit.
- Risk: Theme mismatch with requested professional look.
  - Mitigation: Keep restrained palette and avoid decorative effects.
- Risk: Accessibility regressions during styling.
  - Mitigation: Verify keyboard/focus states and semantic markup during implementation.

## 12. Definition of Done
- All required pages and reusable components are implemented.
- Content matches requested professional profile and categories.
- Styling is minimal, clean, modern, and recruiter-friendly.
- Dark mode toggle, smooth scrolling, SEO metadata, responsiveness, and accessibility are included.
- Project builds successfully and is ready for Vercel deployment.
