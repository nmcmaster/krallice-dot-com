# krallice.com

Band site for Krallice. The user is Nicholas McMaster, bassist of the band — the
"personal memories" on album pages are his own writing; never fabricate band facts.

**Code is the source of truth for all styling values.** Nick hand-tweaks CSS
(sizes, spacing, colors, opacities, separators, visibility of elements) between
sessions. This file records architecture, intent, and gotchas only — if it and
the code disagree on a value, the code is right and deliberate. Never "restore"
styling to match this doc. **One exception:** the backdrop/scrim system (see
that section) is documented with exact values and Nick does NOT hand-tweak it —
there, doc and code should always match; drift means a bug or an unrecorded
change worth flagging.

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
2. Copy `album-template.md` (project root — annotated with every frontmatter
   form and the YAML gotchas) to `src/content/albums/<year>-<slug>.md` and
   fill it in. The `<year>-` prefix only
   keeps files chronologically sorted on disk — URLs drop it via
   `albumSlug()` in `data/albums.ts` (`/albums/<slug>`), so slugs must be
   unique across years. Frontmatter schema
   (`src/content.config.ts`): `title`, `releaseDate`, `coverArt`, `tracks[]`,
   `engineering` (free-text string rendered whitespace-as-typed: line breaks
   and multiple spaces are kept, blank lines split paragraphs — holds
   recording info and assorted credits),
   `lineup` (list of `"Name | instruments"` strings — the pipe is the parse
   separator, display formatting lives in `[slug].astro`; rendered as one
   flowing credit paragraph under the engineering text, each member kept
   unwrapped), `bandcampEmbed` (full iframe HTML),
   `ampwallEmbed` (full iframe HTML — rendered as a collapsed click-to-expand
   `<details>` under the Bandcamp player; the iframe sits inert in a
   `<template>` and only mounts on first expand, so collapsed costs no load),
   `ampwallUrl` (plain URL — fallback link form, used when no `ampwallEmbed`). A `tracks`
   entry is either a plain title string or
   `{ title, initiated?|written?, lyrics?, lyricsBy? }` — `initiated` and
   `written` are mutually exclusive credit fields shown under the title, and
   the label matches whichever is used ("initiated" is the band's term for
   the collaborative process; "written" for the conventional case). `lyrics`
   (multiline string) gets a Lyrics link opening a native `<dialog>` popup;
   `lyricsBy` is the lyrics credit shown in that popup's header.
3. Write the memoir in the markdown body. `2008-krallice.md` has annotated
   comments showing every frontmatter form.

**`coverArt` is a single source of truth**: it drives the album-page header art,
the discography grid tile, the zoom popup, AND that page's ambient backdrop.
The one sanctioned override is optional `backdropArt`, which swaps the ambient
backdrop only — every other surface always uses `coverArt`. Don't add further
art fields.

Chapter numbers (the roman numerals under album titles) come from position in
`getSortedAlbums()` — nothing to set manually.

## The backdrop system (BaseLayout.astro)

Backgrounds are a **fixed, viewport-sized layer** (`fixed inset-0 -z-10`,
`bg-cover`), NOT a body background. The image paints exactly once and content
scrolls over it — no tiling/seams on long pages, and it works on iOS where
`background-attachment: fixed` doesn't.

- Default (`backdrop` prop unset): the tour poster, sharp, `bg-top` (it's a very
  tall image; top-aligned shows the artwork, center would show a middle slice).
**Exception to "code is source of truth": this section is exact and Nick does
not hand-tweak it.** All values live on two divs in BaseLayout's body: the
backdrop image div (the art's filter/opacity classes) and the content wrapper
div (the scrim's inline gradient).

- Album pages pass `backdrop={album.data.backdropArt ?? album.data.coverArt}`
  → "ambient" mode:
  `bg-center scale-110 opacity-70 blur brightness-150 saturate-150`. The
  brightness/saturate boost is load-bearing: dark cover art dimmed under the
  dark scrim compounds to invisible without it (measured ~RGB 6,6,5 on the
  debut's cover before the boost). Blur is deliberately light (`blur` = 8px)
  so the art reads as an image, not just palette — which means low-res covers
  may show pixelation (heavy blur would mask it; check new art). `scale-110`
  hides the blur's soft edges.
- The content wrapper carries the scrim, an inline horizontal gradient:
  `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.82) 25%,
  rgba(0,0,0,0.82) 75%, rgba(0,0,0,0.5))` — darkest (0.82) over the ~48rem
  reading column, lighter (0.5) at the margins. The ramps show mild banding
  on low-bit-depth external monitors; Nick A/B'd a smoothstep-eased variant
  and chose to keep the linear one. The eased gradient is preserved in a
  commented-out div right below the live scrim div — leave that comment in
  place; it's the starting point if banding is ever revisited. (An
  feTurbulence dither layer was also tried and rejected: obscured the art.)

**Paint-order gotcha (caused a real bug):** the backdrop layer has negative
z-index, and an in-flow element's own background paints *over* negative-z
descendants. So `background-color` may live on `html` only — putting it on
`body` (or any full-size wrapper) silently hides the backdrop.

## Typography

Three faces, all self-hosted (Fontsource packages imported in BaseLayout, plus
CloisterBlack.ttf via `@font-face`):

- `font-display` — **Cormorant Garamond** (400/500/600): page + album titles.
  Set mixed-case, medium weight, large. Display face only — too delicate for
  body text.
- `font-serif` — **EB Garamond** (400/400-italic/600): all reading material —
  `.memories` prose (sized in global.css), tracklist song titles, engineering
  notes.
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
3. Bandcamp embed — above the memoir so people listen while they read. Beneath
   it, right-aligned: the Ampwall expander ("Also on Ampwall +", collapsed
   `<details>` holding the Ampwall player — keeps the page to one visible
   player) or, without an `ampwallEmbed`, a plain "Also on Ampwall →" link
   (new tab, so the Bandcamp player isn't killed).
4. Recording/engineering panel: free-text credits, then the lineup paragraph —
   kept compact and centered, deliberately heading-less, to speed the reader
   toward the memoir.
5. The memoir (`.memories`).
6. Prev / next chapter footer.
7. Lyrics `<dialog>`s (one per track with lyrics; opened from the tracklist).

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

- Most real content: memoirs, remaining discography entries, Bandcamp embeds.
  The 2008 album has its real cover, tracklist, lyrics, and credits; its
  memoir body is still template text.
- Tablatures page — hosting format undecided (PDF/Guitar Pro/embedded viewer).
- About page — placeholder prose.
- `public/og.png` was generated by compositing `logo_white.png` (alpha-cropped)
  onto #050505 at 1200×630 with PIL; regenerate the same way if the logo changes.
- Uncommitted work in progress — ask before committing.
