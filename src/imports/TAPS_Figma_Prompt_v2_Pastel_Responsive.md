# TAPS — Complete Figma Production Prompt (v2)
### "Daddy se Baddie tak" · GenZ Dating App · Pastel Edition · Mobile + Desktop Responsive
---

> **CHANGELOG v2:** Full color system replaced with soft pastel palette on a warm off-white base (light theme). All dark backgrounds eliminated. Responsive breakpoints added for Mobile (390px), Tablet (768px), and Desktop (1440px). Every hex value, component spec, and layout measurement updated accordingly.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 1 — UPDATED DESIGN SYSTEM
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

### 1.1 PASTEL COLOR PALETTE

> Philosophy: Warm, soft, romantic pastels. Light-mode-first. Backgrounds are creamy off-whites. Accents are desaturated pinks, lavenders, and peach tones. No harsh blacks — deepest color is a warm charcoal `#2C2038` used only for primary text.

---

#### Core Background System
| Token | Hex | Usage |
|---|---|---|
| `--bg-base` | `#FDF8F5` | Screen background — warm cream white |
| `--bg-surface` | `#FFFFFF` | Cards, modals, list items |
| `--bg-elevated` | `#FFF0F5` | Input fields, pill tags, hover states |
| `--bg-muted` | `#F5EEF8` | Subtle section tint, onboarding panels |
| `--bg-overlay` | `rgba(253,238,230,0.80)` | Bottom gradient on profile photos |
| `--border-subtle` | `#EDD9E8` | Dividers, card borders |
| `--border-active` | `#D9A8D5` | Active input border, focus ring |

---

#### Primary Accent — Blush Rose (dominant CTA, like button)
| Token | Hex | Usage |
|---|---|---|
| `--accent-primary` | `#E8829A` | Like button, primary CTA, active nav |
| `--accent-primary-hover` | `#D96882` | Pressed / hover state |
| `--accent-primary-soft` | `#FADADD` | Tag bg, pill tint, light chip fill |
| `--accent-primary-pale` | `#FEF0F2` | Very light tint, card hover bg |
| `--accent-primary-glow` | `rgba(232,130,154,0.20)` | Button shadow, active glow |

---

#### Secondary Accent — Soft Peach (match reveal, secondary CTAs)
| Token | Hex | Usage |
|---|---|---|
| `--accent-secondary` | `#F4A261` | Match CTA, urgency badge, warm highlight |
| `--accent-secondary-hover` | `#E08A45` | Pressed state |
| `--accent-secondary-soft` | `#FDE8D0` | Notification badge bg, warm chip |
| `--accent-secondary-pale` | `#FFF5EC` | Subtle section tint |

---

#### Tertiary Accent — Soft Lavender (logo, premium, vibe tags)
| Token | Hex | Usage |
|---|---|---|
| `--accent-tertiary` | `#B09EE8` | Brand gradient, logo mark, premium |
| `--accent-tertiary-alt` | `#8C78D4` | Gradient end, deeper lavender |
| `--accent-tertiary-soft` | `#E8E0FA` | Lavender chip fill, tag bg |
| `--accent-tertiary-pale` | `#F5F0FF` | Section tint, onboarding panel |

---

#### Mint Accent (verified badge, success states)
| Token | Hex | Usage |
|---|---|---|
| `--accent-mint` | `#80C9B5` | Verified checkmark, online indicator |
| `--accent-mint-soft` | `#D4F0E8` | Success chip bg |

---

#### Premium / Gold
| Token | Hex | Usage |
|---|---|---|
| `--accent-gold` | `#E8B86D` | PREMIUM star badge (softened gold) |
| `--accent-gold-soft` | `#FDF0D5` | Premium badge background |

---

#### Text System
| Token | Hex | Usage |
|---|---|---|
| `--text-primary` | `#2C2038` | Headlines, names, body (warm charcoal) |
| `--text-secondary` | `#7A6B8A` | Subtitles, meta info, location |
| `--text-tertiary` | `#B5A8C0` | Timestamps, inactive labels, placeholders |
| `--text-on-accent` | `#FFFFFF` | Text on filled CTA buttons |
| `--text-link` | `#B09EE8` | Underlined links, secondary CTAs |

---

#### Action-Specific
| Token | Hex | Usage |
|---|---|---|
| `--btn-pass` | `#FFFFFF` | Pass/dislike button fill |
| `--btn-pass-border` | `#EDD9E8` | Pass button border |
| `--btn-pass-icon` | `#E8829A` | Broken heart icon on pass button |
| `--btn-message` | `#F5EEF8` | Message icon button bg |
| `--btn-message-icon` | `#B09EE8` | Chat icon on message button |
| `--btn-like` | `#E8829A` | Like/heart CTA fill |
| `--notification-badge` | `#F4A261` | Message count badge |
| `--status-online` | `#80C9B5` | Online presence dot |
| `--status-ghost-warn` | `#F4A261` | No Ghost Mode nudge accent |

