---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Prelapsarian"
releaseDate: 2016-12-21
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2016-"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Transformation Chronicles"
      initiated: "Barr" # or `written:` — never both; the label matches the field
      lyricsBy: "Barr" # credit shown inside the lyrics popup
      lyrics: |
          trembling beyond death
          as far as one can be
          amidst the others
          those who carry and relay the rebirth
          assigning passage and growth

          the controlling desire
          in the hands of the sick
          the illusion of nobility
          disrespecting the point of life
          while the arrogance of worry
          spreads sores of stress and bone

          sailing beyond this ascension awake
          proudly screaming of victory over death
          thousands of earth corpses later
          Hail Transformation!

          ("six grandfathers")
          amongst those desecrated
          sacred mountains
          the faces of false gods
          watch over the land
          watch over us all
    - title: "Hate Power"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          ...and yet this hate power is growing
          pitiful tribal distrust
          ecstatic in conjoined ignorance
          empty with pride

          your hate is nothing but fear induced arrogance
          addicts of emotional response
    - title: "Conflagration"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          Their magic play of flames
          ceremony, the final steps
          path of dances
          a conflagration long past.

          who tore out his eyes for purity.
          embracing nature most base
          like a heavenly lightning
          burns a hated, dim fire of the wish.
    - title: "Lotus Throne"
      initiated: "Marston"
      lyricsBy: "McMaster"
      lyrics: |
          Breathe your last, before
          kissing the icons edge
          infinitely gentle
          with their enormous wings

          Now the triple vow
          Unparalleled beauty
          One covered in ashes
          Within reason's grasp

          Every humiliation, every indignity
          Every human collapse

          Smothered under ashes of legend
          infinite radiating gaze
          the silence
          infinite diffusing gaze

          Lotus throne
          Infinite suggestion
          of one immortal gaze

          Presence of life
          eternal rebirth
          in the green and gold

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    recorded mixed mastered by Colin Marston at Menegroth the thousand caves Aug-Sept 2016.
    cover art by Nick McMaster.  other photos by Koichiro Kojima

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Mick Barr | Guitar, Vocals"
    - "Colin Marston | Guitar"
    - "Nick McMaster | Bass, Vocals"
    - "Lev Weinstein | Drums"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3120368139/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/prelapsarian">Prelapsarian by Krallice</a></iframe>'
# Ampwall: paste the full embed snippet for a click-to-expand player below
# the Bandcamp one (collapsed by default; loads nothing until expanded).
# ampwallEmbed: '<iframe src="https://ampwall.com/..." ...></iframe>'
# Or, with no embed, ampwallUrl renders a plain link instead:
# ampwallUrl: "https://ampwall.com/a/krallice"
---

The memoir goes here — the heart of the page, plain markdown. The first
letter gets the blackletter drop cap automatically. The reader can play the
record (above) while reading, then follow "Next chapter" onward.

## A heading, if a chapter needs one

Headings break a long memory into movements. Use them, or don't.

> A short pull-quote can sit here to change the rhythm.
