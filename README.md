# Clothes For All(CFA)
- **Developer**: Neo Ntwampe
- **Student Number**: ST10516094
- **Group**: 1
- **Course**: WEDE5020
- **Subject**: Web Development

## Links
- GitHub Repository: https://github.com/EMGPSD/wede5020-2026-wede5020-part-1-neontwampe06-prog

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
│   └── main.js            ← Footer year + form thank-you message
├── images/
│   ├── hannah-busing-Zyx1bK9mqmA-unsplash.jpg
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

### Key Features and functionality:
- Contact Form
- Enquiry Form
- Image Gallery
- Embedded Map
- Testimonials
- Frequently Asked Questions
- Blog / News Section
- Social Media Links
- Volunteer Registration Form
- Donation Portal (integration with payment options)

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

## Changelog (Feedback from Part 1)

All corrections made after Part 1 feedback are recorded below.

### 2026-10-05 – Part 2 implementation & Part 1 fixes

| Change | Reason / Feedback addressed |
|--------|-----------------------------|
| Created external `css/style.css` and linked it on every HTML page | Required for Part 2 (external stylesheet) |
| Fixed broken `<h3>` tag on About page (Lerato Phahle) | Invalid HTML – missing closing tag |
| Corrected image paths for team members (removed non-existent `clothesforall3/` folder) | Broken images |
| Standardised all image references to the `images/` folder | Consistency |
| Replaced external Unsplash URL on Home with local image | Reliability / offline viewing |
| Added missing `</h3>` and proper structure for team cards | Markup validity |
| Removed non-existent image references (`Clothing Donation.avif`, `community-group.svg`, `Take part.avif`) | Prevent 404 errors |
| Improved semantic structure (consistent section classes) | Better cascading & maintainability |
| Added viewport meta tag was already present; confirmed on all pages | Mobile readiness |
| Added sticky header and visual hierarchy via CSS | Desktop visual quality |
| Implemented Flexbox card grids and responsive media queries | Layout + Responsive Design requirements |
| Enhanced form styling and success-message class | Usability |
| Updated `main.js` path references remain correct | No change needed |
| Added four free stock images (Pexels) for programmes, community and donation sections | Visual enrichment of the site |
| Captured and embedded desktop, tablet and mobile screenshots in README | Part 2 responsive design evidence requirement |

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

**End of README**
