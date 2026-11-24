import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.PORTFOLIO_SITE || "https://www.davidwong.net",
  base: process.env.PORTFOLIO_BASE || "/",
  output: "static",
});
