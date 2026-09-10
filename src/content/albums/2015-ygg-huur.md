---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Ygg Huur"
releaseDate: 2015-07-30
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2015-"
# backdropArt: "/albums/2012-years-past-matter-background.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "Idols"
      written: "McMaster" # or `written:` — never both; the label matches the field
      lyricsBy: "McMaster" # credit shown inside the lyrics popup
      lyrics: |
          What choice have we but to worship the sun,
          Else the idolatry of beauty and the myths of transformation
          For a life already laden with every species of failure?

          A grasping hand is cracked and leathery to the tough; a voice
          Cries not to be abandoned
    - title: "Wastes of Ocean"
      initiated: "Marston"
      lyricsBy: "McMaster"
      lyrics: |
          A final mirage enchants
          Blood engulfs the eves

          Wending through the cycles of mania
          1,000 tiny ropes drag a body to the ground
          The canvas of the dream a filthy, tattered rag
          The gods gigantic in power

          Swing after swing of the iron axe
          Shoreline conflagration as I take a last look

          Exile through wastes of ocean
          Last flames that engulfed my world
    - title: "Over Spirit"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Breath of life and cloud
          Black clouds which obscure
          And devour celestial beings
          Cosmic feast
          Dizzy from all forms of blood
          Beast god man
          All screaming
          Agony in collective ignorance
          Called upon by thyself
          Thyself being a part of all life
          In the sickness
          Quarantined in pure paranoia
    - title: "Tyranny of Thought"
      initiated: "Marston"
      lyricsBy: "Barr"
      lyrics: |
          There remains no monuments
          To our vanity
          No cenotaphs
          To subsumed glory
          Buried by the weight of years

          We fashioned fate from the tyranny
          Of thought
          And the failure of noble intent
          The failure of noble intent

          And the great river of our blood roars in protest.
          Tributaries swallowed by the
          Grim god of silence
          The god of silence

          Relentlessly we wove the skeins
          Heedless of our doom
          Lashing to our lives
          The promise of failure

          And I will build within myself
          A monument of flagellation
          I will silence my tongue
          And sacrifice myself to the empty vault of the firmament
    - title: "Bitter Meditation"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          [Part 1 "Separation"]

          Humming separately away
          Left inward with untrained process
          Towards separation
          From the path that bleeds towards creation
          Persistence of the morose
          Murder thy kingdom of ash
          Self deceivingly stretched upon nails
          A forceless act
          Science is a god
          A tool like all gods

          [Part 2 "The Guiding"]

          Connectivity to the open sky
          Beholding the kingdom of earth
          Strangling in vines
          Crawling through life's incessance
          Insect messiah, body and blood
          Mutual sustenance
          Human blood on rotting leaves
    - title: "Engram"
      initiated: "McMaster"
      lyricsBy: "McMaster"
      lyrics: |
          Clot and freeze
          Into fetid venous ropes
          A groaning pulsing mesh of shackles

          Engrams overlay anew, day of Ashura, flagellant march,
          To mock our impotent cries to bind

          And now this bed is a tomb
          And home's threshold gives only a sinking chill

          Because no matter what, it ends this way
          With me taking your body to the fire
# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    record menegroth july 4th-8th 2015

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Mick Barr | Guitar, Vocals"
    - "Colin Marston | Guitar"
    - "Nick McMaster | Bass, Vocals"
    - "Lev Weinstein | Drums"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2164603624/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/ygg-huur">Ygg huur by Krallice</a></iframe>'
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
