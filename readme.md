# The Solution Architect Manifesto

A community-maintained field guide for solution architects in analytics, data and martech.

Live at [solutionarchitectmanifesto.com](https://solutionarchitectmanifesto.com)

---

## What is this?

The Solution Architect Manifesto is an open, living document — a set of beliefs deemed indispensable to being an effective solution architect in the field of analytics, data and martech.

It was initiated by [Glenn Vanderlinden](https://www.linkedin.com/in/glennvanderlinden/), co-founder at [Human37](https://human37.com), based on 10+ years of hands-on experience. The goal is for it to grow beyond a single perspective and become a reference for the broader community of solution architects.

The manifesto belongs to the web. The repo is its changelog.

---

## How it works

The website fetches content directly from this repo at runtime. No build step, no CMS. When a pull request is reviewed and merged into `main`, the site reflects it on next page load.

This means:
- The repo is the source of truth
- All contributions go through a pull request
- The repo owner reviews and approves every change before it goes live

---

## How to contribute

All content lives in a single file: `sam-manifesto.md`

The file has two sections — `## Principles` and `## Contributors`. You only need to edit those two sections.

**Steps:**

1. Fork this repo
2. Edit `sam-manifesto.md`
3. Add or refine a principle under `## Principles`
4. Add your name to `## Contributors` in alphabetical order by last name
5. Submit a pull request

Contributions without a contributors entry will not be accepted.

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

### Emphasis

Use `***bold italic***` to highlight the single most important sentence in a paragraph. Limit to one per paragraph.

```
Regular text here. ***This is the key takeaway.*** More regular text.
```

Use `**bold**` for strong emphasis on a word or short phrase.

Use `*italic*` for light emphasis or titles of referenced works.

### Quotes and code blocks

Use blockquotes (`>`) for external quotes or key citations:

```
> "If you write the problem down clearly, then the matter is half solved."
```

These render as styled quote blocks on the site.

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

### Horizontal rules

Do not use `---` horizontal rules inside principles. They are used as section separators at the document level and will be hidden by the site if used inside a principle.

### Things to avoid

- Do not add new `##` sections — the site only recognises `## Principles` and `## Contributors`
- Do not use HTML inside the markdown file
- Do not use tables — they are not supported by the current renderer
- Keep one blank line between paragraphs

---

## Running locally

The site is a single HTML file. You can't open it directly in a browser (`file://`) because the GitHub fetch will be blocked by CORS. You need a local server.

**Option 1 — Node (recommended)**

```bash
npx serve .
```

Then open `http://localhost:3000`.

**Option 2 — VS Code**

Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, open the repo folder, and click **Go Live** in the bottom status bar.

**Option 3 — Python**

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

When running locally, the site fetches `sam-manifesto.md` directly from the `main` branch on GitHub. Local changes to `sam-manifesto.md` won't appear until pushed. To preview locally before pushing, temporarily edit `RAW_URL` in `index.html` to point to your fork's raw URL.

---

## Repo structure

```
solutionarchitectmanifesto-v2/
├── sam-manifesto.md        ← edit this to contribute
├── index.template.html     ← HTML shell, do not edit
├── index.html              ← built output, do not edit (overwritten by Action)
├── build.js                ← build script, do not edit
├── llms.txt                ← LLM/crawler index
└── README.md               ← you are here
```

---

Initiated by [Glenn Vanderlinden](https://www.linkedin.com/in/glennvanderlinden/), co-founder at [Human37](https://human37.com).