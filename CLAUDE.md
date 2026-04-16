# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is an [Astro](https://astro.build/) static site for [battlelinesdrawn.com](https://battlelinesdrawn.com/), a tabletop wargaming blog focused on historical gaming.

## Commands

```bash
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the built site
```

## Architecture

### Content Collections

Content lives in `src/content/` and is typed via Zod schemas in `src/content/config.ts`. There are 5 collections:

| Collection | Directory | Purpose |
|------------|-----------|---------|
| `post` | `src/content/post/` | Blog articles |
| `army` | `src/content/army/` | Painted army showcase pages |
| `project` | `src/content/project/` | Wargaming project pages |
| `ruleset` | `src/content/ruleset/` | Ruleset reference pages |
| `supplier` | `src/content/supplier/` | Miniature supplier pages |

Key custom front matter fields:

- **army**: `scale`, `models[]` (`name`/`qty`/`sku`/`supplier`), `rulesets[]`
- **project**: `scale`, `suppliers[]`, `started`, `completed`, `rulesets[]`, `models[]`
- **ruleset**: `supplier`, `scales[]`, `authors[]`
- **supplier**: `scales[]`, `website_url`

### Pages & Routing

`src/pages/` has one directory per content type, each with `index.astro` (list) and `[...slug].astro` (detail). Additional pages: `/`, `/about-us/`, `/search/`, `/tags/`, `/tags/[tag]/`, `/rss.xml`, `/robots.txt`.

### Components

`src/components/` — all reusable UI:
- `Header.astro`, `Footer.astro`, `Sidebar.astro` — site chrome
- `PostCard.astro` — card used on every list page
- `ModelTable.astro` — shared models table for army and project pages
- `ArmyMeta.astro`, `ProjectMeta.astro`, `RulesetMeta.astro`, `SupplierMeta.astro` — per-type metadata tables (floated right)

### Utilities

- `src/utils/slugify.ts` — converts display names to URL slugs. **Must be used** when building links to tags, suppliers, or rulesets from display names.
- `src/utils/collections.ts` — `getPublishedPosts()` and `getAllTags()` helpers used across pages.

### Styling

All CSS is in `src/styles/global.css` (no framework). Meta tables (`.army-meta`, `.project-meta`, `.ruleset-meta`, `.supplier-meta`, `.army-contents`) are floated right on desktop and stack below content on mobile.

### Static Assets

`public/` — icons, logos, images.

### Search

Client-side search using Fuse.js. `src/pages/search-index.json.ts` generates a JSON index of all posts at build time; `src/pages/search.astro` fetches it at runtime and queries with Fuse.js.
