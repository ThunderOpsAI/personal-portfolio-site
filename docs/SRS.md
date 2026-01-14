# Software Requirements Specification (SRS)

## Project: Personal Portfolio Site

**Version:** 1.0  
**Document Owner:** James Jones  
**Last Updated:** 14 January 2026  
**Status:** Draft

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [System Features and Requirements](#3-system-features-and-requirements)
4. [External Interface Requirements](#4-external-interface-requirements)
5. [Non-Functional Requirements](#5-non-functional-requirements)
6. [Data Requirements](#6-data-requirements)
7. [Constraints and Assumptions](#7-constraints-and-assumptions)
8. [Acceptance Criteria](#8-acceptance-criteria)
9. [Future Enhancements](#9-future-enhancements)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document provides a comprehensive description of the requirements for the Personal Portfolio Website. It is intended for use by the developer (James Jones) and potential employers/collaborators reviewing the project on GitHub.

The portfolio website will serve as a professional online presence, showcasing technical projects, skills, and providing contact mechanisms for recruiters and collaborators.

### 1.2 Intended Audience

- **Primary:** James Jones (Developer/Owner)
- **Secondary:** Recruiters, hiring managers, technical reviewers, potential collaborators
- **Tertiary:** Peer developers reviewing code quality and architecture

### 1.3 Project Scope

The Personal Portfolio Site is a responsive, static web application built with HTML, CSS, and JavaScript. The site will present professional information, project showcases, and contact options in a clean, accessible, and performant interface.

**In Scope for V1:**
- Single-page application with smooth section navigation
- Hero/landing section with call-to-action elements
- About section with professional summary
- Projects showcase (minimum 3 projects)
- Skills and technology stack display
- Resume viewing and download functionality
- Contact form with client-side validation
- Light/dark mode toggle
- Responsive design (mobile, tablet, desktop)
- Deployment to free static hosting platform

**Out of Scope for V1:**
- Content Management System (CMS)
- Blog functionality
- User authentication or accounts
- Backend API or database
- Advanced analytics integration
- Payment or subscription features
- Multi-language support

### 1.4 Definitions, Acronyms, and Abbreviations

- **SPA:** Single Page Application
- **CTA:** Call To Action
- **UI:** User Interface
- **UX:** User Experience
- **FR:** Functional Requirement
- **NFR:** Non-Functional Requirement
- **V1:** Version 1 (initial release)
- **V2:** Version 2 (future enhancements)

---

## 2. Overall Description

### 2.1 Product Perspective

The Personal Portfolio Site is a standalone web application that operates independently of other systems. It will be hosted on a static hosting platform (GitHub Pages, Netlify, or Vercel) and accessed via standard web browsers.

**System Context:**
- **Client-side:** HTML, CSS, JavaScript (no framework dependencies)
- **Hosting:** Static file hosting service (free tier)
- **Version Control:** Git repository (GitHub)
- **Contact Mechanism:** mailto: links (no backend required for V1)

### 2.2 User Classes and Characteristics

| User Class | Characteristics | Primary Goals |
|------------|----------------|---------------|
| **Recruiters/Hiring Managers** | Non-technical or semi-technical, time-constrained, mobile and desktop users | Quickly assess qualifications, view projects, access resume, initiate contact |
| **Technical Reviewers** | Software engineers, technical leads, code reviewers | Evaluate code quality, architecture decisions, technical skills, project complexity |
| **Peers/Collaborators** | Fellow developers, potential project partners | Explore projects, understand tech stack, find contact information |
| **General Visitors** | Varied technical background, diverse device usage | Learn about James Jones, view work samples, navigate easily |

### 2.3 Operating Environment

- **Client Platforms:** Modern web browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- **Devices:** Desktop computers, tablets, smartphones
- **Screen Sizes:** 320px (mobile) to 2560px+ (large desktop)
- **Network:** Works on standard broadband and mobile data connections
- **Hosting:** Static hosting platform with HTTPS support

### 2.4 Design and Implementation Constraints

- **Technology Stack:** HTML5, CSS3, JavaScript (ES6+) only - no frameworks or build tools required
- **Browser Compatibility:** Must support all modern browsers without polyfills
- **Performance:** Initial page load must be under 2 seconds on typical broadband
- **Cost:** All services and tools must have free tier options
- **Accessibility:** Must meet WCAG 2.1 Level AA guidelines
- **Repository:** Public GitHub repository with clean commit history

### 2.5 Assumptions and Dependencies

**Assumptions:**
- Users have JavaScript enabled in their browsers
- Users have stable internet connections
- The resume PDF will be under 2MB in size
- Project content will be manually updated (no automation required for V1)

**Dependencies:**
- GitHub for version control and potential hosting (GitHub Pages)
- Browser support for CSS Grid, Flexbox, and ES6 JavaScript
- User's email client for mailto: functionality

---

## 3. System Features and Requirements

### 3.1 Navigation System

**Priority:** High  
**Description:** Top-level navigation allowing users to quickly access different sections of the portfolio.

#### Functional Requirements

**FR-1.1:** The site SHALL display a fixed or sticky navigation bar at the top of the page containing links to all major sections (Home, About, Projects, Skills, Contact).

**FR-1.2:** The navigation bar SHALL remain accessible while scrolling through the page.

**FR-1.3:** Navigation links SHALL trigger smooth scrolling to the corresponding section when clicked.

**FR-1.4:** The navigation SHALL visually indicate the currently active section as the user scrolls.

**FR-1.5:** On mobile devices (screen width < 768px), the navigation SHALL transform into a hamburger menu with expandable/collapsible functionality.

**FR-1.6:** The navigation bar SHALL include a theme toggle button for switching between light and dark modes.

---

### 3.2 Hero Section

**Priority:** High  
**Description:** The landing section that provides immediate impression and calls-to-action.

#### Functional Requirements

**FR-2.1:** The hero section SHALL display the following information prominently:
- Full name (James Jones)
- Professional title (e.g., "Computer Science Student | AI/Data/Web Developer")
- Brief value proposition or tagline (1-2 sentences)

**FR-2.2:** The hero section SHALL include two primary CTA buttons:
- "View Projects" button that scrolls to the Projects section
- "Contact Me" button that scrolls to the Contact section

**FR-2.3:** The hero section SHALL display social media links with icons for:
- GitHub profile
- LinkedIn profile
- Email (mailto: link)

**FR-2.4:** Social media links SHALL open in new browser tabs (except email).

**FR-2.5:** The hero section SHALL be visually distinct and occupy at least 80% of the initial viewport height.

---

### 3.3 About Section

**Priority:** High  
**Description:** Professional summary and background information.

#### Functional Requirements

**FR-3.1:** The About section SHALL present a professional summary (150-300 words) covering:
- Current status (e.g., student, year of graduation)
- Areas of expertise and interest
- Key strengths and differentiators
- Professional goals

**FR-3.2:** The About section SHALL highlight relevant experience, including:
- Years of leadership experience
- Academic achievements
- Relevant extracurricular involvement

**FR-3.3:** The About section MAY include a professional photograph or avatar.

**FR-3.4:** The content SHALL be easily readable with appropriate line spacing and font size.

---

### 3.4 Projects Section

**Priority:** High  
**Description:** Showcase of portfolio projects with links to code and demonstrations.

#### Functional Requirements

**FR-4.1:** The Projects section SHALL display a minimum of 3 project cards in a responsive grid layout.

**FR-4.2:** Each project card SHALL contain the following information:
- Project title
- Brief description (50-150 words)
- Technology stack (displayed as tags/badges)
- Link to GitHub repository
- Link to live demo (if available)

**FR-4.3:** Project cards SHALL have consistent styling and hover effects to indicate interactivity.

**FR-4.4:** GitHub repository links SHALL open in a new browser tab.

**FR-4.5:** If a live demo is unavailable, the card SHALL display "Repository Only" or similar indication.

**FR-4.6:** Project data SHALL be stored in a centralized JavaScript configuration file (`projects.js`) to enable easy updates without modifying HTML.

**FR-4.7:** The project grid SHALL be responsive:
- Desktop (>1024px): 3 columns
- Tablet (768px-1024px): 2 columns
- Mobile (<768px): 1 column

**FR-4.8:** Each project card SHALL have equal height within its row to maintain visual consistency.

---

### 3.5 Skills Section

**Priority:** Medium  
**Description:** Display of technical skills and competencies organized by category.

#### Functional Requirements

**FR-5.1:** The Skills section SHALL organize skills into the following categories:
- Frontend Development
- Backend Development (if applicable)
- Cloud & DevOps (if applicable)
- Data Science & AI (if applicable)
- Tools & Technologies

**FR-5.2:** Each skill SHALL be displayed as a badge or tag with consistent styling.

**FR-5.3:** Skills SHALL be stored in a centralized JavaScript configuration file (`skills.js`) for easy maintenance.

**FR-5.4:** The skills display SHALL be responsive and wrap appropriately on smaller screens.

**FR-5.5:** Skill categories SHALL have clear visual separation (headings, spacing, or containers).

---

### 3.6 Resume Section

**Priority:** High  
**Description:** Access to downloadable and viewable resume document.

#### Functional Requirements

**FR-6.1:** The site SHALL provide a resume link in the navigation bar labeled "Resume".

**FR-6.2:** The resume link SHALL provide two options:
- "View Resume" - opens PDF in browser (new tab)
- "Download Resume" - triggers direct download of PDF file

**FR-6.3:** The resume PDF file SHALL be stored in the `/public` or `/assets` directory.

**FR-6.4:** The resume filename SHALL follow the format: `FirstName_LastName_Resume.pdf`.

**FR-6.5:** If the browser does not support inline PDF viewing, the system SHALL default to download.

**FR-6.6:** The resume section MAY be a dedicated section on the page or accessible only via navigation.

---

### 3.7 Contact Section

**Priority:** High  
**Description:** Mechanism for visitors to initiate contact.

#### Functional Requirements

**FR-7.1:** The Contact section SHALL display a contact form with the following fields:
- Name (text input, required)
- Email (email input, required)
- Message (textarea, required)

**FR-7.2:** The contact form SHALL perform client-side validation:
- All required fields must be filled
- Email must match standard email format pattern
- Message must be minimum 10 characters

**FR-7.3:** Validation errors SHALL be displayed inline near the relevant field.

**FR-7.4:** Upon form submission, the system SHALL:
- Execute the mailto: protocol with pre-filled subject and body
- Display a message confirming the action and instructing the user to complete sending in their email client

**FR-7.5:** The Contact section SHALL display alternative contact methods:
- Email address as clickable mailto: link
- Links to social profiles (GitHub, LinkedIn)

**FR-7.6:** The form SHALL have a "Send Message" button that is disabled until all validation passes.

**FR-7.7:** After form submission via mailto:, the form fields SHALL reset to empty state.

---

### 3.8 Theme Toggle (Light/Dark Mode)

**Priority:** Medium  
**Description:** User preference for light or dark color scheme.

#### Functional Requirements

**FR-8.1:** The site SHALL support two theme modes: Light and Dark.

**FR-8.2:** A toggle button SHALL be present in the navigation bar to switch between themes.

**FR-8.3:** The theme toggle SHALL use an intuitive icon (e.g., sun/moon).

**FR-8.4:** Theme preference SHALL be saved to localStorage and persist across browser sessions.

**FR-8.5:** On initial visit, the theme SHALL default to the user's system preference (if detectable via `prefers-color-scheme`) or light mode.

**FR-8.6:** Theme changes SHALL apply instantly without page reload.

**FR-8.7:** All sections and components SHALL have appropriate styling for both light and dark modes.

---

### 3.9 Accessibility Features

**Priority:** High  
**Description:** Ensuring the site is usable by people with disabilities.

#### Functional Requirements

**FR-9.1:** All interactive elements (links, buttons, form fields) SHALL be keyboard accessible and navigable using Tab key.

**FR-9.2:** Focus indicators SHALL be visible and clear for keyboard navigation.

**FR-9.3:** The site SHALL use semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).

**FR-9.4:** Images SHALL include descriptive `alt` attributes (or `alt=""` for decorative images).

**FR-9.5:** Form inputs SHALL have associated `<label>` elements.

**FR-9.6:** The site SHALL maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (WCAG AA).

**FR-9.7:** ARIA labels SHALL be used where necessary to provide context for screen readers.

**FR-9.8:** The hamburger menu SHALL be operable with keyboard (Enter/Space to toggle).

---

## 4. External Interface Requirements

### 4.1 User Interface Requirements

**UI-1:** The site SHALL use a consistent color palette across all sections with primary, secondary, and accent colors defined.

**UI-2:** Typography SHALL be consistent with a clear hierarchy:
- Heading 1 (h1): 2.5rem - 4rem (site name/hero)
- Heading 2 (h2): 2rem - 3rem (section titles)
- Heading 3 (h3): 1.5rem - 2rem (subsections, project titles)
- Body text: 1rem - 1.125rem
- Small text: 0.875rem - 1rem

**UI-3:** Spacing and layout SHALL follow consistent patterns (8px grid system recommended).

**UI-4:** Interactive elements SHALL provide visual feedback (hover, active, focus states).

**UI-5:** The design SHALL be clean, modern, and professional without excessive animations or distractions.

**UI-6:** Font loading SHALL not cause layout shift (use font-display: swap or fallback fonts).

### 4.2 Hardware Interfaces

Not applicable for this web application.

### 4.3 Software Interfaces

**SI-1:** The application SHALL interface with the user's default email client via mailto: protocol.

**SI-2:** The application SHALL store theme preference using the browser's localStorage API.

**SI-3:** External links to GitHub and LinkedIn SHALL use their respective URL schemes.

### 4.4 Communication Interfaces

**CI-1:** The site SHALL be served over HTTPS protocol.

**CI-2:** All external resources (if any) SHALL be loaded over HTTPS.

**CI-3:** Social media links SHALL use standard HTTPS URLs.

---

## 5. Non-Functional Requirements

### 5.1 Performance Requirements

**NFR-1.1:** The initial page load SHALL complete in under 2 seconds on a standard broadband connection (5 Mbps+).

**NFR-1.2:** First Contentful Paint (FCP) SHALL occur within 1.5 seconds.

**NFR-1.3:** Time to Interactive (TTI) SHALL be under 3 seconds.

**NFR-1.4:** The total page size (including all assets) SHALL not exceed 2MB.

**NFR-1.5:** Images SHALL be optimized for web delivery (compressed, appropriate dimensions).

**NFR-1.6:** Images below the fold MAY use lazy loading to improve initial load time.

**NFR-1.7:** CSS and JavaScript files SHALL be minified for production deployment.

### 5.2 Reliability Requirements

**NFR-2.1:** The site SHALL maintain 99.9% uptime (dependent on hosting provider SLA).

**NFR-2.2:** If the mailto: protocol fails, users SHALL still have visible alternative contact methods (email address, social links).

**NFR-2.3:** The site SHALL gracefully handle missing images (provide placeholders or fallback).

**NFR-2.4:** JavaScript errors SHALL be caught and logged without breaking the entire page.

### 5.3 Security Requirements

**NFR-3.1:** The site SHALL NOT expose any API keys, tokens, or sensitive information in client-side code.

**NFR-3.2:** External links SHALL use `rel="noopener noreferrer"` to prevent security vulnerabilities.

**NFR-3.3:** The contact form SHALL sanitize user inputs before using them in mailto: URL construction.

**NFR-3.4:** The site SHALL not store any user data beyond theme preference (localStorage only).

**NFR-3.5:** The resume PDF SHALL not contain any sensitive personal information (e.g., full address, SSN).

### 5.4 Maintainability Requirements

**NFR-4.1:** Project and skill data SHALL be centralized in configuration files to allow updates without modifying HTML or CSS.

**NFR-4.2:** The codebase SHALL follow consistent naming conventions:
- CSS classes: kebab-case
- JavaScript variables: camelCase
- File names: kebab-case

**NFR-4.3:** The code SHALL be well-commented, especially for complex logic or non-obvious implementations.

**NFR-4.4:** The repository SHALL include a comprehensive README.md with setup instructions.

**NFR-4.5:** CSS SHALL be organized logically (by section or component) with clear section comments.

**NFR-4.6:** JavaScript functions SHALL be modular and reusable where possible.

### 5.5 Portability Requirements

**NFR-5.1:** The site SHALL be deployable to any static hosting service (GitHub Pages, Netlify, Vercel) without modifications.

**NFR-5.2:** The site SHALL NOT require any server-side processing or database.

**NFR-5.3:** The site SHALL work offline for previously cached content (basic service worker optional for V1).

### 5.6 Usability Requirements

**NFR-6.1:** First-time visitors SHALL be able to navigate to any section within 3 clicks or scrolls.

**NFR-6.2:** The purpose of the site SHALL be clear within 5 seconds of landing (hero content).

**NFR-6.3:** Project cards SHALL have sufficient information to understand the project without visiting external links.

**NFR-6.4:** Contact methods SHALL be accessible from any point on the page (fixed nav + footer).

**NFR-6.5:** Error messages SHALL be clear and provide guidance on how to resolve issues.

### 5.7 Responsiveness Requirements

**NFR-7.1:** The site SHALL be fully functional on devices with screen widths from 320px to 2560px+.

**NFR-7.2:** Touch targets on mobile devices SHALL be at least 44x44 pixels to ensure easy tapping.

**NFR-7.3:** Text SHALL remain readable without horizontal scrolling on mobile devices.

**NFR-7.4:** The hamburger menu SHALL be easily accessible and operable on mobile devices.

**NFR-7.5:** Images and layout SHALL adapt to viewport size without content overflow.

---

## 6. Data Requirements

### 6.1 Data Entities

#### 6.1.1 Project Object

Each project SHALL contain the following properties:

```javascript
{
  id: number,
  title: string,
  description: string,
  tags: string[],
  githubUrl: string,
  liveUrl: string | null,
  imageUrl: string
}
```

#### 6.1.2 Skill Category Object

Each skill category SHALL contain:

```javascript
{
  category: string,
  skills: string[]
}
```

#### 6.1.3 Personal Information

Static data including:
- Name
- Title/headline
- About text
- Social media URLs
- Email address

### 6.2 Data Storage

**DS-1:** Project data SHALL be stored in `/js/projects.js` as a JavaScript array.

**DS-2:** Skills data SHALL be stored in `/js/skills.js` as a JavaScript array.

**DS-3:** Personal information MAY be stored in a configuration file or directly in HTML.

**DS-4:** User theme preference SHALL be stored in browser localStorage with key `theme`.

**DS-5:** The resume PDF SHALL be stored in `/public/resume.pdf` or `/assets/resume.pdf`.

### 6.3 Data Constraints

**DC-1:** Project descriptions SHALL not exceed 200 words.

**DC-2:** The total number of skill tags SHALL not exceed 40 to maintain reasonable layout.

**DC-3:** Image files SHALL not exceed 500KB each.

---

## 7. Constraints and Assumptions

### 7.1 Technical Constraints

**TC-1:** No build tools or bundlers (Webpack, Vite, etc.) SHALL be required for V1.

**TC-2:** No CSS preprocessors (SASS, LESS) SHALL be required for V1.

**TC-3:** No frontend frameworks (React, Vue, Angular) SHALL be used.

**TC-4:** The site SHALL use vanilla HTML, CSS, and JavaScript only.

**TC-5:** All dependencies SHALL have free tier or open-source licenses.

### 7.2 Business Constraints

**BC-1:** The site SHALL be completed and deployed within 2-4 weeks.

**BC-2:** The site SHALL serve as a portfolio piece, so code quality is paramount.

**BC-3:** The site SHALL be maintained by a single developer (James Jones).

### 7.3 Assumptions

**A-1:** The target audience has access to modern web browsers.

**A-2:** The majority of users will view the site on desktop or laptop computers.

**A-3:** Users are comfortable using email clients for the mailto: functionality.

**A-4:** GitHub and LinkedIn profiles are publicly accessible.

**A-5:** The resume will be updated manually when needed.

---

## 8. Acceptance Criteria

The Personal Portfolio Site V1 is considered **complete and acceptable** when all of the following criteria are met:

### 8.1 Functionality

- [ ] **AC-1:** Site is deployed to a public URL and accessible via standard web browsers.
- [ ] **AC-2:** All navigation links scroll smoothly to their corresponding sections.
- [ ] **AC-3:** Active section is visually indicated in the navigation bar.
- [ ] **AC-4:** Hamburger menu functions correctly on mobile devices (< 768px).
- [ ] **AC-5:** Light/dark theme toggle works and persists across sessions.
- [ ] **AC-6:** Projects section displays exactly 3 project cards with all required information.
- [ ] **AC-7:** All GitHub repository links are functional and open in new tabs.
- [ ] **AC-8:** Skills section displays all relevant skills organized by category.
- [ ] **AC-9:** Resume can be both viewed (in new tab) and downloaded.
- [ ] **AC-10:** Contact form validates all inputs correctly.
- [ ] **AC-11:** Contact form submission triggers mailto: with correct formatting.
- [ ] **AC-12:** All social media links are functional and open in new tabs.

### 8.2 Responsiveness

- [ ] **AC-13:** Site is fully functional on mobile devices (320px - 767px).
- [ ] **AC-14:** Site is fully functional on tablets (768px - 1023px).
- [ ] **AC-15:** Site is fully functional on desktop (1024px+).
- [ ] **AC-16:** No horizontal scrolling occurs on any screen size.
- [ ] **AC-17:** All text is readable without zooming on mobile devices.

### 8.3 Performance

- [ ] **AC-18:** Lighthouse Performance score is 80+ (mobile and desktop).
- [ ] **AC-19:** Initial page load completes in under 2 seconds on broadband.
- [ ] **AC-20:** No console errors or warnings in browser developer tools.

### 8.4 Accessibility

- [ ] **AC-21:** All interactive elements are keyboard accessible.
- [ ] **AC-22:** Lighthouse Accessibility score is 90+.
- [ ] **AC-23:** Color contrast meets WCAG AA standards.
- [ ] **AC-24:** Semantic HTML is used throughout.

### 8.5 Code Quality

- [ ] **AC-25:** Code follows consistent formatting and naming conventions.
- [ ] **AC-26:** HTML validates with W3C validator (no critical errors).
- [ ] **AC-27:** CSS is organized and commented appropriately.
- [ ] **AC-28:** JavaScript is modular and well-commented.
- [ ] **AC-29:** Git commit history is clean with descriptive messages.

### 8.6 Documentation

- [ ] **AC-30:** README.md includes project description, features, setup instructions, and deployment link.
- [ ] **AC-31:** SRS.md (this document) is present in the repository.
- [ ] **AC-32:** Screenshots are included in the repository or README.

---

## 9. Future Enhancements (V2 Backlog)

The following features are planned for future versions but are explicitly **out of scope** for V1:

### 9.1 Content Enhancements

- **Blog section** with Markdown support for technical articles
- **Project filtering** by technology tag
- **Project search** functionality
- **Testimonials** section with recommendations
- **Certifications** display section

### 9.2 Technical Enhancements

- **Backend contact API** (Node.js/Express or Python/FastAPI)
  - Email service integration (SendGrid, Mailgun)
  - Spam protection (reCAPTCHA)
  - Rate limiting
- **Advanced analytics** integration (Google Analytics or Plausible)
- **Progressive Web App (PWA)** features
  - Service worker for offline functionality
  - App manifest
- **CI/CD pipeline** for automated testing and deployment
- **Automated project sync** from GitHub API

### 9.3 Design Enhancements

- **Advanced animations** using libraries like Framer Motion or GSAP
- **Parallax scrolling** effects
- **Animated skill bars** or progress indicators
- **Interactive project showcase** (modal/slideshow)
- **Multiple theme options** beyond light/dark

### 9.4 Functionality Enhancements

- **Multi-language support** (i18n)
- **Print-optimized styles** for resume section
- **RSS feed** for blog posts
- **Newsletter subscription** functionality
- **Download/share project cards** as images

---

## 10. Appendix

### 10.1 Recommended Repository Structure

```
frontend-portfolio-site/
├── index.html
├── css/
│   ├── style.css
│   ├── theme.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── projects.js
│   ├── skills.js
│   ├── theme.js
│   └── form-validation.js
├── assets/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   ├── icons/
│   └── resume.pdf
├── docs/
│   └── SRS.md
├── screenshots/
├── .gitignore
├── README.md
└── LICENSE
```

### 10.2 Suggested Color Palette

**Light Mode:**
- Background: #FFFFFF
- Text: #1F2937
- Primary: #3B82F6
- Secondary: #8B5CF6
- Accent: #10B981

**Dark Mode:**
- Background: #111827
- Text: #F9FAFB
- Primary: #60A5FA
- Secondary: #A78BFA
- Accent: #34D399

### 10.3 References

- [W3C HTML5 Specification](https://www.w3.org/TR/html52/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)

---

**Document History:**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 14 Jan 2026 | James Jones | Initial release |

---

**Approval:**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Developer/Owner | James Jones | _______________ | _______ |

---

*End of Document*
