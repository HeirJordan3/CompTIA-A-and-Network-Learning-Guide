# Contributing

Thank you for helping improve this learning guide.

## Who Can Contribute

Anyone who wants to make CompTIA A+ and Network+ content clearer for beginners is welcome to contribute, including:

- Learners who notice gaps or confusing wording
- Instructors and tutors
- Help desk and IT support professionals
- Developers improving the study web app under `web/`

## What Fits This Repository

This project has two parts:

1. **Educational Markdown content** (`core-1/`, `core-2/`, `network-plus/`, `activities/`, `study-guides/`, `practice-questions/`) — beginner study materials.
2. **Study web application** (`web/`) — a Next.js app that reads those Markdown lessons.

Contributions should feel like study materials for content, and like a maintainable product for the app.

Good content contributions include:

- Clearer beginner explanations
- Better real-world or help desk examples
- New lessons that follow the standard lesson template
- Activities and study guides that match existing lessons
- Fixes for broken links, typos, or inconsistent terminology

Good app contributions include:

- UI and accessibility improvements in `web/`
- Curriculum index updates that match existing lesson files
- Markdown rendering fixes
- Tests and documentation for running the app

## Contribution Guidelines

### Educational content (`core-1/`, `core-2/`, `network-plus/`, and related study folders)

1. Keep language beginner-friendly and professional.
2. Follow the standard lesson template used in existing topics.
3. Use relative Markdown links that actually work.
4. Define acronyms the first time they appear.
5. Do not invent CompTIA exam objectives or claim official endorsement.
6. Do not put answer keys on student activity pages.
7. Prefer plain Markdown, short paragraphs, and simple tables.
8. Do **not** add websites, frameworks, scripts, or build systems inside content folders.
9. Do **not** relocate or rename existing lesson paths without an explicit migration plan.

### Study web application (`web/`)

1. Next.js, TypeScript, Tailwind CSS, npm scripts, and build tooling are **allowed** inside `web/`.
2. The app must read existing Markdown lessons in place. Do not copy lesson bodies into React components.
3. Keep an explicit curriculum index. Do not expose arbitrary filesystem paths to users.
4. Prefer accessible, responsive UI patterns.
5. Do not commit secrets, `.env` files with credentials, or API keys.
6. Do not claim affiliation with or endorsement by CompTIA (or any third-party instructor brand) in the UI.

## Suggested Workflow

1. Open an issue describing the improvement, or reference an existing issue.
2. Create a branch for your change.
3. Keep changes focused on one topic or fix when possible.
4. For content: check that navigation links still work.
5. For the app: run `npm run lint` and `npm run build` from `web/`.
6. Open a pull request with a short summary of what you changed and why.

## Style Checklist (content)

Before submitting content, confirm:

- One H1 heading per document
- Consistent H2/H3 structure
- No decorative emojis
- No instructor-only scripts in learner-facing pages
- Filenames use lowercase kebab-case
- New content matches the tone of DNS and DHCP lessons

## Questions

If you are unsure whether a contribution fits, open an issue first and describe the idea briefly.
