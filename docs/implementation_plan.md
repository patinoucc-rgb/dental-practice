# Dental Clinic Landing Page: Next.js Architecture & Implementation Roadmap

**Stitch Project ID:** 13823927696021760305  
**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS  
**Design System:** Canvas (White/Soft Slate), Text (Deep Navy Slate), Accent (Trust Cyan/Sky Blue)

---

## User Review Required

> [!IMPORTANT]
> Please review the color tokens and component structure. Once approved, we can begin creating the Next.js boilerplate and setting up the Git branches as defined in Phase 1.

## Proposed Changes

---

## Phase 1: Foundation & Design System Initialization
**Git Branch:** `feature/01-nextjs-foundations`

### [Core Config & Globals]

#### [MODIFY] tailwind.config.ts
- Extend the theme colors. Map canvas backgrounds (`#FFFFFF`, `#F8FAFC`), text structure (`#0F172A`, `#1E293B`), and accent/action intents (`#0EA5E9`).

#### [MODIFY] app/layout.tsx
- Import and configure `Inter` or `Geist` via `next/font/google` to prevent CLS. Apply as global font family.

#### [MODIFY] app/globals.css
- Reset global styles, implement smooth scrolling (`scroll-behavior: smooth`), and set up base background/text colors.

#### [MODIFY] app/page.tsx
- Sweep clean of default Vercel boilerplate. Set up as Server Component.

---

## Phase 2: Navigation & Hero Split Grid
**Git Branch:** `feature/02-navbar-hero-components`

### [Header & Hero Components]

#### [NEW] components/Navbar.tsx
- Implement a responsive sticky navigation bar (`use client`). State for mobile hamburger menu toggle. Booking CTA button uses the accent color (`#0EA5E9`).

#### [NEW] components/Hero.tsx
- Create a split grid layout (1fr 1fr on desktop).
  - *Left Column:* High-contrast value proposition, trust signals, and primary booking CTA.
  - *Right Column:* Custom masonry image layout using `next/image` with proper `priority` flags for LCP optimization.

---

## Phase 3: Trust Badges & Validation Stream
**Git Branch:** `feature/03-trust-pill-stream`

### [Trust Signals]

#### [NEW] components/TrustPillStream.tsx
- A horizontal scrolling or wrapped flex layout displaying clinic validation rules (e.g., "500+ Happy Smiles", "Top Rated 2023", "Board Certified").
- Use pill-shaped badges (`rounded-full`, `px-4`, `py-2`) with soft slate backgrounds (`#F8FAFC`) and deep navy text (`#1E293B`). Server Component.

---

## Phase 4: Treatment Explorer Matrix
**Git Branch:** `feature/04-treatment-explorer`

### [Interactive Treatments]

#### [NEW] components/TreatmentExplorer.tsx
- Tabbed interface (`use client`) using React `useState` to filter treatment categories (e.g., General, Cosmetic, Orthodontics, Implants).
- Responsive CSS Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) for displaying treatment cards based on the active tab.

---

## Phase 5: Asymmetric Patient Journey Workflow
**Git Branch:** `feature/05-patient-journey`

### [Journey Steps]

#### [NEW] components/PatientJourney.tsx
- A 4-step vertical workflow detailing the patient experience (e.g., Book, Consult, Treat, Smile). Server Component.
- Asymmetric stacked vertical cards with alternate image/text positioning or staggered margins (`md:ml-12` on even cards).

---

## Phase 6: Testimonials & Clinical Impact Metrics
**Git Branch:** `feature/06-testimonials-metrics`

### [Social Proof]

#### [NEW] components/Testimonials.tsx
- Editorial-style quote blocks with patient avatars (`next/image`).

#### [NEW] components/ImpactMetrics.tsx
- Large, semantic stat elements (e.g., "10+ Years Experience", "99% Success Rate"). Use `<dl>`, `<dt>`, `<dd>` tags.
- Deep Navy Slate (`#0F172A`) backgrounds with white text.

---

## Phase 7: Educational SEO Resource Grid
**Git Branch:** `feature/07-seo-blog-grid`

### [Content & SEO]

#### [NEW] components/BlogSection.tsx
- A 4-column framework (on large screens) displaying educational resources or blog snippets. Layout: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
- Card components with hover states (`hover:-translate-y-1`, `hover:shadow-lg`). Server Component.

---

## Phase 8: Footer, Polish, & Accessibility Audit
**Git Branch:** `feature/08-footer-a11y-audit`

### [Footer & Wrap Up]

#### [NEW] components/ServiceHighlight.tsx
- Accent-inverted block utilizing the Trust Cyan background with white text as a final primary CTA before the footer.

#### [NEW] components/Footer.tsx
- Complete semantic `<footer>` with grid layout containing clinic hours, location maps/links, contact info, and legal links.

---

## Verification Plan

### Automated Tests
- Run Next.js build (`npm run build`) to verify all components compile successfully.
- Run Lighthouse CI for Accessibility, SEO, and Performance metrics.

### Manual Verification
- Visual inspection of the focus rings (`:focus-visible`) across all interactive elements.
- Verify color contrast ratios for the text against Canvas, Navy Slate, and Trust Cyan backgrounds.
- Validate the mobile responsiveness of the `Navbar` and `TreatmentExplorer` tabs.
