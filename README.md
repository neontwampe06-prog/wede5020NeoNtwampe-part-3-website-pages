# Clothes For All(CFA)
- **Developer**: Neo Ntwampe
- **Student Number**: ST10516094
- **Group**: 1
- **Course**: WEDE5020
- **Subject**: Web Development

## Links
- GitHub Repository: https://github.com/EMGPSD/wede5020-2026-part-3-neontwampe06-prog

---

## Project Overview
The site created for this project is a 5-page web site for a South African Non-Profitable Organisation called Clothes For All, which recycles good quality pre-loved clothes to impoverished communities. The organisation started in 2018 and currently has Collection Centres in Johannesburg, Cape Town, Durban and Gqeberha, serving communities in Gauteng, Eastern Cape and KwaZulu-Natal.

Clothes For All is a non-profit organisation that collects, sorts and redistributes good-quality pre-loved clothing to underprivileged families, school learners and matriculants across Gauteng, the Eastern Cape and KwaZulu-Natal.

This repository contains a multi-page responsive website built for the organisation.

### Pages
| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, impact stats, call-to-action |
| About Us | `about.html` | History, mission, vision, team |
| Our Work | `services.html` | Programmes, locations, FAQs |
| Get Involved | `enquiry.html` | Enquiry form (donate / volunteer / sponsor) |
| Contact | `contact.html` | Collection centre addresses + contact form |

### Folder Structure
```
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css          ← External stylesheet (Part 2)
├── js/
│   └── main.js            ← Footer year, form validation, and interactions
├── images/
│   ├── hands-together-community-support.jpg
│   ├── impact-chart.svg
│   ├── team-member-neo.jpg
│   ├── team-member-lerato.jpg
│   ├── team-member-johnathan.jpg
│   ├── donation-volunteers.jpg
│   ├── community-aid.jpg
│   ├── donation-bin.jpg
│   └── sorting-clothes.jpg
├── screenshots/
│   ├── desktop-home.png
│   ├── tablet-about.png
│   ├── mobile-contact.png
│   └── mobile-enquiry.png
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## Website goal and objectives

### Goals:
The main goal of this website is to, increase awareness, generate enquiries, recruit volunteers, attract sponsors and provide information.

## Objectives:
- Raise Awareness: Get the public to know about clothing poverty in South Africa, and what is being done about it by CFA.
- Attract and register Volunteers: to help in collections, sorting and distribution activities
- Make it easy to donate: Make it easy to donate clothes and money.
- Establish Partnerships: Secure business support and involvement, and community partners
- Share information: Provide clear information on how the organisation is making an impact, how it is being shared and stories from those who are benefiting.

### Implemented Features
- Five linked pages: Home, About, Our Work, Get Involved, and Contact.
- Contact and enquiry forms with browser-side validation, spam honeypots and HTTPS submission through FormSubmit. Verify recipient activation and spam settings in the service before launch.
- Embedded, lazy-loaded Google Maps for all four collection centres.
- An interactive FAQ accordion and community photo gallery with a lightbox on the Our Work page.
- Page-specific titles and meta descriptions, descriptive image alt text, and image loading optimizations.
- A restrictive Content Security Policy on each HTML page.
- `robots.txt` and an XML sitemap for the GitHub Pages site URL; verify the deployed URL matches before submitting it to search engines.
- Facebook, LinkedIn and WhatsApp share links on the home page.
- Responsive layouts and local images.

### Planned / Future Features
The following items are not currently implemented: testimonials, blog/news section, branded social media profiles and active off-site promotion/backlink outreach, a separate volunteer registration workflow, and an online donation/payment portal.

---

## Timeline and milestones

| Milestone | Description | Duration | Target Date |
|-----------|-------------|----------|-------------|
| Phase 1: Discovery & Planning | Finalise requirements, gather content, design wireframes | 1 week | Week 1 (24-30 Aug 2026) |
| Phase 2: Design | Create visual mock-ups, finalise colour scheme and typography | 1.5 weeks | Weeks 2-3 (31 Aug - 13 Sept) |
| Phase 3: Development | Front-end and back-end development, VS setup | 2 weeks | Weeks 4-5 (14-27 Sept) |
| Phase 4: Content Migration | Upload text, images, and populate blog/news section | 1 week | Week 6 (28 Sept - 4 Oct) |
| Phase 5: Testing | Cross-browser testing, mobile responsiveness, form testing | 1 week | Week 7 (5-11 Oct) |
| Phase 6: Launch | Deploy to production, final QA, go-live | 3 days | Week 8 (12-14 Oct) |
| Phase 7: Post-Launch | Monitoring, bug fixes, user feedback collection | Ongoing | From 15 Oct 2026 |

---

## Sitemap

![Sitemap](https://github.com/user-attachments/assets/c103a145-05b4-476e-960b-e21cd30d6f79)

---

## Part 2 – CSS Styling & Responsive Design

### External Stylesheet
- All pages are linked to a single external stylesheet: `css/style.css`
- Link element used on every page:
  ```html
  <link rel="stylesheet" href="css/style.css">
  ```

### Design Decisions (Desktop)
- **Colour palette** taken from the supplied impact-chart SVG:  
  `#30665E` (deep teal), `#52857C`, `#9DCCC2`, `#C3B492` (taupe)
