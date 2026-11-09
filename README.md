# Clothes For All (CFA)
- **Developer**: Neo Ntwampe
- **Student Number**: ST10516094
- **Group**: 1
- **Course**: WEDE5020
- **Subject**: Web Development

## Links
- GitHub Repository: https://github.com/EMGPSD/wede5020-2026-part-3-neontwampe06-prog

---

## Project Overview
This project is a five-page website for Clothes For All. The organisation collects and shares good-quality second-hand clothing with families, learners and communities in South Africa. Its collection centres are in Johannesburg, Cape Town, Durban and Gqeberha.

### Pages
| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Introduction and ways to help |
| About Us | `about.html` | Organisation history and team |
| Our Work | `services.html` | Clothing programmes and FAQs |
| Get Involved | `enquiry.html` | Form for donors and volunteers |
| Contact | `contact.html` | Centre addresses, maps and contact form |

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

## Website goals

The website helps people learn about Clothes For All and find out how to donate clothing, volunteer or contact the organisation.

### What the website includes
- Five linked pages: Home, About, Our Work, Get Involved, and Contact.
- Forms that check entries and send submissions through FormSubmit. The FormSubmit email address must be activated for delivery to work.
- Google Maps for the four collection centres.
- An FAQ that opens when clicked and a photo gallery on the Our Work page.
- Page titles and descriptions, image descriptions for screen readers, and sharing information for the home page.
- Basic search files (`robots.txt` and `sitemap.xml`).
- Pages that adjust to different screen sizes, with keyboard focus styles and support for reduced motion.

### Planned / Future Features
The website does not yet have testimonials, a news section, official social media profiles, online donations, or a separate volunteer sign-up. The sharing buttons let visitors share the website, but the organisation still needs to promote it. Before launch, check the website address and test that the forms work.

---

## Timeline and milestones

| Milestone | Description | Duration | Target Date |
|-----------|-------------|----------|-------------|
| Phase 1: Planning | Gather requirements and content | 1 week | Week 1 (24-30 Aug 2026) |
| Phase 2: Design | Choose the layout, colours and fonts | 1.5 weeks | Weeks 2-3 (31 Aug - 13 Sept) |
| Phase 3: Development | Build the website | 2 weeks | Weeks 4-5 (14-27 Sept) |
| Phase 4: Content | Add text and images | 1 week | Week 6 (28 Sept - 4 Oct) |
| Phase 5: Testing | Check the pages, forms and mobile layout | 1 week | Week 7 (5-11 Oct) |
| Phase 6: Launch | Publish and check the website | 3 days | Week 8 (12-14 Oct) |
| Phase 7: Updates | Fix problems and make improvements | Ongoing | From 15 Oct 2026 |

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

### Design
- The colours come from the supplied impact chart: `#30665E`, `#52857C`, `#9DCCC2` and `#C3B492`.
- The site uses a standard system font and different heading sizes.
- Flexbox is used to lay out the cards, navigation and footer.
- Cards and buttons share the same colours and rounded style.
- Links and buttons change appearance when hovered or focused.
- Forms show focus styles and messages when something needs attention.

### Responsive Design
Breakpoints chosen:
| Breakpoint | Target |
|------------|--------|
| `max-width: 900px` | Tablet / small laptop |
| `max-width: 600px` | Mobile |
| `max-width: 480px` | Single-column image gallery |
| `max-width: 400px` | Very small phones |

The layout uses flexible widths, wrapping columns, and images that shrink to fit the screen. The navigation stacks on small screens. The gallery changes from four columns to two and then one. Keyboard focus remains visible, and animations are reduced if a visitor has requested less motion in their device settings.

### How to Test Responsiveness
1. Open a page in a browser and open Developer Tools.
2. Turn on the device toolbar.
3. Check desktop, tablet and phone widths.
4. Make sure the menu, cards and forms fit and that the page does not scroll sideways.

### Part 2 Screenshot Evidence

The screenshots below document the Part 2 responsive layout. They predate the Part 3 interactive features.

Screenshots captured using browser developer tools / headless Chrome at the required breakpoints:

#### Desktop (1280 × 900) – Home page
![Desktop Home](screenshots/desktop-home.png)

#### Tablet (768 × 1024) – About Us page
![Tablet About](screenshots/tablet-about.png)

#### Mobile (375 × 812) – Contact page
![Mobile Contact](screenshots/mobile-contact.png)

#### Mobile (375 × 812) – Get Involved / Enquiry page
![Mobile Enquiry](screenshots/mobile-enquiry.png)

These Part 2 screenshots demonstrate:
- Multi-column layout on desktop
- Stacked single-column layout on tablet and mobile
- Readable navigation and forms at all breakpoints
- No horizontal scrolling

---

## Part 2 History: Changes from Part 1

This section is a historical record of changes between the Part 1 source in `clothesforall3/` and the Part 2 website. The form and JavaScript notes below describe the site at that time; see the Part 3 section for current behaviour.

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
- Added responsive rules at 900px, 600px, and 400px to adjust typography, navigation, spacing, columns, buttons, and map proportions for tablet and mobile widths. A 480px gallery breakpoint was added in Part 3.
- Made images scale within their containers and made embedded maps retain a responsive aspect ratio.

