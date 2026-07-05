# Screen Inventory — Glassmorphism Mobile UI

Mobile Viewport Target: **390 × 844 px (iPhone 14/15 base)**, safe-area aware, responsive 360px–428px width range.

## Screen Inventory

### 1. Onboarding Screen (`/onboarding`)
- **First Impression**: Full-bleed glass layout with ambient floating background blobs (`z-10`, `z-20`).
- **Elements**: Brand logomark, typographic headline ("Experience Modern Elegance"), value proposition chips, single high-contrast hero CTA (`<PrimaryButton>`).
- **Gestures**: Swipe slide indicator or tap to advance.

### 2. Dashboard / Home Screen (`/`)
- **Hero Element**: Primary key metric / status card with elevated depth (`z-40`, `--radius-lg`, high contrast typography).
- **Secondary Cards**: Receded glass widgets for recent activity, upcoming schedule, and quick shortcuts.
- **Floating Controls**: Ambient quick-action glass buttons & top profile trigger.

### 3. Core Task Screens (`/task` & `/analytics`)
- **Interactive Forms & Controls**: `<Input>` fields with floating labels & soft glowing focus rings, category selectors, slider triggers.
- **Lists & Data Cards**: Glass items with subtle micro-hover lift (`translateY(-2px)`).

### 4. Completion / Success Overlay (`/success`)
- **Emotional Memory Anchor**: Dedicated success state with breathing `<ProgressRing>`, morphological checkmark pulse, subtle particle burst effect.
- **Action**: Secondary action triggers & home navigation CTA.

### 5. Navigation Shell (`<BottomNav>`)
- **Floating Dock**: Inset glass dock navbar elevated at `z-50` with bottom safe-area spacing.
- **Active Pills**: Smooth spring morph indicator on route switch.

### 6. Settings & Profile Screen (`/settings`)
- **Visually Quieter**: Clean glass group rows, toggles, preference items.

### 7. Modals & Overlays (`<Modal>` / `<Sheet>`)
- **Spring Bottom Sheet**: Slide-up sheet with backdrop blur fade-in (`blur-md`) and drag-to-dismiss handle.
