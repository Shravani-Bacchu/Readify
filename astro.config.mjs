import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://readify-amber.vercel.app/",
  integrations: [preact()]
});