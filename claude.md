# krallice.com

Band site for Krallice. The user is Nicholas McMaster, bassist of the band — the
"personal memories" on album pages are his own writing; never fabricate band facts.

## The concept

The site is the band's story told through its records, **in chronological order**.
The homepage is a single word — "Begin" in blackletter — that drops you into the
first album. Each album page is a chapter: art, tracklist, a Bandcamp player you
start *before* reading, then a long-form personal memoir. Prev/next footers walk
the discography like chapters of a book. The memoir prose is the heart of every
page; everything else is supporting material.

## Stack

- Astro 6.3, static output, `@astrojs/netlify`, deployed to Netlify
- Tailwind CSS 4.3 via `@tailwindcss/vite`
- TypeScript, Node 22+
- **No JS frameworks.** Vanilla TS in Astro `<script>` blocks only.

## Structure

```
src/
  pages/            index (Begin), discography, about, tablatures, albums/[slug]
  layouts/          BaseLayout.astro — head, nav, fixed backdrop layer
  components/       Nav.astro
  content/albums/   One markdown file per album — THE content organization
  data/albums.ts    getSortedAlbums(): albums oldest-first (canonical order)
  styles/           global.css (@theme fonts, .memories prose), CloisterBlack.ttf
public/
  albums/           Cover art files
  og.png            1200×630 social card (white sigil on #050505)
  krallicetour_final.webp   Tour poster — default site backdrop (1080×2772)
```

## Adding an album (the one-by-one workflow)

1. Drop the cover into `public/albums/`.
2. Create `src/content/albums/<year>-<slug>.md`. Frontmatter schema
   (`src/content.config.ts`): `title`, `releaseDate`, `coverArt`, `tracks[]`,
   `engineering` (multi-paragraph string), `bandcampEmbed` (full iframe HTML),
   `ampwallUrl` (plain URL — rendered as a link, not an embed).
3. Write the memoir in the markdown body. `2008-krallice.md` is the annotated
   template (currently all placeholder content).

**`coverArt` is a single source of truth**: it drives the album-page header art,
the discography grid tile, AND that page's ambient backdrop. Never add a second
art field.

Chapter numbers (the roman numerals under album titles) come from position in
`getSortedAlbums()` — nothing to set manually.

## The backdrop system (BaseLayout.astro)

Backgrounds are a **fixed, viewport-sized layer** (`fixed inset-0 -z-10`,
`bg-cover`), NOT a body background. The image paints exactly once and content
scrolls over it — no tiling/seams on long pages, and it works on iOS where
`background-attachment: fixed` doesn't.

- Default (`backdrop` prop unset): the tour poster, sharp, `bg-top` (it's a very
  tall image; top-aligned shows the artwork, center would show a middle slice).
- Album pages pass `backdrop={album.data.coverArt}` → "ambient" mode:
  `bg-center scale-110 opacity-35 blur-3xl`. The heavy blur extracts the
  record's palette as atmosphere rather than showing the image, and it also
  masks pixelation from low-res cover art at any viewport size. `scale-110`
  hides the blur's soft edges.
- The `bg-black/65` wrapper in BaseLayout darkens everything for text contrast.
- Tint strength knobs (opacity/blur) live on that one div in BaseLayout.

**Paint-order gotcha (caused a real bug):** the backdrop layer has negative
z-index, and an in-flow element's own background paints *over* negative-z
descendants. So `background-color` may live on `html` only — putting it on
`body` (or any full-size wrapper) silently hides the backdrop.

## Typography

Three faces, all self-hosted (Fontsource packages imported in BaseLayout, plus
CloisterBlack.ttf via `@font-face`):

- `font-display` — **Cormorant Garamond** (400/500/600): page + album titles.
  Set mixed-case, `font-medium`, large (`text-5xl md:text-6xl`). Display face
  only — too delicate for body text.
- `font-serif` — **EB Garamond** (400/400-italic/600): all reading material —
  `.memories` prose (1.175rem/1.8), tracklist song titles, engineering notes.
- `font-blackletter` — **Cloister Black**: "Begin" on the homepage and the
  drop cap opening each memoir. The site's signature; use sparingly, don't
  spread it.

The deliberate contrast: bookish serif for titles and reading material vs.
utilitarian chrome (uppercase tracked sans labels, tabular mono numbers/dates).
Keep new UI in the chrome register, new content in serif.

## Album page anatomy (order matters — it was chosen deliberately)

1. Cover art + tracklist side-by-side (`items-center`; stacks on mobile).
   Tracklist has no heading — the numbered list is self-evident.
2. Title + chapter marker ("II · 2009", centered).
3. Bandcamp embed — above the memoir so people listen while they read, with a
   right-aligned "Also on Ampwall →" link beneath it (new tab, so the player
   isn't killed).
4. The memoir (`.memories`).
5. Engineering notes.
6. Prev / next chapter footer.

Known trade-off: with 8+ tracks the list grows taller than the cover and the
art floats centered with gaps. If a real record makes this ugly, options are
`items-start` or a two-column tracklist — decide when real content exists.

## Astro gotchas already learned

1. `<style>` blocks are scoped; runtime-created elements and JS-assigned
   `@keyframes` need `<style is:global>`.
2. Component `<script>` tags become deferred ES modules — no ordering
   guarantees between components.
3. Tailwind `hidden` is `display:none` — measure layout only after making the
   element visible.
4. The paint-order/backdrop gotcha above.

## User preferences

- **Don't start the dev server.** `npm run dev` is already running at
  `http://localhost:4321`. Verify with curl (or browser tools if connected).
- Terse responses, no chatty narration, no emojis.
- No premature abstractions or unrequested refactors.
- Verify UI changes before declaring them done.
- Confirm before destructive or shared-state actions (deploys, force-pushes).

## Open / not yet decided

- All real content: actual discography entries, memoirs, cover art, tracklists,
  Bandcamp embeds. Only the placeholder 2008 album exists.
- Tablatures page — hosting format undecided (PDF/Guitar Pro/embedded viewer).
- About page — placeholder prose.
- `public/og.png` was generated by compositing `logo_white.png` (alpha-cropped)
  onto #050505 at 1200×630 with PIL; regenerate the same way if the logo changes.
- Uncommitted work in progress — ask before committing.
