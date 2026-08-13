# Zabir Saleh Portfolio — Version 1

A zero-build personal portfolio for GitHub Pages.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- No React
- No npm
- No build step
- No external UI libraries

## Folder structure

```text
zabir-portfolio-v1/
├── index.html
├── cv.html
├── 404.html
├── .nojekyll
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       └── favicon.svg
└── projects/
    ├── lazywave.html
    ├── fintrust.html
    ├── incident-hub.html
    ├── nms-simulator.html
    ├── greenleaf.html
    └── 5g-clustering.html
```

## 1. Personalize contact links

Open:

`assets/js/main.js`

Change:

```js
const CONFIG = {
  email: "YOUR_EMAIL@example.com",
  github: "https://github.com/ZbrSaadat",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
};
```

That updates the main contact links site-wide.

## 2. Preview locally

Because the site uses only normal files, you can open `index.html` directly in a browser.

For the most accurate local test, use VS Code **Live Server**:

1. Open the project folder in VS Code.
2. Install the "Live Server" extension if you do not already have it.
3. Right-click `index.html`.
4. Click **Open with Live Server**.

## 3. Publish to GitHub Pages

### User site

Create a repository exactly named:

`ZabirSaleh.github.io`

Then upload the **contents** of this folder to the repository root.

Your URL becomes:

`https://ZabirSaleh.github.io/`

No build command is required.

### Git commands

```bash
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ZabirSaleh.github.io.git
git push -u origin main
```

Then go to GitHub:

**Repository → Settings → Pages**

Choose:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

## 4. Editing the portfolio

### Homepage text
Edit `index.html`.

### Project case studies
Edit the files under `projects/`.

### Colors and responsive design
Edit `assets/css/style.css`.

### Contact links and small JavaScript behavior
Edit `assets/js/main.js`.

## 5. CV

`cv.html` is print-friendly. Open it in the browser and click:

**Print / Save as PDF**

This lets you create a PDF CV from the web version without maintaining a separate layout.

## Notes

The numerical RF metrics displayed in the hero are illustrative interface values, not claims about a specific live network.

Before publishing, review all career/project descriptions and replace the placeholder email and LinkedIn URL.


## Version 1.2 homepage

The homepage was simplified to Hero → About → 3 Expertise areas → 4 Featured Projects → Contact. Full experience remains in `cv.html`, and all six projects are available from `projects/index.html`.
