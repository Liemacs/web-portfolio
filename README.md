# Portfolio Redesign

## Development mode

Use development mode while editing the site:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

When this server is running, changes inside `src/` appear automatically in the browser through Vite hot reload. You do not need to run `npm run build` after every edit.

## Production build

Run a production build only when you want to prepare files for deploy:

```bash
npm run build
```

Preview the production build with:

```bash
npm run preview
```

## Editing workflow

- Edit Vue layout in `src/App.vue`.
- Edit page content in `src/data/siteContent.js`.
- Edit global design tokens and reusable styles in `src/assets/main.css`.
- Keep `npm run dev` running in the terminal while working.