---

#### TAPS Brand Gradient (logo + splash + accents)
```
background: linear-gradient(135deg, #E8829A 0%, #B09EE8 50%, #F4A261 100%);
```
> Pastel rose → soft lavender → warm peach. Used on logo, avatar rings, premium badge, CTAs.

---

#### Shadows (light-theme adjusted — softer, warm-tinted)
| Level | CSS | Used On |
|---|---|---|
| `shadow/xs` | `0 1px 4px rgba(176,158,232,0.10)` | Tags, pills |
| `shadow/sm` | `0 2px 10px rgba(44,32,56,0.08)` | Cards, list rows |
| `shadow/md` | `0 4px 24px rgba(44,32,56,0.10)` | Swipe card, modals |
| `shadow/lg` | `0 8px 48px rgba(44,32,56,0.14)` | Stacked cards, overlays |
| `glow/rose` | `0 0 20px rgba(232,130,154,0.30)` | Like CTA active state |
| `glow/peach` | `0 0 18px rgba(244,162,97,0.28)` | Match CTA, orange CTAs |
| `glow/lavender` | `0 0 24px rgba(176,158,232,0.25)` | Logo, brand elements |

---

### 1.2 TYPOGRAPHY (Unchanged from v1 — still applies)

**Primary Display Font:** `Clash Display` (700 weight — headers, splash, match reveal)
**Secondary/UI Font:** `DM Sans` (400/500/600 — body, labels, tags, nav)