- **Typography**: system font stack, clear hierarchy (h1–h4), comfortable line-height
- **Layout**: Flexbox (`.clearfix` + `.col`) for multi-column card grids
- **Visual styles**: cards with subtle shadows, rounded corners, hover lift effect
- **Interactive elements**: `:hover`, `:focus` and `:active` states on links and buttons
- **Forms**: consistent focus rings and success-message styling

### Responsive Design
Breakpoints chosen:
| Breakpoint | Target |
|------------|--------|
| `max-width: 900px` | Tablet / small laptop |
| `max-width: 600px` | Mobile |
| `max-width: 400px` | Very small phones |

Techniques used:
- Relative units (`rem`, `%`)
- Flexible containers (`max-width` + `width: 100%`)
- Flexbox that wraps to single column on small screens
- Navigation that stacks vertically on mobile
- Images scale with `max-width: 100%`
- Map embeds keep aspect ratio via padding-bottom trick

### How to Test Responsiveness
1. Open any page in a modern browser.
2. Open Developer Tools (F12) → Toggle device toolbar.
3. Test at least the following widths:
   - Desktop: 1200 px+
   - Tablet: 768–900 px
   - Mobile: 375–600 px
4. Confirm:
   - Navigation remains usable
   - Cards stack into a single column
   - Forms and buttons remain readable
   - No horizontal scroll appears

### Screenshot Evidence

Screenshots captured using browser developer tools / headless Chrome at the required breakpoints:

#### Desktop (1280 × 900) – Home page
![Desktop Home](screenshots/desktop-home.png)

#### Tablet (768 × 1024) – About Us page
![Tablet About](screenshots/tablet-about.png)

#### Mobile (375 × 812) – Contact page
![Mobile Contact](screenshots/mobile-contact.png)

#### Mobile (375 × 812) – Get Involved / Enquiry page
![Mobile Enquiry](screenshots/mobile-enquiry.png)

These screenshots demonstrate:
- Multi-column layout on desktop
- Stacked single-column layout on tablet and mobile
- Readable navigation and forms at all breakpoints
- No horizontal scrolling

---

## Changelog: Code Changes from Part 1 to Part 2

This comparison records the implementation changes between the Part 1 source in `clothesforall3/` and the Part 2 website. The Part 1 pages already had the five-page structure, navigation, content sections, forms, maps, image references, and `js/main.js`; the responsive stylesheet and screenshot evidence were added for Part 2.

### 2026-10-05 — Part 2 styling, responsive design, and content corrections

#### HTML pages

