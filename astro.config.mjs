import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      // Alternatively, provide multiple themes
      // https://github.com/antfu/shikiji#lightdark-dual-themes
      experimentalThemes: {
        light: 'material-theme-darker',
        dark: 'github-dark',
      },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