> On light backgrounds: all text now uses `--text-primary` (#2C2038) instead of white. Secondary uses `--text-secondary` (#7A6B8A). Only text on filled CTA buttons remains white (`--text-on-accent`).

#### Type Scale (sizes unchanged, colors updated)
| Role | Font | Weight | Size | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|
| `Display/XL` | Clash Display | 700 | 56px | 60px | -1.5px | `--text-primary` |
| `Display/L` — "match" | Clash Display | 700 | 48px | 52px | -1.2px | `--text-primary` |
| `H1` | DM Sans | 700 | 32px | 38px | -0.5px | `--text-primary` |
| `H2` — Profile name | Clash Display | 700 | 28px | 34px | -0.4px | `#FFFFFF` (on photo) |
| `H3` — Section headers | DM Sans | 600 | 16px | 22px | 0px | `--text-primary` |
| `Body/Regular` | DM Sans | 400 | 14px | 20px | 0px | `--text-secondary` |
| `Body/Small` | DM Sans | 400 | 12px | 17px | 0.1px | `--text-secondary` |
| `Label/Caps` — PREMIUM | DM Sans | 700 | 11px | 14px | 1.2px | `--accent-gold` |
| `Caption` | DM Sans | 400 | 11px | 15px | 0.2px | `--text-tertiary` |
| `Button/CTA` | DM Sans | 700 | 14px | 18px | 1.0px | `--text-on-accent` |
| `Pill/Tag` | DM Sans | 500 | 13px | 16px | 0.1px | `--text-primary` |

---

### 1.3 RADIUS SYSTEM (Unchanged)

| Token | Value | Used On |
|---|---|---|
| `--radius-xs` | 6px | Small tags |
| `--radius-sm` | 10px | Input fields, search bar |
| `--radius-md` | 16px | Cards, modals |
| `--radius-lg` | 24px | Swipe cards, bottom drawer |
| `--radius-xl` | 32px | Large CTA pill buttons |
| `--radius-full` | 9999px | Avatars, icon buttons, toggles |

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 2 — RESPONSIVE BREAKPOINT SYSTEM
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TAPS is designed mobile-first, with a fully adapted desktop web experience for browser access (onboarding, profile setup, explore, settings). The chat and swipe features are mobile-primary but have desktop companion layouts.

---

### 2.1 BREAKPOINTS

| Name | Width | Frame | Use Case |
|---|---|---|---|
| **Mobile S** | 375px | 375×812 | iPhone SE, budget Android |
| **Mobile** | 390px | 390×844 | iPhone 14 Pro — primary design target |
| **Mobile L** | 430px | 430×932 | iPhone 14 Pro Max |
| **Tablet** | 768px | 768×1024 | iPad, Android tablet |
| **Desktop** | 1280px | 1280×800 | Laptop web browser |
| **Desktop L** | 1440px | 1440×900 | Standard desktop — secondary design target |

> In Figma: Design 2 primary frames per screen — `390px (Mobile)` and `1440px (Desktop)`. Tablet can be derived.

---

### 2.2 SPACING SCALE (RESPONSIVE)

| Token | Mobile | Desktop |
|---|---|---|
| `--space-xs` | 4px | 4px |
| `--space-sm` | 8px | 8px |
| `--space-md` | 16px | 20px |
| `--space-lg` | 24px | 32px |
| `--space-xl` | 32px | 48px |
| `--space-2xl` | 48px | 64px |
| `--space-3xl` | 64px | 96px |

---

### 2.3 LAYOUT GRIDS

#### Mobile (390px)
- 4 columns, 20px margin, 16px gutter
- Content width: 350px

#### Tablet (768px)
- 8 columns, 32px margin, 20px gutter
- Content width: 704px

#### Desktop (1440px)
- 12 columns, 80px margin, 24px gutter
- Content width: 1280px
- Max content width: 1200px (centered)

---

### 2.4 DESKTOP LAYOUT PHILOSOPHY

On desktop (1280–1440px), TAPS uses a **Split-Panel Layout**:

```
┌─────────────────────────────────────────────────┐
│  LEFT SIDEBAR (280px fixed)  │  MAIN CONTENT     │
│  - Logo                      │  (flexible width) │
│  - Navigation links          │                   │
│  - User avatar + name        │                   │
│  - Premium CTA               │                   │
└─────────────────────────────────────────────────┘
```

- Sidebar: fixed left, 280px wide, `--bg-surface` (#FFFFFF), border-right 1px `--border-subtle`
- Main content: fills remaining width, `--bg-base` (#FDF8F5)
- For swipe cards: centered column 480px wide in main area
- For explore/matches grid: 3–4 column grid in main area

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 3 — PAGE-BY-PAGE UI (MOBILE + DESKTOP)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Each screen is specified at both breakpoints.

---

### SCREEN 01 — SPLASH SCREEN

**Mobile (390×844):**
- Background: `#FDF8F5` (warm cream)
- Soft radial gradient: `radial-gradient(circle 300px at 50% 40%, #F5EEF8 0%, #FDF8F5 70%)` — subtle lavender bloom
- Center: TAPS wordmark, Clash Display 700, 56px, `--text-primary`
- Tagline: "Daddy se Baddie tak" — DM Sans 400, 16px, `--text-secondary`, margin-top 12px
- Decorative divider: 2px × 80px gradient line `#E8829A → #B09EE8`, centered below tagline
- Loading dots: 3 dots, 8px each, `--accent-primary`, pulsing animation (opacity 0.3→1 staggered)
- Decorative: 2–3 abstract soft blob shapes (circles, 40% opacity, pastel fills `#FADADD`, `#E8E0FA`) positioned off-center behind text

**Desktop (1440×900):**
- Identical centered layout, max-width container 480px, vertically centered in viewport
- Background: same + decorative floating blobs scaled up to 600px diameter
- No structural changes — pure centering

---

### SCREEN 02 — ONBOARDING (4 Screens)

**Mobile:**
- Background: `#FDF8F5`
- Progress dots: 4 dots top-center, 52px from top. Active = `--accent-primary` 10px circle. Inactive = `--border-subtle` 8px circle
- Skip: top-right, DM Sans 500 13px `--text-tertiary`
- Illustration zone: 55% of screen height (pure SVG/abstract shape illustrations — no photos)
- Text zone: 45%, 20px horizontal padding
- CTA: full-width pill, 56px, `--radius-xl`, `--accent-primary` fill, white text

**Screen OB-1:** Illustration = abstract overlapping circles in pastel rose + lavender. H1: "Your vibe starts here" (Clash Display 700, 36px, `--text-primary`). Body: "Real people. Real connections. Zero ghosts." (`--text-secondary` 16px)

**Screen OB-2:** Large swipeable "Pick Your Vibe" card (320×200px, `--radius-lg`, `--bg-surface`, `shadow/md`). Card has a soft gradient blob background (not photo). Options: "Something real 💫", "Just vibing ✨", "Casual hang 🌙", "Let fate decide 🎲"

**Screen OB-3:** Ghost illustration (cute minimal ghost, coral-outlined). H1: "No Ghost Mode™" — H1 style. Body in `--text-secondary` 15px.

**Screen OB-4:** Verified badge illustration, lavender. H1: "Every profile is real."

**Desktop (1440px):**
- Two-column layout: left 50% = illustration (large, centered), right 50% = text + CTA
- Vertical center aligned
- Progress dots move to left column, bottom
- Skip button: top-right corner of full viewport

---

### SCREEN 03 — LOGIN / SIGNUP (OTP)

**Mobile (390px):**
- Background: `#FDF8F5`
- Back arrow: top-left, `--text-primary`
- Title: "Join TAPS" — Clash Display 700, 32px, `--text-primary`, margin-top 80px
- Subtitle: DM Sans 400, 15px, `--text-secondary`
- Country code pill: `--bg-elevated` (#FFF0F5), `--border-subtle` 1px border, 52px height
- Phone field: `--bg-surface`, `--border-subtle` 1px, focus = `--border-active` 1px + `glow/rose` shadow, 52px height
- CTA: `--accent-primary` fill, full-width, 56px

**OTP Screen:**
- 6 OTP boxes: 48×56px each, `--bg-surface`, border `--border-subtle`, focus border `--accent-primary`
- Filled: `--bg-elevated` bg, `--text-primary` text
- Legal: DM Sans 400, 11px, `--text-tertiary`

**Desktop (1440px):**
- Centered card layout: white card `--bg-surface`, 480px wide, 560px tall, `--radius-lg`, `shadow/md`
- Card sits centered in `#FDF8F5` full viewport
- All fields same spec, constrained within card
- Optional: decorative illustration/blob to the left of card (desktop only)

---

### SCREEN 04 — PROFILE SETUP

**Mobile (390px):**
- Progress bar: 4px height, `--accent-primary` fill, `--border-subtle` track
- Step label: DM Sans 500 12px `--text-tertiary`
- Photo upload circle: 120px, dashed 2px `--accent-primary`, inner camera icon `--accent-primary`
- All input fields: `--bg-surface`, 1px `--border-subtle`, focus `--border-active` + glow
- Vibe tags: `--accent-primary-soft` bg when selected, 1px `--accent-primary` border when selected
- CTA: `--accent-primary` pill, pinned bottom

**Desktop (1440px):**
- 2-column main content: left sidebar (navigation steps — visual stepper), right area = form content
- Stepper sidebar (200px wide): step numbers in circles, connected by vertical line, active step = `--accent-primary` filled circle, completed = `--accent-mint`, inactive = `--border-subtle`
- Form area: centered, max-width 600px
- Vibe tags grid: 4 columns instead of 3

---

### SCREEN 05 — HOME (Swipe Cards)

**Mobile (390px):**
- Background: `#FDF8F5`
- Top bar (56px): TAPS logo left, notification bell + filter right — all icons `--text-secondary`
- Toggle: "FOR YOU" / "NEARBY" — container `--bg-elevated`, active pill `--accent-primary` fill with white text, inactive `--text-secondary`

**Swipe Card (Mobile):**
- Size: 350×480px, `--radius-lg`
- Photo: full-bleed
- Bottom overlay: `linear-gradient(to top, rgba(253,238,230,0.95) 0%, transparent 60%)` — PASTEL overlay (warm cream, not black)
- Name + age: Clash Display 700 28px, `--text-primary` (readable on pastel overlay)
- Location: DM Sans 400 13px, `--text-secondary`
- Stat pills: `rgba(255,240,245,0.90)` bg, `--border-subtle` border, `--text-primary` text
- PREMIUM badge: `--accent-gold-soft` bg pill, `--accent-gold` star + text

**Action Bar (Mobile):**
- Pass: `#FFFFFF` pill, 100×56px, `--radius-full`, `--btn-pass-border` border 1.5px, broken heart icon `--btn-pass-icon` (#E8829A)
- Message: `--btn-message` (#F5EEF8) circle 56×56px, chat icon `--btn-message-icon` (#B09EE8)
- Like: `--accent-primary` (#E8829A) pill 164×56px, `glow/rose` shadow, white heart icon

**Desktop (1440px):**
- Left sidebar (280px): navigation
- Main area: centered 520px wide column
- Swipe card: 460×580px (larger), same visual spec
- Action bar: same 3-button layout, centered below card, 480px wide row
- Right panel (optional, 320px): "People Nearby" teaser list — small avatar + name + distance chips

---

### SCREEN 06 — MATCH SCREEN

**Mobile (390px):**
- Background: `#FDF8F5` with `radial-gradient(circle 400px at 50% 35%, #FADADD 0%, #FDF8F5 65%)` — romantic rose bloom
- Two overlapping photos: same positioning as v1, but photo borders = 3px gradient ring `#E8829A → #B09EE8`
- Floating heart: `--accent-primary` bg, 40px circle, white shadow
- "it's a" text: DM Sans 400 20px `--text-secondary`
- "match" text: Clash Display 700 56px `--text-primary`
- Subtext: DM Sans 400 15px `--text-secondary`, max-width 280px
- 24hr pill: `--accent-primary-pale` bg, `--accent-primary` border 1px, `--accent-primary` text: "⏱ 23:59 remaining"
- "CHAT NOW": `--accent-secondary` (#F4A261) fill, `glow/peach` shadow, white DM Sans 700 14px
- "Keep swiping": `--text-link` underlined

**Desktop (1440px):**
- Full-screen center overlay (modal) on top of home screen
- Modal: white `--bg-surface` card, 560px wide, 680px tall, `--radius-xl`, `shadow/lg`
- Dark scrim behind: `rgba(44,32,56,0.40)`
- All content centered within modal card

---

### SCREEN 07 — CHAT SCREEN

**Mobile (390px):**
- Background: `#FDF8F5`
- Top bar: back arrow, avatar 36px, name DM Sans 700 16px `--text-primary`, online dot `--accent-mint`
- Chat body: 16px horizontal padding, `--bg-base`

**Sent Bubble (updated pastel):**
- Background: `--accent-primary` (#E8829A) — rose
- Radius: 24px 24px 4px 24px
- Text: white, DM Sans 400 14px

**Received Bubble (updated pastel):**
- Background: `--bg-surface` (#FFFFFF)
- Border: 1px `--border-subtle`
- Radius: 24px 24px 24px 4px
- Text: `--text-primary`, DM Sans 400 14px

**No Ghost Mode Nudge Banner:**
- Background: `--accent-secondary-pale` (#FFF5EC)
- Left border: 3px `--accent-secondary` (#F4A261)
- Text: `--text-primary` 13px DM Sans 500
- "Reply Now" button: `--accent-secondary` fill, white text, 32px height pill

**Input Bar:**
- Background: `--bg-surface`
- Border-top: 1px `--border-subtle`
- Text field: `--bg-elevated`, `--radius-full`, 44px height
- Send button: `--accent-primary` circle 44×44px, white icon

**Desktop (1440px):**
- Left sidebar: navigation
- Middle panel (flex-grow): chat messages — max content width 680px, centered
- Top bar: fixed within middle panel
- Input bar: fixed bottom of middle panel
- Optional right panel (280px): profile info card of the person being chatted with — avatar, name, vibe tags, "View Profile" CTA

---

### SCREEN 08 — EXPLORE / DISCOVER

**Mobile (390px):**
- Background: `#FDF8F5`
- Header: "Explore" — Clash Display 700 32px `--text-primary`
- Filter chips: active = `--accent-primary-soft` bg + `--accent-primary` border + `--accent-primary` text. Inactive = `--bg-surface` + `--border-subtle` border + `--text-secondary` text
- Story avatar row: 64px circles, active ring = 2px gradient `#E8829A → #B09EE8`
- Grid: 2-column, 16px gap, `--radius-md` cards, `shadow/sm`

**Desktop (1440px):**
- Left sidebar: navigation
- Main content: 3-column card grid (card width: ~280px)
- Filter chips: horizontal bar below header, scrollable on tablet, all visible on desktop
- Story row: 8–10 avatars visible (horizontal scroll)
- Cards: 280×360px, `--radius-lg`, `shadow/sm`
- Hover state on card: `shadow/md` + scale(1.02) + overlay fades in with "View Profile" pill button

---

### SCREEN 09 — PROFILE VIEW (Expanded)

**Mobile (390px):**
- Header photo: 390×420px, full-width, `--radius-lg` bottom corners, parallax scroll
- Back button: `--bg-surface` 40px circle, `shadow/sm`
- Info block: `--bg-base` background
- PREMIUM badge: `--accent-gold-soft` bg pill, `--accent-gold` text
- Name: Clash Display 700 28px `--text-primary`
- Location: `--text-secondary` DM Sans 400 13px
- Stat pills: `--bg-surface`, `--border-subtle` border, `--text-secondary`
- Section headers: DM Sans 600 16px `--text-primary`
- Vibe tags: `--accent-primary-soft` bg, `--text-primary` text
- Action bar: same pastel 3-button spec

**Desktop (1440px):**
- Left sidebar: navigation
- Main content: 2-column within main area
  - Left: tall photo column (420px wide, photos stacked)
  - Right: all profile info — name, location, stats, about, vibe tags, photos grid
- Action bar: horizontal row in right column, below all content
- Sticky CTA bar at bottom of right column

---

### SCREEN 10 — SETTINGS

**Mobile (390px):**
- Background: `--bg-base`
- Header: "Settings" — Clash Display 700 28px `--text-primary`
- Section header: DM Sans 700 12px `--text-tertiary` uppercase letter-spacing 1px
- Row: 52px height, `--bg-surface`, `--border-subtle` separator
- Row label: DM Sans 500 15px `--text-primary`
- Row icon: 20px `--text-secondary`
- Chevron: `--text-tertiary`
- Toggle: `--accent-primary` active track, white thumb
- Premium row: left border 3px `--accent-primary`, `--accent-primary-pale` bg

**Desktop (1440px):**
- Left sidebar: navigation (same as all screens)
- Settings content: centered, max-width 640px, 80px margin-top
- Groups displayed as white `--bg-surface` cards with `--radius-md`, `shadow/sm`
- Each group = one card; rows inside with 1px `--border-subtle` separators

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 4 — COMPONENT SPECIFICATIONS (PASTEL UPDATED)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

### C1 — SWIPE CARD

| Property | Mobile | Desktop |
|---|---|---|
| Width | 350px | 460px |
| Height | 480px | 580px |
| Border Radius | 24px | 28px |
| Photo | full-bleed, object-cover | same |
| Overlay | `linear-gradient(to top, rgba(253,238,230,0.95) 0%, transparent 60%)` | same |
| Inner padding | 16px | 20px |
| Name font | Clash Display 700 28px white | 700 32px white |
| Stats pill bg | `rgba(255,240,245,0.90)` | same |
| Stats pill border | `rgba(237,217,232,0.60)` | same |
| Shadow | `shadow/lg` | `shadow/lg` |

---

### C2 — BUTTONS

**Primary CTA (Pastel Rose):**
| Property | Value |
|---|---|
| Background | `#E8829A` |
| Text | White, DM Sans 700, 14px, letter-spacing 1px |
| Height | 56px (mobile) / 52px (desktop) |
| Radius | `--radius-xl` (9999px) |
| Hover | `#D96882`, scale(1.01) |
| Shadow | `glow/rose`: `0 0 20px rgba(232,130,154,0.30)` |
| Pressed | `#D96882`, scale(0.97) |
| Disabled | `#F2D0D8`, `--text-tertiary` text, no shadow |

**Secondary CTA (Soft Peach):**
| Property | Value |
|---|---|
| Background | `#F4A261` |
| Shadow | `glow/peach`: `0 0 18px rgba(244,162,97,0.28)` |
| Else | Same as Primary |

**Outline Button:**
| Property | Value |
|---|---|
| Background | `transparent` |
| Border | 1.5px solid `#E8829A` |
| Text | `#E8829A`, DM Sans 600, 14px |
| Height | 56px |
| Radius | `--radius-xl` |
| Hover | `--accent-primary-pale` bg |

**Ghost/Pass Button:**
| Property | Value |
|---|---|
| Background | `#FFFFFF` |
| Border | 1.5px solid `#EDD9E8` |
| Icon | Broken heart, `#E8829A`, 24px |
| Height | 56px |
| Width | 100px (mobile), 120px (desktop) |
| Radius | `--radius-full` |
| Shadow | `shadow/xs` |

**Icon Button (Message):**
| Property | Value |
|---|---|
| Size | 56×56px |
| Background | `#F5EEF8` |
| Border | 1px `#EDD9E8` |
| Icon | Chat, `#B09EE8`, 20px |
| Radius | `--radius-full` |
| Hover | `#E8E0FA` bg |

---

### C3 — INPUT FIELDS

| Property | Value |
|---|---|
| Height | 52px |
| Background | `#FFFFFF` |
| Border | 1px `#EDD9E8` |
| Border (focus) | 1px `#D9A8D5` + `0 0 0 3px rgba(176,158,232,0.15)` focus ring |
| Border (error) | 1px `#E8829A` |
| Text | DM Sans 400 15px, `--text-primary` |
| Placeholder | DM Sans 400 15px, `--text-tertiary` |
| Border Radius | `--radius-sm` (10px) |
| Horizontal Padding | 16px |
| Label | DM Sans 600 12px, `--text-secondary`, margin-bottom 6px |
| Error text | DM Sans 400 11px, `--accent-primary` |

**OTP Box:**
| Property | Value |
|---|---|
| Size | 48×56px |
| Border | 1px `#EDD9E8` |
| Focus border | 1px `--accent-primary` + lavender ring |
| Background | `#FFFFFF` |
| Text | DM Sans 700 24px `--text-primary` centered |
| Radius | 10px |
| Gap | 10px |

---

### C4 — CHAT BUBBLES

**Sent:**
| Property | Value |
|---|---|
| Background | `#E8829A` (pastel rose) |
| Radius | 24px 24px 4px 24px |
| Text | White, DM Sans 400 14px |
| Padding | 12px 16px |
| Max Width | 260px (mobile), 360px (desktop) |

**Received:**
| Property | Value |
|---|---|
| Background | `#FFFFFF` |
| Border | 1px `#EDD9E8` |
| Radius | 24px 24px 24px 4px |
| Text | `--text-primary`, DM Sans 400 14px |
| Shadow | `shadow/xs` |

**Timestamp:**
| Property | Value |
|---|---|
| Font | DM Sans 400 10px `--text-tertiary` |
| Margin | 8px 0 |

---

### C5 — BOTTOM NAVIGATION BAR (Mobile)

| Property | Value |
|---|---|
| Height | 72px (includes 34px safe area) |
| Background | `#FFFFFF` |
| Border top | 1px `#EDD9E8` |
| Shadow | `0 -2px 12px rgba(44,32,56,0.06)` |
| Active icon | `--accent-primary` (#E8829A) |
| Active indicator | 2×20px bar above icon, `--accent-primary`, `--radius-full` |
| Inactive icon | `--text-tertiary` (#B5A8C0) |
| Label | DM Sans 500 10px — matches icon color |
| 5 tabs | Home, Matches, Explore, Messages, Profile |

---

### C5b — SIDEBAR NAVIGATION (Desktop)

| Property | Value |
|---|---|
| Width | 280px |
| Background | `#FFFFFF` |
| Border right | 1px `#EDD9E8` |
| Logo zone | 72px height, 24px padding |
| Nav item height | 48px |
| Nav item padding | 0 20px |
| Nav item radius | `--radius-sm` |
| Active item bg | `--accent-primary-soft` (#FADADD) |
| Active icon | `--accent-primary` |
| Active text | `--accent-primary`, DM Sans 600 15px |
| Inactive icon | `--text-tertiary` |
| Inactive text | `--text-secondary`, DM Sans 500 15px |
| User profile zone | pinned bottom, 80px height, 16px padding, avatar 40px + name + settings icon |
| Premium CTA | `--accent-primary-soft` bg, `--radius-md`, 16px padding, full-width inside sidebar with 16px margin |

---

### C6 — PROFILE ELEMENTS

**Avatar (Large — 120px):**
- 120×120px circle
- Ring: 3px gradient `linear-gradient(135deg, #E8829A, #B09EE8)`
- Photo: object-cover

**Avatar (Medium — 48px):**
- 48×48px circle, 2px gradient ring
- Online dot: 10px circle `#80C9B5`, absolute bottom-right

**Verified Badge:**
- 20×20px circle, `--accent-mint` (#80C9B5) bg
- Checkmark white 12px

**PREMIUM Badge:**
- Background: `--accent-gold-soft` (#FDF0D5) pill
- Star icon `#E8B86D` 12px + "PREMIUM" DM Sans 700 11px `#E8B86D`
- Padding: 4px 8px, radius-full

**Vibe Tag Pill (Default):**
- Background: `--bg-elevated` (#FFF0F5)
- Border: 1px `--border-subtle`
- Text: `--text-primary` DM Sans 500 13px
- Radius: `--radius-full`
- Padding: 8px 12px

**Vibe Tag Pill (Selected):**
- Background: `--accent-primary-soft` (#FADADD)
- Border: 1px `--accent-primary` (#E8829A)
- Text: `--accent-primary`

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 5 — FIGMA BUILD INSTRUCTIONS (RESPONSIVE)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### STEP 1 — PROJECT STRUCTURE

Create new Figma file: **"TAPS v2 — Pastel Responsive Design System"**

Pages:
- `🎨 Design System` — color swatches, type scale, spacing, radius, shadows
- `📱 Mobile Screens` — all 10 screens at 390×844
- `🖥 Desktop Screens` — all 10 screens at 1440×900
- `🔧 Components` — all reusable components with variants
- `🎬 Prototype Flow` — linked interactive flow

---

### STEP 2 — DEFINE COLOR STYLES (Figma)

In Design System page, create one color swatch per token:
```
Background/Base           #FDF8F5
Background/Surface        #FFFFFF
Background/Elevated       #FFF0F5
Background/Muted          #F5EEF8
Border/Subtle             #EDD9E8
Border/Active             #D9A8D5

Accent/Primary            #E8829A
Accent/Primary-Hover      #D96882
Accent/Primary-Soft       #FADADD
Accent/Primary-Pale       #FEF0F2

Accent/Secondary          #F4A261
Accent/Secondary-Soft     #FDE8D0
Accent/Secondary-Pale     #FFF5EC

Accent/Tertiary           #B09EE8
Accent/Tertiary-Alt       #8C78D4
Accent/Tertiary-Soft      #E8E0FA

Accent/Mint               #80C9B5
Accent/Mint-Soft          #D4F0E8

Accent/Gold               #E8B86D
Accent/Gold-Soft          #FDF0D5

Text/Primary              #2C2038
Text/Secondary            #7A6B8A
Text/Tertiary             #B5A8C0
Text/On-Accent            #FFFFFF
Text/Link                 #B09EE8
```
Right-click each rect → Create Style with the name above.

---

### STEP 3 — DEFINE TEXT STYLES

Create each type scale sample with exact font/weight/size/line-height/letter-spacing.
Right-click → Create Style → name as written in type scale table.

Install in Figma Desktop:
- Clash Display: download from fontshare.com → install locally
- DM Sans: Google Fonts → install via Figma Font Installer

---

### STEP 4 — BUILD COMPONENT LIBRARY

On Components page, build in this order:

**Primitives first:**
1. Color chip frames (one per token — reference swatches)
2. Type specimens (one per scale level)
3. Icon set (Phosphor Icons Figma plugin — install and insert)

**Atoms:**
4. Avatar — 3 sizes, with/without ring, with/without badge
5. Vibe Tag Pill — Default + Selected states
6. Stat Pill
7. PREMIUM Badge
8. Notification Badge

**Molecules:**
9. Input Field — Empty, Focused, Filled, Error
10. OTP Box — Empty, Focused, Filled
11. Button/Primary — Default, Hover, Pressed, Disabled
12. Button/Secondary — same states
13. Button/Outline — same states
14. Button/Ghost (Pass) — Default, Pressed
15. Button/Icon (Message) — Default, Pressed
16. Segment Toggle — Left Active, Right Active
17. Chat Bubble — Sent, Received + Timestamp

**Organisms:**
18. Swipe Card — Default, DraggingLeft, DraggingRight (Mobile + Desktop variants)
19. Action Bar (3 buttons) — Mobile + Desktop variants
20. Bottom Navigation Bar — 5 active states (Mobile only)
21. Sidebar Navigation — 5 active states (Desktop only)
22. Match Card (grid tile) — Standard
23. Message List Row — Default, Unread
24. Setting Row — Default, Toggle, Arrow, Danger
25. No Ghost Nudge Banner
26. 24hr Match Timer Pill

---

### STEP 5 — BUILD MOBILE SCREENS (390×844)

Grid: 4 columns, 20px margin, 16px gutter.
Build in sequence: Splash → OB1→OB2→OB3→OB4 → Login → OTP → Setup1→2→3 → Home → Match → Chat → Explore → ProfileView → Settings.

All screens: clip content ON. Background fill: `#FDF8F5`. Status bar 54px top.

---

### STEP 6 — BUILD DESKTOP SCREENS (1440×900)

Grid: 12 columns, 80px margin, 24px gutter.
For each screen, apply the 280px left sidebar first as a component, then build main content area.

Desktop-specific rules:
- All cards: elevated with `shadow/md`
- Hover states: must be documented as variant or interaction in prototype
- All CTAs: max-width 400px when inside forms
- Swipe card: 460×580px, centered in main content area

---

### STEP 7 — AUTO LAYOUT RULES

Apply to every component and screen section:
- Direction: Vertical for screens/lists, Horizontal for rows/bars
- Alignment: Center for button rows, Leading for form fields
- Gap: always use `--space-*` tokens from spacing scale
- Padding: always use `--space-*` tokens
- Resizing: Hug for components, Fill for full-width, Fixed for explicit sizes

---

### STEP 8 — PROTOTYPE FLOW

Mobile prototype:
- Splash → OB1 (auto, 2000ms delay, Smart Animate)
- OB pages → Next (Swipe Left, Smart Animate 300ms)
- Login → OTP (Slide Up, 300ms ease)
- OTP → Profile Setup (Slide Left)
- Setup → Home (Fade, 400ms)
- Swipe card Like → Match Screen (Custom: scale up + fade, 400ms)
- Match "CHAT NOW" → Chat (Slide Left)
- Bottom nav tabs → respective screens (Instant)

Desktop prototype:
- Sidebar nav links → respective screen states (Smart Animate, 200ms)
- Hover states on cards → hover variant (While Hovering)
- Match modal → appears as overlay (dissolve, 300ms)

---

### STEP 9 — RESPONSIVE ANNOTATION

Add a "Responsive Notes" frame beside each desktop screen explaining:
- Which components appear only on desktop (sidebar, right panel)
- Which components collapse into mobile equivalents (bottom nav vs sidebar)
- Content max-widths at each breakpoint

---

### STEP 10 — QA CHECKLIST

- [ ] Every color references a named style (no raw hex in layers)
- [ ] Every text references a named text style
- [ ] All spacing is multiple of 4 or 8
- [ ] Touch targets min 44×44px (mobile), click targets min 32×32px (desktop)
- [ ] All interactive elements have hover/pressed variant
- [ ] Pastel overlay on swipe card is legible (name + age readable at all times)
- [ ] Status bar (mobile) 54px safe zone respected
- [ ] Desktop sidebar fixed at 280px across all screens
- [ ] No component instance is detached without documentation reason
- [ ] All cards have correct shadow level applied
- [ ] Gradient rings applied to all avatars in match/message contexts
- [ ] Both light-mode only — no dark mode toggle in this version

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## SECTION 6 — TAPS BRAND IDENTITY (PASTEL UPDATED)
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Brand Gradient (v2 Pastel):**
```
linear-gradient(135deg, #E8829A 0%, #B09EE8 50%, #F4A261 100%)
```
Blush Rose → Soft Lavender → Warm Peach

**Logo:**
- Clash Display 700 wordmark "TAPS"
- Gradient fill applied to letterforms (not outline)
- Available versions: gradient fill, `--text-primary` solid, white (for use on photo backgrounds)

**Pastel Vibe:**
- The overall UI should feel like: a soft Sunday morning, romantic but confident, Instagram-aesthetic meets Gen-Z dating culture
- Every screen should have slight warmth — no cold blues, no harsh greens
- Whites are always warm (`#FFFFFF` only on surfaces, never as background base — use `#FDF8F5`)

**Iconography:**
- Phosphor Icons, regular weight (not bold, not thin)
- 20px standard, 24px nav, 16px inline
- Color: always from token system (`--text-secondary` default, `--accent-primary` active)

---

"Now analyze the design reference link visually, then generate a complete Figma-ready UI prompt and begin structuring the design system and layouts without asking any clarifying questions."
