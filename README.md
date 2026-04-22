# Portfolio Redesign

This portfolio runs on Nuxt for server-rendered HTML and stronger SEO metadata.

## Development mode

Use development mode while editing the site:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:3000/
```

When this server is running, changes inside `src/` appear automatically in the browser through Nuxt hot reload. You do not need to run `npm run build` after every edit.

## Production build

Run a production build when you want to prepare the SSR app for deploy:

```bash
npm run build
```

Preview the production build with:

```bash
npm run preview
```

## Editing workflow

- Edit the main page in `src/pages/index.vue`.
- Edit page content in `src/data/siteContent.js`.
- Edit global design tokens and reusable styles in `src/assets/main.css`.
- Keep `npm run dev` running in the terminal while working.
