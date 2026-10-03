# Akshay Deshpande — Portfolio

A lightweight, responsive portfolio built with semantic HTML, CSS, and a small amount of JavaScript. No framework or build step is required.

## Local preview

Requires Node.js 18 or later:

```sh
npm run dev
```

Open http://localhost:3000. Set `PORT` to use a different port. The preview server binds to the local machine only.

## Edit

- `dist/index.html`: portfolio content and project details.
- `dist/styles.css`: responsive visual design.
- `dist/script.js`: page index and clipboard feedback.
- `dist/resume.html` and `dist/resume.css`: screen and print resume.
- `dist/assets/akshay-deshpande-resume.pdf`: downloadable version of the resume. Regenerate it after editing the HTML resume.
- `.openai/hosting.json`: Sites project identity and static output directory.

The `dist` directory is the authored, deployable source; it is deliberately tracked. There is no generated JavaScript bundle, analytics, tracking, or contact-form service. Email opens the visitor’s mail application. Project detail sections and navigation work without JavaScript.

## Content notes

Career details and metrics come from the supplied resume. The 1M requests/minute value for eksp is a **design target**, not measured production throughput. The LinkedIn URL was obtained from the user’s GitHub profile. Project-specific GitHub URLs were not supplied and were not visible in the public repository listing; the site links to the verified GitHub profile instead.

## Validation

```sh
npm run check
```

The site supports keyboard navigation, reduced motion preferences, native expandable project details, responsive layouts, and print styling. Local browser checks cover desktop and mobile layout, in-page navigation, project expansion, clipboard success and failure, and the resume download.
