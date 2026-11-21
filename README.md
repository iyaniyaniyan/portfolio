# Christian Iligan · Portfolio

I study computer science at Cavite State University – Carmona. My portfolio includes a case study of KABScholar, our undergraduate thesis on managing campus scholarships.

[Visit the portfolio](https://iyaniyaniyan.github.io/portfolio/) · [Read the KABScholar case study](https://iyaniyaniyan.github.io/portfolio/#kabscholar)

## Run locally

Use Node.js 22 and npm. From the repository directory, run the following commands.

~~~sh
npm ci
npm run dev
~~~

Open the local address printed by Vite, including `/portfolio/`. To preview the production version, run `npm run build` followed by `npm run preview`.

## Maintain the site

- The [portfolio guide](docs/portfolio-guide.md) covers editing in the browser and on Windows, adding projects and screenshots, publishing an unlisted YouTube walkthrough or an MP4, updating a résumé, and verifying a release.
- Project content lives in [projects.ts](src/data/projects.ts). Personal details and contact links live in [src/data](src/data).
- React, TypeScript, Vite, and CSS power the site. Photos and fonts are served with the application. GitHub Actions publishes the production build to Pages after each push to `main`.

Run `npm run lint` and `npm run build` before publishing.
