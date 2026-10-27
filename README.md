# Saleh Hammad — Flutter Developer Portfolio

A distinctive, truthful, and high-performance personal portfolio website for **Saleh Hammad**, Flutter Developer. Built specifically for zero-dependency static deployment on **GitHub Pages**.

---

## Technical Highlights

- **Pure Static Stack:** Vanilla HTML5, CSS3, and ES6 Modules. Zero node build steps, zero bundle compilation, zero third-party telemetry.
- **Truthful & Evidence-Backed:** Presents verified Flutter applications (**EduApp / إلمام**, **BacOnHands**, **VetERP**, and completed **Firebase** projects) with honest architecture breakdowns.
- **Engineering-Grade Aesthetics:** Obsidian & cyber-cobalt visual palette, technical typography, accessible focus states, and fluid responsive scaling.
- **Interactive Deep Dives:** Includes an interactive Architecture & State Machine Explorer, copy-to-clipboard contact channels with live toast feedback, and light/dark theme persistence.
- **GitHub Pages Ready:** Pre-configured with `.nojekyll`, custom `404.html`, SEO metadata, Open Graph cards, and Schema.org JSON-LD structured data.

---

## Directory Structure

```text
portfolio/
├── .gitignore
├── .nojekyll                   # Prevents Jekyll processing on GitHub Pages
├── 404.html                    # Custom accessible 404 fallback page
├── index.html                  # Main semantic HTML5 document
├── README.md                   # Setup, customization, and deployment guide
├── public/
│   └── assets/
│       └── icons/              # Favicon SVG, Apple touch icon, and OG image
├── qa/
│   └── check.py                # Automated static validation test script
└── src/
    ├── data/
    │   ├── profile.js          # Identity, AI philosophy, and contact channels
    │   ├── projects.js         # Verified project inventory and technical specs
    │   ├── skills.js           # Skills matrix with direct project evidence
    │   └── workflow.js         # 5-step engineering process & client value props
    ├── scripts/
    │   └── main.js             # Vanilla JS state, theme, navigation, and DOM rendering
    └── styles/
        ├── tokens.css          # Design tokens (colors, fluid typography, spacing)
        ├── base.css            # CSS reset, accessibility styles, reduced-motion rules
        ├── layout.css          # Header, navigation, container, grid, and footer
        └── components.css      # Badges, cards, blueprints, buttons, and toast
```

---

## Local Development & Testing

Because this website uses native ES Modules, it should be served via a local HTTP server rather than opened via the `file://` protocol.

Run with Python (built-in):
```bash
python -m http.server 8000
```
Then open: [http://localhost:8000](http://localhost:8000) in your browser.

---

## Customizing Your Profile & Contacts

All content is managed through clean data files in `src/data/`:

1. **Contact Details & Socials:**
   Open `src/data/profile.js` and update:
   - `email`: Your real email address.
   - `github`: Your GitHub profile URL.
   - `linkedin`: Your LinkedIn profile URL.
2. **Adding or Updating Projects:**
   Open `src/data/projects.js` to add new Flutter applications, update repository links, or add screenshots.
3. **Skills & Capabilities:**
   Open `src/data/skills.js` to adjust experience levels or add new technical competencies.

---

## Running QA Integrity Checks

To run the automated static checks that verify all assets, imports, and tags:
```bash
python qa/check.py
```

---

## GitHub Pages Deployment

1. Initialize a git repository if not already done:
   ```bash
   git init
   git add .
   git commit -m "feat: complete truthful flutter developer portfolio"
   ```
2. Create a new repository on your GitHub account (e.g. `portfolio` or `<your-username>.github.io`).
3. Add the remote and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** > **Pages**:
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
5. Your portfolio will be live at `https://<your-username>.github.io/<your-repo-name>/` (or `https://<your-username>.github.io/` if using the root user repo).
