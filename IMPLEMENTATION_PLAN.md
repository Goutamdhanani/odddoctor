# Implementation Plan — Premium Glassmorphism Dental App (Mobile)

**Target:** Mobile-only web app (React + TypeScript + Tailwind CSS v4 + Framer Motion)  
**Location:** `e:\project\restro1\odddoc`  
**Quality Bar:** Award-winning tier — Apple Design Award / Awwwards SOTD / Linear / Nothing / Arc Browser level of polish  
**Data Strategy:** 100% rich mock data — zero backend dependencies required  

---

## Phase 0 — Audit & Setup
1. Inventory target screens and route structure in `docs/screen-inventory.md`.
2. Viewport target: **390×844 (iPhone 14/15 base)**, safe-area aware, responsive 360px–428px width range.
3. Confirm core stack dependencies (`framer-motion`, `@studio-freight/lenis`, `lucide-react`, `tailwindcss`, `@tailwindcss/vite`).
4. Set up `src/design/tokens.css` and `src/design/tokens.ts` as the single source of truth for colors, shadows, radii, blurs, and spring motions.

---

## Phase 0.5 — Mock Data & Flat Routing Strategy
Create `src/mock/` with zero network latency:
- `mock/patient.ts`: Logged-in patient profile (Sarah Jenkins), oral health score (88%), insurance badge (`MetLife Dental Premier`).
- `mock/dentists.ts`: 5 specialist dentist profiles (Dr. Elena Vance, Dr. Marcus Thorne, Dr. Sophia Chen, etc.) with ratings, specialties, and open calendar slots.
- `mock/appointments.ts`: Upcoming and past appointments with status pills (`confirmed`, `completed`, `rescheduled`).
- `mock/treatmentPlan.ts`: Multi-stage care plan (Aligners stage 3/5, hygiene cleaning, whitening) with progress indicators & before/after milestone notes.
- `mock/messages.ts`: Chat thread with Dr. Vance + interactive auto-reply engine.

---

## Phase 1 — Design Tokens
Single source of truth in `src/design/tokens.css` & `src/design/tokens.ts`:
- **Color tokens**: `#F8F7FF` base, `#ECE8FF` mid, `#D8D2FF` ambient, `#C9BFFF` lavender, `#4B3FA8` deep indigo, `#DCEBFF` ice blue, `#FFFFFF` frost, `--glass-border` (`rgba(255,255,255,0.18)`), `--glass-highlight` (`rgba(255,255,255,0.35)`).
- **Shadow tokens**: Layered `--shadow-card` (`0 2px 6px` + `0 10px 30px` + `0 30px 80px`).
- **Radius tokens**: `--radius-sm` (16px), `--radius-md` (24px), `--radius-lg` (32px).
- **Blur tokens**: `--blur-sm` (12px), `--blur-md` (24px), `--blur-lg` (40px).
- **Motion tokens**: `springs.soft` (`stiffness: 180, damping: 22`), `springs.snappy` (`stiffness: 300, damping: 26`), `springs.breathing` (`duration: 4, repeat: Infinity`).

---

## Phase 2 — Core Primitives (`/src/components/primitives`)
1. `<GlassSurface>`: Frosted glass background, inset top border highlight & noise overlay texture.
2. `<GlassCard>`: Extends `<GlassSurface>`, 32px radius, spring lift (`translateY(-2px)`).
3. `<PrimaryButton>`: Von Restorff hero CTA with gradient fill & breathing glow pulse (min 56px height).
4. `<SecondaryButton>` & `<GhostButton>`: Glass & borderless buttons maintaining 56px thumb targets.
5. `<Input>`: Glass text field with floating animated label and soft indigo focus ring.
6. `<IconOutline>`: Lucide icon wrapper enforcing 1.65px stroke width.
7. `<BottomNav>`: Inset floating glass dock navbar with Framer Motion `layoutId` active pill morph.
8. `<Sheet>`: Bottom sheet modal drawer with spring slide-up & drag-to-dismiss gesture.
9. `<ProgressRing>`: Breathing progress ring loop (scale 1 → 1.02 → 1) for Oral Health Score.
10. `<FloatingShape>`: Ambient background color blobs with GPU-accelerated continuous drift.

---

## Phase 3 & 4 — Depth System & Motion
- `<DepthLayer>` layout wrapper organizing `z-0` through `z-60` depth stack.
- Lenis smooth scroll hook (`useLenis`) for physics-based scrolling.

---

## Phase 5 — Dental App Screens (`/src/components/screens`)
1. **Onboarding / Welcome**: Clinical-yet-warm gradient landing, value chips, "Book Your Visit" CTA.
2. **Dashboard / Home**: Von Restorff hero card for Next Appointment, Oral Health Score breathing ring, quick action dock, treatment reminder banner.
3. **3-Step Appointment Booking**:
   - Step 1: Select Dental Service (Teeth Cleaning, Whitening, Invisalign, Checkup).
   - Step 2: Choose Dentist & Interactive Time Slot Picker.
   - Step 3: Confirmation + Celebration Success State (ring/morph animation).
4. **Appointments List & Detail**: Upcoming vs past filter, status tags, reschedule/cancel modal.
5. **Treatment Plan View**: Visual step timeline (Aligner Stage 3/5, Whitening, Fluoride), progress percentage, before/after milestone cards.
6. **Dentist Chat Screen**: Glass message bubbles, instant mock auto-reply simulation, typing indicator animation.
7. **Patient Profile & Settings**: Insurance badge, medical history summary, accessibility controls (reduced motion, WCAG contrast scrim).

---

## Phase 6, 7 & 8 — Accessibility, Performance & Polish Pass
- WCAG AA contrast compliance on glass backgrounds.
- All tap targets ≥ 48–56px.
- `prefers-reduced-motion` fallbacks.
- 60+ FPS transform/opacity animations only.
- Subtle grain noise overlay.

---

## Verification Plan
- **Build verification**: `npm run build` cleanly compiles TypeScript & Vite.
- **Interactive QA**: Click-through test of Onboarding → Home → 3-Step Booking → Treatment Plan → Live Chat → Profile.
