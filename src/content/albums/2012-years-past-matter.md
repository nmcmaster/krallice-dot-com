---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Years Past Matter"
releaseDate: 2012-08-25
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2012-years-past-matter.webp"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "IIIIIII"
      initiated: "Marston" # or `written:` — never both; the label matches the field
      lyricsBy: "Weinstein" # credit shown inside the lyrics popup
      lyrics: |
          The serpent
          Coils upon coils
          A thousand thousand fathoms
          Coils upon coils

          Scales shroud the earth
          And the facets of cabochon eyes
          Become as the sun
          The firmament becomes a
          Writhing tapestry

          It welcomes the procession
          Of the penitent
          They seek favor, compelled
          By orgiastic terror

          In echopraxic convulsions
          Hollow prostrations
          To outdistance doom
          To stave off an ending

          Coils curl on coils
          Writhing as if
          Towering roots
          Surging from the earth
          From the skies

          And all your anthrosophy is as dust
          Neither memory nor ghost remains

          So bow your head
          And raise your eyes no more
          Bow your head and raise your eyes no more
    - title: "IIIIIIII"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Carried over and off
          Left back timing in miles
          Sheer immanence
          Shelved behind other things
          Beholding impermanence
          and felt the founding
          Was following in the fire
          Flickering ancience
          and forward movement
          Time begs not your condolence
          Respect in passage
          Spend time in time
          Let the anger simmer
          Into the hair of the oath
          Forestall all judgement as heresy
          The corner awaits
          As this plane fades and morphs
          The interloper must exit
          Time folds, caught in the…
          Dignity take grace and kneel
          Shadow not this blessed indifference
          Fear shall maintain everlastly
    - title: "IIIIIIIII"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Forgotten forth
          Heavying fog of seniority
          Breeding our own passage

          Anchor the ideals to life
          Lead load bearing strips of faith
          Strings of science
          Strings of mysticism

          Distant start, victimize thyself
          The hate ability is relief
          Acknowledge and set the cage alight
          For it is a gift
          Love of all is pain
    - title: "IIIIIIIIII"
      initiated: "Marston"
      lyricsBy: "Weinstein"
      lyrics: |
          Have your steps brought you home, brother?
          Have you seen again

          The silent tomb of our father
          The divine shade of our mother

          Have you heard her whispered pad
          Under the rotting beams
          Of once elegant archways

          Gardens reclaimed by earth
          And stone subsumed by vine

          The fields of men who lie
          In stupor, taking succor
          From ashes
          Unaware they have wasted
          To mere impressions

          Crumbling mosaics and the
          Silent banners
          Of long-faded triumphs

          Lacrimae mundi
          The world has grown old
          And its tears no longer deluge
          In youthful torrents

          But crawl in procession
          Stately and resigned
          As the glory is gone
          It fled while we watched
          With crossed arms

          Proud and haughty, stares upon our features

          And you and I, brother, will never be gods.
    - title: "IIIIIIIIIII"
      initiated: "McMaster"
    - title: "IIIIIIIIIIII"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Time breeds challenge
          Change what little remains
          Breed outside of time
          Brood of temporal outcasts

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
# engineering: |
#     recorded, mixed, mastered at Studio by Person in month year.  Artwork by Person.  Logo by Person.

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Mick Barr | Guitar, Vocals"
    - "Colin Marston | Guitar"
    - "Nick McMaster | Bass, Vocals"
    - "Lev Weinstein | Drums"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4027888967/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/years-past-matter">Years Past Matter by Krallice</a></iframe>'
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
