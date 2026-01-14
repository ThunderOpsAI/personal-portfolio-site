## James Jones – Personal Portfolio Site

A **single-page, responsive portfolio website** for James Jones, built with **vanilla HTML, CSS, and JavaScript**.  
It showcases projects, skills, and contact information, and is designed to be **fast, accessible, and recruiter‑friendly**, following a formal SRS.

### Features

- **Modern hero section**
  - Clear identity (name, title, tagline) with strong visual hierarchy.
  - Primary calls‑to‑action: **View Projects**, **Contact Me**, and **Download Resume**.
  - Quick access to **GitHub**, **LinkedIn**, and **email**.

- **Smooth single‑page navigation**
  - Sticky top navigation with links to **Home, About, Projects, Skills, Contact, View Resume**.
  - Smooth scrolling and active‑section highlighting while you scroll.
  - Mobile‑friendly hamburger menu with keyboard support.

- **Projects showcase**
  - Minimum of three project cards, rendered from a central config (`js/projects.js`).
  - Each card shows title, description, tech tags, and links to GitHub (and optional live demo).
  - Responsive grid layout that adapts to desktop, tablet, and mobile.

- **Skills grid**
  - Skills organised into categories (Frontend, Backend, Data Science, AI & ML, Cloud & DevOps, Tools & Technologies).
  - Data driven from `js/skills.js` for easy updates.

- **Resume access**
  - Resume PDF stored at `public/James_Jones_CV.pdf`.
  - **View Resume** (opens in a new tab) from the nav.
  - **Download Resume** button in the hero to trigger a direct download.

- **Contact form**
  - Name, email, and message fields with client‑side validation.
  - Inline error messages and disabled submit button until the form is valid.
  - On submit, opens the user’s email client via a `mailto:` link with a pre‑filled message.
  - Alternative contact options (email, GitHub, LinkedIn) always visible.

- **Light / Dark theme**
  - Theme toggle in the nav with intuitive icon.
  - Persists user preference in `localStorage` and respects system `prefers-color-scheme` on first load.
  - Carefully tuned palettes so dark mode isn’t “all black” and light mode isn’t “all white”.

- **Accessibility & responsiveness**
  - Semantic HTML5 structure, focus outlines, and keyboard‑navigable menus/forms.
  - Layout works from **320px mobile** up to large desktop widths.
  - Designed with WCAG AA contrast in mind.

### Tech stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Build tools:** None (pure static site)
- **Data/config:** `js/projects.js`, `js/skills.js`
- **Hosting (recommended):** GitHub Pages, Netlify, or Vercel

### Project structure (key files)

```text
.
├── index.html
├── css/
│   ├── style.css          # Base layout, components, and sections
│   ├── theme.css          # Light/dark theme tokens and overrides
│   └── responsive.css     # Breakpoints and responsive tweaks
├── js/
│   ├── main.js            # Navigation, smooth scroll, active links, rendering
│   ├── projects.js        # Project data configuration
│   ├── skills.js          # Skill categories and tags
│   ├── theme.js           # Theme toggle + localStorage handling
│   └── form-validation.js # Contact form validation + mailto logic
├── public/
│   └── James_Jones_CV.pdf # Resume PDF
├── docs/
│   └── SRS.md             # Software Requirements Specification for this site
└── screenshots/
    └── ...                # Optional UI screenshots used in this README
```

### Running locally

No build step is required – it’s a static site.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ThunderOpsAI/personal-portfolio-site.git
   cd personal-portfolio-site
   ```

2. **Open in a browser (simple way):**

   - Double‑click `index.html`, or  
   - Right‑click `index.html` → “Open With” → your preferred browser.

3. **Recommended: run a tiny local server** (avoids any path or CORS quirks):

   ```bash
   # Python 3
   python -m http.server 8000
   # then open http://localhost:8000 in your browser
   ```

### Deployment

You can deploy this to any static hosting platform. Two common options:

- **GitHub Pages**
  1. Push the repository to GitHub as `ThunderOpsAI/personal-portfolio-site`.
  2. In the GitHub repo settings, enable **Pages** for the `main` branch with root (`/`) as the site folder.
  3. After GitHub builds the site, it will be available at the provided Pages URL.

- **Netlify / Vercel**
  1. Create a new site from your GitHub repo.
  2. Set build command to **none** and publish directory to the repo root (since this is static).
  3. Deploy – your site will be live at a generated URL (you can later add a custom domain).

### Customising content

- **Projects:** edit `js/projects.js` and update titles, descriptions, tags, and links to point to your real work.
- **Skills:** edit `js/skills.js` to add/remove skills or categories.
- **About / hero text:** update the copy directly in `index.html` in the About and hero sections.
- **Contact email:** change the email address in the hero and Contact sidebar to route to a different inbox.
- **Styling / themes:** tweak palettes and layout in `css/style.css`, `css/theme.css`, and `css/responsive.css`.

### TODO / future improvements

- Add more detailed project case studies (e.g. individual project pages or modals).
- Add automated Lighthouse checks as part of CI.
- Explore PWA features (offline cache, installable experience).

