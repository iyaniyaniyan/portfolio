# Christian Abiertas Iligan Portfolio

Modern static portfolio website for Christian Abiertas Iligan, a BS Computer Science student at Cavite State University - Carmona and aspiring full-stack developer.

The site is built as a React + Vite + TypeScript + Tailwind CSS project and configured for GitHub Pages project-site deployment at `/portfolio/`.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Lucide React icons
- GitHub Actions
- GitHub Pages

## Sections Included

- Header / navigation
- Hero
- About
- Skills
- Projects
- Featured Project / KABScholar case study
- Education
- Certifications / achievements
- Contact
- Footer

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

## Preview Production Build

```bash
npm run preview
```

Vite is configured with `base: '/portfolio/'`, so production assets are generated for the GitHub Pages project URL.

## Update Portfolio Content

Most portfolio content is data-driven. Edit these files:

- `src/data/profile.ts` - name, intro, about content, avatar path, resume status
- `src/data/skills.ts` - skill groups and skill items
- `src/data/projects.ts` - projects, screenshots, links, KABScholar case study
- `src/data/education.ts` - school and degree details
- `src/data/certifications.ts` - certificates and achievements
- `src/data/socials.ts` - email and social profile links

## Add Project Screenshots

Place screenshots in `public/assets/`, then update the matching `imagePath` in `src/data/projects.ts`.

Example:

```ts
imagePath: '/assets/my-project-screenshot.png'
```

## Add the Resume PDF

Place the file at:

```text
public/resume.pdf
```

Then update `src/data/profile.ts`:

```ts
resume: {
  label: 'Download Resume',
  path: '/resume.pdf',
  available: true,
}
```

Until `available` is set to `true`, the resume button is shown as a disabled placeholder so the UI does not link to a missing file.

## Deploy Through GitHub Pages

Deployment is handled by `.github/workflows/deploy.yml`.

The workflow:

- runs on pushes to `main`
- installs dependencies based on the lockfile
- builds the Vite app
- uploads the `dist` folder as a Pages artifact
- deploys with the official GitHub Pages actions

Before the first deployment, enable GitHub Pages in the repository:

1. Open GitHub repository Settings.
2. Go to Pages.
3. Set Source to GitHub Actions.
4. Push to `main` and wait for the Deploy to GitHub Pages workflow to finish.

## Notes

- This is a static frontend-only portfolio.
- No backend, database, serverless functions, or external hosting service is required.
- Contact uses `mailto:` and public social profile links only.
- Placeholder projects and certifications are intentionally labeled as editable placeholders.
