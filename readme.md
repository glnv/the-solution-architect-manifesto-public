# The Solution Architect Manifesto

A community-maintained field guide for solution architects in analytics, data and martech.

Live at [solutionarchitectmanifesto.com](https://solutionarchitectmanifesto.com)

---

## What is this?

The Solution Architect Manifesto is an open, living document — a set of beliefs deemed indispensable to being an effective solution architect in the field of analytics, data and martech.

It was initiated by [Glenn Vanderlinden](https://www.linkedin.com/in/glennvanderlinden/), co-founder at [Human37](https://human37.com), based on 10+ years of hands-on experience. The goal is for it to grow beyond a single perspective and become a reference for the broader community of solution architects.

The manifesto belongs to the web. The repo is its changelog.

---

# For contributors

## How to contribute

All content lives in a single file: **`sam-manifesto.md`**. That is the only file you need to touch — never the HTML, CSS, or build script.

The file has two editable sections — `## Principles` and `## Contributors`.

**Steps:**

1. Fork this repo
2. Edit `sam-manifesto.md`
3. Add or refine a principle under `## Principles`
4. Add your name to `## Contributors` in alphabetical order by last name
5. Submit a pull request

Contributions without a contributors entry will not be accepted.

Once your pull request is reviewed and merged into `main`, the site rebuilds and redeploys **automatically** — usually live within seconds. You don't run any build step yourself (see [How it works](#for-maintainers--how-it-works)).

---

## Contributor format

Add your entry to the `## Contributors` section using this format:

```
- [Last name, First name](https://linkedin.com/in/yourprofile) | Organisation
```

Example:

```
- [Vanderlinden, Glenn](https://www.linkedin.com/in/glennvanderlinden/) | Human37
```

The name links on the site; the part after `|` renders as the organisation label.

---

## Writing principles — markdown guide

Principles use standard markdown. Here's what the site supports and how to use it.

### Headings

Each principle starts with a `###` heading followed by a number and title:

```
### 14. Your principle title here
```

Do not use `#` or `##` headings inside a principle — those are reserved for the top-level document structure.

### Paragraphs

Write body text as plain paragraphs separated by a blank line:

```
This is the first paragraph.

This is the second paragraph.
```

Body paragraphs are justified with automatic hyphenation on wide screens and left-aligned on mobile — you don't need to do anything for this.

### Emphasis

Use `***bold italic***` to highlight the single most important sentence in a paragraph. Limit to one per paragraph. It renders as calm bold on the site.

```
Regular text here. ***This is the key takeaway.*** More regular text.
```

Use `**bold**` for strong emphasis on a word or short phrase.

Use `*italic*` for light emphasis or titles of referenced works.

### Quotes

Use blockquotes (`>`) for external quotes or key citations:

```
> "If you write the problem down clearly, then the matter is half solved."
```

These render as styled italic quote blocks. Where possible, name the source in the sentence that introduces the quote.

### Lists

Use `-` for unordered lists:

```
- First item
- Second item
- Third item
```

### Links

Standard markdown links work and render in blue on the site:

```
[Link text](https://example.com)
```

### Things to avoid

- Do not add new `##` sections — the site only recognises `## Principles` and `## Contributors`
- Do not use HTML inside the markdown file
- Do not use tables — they are not supported by the current renderer
- Do not use `---` horizontal rules inside principles (they're document-level separators and are hidden inside principles)
- Keep one blank line between paragraphs

---

# For maintainers — how it works

An overview of the mechanics, for maintainers and the curious. **Contributors can skip this** — you never need to build anything by hand.

## Architecture at a glance

Content and design are kept separate, then **baked into a single static HTML file at build time**:

```
sam-manifesto.md      →  content (what it says)
index.template.html   →  design (how it looks) + build markers
        │
     build.js           renders markdown → HTML, inlines the fonts
        ▼
   index.html           generated, self-contained, deployed artifact
```

## The build — `build.js`

A small Node script (using the [`marked`](https://github.com/markedjs/marked) markdown library). It:

1. Reads `sam-manifesto.md` and splits it into intro / `## Principles` / `## Contributors`.
2. Renders each section to HTML with `marked`.
3. Injects them into `index.template.html` at the `<!-- BUILD:nav -->`, `<!-- BUILD:intro -->`, `<!-- BUILD:principles -->`, and `<!-- BUILD:contributors -->` markers.
4. Inlines the two web fonts from `fonts/` into the CSS as base64, replacing the `__FONT_SERIF_SRC__` / `__FONT_INTER_SRC__` placeholders.
5. Writes the finished page to `index.html`.

The result is fully self-contained — content baked in, fonts embedded, **no external requests at runtime**.

## Why a build step at all?

An earlier version of the site rendered content in the browser: it shipped a near-empty HTML shell and fetched `sam-manifesto.md` from GitHub with JavaScript on every page load. That works for people, but it's weak for machines — which is the reason for baking the content into `index.html` ahead of time:

- **Search-engine indexing** — crawlers may not run (or may defer) client-side JavaScript, so the actual manifesto text often wasn't in the HTML they indexed. Pre-rendering puts the full content in the initial response, so search engines index the real thing, not a loading state.
- **Social & LLM crawlers** — link-preview scrapers and AI/LLM crawlers (see `llms.txt`) typically read only the raw HTML. Baked content means they see the manifesto itself.
- **Speed & first paint** — the content (and fonts) are present immediately: no round-trip to GitHub, no spinner, no layout shift.
- **Resilience** — the live site no longer depends on GitHub's raw endpoint or its CORS behaviour being available at request time.

The trade-off is one build step — which the GitHub Action runs automatically — in exchange for a complete, crawlable, self-contained page. Contributors still just edit one markdown file.

## Automated builds — GitHub Actions

`.github/workflows/build.yml` runs the build automatically. It triggers on:

- a **manual run** (Actions → Build → Run workflow), or
- a **push to `main`** that changes `sam-manifesto.md`, `index.template.html`, or `build.js`.

The job installs `marked`, runs `node build.js`, and commits the regenerated `index.html` back to `main` with a `[skip ci]` message (so it doesn't trigger itself in a loop). This is why a merged contributor PR goes live with no manual step.

> A push that only changes `index.html`, `fonts/`, `README.md`, or other files does **not** trigger a rebuild — only the three paths above do.

## Deployment — Vercel

Vercel deploys `main` on every push and serves the static `index.html`. Because it's one small self-contained file, production updates land in ~1–3 seconds.

A locally-built change deploys once. If you instead edit `sam-manifesto.md` directly on GitHub (without building), you'll see two quick deploys: the first serves the not-yet-rebuilt page, then the Action's follow-up commit deploys the correct one a few seconds later.

## Fonts

The site uses **Source Serif 4** (headings, body, quotes) and **Inter** (nav, labels). Both are self-hosted in `fonts/` and inlined as base64 by the build. This removes the third-party Google Fonts dependency and prevents the first-load font "flicker" (fallback-then-swap).

## Runtime fallback

`index.html` also contains a small script that, *if* it ever loads without pre-baked principles, fetches `sam-manifesto.md` from GitHub and renders it in the browser. In normal operation the content is already baked in, so this is only a safety net.

---

## Running locally

You need [Node](https://nodejs.org) installed.

```bash
npm install marked   # once
node build.js        # regenerate index.html from the markdown
```

Then open `index.html` directly in your browser — it works from `file://` because everything (content and fonts) is baked in.

To preview a change, edit `sam-manifesto.md` (or the design in `index.template.html`), re-run `node build.js`, and refresh. If you prefer a server: `npx serve .` or `python3 -m http.server 8000`.

---

## Repo structure

```
.
├── sam-manifesto.md            ← content — edit this to contribute
├── index.template.html         ← design shell + build markers — maintainers only
├── build.js                    ← build script (markdown → index.html) — maintainers only
├── index.html                  ← generated output — do NOT edit (rebuilt by the Action)
├── fonts/                      ← self-hosted woff2 fonts, inlined at build time
├── .github/workflows/build.yml ← CI: rebuilds index.html on push
├── favicon.svg
├── llms.txt                    ← LLM / crawler index
└── README.md                   ← you are here
```

---

Initiated by [Glenn Vanderlinden](https://www.linkedin.com/in/glennvanderlinden/), co-founder at [Human37](https://human37.com).
