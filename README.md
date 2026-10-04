# Akshay Deshpande — Portfolio

A lightweight, responsive portfolio with separate Home, Work, Experience, About, and Hobbies pages built with semantic HTML, CSS, and a small amount of JavaScript. No framework or build step is required.

## Local preview

Requires Node.js 18 or later:

```sh
npm run dev
```

Open http://localhost:3000. Set `PORT` to use a different port. The preview server binds to the local machine only.

## Edit

- `dist/index.html`: portrait and home-page introduction.
- `dist/work.html`: selected projects and expandable engineering details.
- `dist/experience.html`: career history.
- `dist/about.html`: background, education, and technical toolkit.
- `dist/hobbies.html`: sports, gaming, and nonfiction reading.
- `dist/assets/akshay-profile.png`: the supplied profile photograph.
- `dist/styles.css`: responsive visual design.
- `dist/script.js`: clipboard feedback and copyright year.
- `dist/resume.html` and `dist/resume.css`: screen and print resume.
- `dist/assets/akshay-deshpande-resume.pdf`: downloadable version of the resume. Regenerate it after editing the HTML resume.
- `.github/workflows/pages.yml`: publishes `dist` to GitHub Pages on pushes to `main`.
- `.openai/hosting.json`: identity of the previous Sites deployment, retained for reference.

The `dist` directory is the authored, deployable source; it is deliberately tracked. There is no generated JavaScript bundle, analytics, tracking, or contact-form service. Email opens the visitor’s mail application. Project detail sections and navigation work without JavaScript.

## Hosting

The primary site uses GitHub Pages at https://akshay09968.github.io. Its repository is `akshay09968/akshay09968.github.io`. The Pages workflow publishes only `dist`; repository configuration and local preview scripts are excluded from the website artifact. To publish an update, push the changes to `main`.

## Content notes

Career details and metrics come from the supplied resume. The 1M requests/minute value for eksp is a **design target**, not measured production throughput. The LinkedIn URL was obtained from the user’s GitHub profile. Project-specific GitHub URLs were not supplied and were not visible in the public repository listing; the site links to the verified GitHub profile instead.

## Validation

```sh
npm run check
```

The design takes visual direction from https://thinkingmachines.ai/: a white background, narrow reading column, serif body text, and understated sans-serif navigation. The supplied portrait leads the home page.

The site supports keyboard navigation, reduced motion preferences, native expandable project details, responsive layouts, and print styling. Local browser checks cover direct access to each page, desktop and mobile layout, inter-page navigation, project expansion, clipboard feedback, and the resume download.
