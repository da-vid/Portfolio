// GitHub Pages mounts the review under a subdirectory. Netlify serves the site at /.
const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function sitePath(path: string): string {
  return base + path;
}
