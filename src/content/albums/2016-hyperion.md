---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Hyperion"
releaseDate: 2016-01-01
orderingDate: 2013-07-01
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2016-hyperion.jpg"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Hyperion"
      initiated: "Barr" # or `written:` — never both; the label matches the field
      lyricsBy: "McMaster / Barr" # credit shown inside the lyrics popup
      lyrics: |
          Solar arch of vast expanse
          Core of innumerable forces
          Unconquered Sun

          Hyperion's voice travels--
          Sol Invictus--
          1,000 years to find me

          Let breath guide thought motion
          Surreality forgone assemblage

          Speed the passage to stellar debris
          This soft tissue must serve
          A greater immortality
          Immolation grant me Helios' steed

          Awaken to blood and frustration
          Next lamb be the tyrant
          Move slow, land moves fast beneath
    - title: "The Guilt of Time"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Let the somatic cosmos
          Sink over this wave of reasoning
          And let the time pass with dignity
          The guilt of time surrounds

          Observations amidst the carriers
          Wave back like the ocean of leaves
          Rejoice in the change
          Forever alter the course

          Reasonless Aliant!
    - title: "Assuming Memory"
      initiated: "Marston"
      lyricsBy: "Barr"
      lyrics: |
          Saviour Crusader Soul Saver
          Kept out, prison chapel ways

          Though functions through
          Cheep chatter, hyenal assumption
          Judgement not of henge

          War temperature
          Greed of grazing
          Twisted strokes of psychology

          Celestial Ossuary
          The ancient dead devour

          All life eroded
          Civilization transmuted to the substance of ether

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    recorded july 2013 at menegroth

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Mick Barr | Guitar, Vocals"
    - "Colin Marston | Guitar"
    - "Nick McMaster | Bass, Vocals"
    - "Lev Weinstein | Drums"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3984949916/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/hyperion">Hyperion by Krallice</a></iframe>'
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
