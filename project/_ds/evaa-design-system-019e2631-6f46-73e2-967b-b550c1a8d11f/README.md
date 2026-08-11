# Evaa Design System

A design + UI kit for **Evaa**, an AI-powered platform for eye-care and broader healthcare practices. Evaa is the parent brand; the system spans several product surfaces that ship under that umbrella.

> Healthcare admin software with personality. Warm bone neutrals, two strong brand colors (teal for action, fuchsia for the Evaa mark), DM Sans everywhere, generous pill-shaped buttons.

---

## Products covered

The Figma file contains seven distinct product lockups. They share one component library:

| Product | What it is |
|---|---|
| **Evaa** | The umbrella brand / homepage / admin console (fuchsia EVAA wordmark) |
| **MaximEyes** | The legacy EHR for eye-care practices ("EnterprEyes") |
| **MaximEyes Evaa** | The merged AI-augmented EHR experience |
| **Evaa Scribe** | Ambient AI medical scribe / encounter audio + transcript console |
| **Evaa Patient Portal** | Patient-facing booking + records portal |
| **Evaa Billing Assistant** | AI-assisted claims, denials, AR workflows |
| **Evaa Virtual Assistant** | Always-on assistant widget (in-app chat + voice) |

Marketing site, admin console, EHR, scribe, billing app, patient portal, and an embeddable assistant — but they all share **one** typography ramp and **one** component library.

---

## Sources

- **Figma:** `Evaa Design System V.2.fig` (mounted as virtual FS; 53 pages, 678 frames). Key pages: `Colors-Shadow---WIP`, `Typography---Done`, `Buttons-Code-Extraacted-03-16`, `Logos-and-Mascots---Done-12-27`, `Icons---Done-12-27`, `Card-Done-01-12---Code-Extracted-03-16`, `Modal-Code-ext-done-03-18`.
- **Production codebase:** `Components/` (39 component folders — `Button.tsx`/`Button.css`, `InputField`, `PillBadge`, `StateBadge`, `DashboardCard`, `WebsiteNav`, `Icons.tsx`, `Logos.tsx`, etc.). Tokens follow the `--Colors-PrimitiveColorTokens-…` and `--colors-buttons-…` naming used throughout the project's `theme.css`.

Source copies live under `Components-src/` for reference.

---

## VISUAL FOUNDATIONS

### Color
- **Two brand colors.** Fusia `#D72D8A` is the *identity* color — it appears in the EVAA wordmark, primary tabs, brand surfaces. Teal `#118082` is the *action* color — primary buttons, focus rings, links, key icons. Both have full 50→800 ramps.
- **Warm bone neutrals.** Backgrounds use `#f9f9f6 → #f6f6f1 → #efeeea → #e5e4dd`, never pure white or gray. Body text is `#4b4b4a`; headings `#303030`; placeholders `#71706c`. Card outlines are `#c3c1b5` (warm beige), not Tailwind gray.
- **Cool gray for "off" states.** Disabled inputs and read-only surfaces use a separate cool-blue ramp (`#d2dce6 / #b4c6d6 / #8ba1b9`) to distinguish them clearly from active neutrals.
- **Semantic accents.** Lime `#5e981d` (success), Red `#e73d36` (error), Orange `#f27e25` (warning / negative feedback), Yellow `#d49a05` (caution), Blue `#0077c8` (informational / table row tint).

### Typography
- **DM Sans for everything UI** — Regular 400, Medium 500, SemiBold 600, ExtraBold 800. ~3000+ occurrences in the file.
- **Archivo Thin (weight 100)** for display lockups (marketing hero, big numbers, color-swatch headers). The thin weight is the whole point — paired with the dense, punchy DM Sans body, the contrast is the brand.
- **Figtree** as a fallback for display when Archivo isn't available.
- **DM Sans (Medium 500, tabular figures)** for large numeric readouts in dashboard tiles. Set with `font-variant-numeric: tabular-nums` so columns of numbers line up. (Legacy production CSS references `--FontFamily-Roboto`; the token is preserved but now resolves to DM Sans.)
- Headings (`h1` 30px → `h6` 20px) are SemiBold; `h1` is the exception at Regular. Display sizes (`d1` 80px → `d6` 40px) are Archivo Thin (weight 100).
- Button label = **DM Sans ExtraBold 14px** — distinctive Evaa feature; gives buttons a punchy, confident feel.

