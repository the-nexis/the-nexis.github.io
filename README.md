# the-nexis portfolio

A minimal, static Astro portfolio for https://the-nexis.github.io. Uses TypeScript and plain CSS; no UI framework or server required.

## Requirements

- Node.js 22.12+ (Node 24 recommended; see `.nvmrc`)
- npm 9.6.5+

## Local development

```sh
npm ci
npm run dev
```

Open http://localhost:4321. On Windows, if PowerShell blocks `npm.ps1`, use `npm.cmd` in place of `npm`.

```sh
npm run check   # Astro and TypeScript diagnostics
npm run build   # Generate the static site in dist/
npm run preview # Serve the production build locally
```

With GNU Make installed, you can use the equivalent shortcuts:

```sh
make install
make dev
make check
make build
make preview
```

Run `make` or `make help` to list the targets. Run `make build` before `make preview`. The Makefile uses `npm.cmd` on Windows and `npm` elsewhere; override it with `make NPM=/path/to/npm dev` if needed.

## Customize

- `src/data/portfolio.ts`: name, hero title, biography, GitHub link, and project entries. The starter projects are explicitly labeled placeholders. Set a project's optional `href` to its real repository or demo URL to display a link.
- `src/pages/index.astro`: landing page sections and supporting copy.
- `src/components/ProjectCard.astro`: reusable project card.
- `src/layouts/Layout.astro`: page metadata and shared HTML.
- `src/styles/global.css`: colors, typography, responsive layout.
- `public/`: files copied directly into the build (favicon, future images).
- `astro.config.mjs`: canonical site URL. This username repository is served at `/`, so no repository base path is needed.

## Publish on GitHub Pages

1. Commit and push these source files, including `package-lock.json`, to `main`.
2. In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. The workflow in `.github/workflows/deploy.yml` checks and builds the project, then deploys it. You can also start it manually from the Actions tab.
4. After a successful deployment, visit https://the-nexis.github.io.

Do not commit `node_modules/` or `dist/`; GitHub Actions builds the published artifact. No deployment token is needed; the workflow uses GitHub's built-in permissions.

See the [official Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).
