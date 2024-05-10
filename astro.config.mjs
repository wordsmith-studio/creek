import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import websiteDetails from "./src/website.json";

export default defineConfig({
  integrations: [sitemap(), react()],
  site: `https://${websiteDetails.url}/`,
});