### Backgrounds, layout, geometry
- **Bone-canvas backgrounds.** Page background is `#f6f6f1` (`Bkg_App`); cards/inputs/modals sit white on top.
- **Pill-shaped buttons.** `border-radius: 9999px` is the default. Buttons are tall (md=48px, lg=72px) and well-padded.
- **Rounded but not aggressive.** Cards are `13px` radius, inputs `13px`, pill badges `18px`, modals `12–24px`. Nothing is sharp-cornered; nothing is over-rounded except buttons.
- **No gradients, no glassmorphism.** Surfaces are flat fills. The single exception is the mascot's pink glow shadow (`0 4px 20px rgba(223,87,161,0.64)`).
- **One shadow recipe.** Cards: `0 2px 4px rgba(0,0,0,0.08)`. Nav: `0 2px 4px #e7edec`. Modals deeper. Never multi-layered drop shadows.

### Hover / press / focus
- **Hover.** Backgrounds shift to a tinted hue (`Bkg_Hover = #d6fffb` — teal-100). Buttons darken (teal-700 → teal-800). Text links color-shift to teal-700.
- **Focus.** A 2px teal-700 outline (`#118082`) with 2px offset. Inputs get a `#21A49F` (teal-600) outline instead of a heavy ring.
- **Disabled.** Cool-gray fill (`#d2dce6`), cool-gray text (`#8ba1b9`), 0.6 opacity for some buttons. Always uses the cool-gray ramp, never neutrals.
- **Active / selected (tabs).** Bold weight + teal-700 color. No underlines, no background pill.

### Borders & outlines
- Use **`outline` with negative `outline-offset`**, not `border`. That's a project convention from `theme.css` — keeps box sizing predictable and lets focus rings overlay cleanly. (See `InputField.css`, `DashboardCard.css`.)
- Default border weight 1px. Focus/active states bump to 2px.

### Imagery
- The Figma includes very few photographic backgrounds — when present they're warm and neutral, never duotone or grain. Imagery in marketing is sparse; product UI relies on color blocks + iconography.

### Animation / motion
- Uniform `200ms ease-in-out` (`var(--Motion-base)`) on hover/press transitions. No bounces, no parallax. The brand reads as competent and calm, not playful.

### Cards
- White fill, `0 2px 4px rgba(0,0,0,0.08)` shadow, `1px solid #c3c1b5` outline at rest. On hover/focus, outline grows to 2px and shifts color (teal-700 for "focused", neutral-500 for "hovered", fusia-500 for brand cards).
- Three card tones: **neutral** (`#f6f6f1` bg + warm border), **brand** (`#feecf6` bg + fusia border), **teal/focus** (`#d6fffb` bg + teal-600 border).

### Layout rules
- Most surfaces have a generous 13–24px padding. Forms use 8–16px between fields.
- Nav bars are full-bleed pills, never sharp-edged rectangles.
- Tables alternate white / `#edf8ff` (blue-50) row tints. Header row uses primary teal.

---

## CONTENT FUNDAMENTALS

### Tone
- **Calm, competent, clinical-but-warm.** Not chatty, not jargony. Speaks like a senior practice manager: confident, direct, plain English.
- **Healthcare-literate.** Uses real domain terms (Superbill, HCFA, AR Denials, Eligibility, Encounter, Templates) without over-explaining them. Audience is staff who already know the work.
- **Action-first labels.** "Submit Claim", "Mark all as read", "Add New Section", "Delete Template" — verbs lead.

### Casing
- **Title Case** for buttons, tabs, menu items, modal titles, navigation. ("Recorded Sessions", "Patient Satisfaction", "Mark All as Read".)
- **Sentence case** for body copy, helper text, descriptions, table cells.
- **ALL CAPS** only for very small tags (`UNREAD`, `GO`, `ON HOLD`) and 10-12px extra-bold labels.

### Voice
- **No "I"; sparing "you".** UI is the system, not the assistant. ("Templates have been updated." not "I've updated your templates.") The exception is the AI assistant surfaces (Scribe, Virtual Assistant) where a quiet first-person voice is acceptable in the chat panel.
- **Numbers over adjectives.** "Saved 12 hours this week" beats "Save lots of time."

