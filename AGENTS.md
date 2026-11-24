# Repository instructions

Use Node 24. With nvm, run `nvm install` and `nvm use` from the project root.

```sh
npm ci
npm run build
npm run check
npm run preview
```

Keep Astro pages in `src/pages/`, use strict TypeScript, and commit `package-lock.json` when dependencies change. Keep generated output and installed dependencies out of Git. Use supplied facts for personal content.

A change is complete when the static build succeeds and the smoke check finds the `David Wong` H1 in `dist/index.html`. Stop the local preview server with Ctrl+C when done.