| File | Changes from Part 1 to Part 2 |
|------|-------------------------------|
| `index.html` | Replaced the externally hosted Unsplash hero image with the local `images/hannah-busing-Zyx1bK9mqmA-unsplash.jpg` file and updated its alt text to describe the image. Added the local `images/donation-bin.jpg` image to the ways-to-help section and centered its Get Involved call-to-action. Refined the hero description and section wording. |
| `about.html` | Rewrote the history, mission, vision, and audience copy. Fixed the unclosed Lerato `<h3>` element. Replaced the invalid `clothesforall3/images/...` team-photo paths and filenames containing spaces with the existing `images/team-member-neo.jpg`, `images/team-member-lerato.jpg`, and `images/team-member-johnathan.jpg` paths. Updated the team image alt text and retained the Part 1 team members and roles. |
| `services.html` | Replaced references to missing `Clothing Donation.avif` and `community-group.svg` files with local `donation-volunteers.jpg` and `community-aid.jpg` images and descriptive alt text. Revised programme descriptions and added inline spacing to the FAQ cards and styling to the distribution-area list. |
| `enquiry.html` | Replaced the missing `Take part.avif` hero image with the local `images/sorting-clothes.jpg` image and descriptive alt text. Retained the enquiry form fields and donation, volunteer, and sponsor choices. |
| `contact.html` | Kept the Part 1 collection-centre details, map embeds, and contact form; added visible Google Maps attribution below the embedded Johannesburg and Cape Town maps. |
| All five HTML pages | Added a link to the shared `css/style.css` stylesheet. Preserved the existing viewport meta tags and shared navigation, footer, and `js/main.js` include. |

#### New stylesheet and responsive layouts

- Added `css/style.css`; Part 1 did not include this stylesheet.
- Added a universal reset (`box-sizing`, margin, and padding), a shared system-font stack, a base type scale, and consistent colours derived from the impact-chart palette.
- Styled the shared header/navigation, hero sections, content sections, cards, buttons, team profiles, forms, map containers, and footers.
- Used Flexbox for navigation, card columns, and footer layouts; added hover, focus, and active states for interactive elements.
- Added responsive rules at 900px, 600px, and 400px to adjust typography, navigation, spacing, columns, buttons, and map proportions for tablet and mobile widths.
- Made images scale within their containers and made embedded maps retain a responsive aspect ratio.

#### JavaScript

- `js/main.js` was already present in Part 1 and was carried forward unchanged in Part 2.
- It updates the footer year and displays a client-side thank-you message after form submission. It prevents the form from sending data to a server; form processing is not implemented.

#### Images and submission evidence

- Added local programme/community/donation images: `community-aid.jpg`, `donation-bin.jpg`, `donation-volunteers.jpg`, and `sorting-clothes.jpg`.
- Renamed the three team-photo files from names containing spaces to `team-member-neo.jpg`, `team-member-lerato.jpg`, and `team-member-johnathan.jpg`, and corrected their HTML paths.
- Removed the obsolete Part 1 image assets `Clothing Donation.avif`, `Take part.avif`, and `team members.jpg` from the Part 2 image set. The original hero image file and `impact-chart.svg` remain in use.
- Added `screenshots/desktop-home.png`, `screenshots/tablet-about.png`, `screenshots/mobile-contact.png`, and `screenshots/mobile-enquiry.png`, with the screenshot evidence embedded in this README.
- Added this file-by-file code comparison and the Part 2 CSS/responsive-design documentation to the README.

---

## How to Run Locally

1. Clone or download this repository.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. No build step or server is required for basic viewing.
4. (Optional) Use a local server such as VS Code Live Server for the best experience with maps.

---

## Browser Compatibility

Tested / designed for:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (desktop & iOS)

---

## Credits

- Colour palette derived from the supplied `impact-chart.svg`
- Hero image: Hannah Busing (Unsplash) – local copy included
- Team portrait placeholders: original project assets
- All other content written for Clothes For All NPO

---