### Punctuation & numerals
- No trailing periods on button or label text.
- Sentence-end periods elsewhere are standard.
- Currency: `$500.00` with two decimals in tables. Plain `$5` for marketing.
- Dates: `MM-DD-YYYY` in tables (US clinical convention — `12-01-2025` appears throughout).

### Emoji
- **None.** Zero emoji across the entire Figma. Don't introduce them.

### Sample copy from the file
- Nav: "Practice", "Patients", "Claims", "Analytics", "Setup"
- Buttons: "GO", "View Claim", "Mark All as Read", "Add New Section"
- Empty states (Scribe): "No recordings yet. Start a session to see them here."
- Toast titles: "Visit Already Finalized", "Recording in Progress", "Encounter is open"
- Help link: "How does AR aging work?"

---

## ICONOGRAPHY

See **`Components-src/Icons.guideline.md`** (when/how to use) + **`Components-src/Icons.skill.md`** (library architecture, API, maintenance protocol). Browse every icon in **`Icon Library.html`** (root) — searchable, size + color switch, click to copy the key.

### Source order
1. **First, look in `Components-src/Icons.tsx`** — the production icon library: ~195 named inline-SVG icons (147 standard + ~48 colored, auto-expanded to 561 keys with gray/size variants). This is the default source for every Evaa surface.
2. **If the icon you need isn't there, fall back to Font Awesome 6 Free · Classic Solid** via CDN:

   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
   ```
   Render with `<i class="fa-solid fa-…"></i>`. **Only classic solid** — not regular, light, thin, duotone, or brand styles.

### Sizes
Exactly three: **16px**, **24px**, **32px**. Pick one; never resize via CSS transforms or arbitrary `font-size`.

### Color
**All icon color comes from the `Colors/Navigation/Icons` token namespace.** Never hard-code hex on an icon, never use `Functional` text tokens on an icon.

| Token | Hex | Use |
|---|---|---|
| `--Colors-Navigation-Icons-Gray-Bkg--700` | `#4B4B4A` | **DEFAULT.** Every icon, every nav, every table action. |
| `--Colors-Navigation-Icons-Gray-Bkg--500` | `#959490` | Inactive / muted icons |
| `--Colors-Navigation-Icons-Teal500` | `#27BCB7` | Brand teal accent (sparkle, eye, etc.) |
| `--Colors-Navigation-Icons-Teal600` | `#118082` | Selected nav, focus, action |
| `--Colors-Navigation-Icons-LightBlue400` | `#63B9F2` | Soft info / status |
| `--Colors-Navigation-Icons-Blue600` | `#1A77B4` | Info alerts |
| `--Colors-Navigation-Icons-Lime600` | `#5E981D` | Success / verified |
| `--Colors-Navigation-Icons-Lime700` | `#578421` | Success (deep) |
| `--Colors-Navigation-Icons-Yellow500` | `#F3B51E` | Caution / low alerts |
| `--Colors-Navigation-Icons-Yellow700` | `#D49A05` | Deep yellow accent (locks, stars) |
| `--Colors-Navigation-Icons-Alert-Warning-Orange500` | `#F27E25` | Warning alerts |
| `--Colors-Navigation-Icons-Alert-High-Red500` | `#E73D36` | High-priority alerts, errors |
| `--Colors-Navigation-Icons-Alert-High-Red600` | `#E24723` | High-priority deep |
| `--Colors-Navigation-Icons-Red500` | `#F1605B` | Soft red (likes, hearts) |
| `--Colors-Navigation-Icons-Red700` | `#9A1712` | Destructive (delete) |
| `--Colors-Navigation-Icons-Pink400` | `#E65CA7` | Pink accent (chat, messages) |
| `--Colors-Navigation-Icons-Fusia500` | `#D72D8A` | Brand identity |
| `--Colors-Navigation-Icons-Fusia600` | `#AC246E` | Brand identity (deep) |
| `--Colors-Navigation-Icons-Purple500` | `#922D94` | AI / agent / spark moments |
| `--Colors-Navigation-Icons-Alert-Count_Inactive-400` | `#8BA1B9` | Inactive notification badge dot |

