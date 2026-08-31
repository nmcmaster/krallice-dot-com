---
# ── Copy this file to src/content/albums/<year>-<slug>.md ──────────────────
# The <year>- prefix only sorts files on disk; the URL becomes /albums/<slug>
# (year stripped), so slugs must be unique across years.
# Site order + chapter numerals come from releaseDate — nothing to set here.

title: "Diotima"
releaseDate: 2011-04-26
# Drop the cover into public/albums/ first. One field drives the header art,
# the discography tile, the zoom popup, AND the page's ambient backdrop.
# Export ~1600×1600 WebP or JPEG (q75–80), aiming under ~500 KB — files in
# public/ ship as-is, no build-time optimization:
coverArt: "/albums/2011-diotima.jpg"

# A track is a plain title string, or a mapping for extra data.
# Gotchas: once a track has any extra field it needs `title:` on the dash
# line, with every other field aligned exactly under the `t` of `title`.
# Lyric lines must all be indented deeper than `lyrics:` itself (pasting
# strips indentation — select the pasted lines and indent them together).
tracks:
    - title: "-"
      initiated: "Marston" # or `written:` — never both; the label matches the field

    - title: "Inhume"
      initiated: "Barr"
      lyricsBy: "McMaster" # credit shown inside the lyrics popup
      lyrics: |
          The silence already funereal spreads a pall
          His lips not drinking there or baiting breath

          Its muzzle all aflame with savage howls
          Idol of Anubis
          Aflame...

          In the fluttering veil that girds her absence round
          We breathe in always, thought it brings us to death

          His century appalled at never having heard
          That in this voice triumphant death had sung its hymn

          As to himself at last
          eterrnity changes him
          the poet reawakens

          They, like a writhing Hydra
          bestow a purer sense

          Calm block fallen here from obscure disaster
          Mark the boundaries evermore
          To the dark flighs of blasphemy hurled to the future
    - title: "The Clearing"
      initiated: "Barr"
      lyricsBy: "Barr"
      lyrics: |
          As if the light never shone
          And humans never thought
          All that are left shall be subject to suffer
          All left shall suffer

          The escapers made their pact and left
          And light shines on all living things above ground

          All death has eaten itself
          So it turns to life

          So the fabric of our atoms can stay secure
          And time's senses continue to sense

          So death comes and failures add up

          And we can only let time brush over us
          Let the memories pile up until the final plane
          And the memories return into the Universe

          The way of the eternal
          Is only through will
          To force the conscious mind
          Into the void of Death

    - title: "Diotima"
      initiated: "Marston"
      lyricsBy: "McMaster" # credit shown inside the lyrics popup
      lyrics: |
          Wake, nurse your aching brow, the cloud
          behind your eyes
          For now soothed by gentle thoughts of oblivion
          And sexual release
          Inside every man is a beast, a perfect animal of
          Self-advancement
          Unthethered by conscience

          Beyond the realm of will, while the living self
          Fragments into quanta
          Is this the next step? Minds disolved in the
          Aether, a split species
          "Diotima, your sun, the more beautiful age, has
          gone down
          and now the storms quarrel in frost-covered
          night"

          Grant us the power of detachment, that our
          Fragmented selves will know purpose
          Ethereal love, spiritsense, of which the physical
          can only intimate
          Freedom from this flesh, that I may observe the
          balance of nature

          "You, the favourite of the heavenly muse
          You, who once reconciled the elements
          Come and comfort me against the chaos of our
          time
          Order the raging battle with the peaceful music
          of Heaven"

          "Till what's cleft in two become one in the
          mortal heart
          Till ancient human nature, so calm, so great,
          serenely and powerfully rise
          From out of our seething times"

          "Heal her life O Gods, a life that you yourselves
          raised"
          So she may merge our splintering selves, the
          physical and the ideal
          "for not everything is in the power of the Gods,
          and Mortals would sooner turn into the abyss
          Each day I shall give my cinders to your flame,
          And rise up another man"
    - title: "Litany of Regrets"
      initiated: "Marston"
      lyricsBy: "Weinstein" # credit shown inside the lyrics popup
      lyrics: |
          Once gaily painted
          And awash in joyful
          Rites and the blood
          Giving warmth to the slumbering crowds

          The wise man who is not wise
          Sits and broods

          And dreams of the hills of youth
          The glowing gold of wind-dancing wheat
          And the embracing shade of verdant oaks

          And he knows that the memory
          Is a falsehood
          Born of the batterings of the present
          Merely a chimera of what should have been

          A balm for the litany of regrets
          Left unerringly in his wake
          Like in any other

          And the anchorite dreams
          He dreams a shaman carving blood unto

          Darkened cavern ribs
          Whilse shadows dance
          To the ecstatic rythms
          Of the Pacan.

          He dreams of pages of gossamer and spider web
          Whose words will not survive their altercation back to dust

          And of words that moulder in
          Mustered ranks
          In endless volumes in endless mausoleums
          Whose foundations are the tide of the ocean

          He dreams of deep rivers of tears
          Of men as foolish as he
          Who would spread their days
          In the hopes of something more

          As anchorites numberless and alone
          Stare deep into the father sun
          Whose death is but a promise

          They cleanse their eyes
          Wash time from their sight
          With all else
          And so become immortal
    - title: "Telluric Rings"
      initiated: "Marston"
      lyricsBy: "Weinstein" # credit shown inside the lyrics popup
      lyrics: |
          The eye seeks a desert
          The anchorite sits, pensive

          Thought encumbered
          Pillars of cracked rock and
          The catarrhs of coarse winds

          The bleached bone offerings
          Of before
          And the deeply rumbled promises
          Of gyre and firmament

          The eye drowns and
          Time is nothing

          No more than the lines etched
          In the sand of ancient sea beds

          Where lie old dreams of caverned
          Maws and light in gulfing void

          No more than the enervating
          Waters which hold the murmured

          Whisper of desolation
          Of a great eye that has never blinked

          No more than cities
          In the dust of time
          Thresholds carved in cliffs
          And somber faces etched in stone
    - title: "Dust and Light"
      initiated: "Barr"
      lyricsBy: "Barr" # credit shown inside the lyrics popup
      lyrics: |
          Rot encompassing stone
          To peel back this reckoning
          Masses of brain masters pitted
          As life returns this passing waste

          Proud to be living in the echo
          The mist of all things combined
          Unfocused apparition stream
          Cresting in total divinity

          Not one with them
          Separately crushing
          Glory amounted less in secret
          Blood trees stand on
          In slow stone centuries

          Petrifying the cast-offs of time
          Seeking the balance
          Acknowledge the dust and light
          Acknowledge divinity's mortality

