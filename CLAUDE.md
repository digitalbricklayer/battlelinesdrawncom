# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is an [Astro](https://astro.build/) static site for [battlelinesdrawn.com](https://battlelinesdrawn.com/), a tabletop wargaming blog focused on historical gaming. It uses the [AstroPaper](https://github.com/satnaing/astro-paper) theme with Tailwind CSS v4.

## Commands

```bash
npm run dev      # local dev server
npm run build    # type-check (astro check) then production build to dist/
npm run preview  # preview the built site
```

## Architecture

### Site Configuration

`src/config.ts` — central config for site metadata, pagination (`postPerIndex: 4`, `postPerPage: 8`), timezone (`Europe/London`), and feature flags (`showArchives`, `showBackButton`, `dynamicOgImage`, `lightAndDarkMode`).

### Content Collections

Schemas are defined in `src/content.config.ts` (the new Astro Content Layer API using glob loaders). There are 5 collections:

| Collection | Directory | Purpose |
|------------|-----------|---------|
| `blog` | `src/content/post/` | Blog articles |
| `army` | `src/content/army/` | Painted army showcase pages |
| `project` | `src/content/project/` | Wargaming project pages |
| `ruleset` | `src/content/ruleset/` | Ruleset reference pages |
| `supplier` | `src/content/supplier/` | Miniature supplier pages |

**Blog post front matter** (AstroPaper fields — `pubDatetime` and `description` are required):

```yaml
title: string          # required
pubDatetime: date      # required (not "date")
description: string    # required
author: string         # optional, defaults to SITE.author
modDatetime: date      # optional
featured: boolean      # optional
draft: boolean         # optional
tags: string[]         # optional, defaults to ["others"]
ogImage: image|string  # optional
canonicalURL: string   # optional
```

**Custom content front matter** (army, project, ruleset, supplier all share `title`, `date`, `description`, `tags[]`, `featureImage`, `featureImageAlt`, `thumbnail`, `draft`):

- **army**: `scale`, `models[]` (`name`/`qty`/`sku`/`supplier`), `rulesets[]`
- **project**: `scale`, `suppliers[]`, `started`, `completed`, `rulesets[]`, `models[]`
- **ruleset**: `supplier`, `scales[]`, `authors[]`
- **supplier**: `scales[]`, `website_url`

### Pages & Routing

`src/pages/` structure:
- `/` — home (recent posts)
- `/posts/[...page]` — paginated blog list
- `/posts/[...slug]/` — individual blog post
- `/tags/` and `/tags/[tag]/[...page]` — tag index and filtered list
- `/archives/` — posts grouped by date (enabled via `showArchives` in config)
- `/army/`, `/army/[...slug]` — army list and detail
- `/project/`, `/project/[...slug]` — project list and detail
- `/ruleset/`, `/ruleset/[...slug]` — ruleset list and detail
- `/supplier/`, `/supplier/[...slug]` — supplier list and detail
- `/about-us/`, `/search/`, `/rss.xml`, `/robots.txt`

### Layouts

- `Layout.astro` — main layout: ClientRouter view transitions, theme system, OG/Twitter meta, structured data
- `PostDetails.astro` — blog post layout: prev/next nav, scroll progress bar, heading anchors, code copy buttons
- `Main.astro` — page wrapper with Breadcrumb and back-URL tracking
- `Base.astro` — minimal legacy layout used by a small number of pages

### Components

`src/components/` — reusable UI:
- `Card.astro` — post card used on every list page
- `Header.astro`, `Footer.astro` — site chrome (no sidebar)
- `ModelTable.astro` — shared models table for army and project pages
- `ArmyMeta.astro`, `ProjectMeta.astro`, `RulesetMeta.astro`, `SupplierMeta.astro` — per-type metadata tables

### Utilities

- `src/utils/slugify.ts` — **must be used** when building links to tags, suppliers, or rulesets from display names. Uses `slugify` for Latin, `kebabcase` for non-Latin strings.
- `src/utils/getSortedPosts.ts` — sorts blog posts by `modDatetime` then `pubDatetime`, respects draft/scheduled status
- `src/utils/postFilter.ts` — filters out drafts and future-dated posts (with a 15-minute margin)
- `src/utils/getUniqueTags.ts`, `getPostsByTag.ts`, `getPostsByGroupCondition.ts` — tag and grouping helpers
- `src/utils/generateOgImages.ts` — generates OG images at build time using Satori + Resvg

### Styling

Tailwind CSS v4 with `@tailwindcss/typography`. Custom CSS in `src/styles/global.css`:
- `app-layout` utility — standard `mx-auto w-full max-w-3xl px-4` container
- CSS custom properties for theming (`--background`, `--foreground`, `--accent`, `--muted`, `--border`) toggled via `data-theme` attribute
- `.active-nav` — wavy underline for active navigation link

### Search

Uses **Pagefind** for full-text search. The search index is generated automatically during `npm run build` — **search does not work on the dev server**. The `/search/` page warns about this in development. Content is marked with `data-pagefind-body`; elements to exclude use `data-pagefind-ignore`.

### Static Assets & Images

- `public/` — icons, logos, favicons
- `src/assets/images/` — blog post images (referenced as `../../assets/images/filename.jpg` from `src/content/post/`)
- OG images are generated dynamically at build time via `src/utils/og-templates/`
