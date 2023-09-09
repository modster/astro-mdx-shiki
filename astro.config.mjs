import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import svelte from "@astrojs/svelte"
import react from "@astrojs/react"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  // Enable Custom Markdown options, plugins, etc.
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula",
      // Learn more about this configuration here:
      // https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
    },
  },

  integrations: [mdx(), svelte(), react(), tailwind()],
})
