# David Wong

A static Astro portfolio for David’s custom software work. Edit all portfolio wording in [src/data/projects.ts](src/data/projects.ts), including navigation, homepage and experience text, contact details, project stories, captions, image descriptions, and page titles.

## Local development

Use Node 24. With nvm, run `nvm install` and `nvm use` from the project root.

```sh
npm ci
npm run build
npm run check
npm run preview
```

Open the local preview URL and press Ctrl+C to stop the server. Netlify reads the build command and publish directory from `netlify.toml` and the Node version from `.nvmrc`.

## Review and publish

Open a pull request against `master` in `da-vid/Portfolio`. Netlify creates a deploy preview for the pull request. To publish the same revision to [GitHub Pages](https://da-vid.github.io/Portfolio/review/), update `.github/portfolio-review-revision` on the `gh-pages` branch with its full commit SHA. The Pages workflow builds the review under `/Portfolio/review/`.

After approval, merge the pull request into `master` to trigger the production Netlify deployment.

## Credits

Adapted from [Lucenta](https://github.com/xocothemes/lucenta/tree/4ddbb9b94a0745e5e0ce253cd3e704c17891a9c6) by Andrei Alba. Its MIT notice is in `public/licenses/lucenta.txt`. The self-hosted Epilogue and Mona Sans font files include their licenses.

Project cover photographs are by [Chris Chow](https://unsplash.com/photos/yfF77efTOZY) and [Maria Lin Kim](https://unsplash.com/photos/8RaUEd8zD-U), used under the [Unsplash License](https://unsplash.com/license). The app screenshots show substitutions in a sample Lineup Helper game and a seven-item grocery run in qList.
