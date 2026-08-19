# Jingsong Sun — Personal Homepage

Source code for [Jingsong Sun's personal academic homepage](https://mistysun19.github.io/).

The site presents my current research interests, experience at Kimi, selected
publications, CV, and contact information in a clean, responsive single-page
layout.

## Highlights

- Research experience and current work on post-training for LLM agents
- Selected work from NeurIPS 2026 and the ICLR 2024 Workshop
- Downloadable CV and contact information
- Responsive layout for desktop, tablet, and mobile screens

## Tech stack

- [Hugo](https://gohugo.io/) for static-site generation
- A custom homepage template in `layouts/index.html`
- Custom styling in `static/custom.css`
- [GitHub Pages](https://pages.github.com/) for hosting
- GitHub Actions for automated builds and deployment

## Local development

Clone the repository with its theme submodule, then start the Hugo development
server:

```bash
git clone --recursive https://github.com/MistySun19/Mistysun19.github.io.git
cd Mistysun19.github.io
hugo server -D
```

The local site is available at `http://localhost:1313/` by default.

## Project structure

- `layouts/index.html` — custom homepage markup
- `static/custom.css` — homepage styles
- `static/Jingsong-Sun-Resume.pdf` — downloadable CV
- `content/` — supporting Hugo content
- `hugo.toml` — Hugo configuration and site metadata
- `.github/workflows/hugo.yml` — GitHub Pages deployment workflow

## Deployment

Changes merged into `main` are built with Hugo and deployed automatically to
GitHub Pages.
