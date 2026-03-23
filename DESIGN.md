# NurtureCalc Design DNA

## 1. Overview & Creative North Star
**Theme**: "The Nurturing Sanctuary"
A high-end, editorial wellness journal aesthetic moving away from clinical calculators toward a calming, warm, and highly readable digital sanctuary. Soft organic layers, intentional asymmetry.

## 2. Colors & Surface Philosophy
**Palette:**
- **Background:** `#F9E4E8` (soft blush pink)
- **Card Background (Surface-lowest):** `#FFFDF9` (creamy white)
- **Primary Accent:** `#E8A0A8` (dusty rose)
- **Body Text:** `#3D2C2C` (warm charcoal)

**Surface Logic:**
- **No-Line Rule**: No 1px solid borders. Delineate sections using background color shifts and padding.
- **Glassmorphism**: Modals/floating navigation at 80% opacity with 12px backdrop blur.
- **Gradients**: Subtle linear gradients (Primary to Primary-Container at 135deg) for primary buttons to add warmth without flatness.

## 3. Typography
**Editorial Contrast:**
- **Headings**: Noto Serif (or standard rounded serif)
- **Body**: Be Vietnam Pro (or clean sans-serif)
- **Minimum Body Size**: 16px min (to prevent iOS auto-zoom).

**Responsive Scale:**
- `h1`: 2.5rem → 2rem → 1.75rem
- `h2`: 2rem → 1.75rem → 1.5rem
- `h3`: 1.5rem → 1.35rem → 1.25rem
- `body`: 1rem
- `small`: 0.875rem

## 4. Components
**Buttons**: High-pill shape (full roundedness).
**Cards**: Soft lift (tonal layering) rather than standard drop shadows. Generous internal padding (24px+).
**Inputs**: Minimum 48px height, 16px text. No harsh borders, just background fills and soft outline focus states.

## 5. Mobile Responsiveness / Global Elements
- **Tap Targets**: 48px minimum.
- **Sticky Nav**: Logo left, hamburger mobile (desktop links right).
- **Cookie Banner**: Fixed bottom. Accept button in dusty rose. Does not cover inputs.
- **Unit Toggle**: Pill-style above calculator forms. Transition 0.2s. Right-aligned desktop, full-width mobile. Dusty rose when active.