# Free text, rendered whitespace-as-typed: line breaks and multiple spaces
# are kept, a blank line starts a new paragraph. Recording info + assorted
# credits (artwork, logo, etc). Double space between sentences to taste.
engineering: |
    Recorded, Mixed and Mastered by Colin Marston.  Artwork by Max Hooper Schneider & Nick McMaster.  Alternate 1st edition vinyl artwork by Karlynn Holland.

# One entry per member, "Name | instruments".
# The pipe is the parse separator; display formatting lives in [slug].astro.
lineup:
    - "Mick Barr | Guitar, Vocals"
    - "Colin Marston | Guitar"
    - "Nick McMaster | Bass, Vocals"
    - "Lev Weinstein | Drums"

# Paste the full Bandcamp embed snippet to light up the player:
bandcampEmbed: '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2692761923/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://krallice.bandcamp.com/album/diotima">Diotima by Krallice</a></iframe>'
# Ampwall is a link below the player, not an embed:
# ampwallUrl: "https://ampwall.com/a/krallice"
---

The memoir goes here — the heart of the page, plain markdown. The first
letter gets the blackletter drop cap automatically. The reader can play the
record (above) while reading, then follow "Next chapter" onward.

## A heading, if a chapter needs one

Headings break a long memory into movements. Use them, or don't.

> A short pull-quote can sit here to change the rhythm.