#### JavaScript

- `js/main.js` was already present in Part 1 and was carried forward unchanged in Part 2.
- At the end of Part 2, the script updated the footer year and displayed a client-side message; form processing was not implemented. Part 3 added validation and FormSubmit processing.

#### Images and submission evidence

- Added local programme/community/donation images: `community-aid.jpg`, `donation-bin.jpg`, `donation-volunteers.jpg`, and `sorting-clothes.jpg`.
- Renamed the three team-photo files from names containing spaces to `team-member-neo.jpg`, `team-member-lerato.jpg`, and `team-member-johnathan.jpg`, and corrected their HTML paths.
- Removed the obsolete Part 1 image assets `Clothing Donation.avif`, `Take part.avif`, and `team members.jpg` from the Part 2 image set. The original hero image file and `impact-chart.svg` remain in use.
- Added `screenshots/desktop-home.png`, `screenshots/tablet-about.png`, `screenshots/mobile-contact.png`, and `screenshots/mobile-enquiry.png`, with the screenshot evidence embedded in this README.
- Added this file-by-file code comparison and the Part 2 CSS/responsive-design documentation to the README.

---

## Part 3 – Forms, maps and page updates

### Changes made
- Added checks to the contact and enquiry forms. They show errors for missing or invalid information.
- Connected the forms to FormSubmit. FormSubmit needs to approve the recipient email address before messages can be delivered. Do not enter sensitive information in the forms.
- Added an FAQ menu and a photo gallery that opens larger images on `services.html`.
- Added maps for the Durban and Gqeberha centres to `contact.html`.
- Added page titles and short descriptions for search results.
- Made the large home page photo smaller so it loads faster.
- Added basic search-engine files, page security settings and spam-catching fields for the forms.
- Added buttons for sharing the home page on Facebook, LinkedIn and WhatsApp. These are not official organisation accounts.
- Added clearer keyboard focus styles and support for reduced motion.

### Part 2 feedback addressed
- **Same visual style:** the new parts use the site's existing colours and styles.
- **Keyboard use:** links, buttons and form fields show a clear outline when selected with a keyboard.
- **Small screens:** the gallery changes its layout for phones and tablets. Check it at different screen sizes before release.

### Validation performed
- Checked the JavaScript for syntax errors.
- Checked the changes for formatting errors.
- Checked that the sitemap lists all five pages.
- Checked the image paths and form spam fields.
- The live site and form delivery still need to be tested after publishing.

### Part 2 to Part 3 changelog
| File | Part 3 changes |
|------|----------------|
| `index.html` | Added page information for search results, image loading settings, and sharing buttons. Updated the homepage image path. |
| `about.html`, `services.html`, `enquiry.html`, `contact.html` | Added page titles, descriptions and page links for search engines. |
| `contact.html` | Added Durban and Gqeberha map embeds. |
| `enquiry.html`, `contact.html`, `js/main.js` | Added client-side form validation, inline error feedback and FormSubmit AJAX delivery. |
| `enquiry.html`, `contact.html` | Added form honeypot fields to reduce automated spam. |
| `services.html`, `js/main.js` | Added the FAQ accordion and interactive image lightbox gallery. |
| `css/style.css` | Added styles for validation, accordion, gallery, lightbox, social share links, visible keyboard focus and reduced motion; added responsive gallery breakpoints. |
| `images/hands-together-community-support.jpg` | Renamed and optimized the homepage image. |
| `robots.txt`, `sitemap.xml` | Added crawl rules and a sitemap for the configured GitHub Pages URL. |
| `README.md` | Updated current feature descriptions, recorded the Part 2 feedback and Part 3 changes, and added references. |

---

## How to Run Locally

1. Clone or download this repository.
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
3. No build step or server is required for basic viewing.
4. (Optional) Use a local server such as VS Code Live Server for the best experience with maps.

---

## Browser Compatibility

Designed for recent versions of:
- Google Chrome (latest)
- Mozilla Firefox (latest)
- Microsoft Edge (latest)
- Safari (desktop & iOS)

---

## AI Assistance
This README structure and layout was completed with assistance from AI tools.

---

## Credits

- Colour palette derived from the supplied `impact-chart.svg`
- Homepage image: photograph by Hannah Busing, sourced from Unsplash; local resized copy included
- Team portrait placeholders: original project assets
- All other content written for Clothes For All NPO

## References

- FormSubmit. “FormSubmit.” https://formsubmit.co/ (form processing documentation; accessed 9 November 2026).
- Google. “Google Maps.” https://maps.google.com/ (embedded collection-centre maps; accessed 9 November 2026).
- MDN Web Docs. “Content Security Policy (CSP).” https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP (accessed 9 November 2026).
- MDN Web Docs. “HTML attribute: loading.” https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading (accessed 9 November 2026).
- Sitemaps.org. “Sitemaps XML format.” https://www.sitemaps.org/protocol.html (accessed 9 November 2026).
- Unsplash. “Hannah Busing.” https://unsplash.com/@hannahbusing (photo credit; accessed 9 November 2026).

---