### Brand assets
Eight product wordmarks live in `assets/logos/` (light + dark variants). The 3D-style mascot at `assets/mascot.svg` is the only hand-built character icon — it appears as the floating Virtual Assistant trigger and on empty states. Mascot only ever uses the fusia palette + the brand glow shadow.

### Rules
- **No emoji, no Unicode glyphs, no other icon sets** (Lucide, Heroicons, Material). Icons.tsx first, FA Solid second, nothing else.
- Always set color via `var(--Colors-Navigation-Icons-…)`. Hard-coded hex values on icons are a bug.
- Use `currentColor` inside `Icons.tsx` SVGs so they inherit from the parent `color` token cleanly.

---

## File index (manifest)

| Path | What it is |
|---|---|
| `README.md` | This file |
| `SKILL.md` | Agent Skill entry point (Claude Code compatible) |
| `theme.css` | **Production source of truth** — verbatim copy of the codebase's `theme.css` (primitives, button/nav/input tokens, both lowercase and PascalCase). |
| `colors_and_type.css` | Foundations entrypoint — `@import`s `theme.css`, layers on additive tokens (Radius/Space/Shadow/Motion scales, FontFamily-Display/Numeric aliases, Navigation-Icons PascalCase namespace, semantic helpers) + the `.evaa-*` element classes. Link this from new artifacts. |
| `assets/logos/` | All product wordmarks (Evaa, Scribe, MaximEyes, Patient Portal, Billing Assistant, Virtual Assistant; light + dark variants) |
| `assets/mascot.svg` | Simplified Evaa mascot mark |
| `Components-src/Icons.tsx` | Reference copy of the production icon library (~195 named inline SVGs; 561 keys after auto gray/size variants) |
| `Components-src/Icons.guideline.md` | Icon usage rules — source order, three sizes, color tokens, standard vs colored |
| `Components-src/Icons.skill.md` | Icon library spec — architecture, `SvgIcon` API, variant automation, add-an-icon protocol |
| `Icon Library.html` | Browsable gallery of every icon — search, size (16/24/32), token recolor, click-to-copy |
| `Components-src/*.css` | Reference copies of production component CSS — extract token values from here |
| `Components-src/Button.guideline.md` | Button usage rules — when/when-not, variants, sizing, placement, label guidance, QA checklist |
| `Components-src/Button.skill.md` | Button component spec — props API, anatomy, token references, states, accessibility, anti-patterns |
| `Components-src/Cards/` | Per-card guideline + skill pairs for the 12 card variants (AddOns, Contact, Coupon, Dashboard, Error, Feedback, HelpLink, InfoNote, LicensingProduct, NotificationAlert, UsageHorizontal, UsageVertical). Read the matching `*.guideline.md` for usage rules and `*.skill.md` for the component spec. |
| `Components-src/Tabs/` | Tab components. `SimpleTab.tsx` + `SimpleTab.css` are the production source; `SimpleTab.guideline.md` covers when-to-use, themes, and anti-patterns; `SimpleTab.skill.md` is the agent skill spec. |
| `preview/` | Cards rendered into the Design System tab (foundations + components) |
| `ui_kits/admin-console/` | UI kit for the Evaa Admin Console |
| `ui_kits/scribe/` | UI kit for Evaa Scribe (medical scribe console) |
| `ui_kits/marketing-site/` | UI kit for the Evaa marketing site |

---

## Caveats / known gaps

- **Production `theme.css` is now in place.** The verbatim codebase `theme.css` lives at the project root and is imported by `colors_and_type.css`. All primitive colors, typography primitives, and button/navigation/input tokens (both lowercase and PascalCase) resolve to production values. `colors_and_type.css` is now purely additive — it layers on the Radius/Space/Shadow/Motion scales, the Navigation-Icons PascalCase aliases, semantic background aliases (`Bkg_App`, `Bkg_Hover`, `Bkg_Info50`), and the `.evaa-*` helper classes.
- **Fonts are loaded from Google Fonts** (Archivo, DM Sans, Figtree, Inter). Display uses Archivo Thin; UI and numerics use DM Sans; Figtree is a secondary fallback for display. If you have licensed `.woff2` files, add them under `fonts/` and update the `@import` in `colors_and_type.css`.
- **The Evaa 3D mascot** is the only place a hand-built SVG appears; the rest are imports.

