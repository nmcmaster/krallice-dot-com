---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Go Be Forgotten"
releaseDate: 2017-11-21
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
    - title: "This Forest For Which We Have Killed"
      written: "Barr" # or `written:` — never both; the label matches the field
      lyricsBy: "Barr" # credit shown inside the lyrics popup
      lyrics: |
          I've only shut their brains
          In their dark homes
          More than I see is more
          That can't or shouldn't see
          What's living past?
          And all demons that can end all
          Next phase through
          Transform
          Grab on
          Open shut shell
          Hang hell
          When you were not there
          You will beg
          You will beg and spit blood

          Are we capable of all that is thine?

          And preach, over ruled
          Dislodge your lives
          I am in strength ahhh
          A poorer dark devil in mustard gas

          A blind deadly grime
          Abides deplorably in hell
          The animal's bone, unchained
          Old bread

          Who has man brought up as its god?

          Those with hell stink like fools
          We're fine
          Glory is thine

          Burn back, I spit blood
          The unmentionable circle
          Running darkness burns

          I am burnt eyes
          And dark hooves
          Hells that break all loyal
          Burn back
          The hour draws, judgement
          No pain, nowhere
          My luck was struck down

          Lucifer certainly leaves us all
          Hung, come too far
          Now we turn to everlasting fire
          Where? Listen up
          all for black
    - title: "Failed Visionary Cults"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Wait through and surround the fortress
          Disguise voices in preparation of trial

          Native meanings lost
          Unable to ascend through
          This wind

          Seeking to alter
          To change the altar
          Current peril of the false idols
          Failed visionary cults
    - title: "Go Be Forgotten"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          Stuck in the place where people go to be forgotten
          So go be forgotten

          Difficult to acknowledge completion
          Time fades to grey
          I sit and stare at the future
          Stuck still
          Letting it all pass

          Amidst the shaking
          Death winds snake their way forth
          Trembling with the earth tonight
          Life functions on and will survive
          Organic matter shall again arrive at consciousness

          Planning what and how to sacrifice
          All is not possible
          Leaving behind the pleasures
          Better for it perhaps

          Scorching an era of evolution away
          Go be forgotten
    - title: "Chaos of the Living"
      initiated: "Marston"
      lyricsBy: "Barr"
      lyrics: |
          Crown deep the dead
          Caught in life spirals
          Artificial bonding agents secure us
          Permanently fixed in spirals
          Fastened to the chaos of the living
    - title: "Quadripartite Mirror Realm"
      written: "Marston"

    - title: "Ground Prayer"
      initiated: "Marston"
      lyricsBy: "Barr"
      lyrics: |
          Shimmer take me
          Eyes closed, felt light
          Prayer in wait
          Surrendered in consciousness
          For the sake of the blending

          Fear spindles
          Reaching down, wire stiff
          Balancing ground and the diaphanous
          Reaching through planet and life

          Prayer mists and evaporates
          Dousing the earth
          In lust and envy
          Coded well wishings
          And lip service

          Insults hurled at gods
          Bitter agitation at the audacity
          Christian imposition, disbelieving such
          Sold again through this bottomless funnel
# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
# engineering: |

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Mick Barr | Guitar, Vocals"
    - "Colin Marston | Guitar"
    - "Nick McMaster | Bass, Vocals"
    - "Lev Weinstein | Drums"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3024771909/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/go-be-forgotten">Go Be Forgotten by Krallice</a></iframe>'
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
