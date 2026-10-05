# Clothes For All — Website

A 5-page website built from the *Clothes For All Website Proposal*
(ST10516094, Neo Ntwampe), following the project's colour palette,
typography and page structure requirements.

## File and folder structure

```
clothesforall/
├── index.html         Homepage — hero, intro, calls to action, impact stats
├── about.html          About Us — history, mission, vision, team members
├── services.html       Our Work — programmes, distribution areas, FAQ
├── enquiry.html         Enquiry / Get Involved — donate, volunteer or sponsor form
├── contact.html         Contact — locations, embedded maps, contact form
├── css/
│   └── style.css          All site styling (Part 2)
├── js/
│   └── main.js             Mobile nav toggle, footer year, form confirmation
├── images/                  SVG illustrations, including a mobile hero variant
└── README.md                 This file
```

## Design reference (Section 8 of the proposal)

- **Colours:** Pale sage green `#E4E5CF` (background), Tender Taupe
  `#C3B492` (secondary background / footer), Pastel Turquoise `#9DCCC2`
  (donate/volunteer buttons), Slate Green `#52857C` (headlines & body),
  Deep Spruce Green `#30665E` (nav bar & major titles).
- **Typography:** Montserrat (headings), Open Sans (body text), Lora
  (feature/quote-style titles).
- **Style:** Professional, modern, friendly, minimalist.

## Part 2 — CSS styling and responsive design

`css/style.css` is linked from every page and covers:

- **Reset + base style:** a universal box-sizing/margin/padding reset,
  and base rules for font family, font size, colour scheme and spacing.
- **Typography scale:** a consistent set of font sizes (0.875rem up to
  2.75rem), font weights, line-heights and letter-spacing, built with
  Montserrat for headings and Open Sans for body text.
- **Layout:** Flexbox for one-dimensional rows (the nav bar, the hero
  buttons), and CSS Grid for two-dimensional layouts (card grids, the
  team grid, and a named `grid-template-areas` layout for the footer).
- **Visual styles:** colour, background-color, border and box-shadow
  are used throughout, with `:hover`, `:focus` and `:active` states on
  links, buttons and form fields.
- **Responsive design:** three breakpoints —
  - Desktop: 1025px and above (default styles)
  - Tablet: 769px–1024px (two-column sections collapse to one column,
    the hero stacks vertically, the footer grid reflows)
  - Mobile: 768px and below (the nav becomes a toggled menu, all grids
    go to a single column, heading sizes scale down)

  Spacing and type use relative units (`rem`, `em`, `%`) rather than
  fixed pixel values, so the layout scales smoothly between breakpoints.
- **Responsive images:** the homepage hero image uses a `<picture>`
  element with `srcset`/`sizes` so a square-cropped version
  (`hero-donation-mobile.svg`) is served on narrow screens, and the
  wider illustration on tablet/desktop. Every other image uses
  `max-width: 100%` so it scales fluidly within its container.

### Testing

The site was tested by resizing the browser window and using the
device toolbar in browser dev tools at common desktop, tablet and
mobile widths, checking that the navigation, grids and forms behave
correctly at each breakpoint. **Add your own screenshots here** — in
Chrome or Edge, open dev tools (F12), toggle the device toolbar, and
capture the homepage at roughly 1440px (desktop), 768px (tablet) and
375px (mobile), then paste them into this section before submitting.

## Changelog

### Part 2 (this submission)
- Added `css/style.css` and linked it from all five pages, covering
  reset, base style, typography scale, Flexbox/Grid layout, visual
  styling with hover/focus/active states, and responsive design across
  desktop/tablet/mobile breakpoints (see above for details).
- Rebuilt `js/main.js`, which was missing from the Part 1 submission —
  it was referenced by every page but never actually included.
- Added a `<picture>`/`srcset` responsive image on the homepage hero,
  with a dedicated mobile-cropped SVG (`images/hero-donation-mobile.svg`).
- Added a `.stat .label` CSS rule that was missing, so the impact-stat
  captions on the homepage are now styled.

### Part 1 corrections
- Re-checked all internal navigation links across the five pages.
- Re-checked image `alt` text for descriptiveness.
