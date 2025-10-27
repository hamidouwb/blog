# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with SvelteKit, featuring markdown-based blog posts with syntax highlighting, dark mode support, and 3D graphics via Three.js/Threlte. The site is deployed on Vercel with static site generation (SSG) enabled.

## Development Commands

### Starting Development
```bash
npm run dev           # Start dev server on port 3000
npm run dev -- --open # Start dev server and open in browser
```

### Building and Preview
```bash
npm run build   # Create production build
npm run preview # Preview production build locally
```

### Code Quality
```bash
npm run check         # Run svelte-check for type checking
npm run check:watch   # Run svelte-check in watch mode
npm run lint          # Check code formatting and linting
npm run format        # Auto-format code with Prettier
```

## Architecture

### Markdown Post System
Blog posts are stored as `.md` files in `src/posts/` with frontmatter metadata. The system uses:

- **mdsvex**: Processes markdown files as Svelte components
- **Post API endpoint** (`src/routes/api/posts/+server.ts`): Uses Vite's `import.meta.glob` to dynamically load all markdown posts, extract metadata and slugs, then sort by publication date
- **Dynamic routes** (`src/routes/posts/[slug]/`): Dynamically imports posts based on URL slug
- **Post metadata structure** (defined in `src/types/index.ts`):
  ```typescript
  {
    title: string;
    imgUrl: string;
    youtubeId?: string;
    publishedAt: string;  // ISO date format
    summary: string;
  }
  ```

### Rendering & Prerendering
- **Root layout** (`src/routes/+layout.ts`) sets `export const prerender = true` to enable static site generation
- All pages are prerendered at build time for optimal performance
- Layout load function tracks current pathname for navigation state

### Component Architecture
Key reusable components in `src/lib/components/`:

- **ThemeInitializer.svelte**: Hydrates dark mode state from localStorage on page load
- **DarkmodeButton.svelte**: Toggles theme and persists to localStorage
- **CopyCodeInjector.svelte**: Injects copy buttons into all code blocks after mount
- **CopyCodeButton.svelte**: Individual copy button with click-to-copy functionality
- **PostListing.svelte**: Displays post card with thumbnail, title, summary, and date
- **MainHeader.svelte**: Main navigation header
- **HomeHeader.svelte**: Hero section for homepage
- **PostHeader.svelte**: Header for individual post pages
- **Scene.svelte** & **Model.svelte**: Three.js/Threlte 3D rendering components
- **Stars.svelte**: Animated starfield background effect

### State Management
- **Dark mode store** (`src/lib/stores/darkmode.ts`): Simple Svelte writable store for theme state
- Theme persistence handled via localStorage with class-based toggling on `<html>` element

### Styling
- **Tailwind CSS** with custom dark mode configuration (`darkMode: 'class'`)
- **@tailwindcss/typography** plugin for styled markdown content
- Custom typography config removes default code backticks and applies custom code block styling
- Custom color: `dark-background: '#121314'`

### Build Configuration
- **Adapter**: Uses `@sveltejs/adapter-vercel` for Vercel deployment
- **Dev server**: Runs on port 3000 (configured in `vite.config.ts`)
- **File extensions**: Processes both `.svelte` and `.md` files via mdsvex

## Important Patterns

### Adding New Blog Posts
1. Create a new `.md` file in `src/posts/` with required frontmatter
2. Filename becomes the URL slug (e.g., `my-post.md` → `/posts/my-post`)
3. Frontmatter must include: title, imgUrl, publishedAt, summary
4. Posts are automatically discovered and sorted by date

### Modifying Post Metadata
When changing the post metadata structure:
1. Update the type definition in `src/types/index.ts`
2. Update the API endpoint logic in `src/routes/api/posts/+server.ts` if needed
3. Update relevant display components (PostListing, PostHeader, etc.)

### Theme/Dark Mode Changes
- Dark mode class is applied to `<html>` element (configured in Tailwind)
- Theme state initialized in ThemeInitializer component (mounted in root layout)
- Theme toggled via DarkmodeButton component
- Always sync changes between store, localStorage, and DOM class
