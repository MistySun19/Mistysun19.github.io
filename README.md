# mistysun19.github.io

Personal homepage of Misty Sun (Jingsong Sun), built with [Hugo](https://gohugo.io)
and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

## Local development

```bash
# clone with the PaperMod submodule
git clone --recursive https://github.com/Mistysun19/Mistysun19.github.io.git
cd Mistysun19.github.io

# (or, if already cloned)
git submodule update --init --recursive

# install Hugo extended (>= 0.128), e.g. on macOS:
brew install hugo

# run a local dev server with drafts
hugo server -D
# -> http://localhost:1313
```

## Adding a post

```bash
hugo new posts/my-new-post.md
# edit content/posts/my-new-post.md, set draft: false, then commit
```

## Deployment

Pushes to `main` are built and deployed to GitHub Pages via the workflow in
`.github/workflows/hugo.yml`.

Repo setting required (one-time): **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

## Structure

- `hugo.toml` — site config (PaperMod profile mode, menu, social icons).
- `content/` — Markdown content. `_index.md` is the home page; `posts/` holds blog posts.
- `static/` — files served verbatim. Includes the existing `cs180/` project pages,
  `images/`, and the CV PDF.
- `themes/PaperMod/` — theme as a git submodule.
- `.github/workflows/hugo.yml` — build & deploy to Pages.
