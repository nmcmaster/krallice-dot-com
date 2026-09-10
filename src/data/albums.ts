import { getCollection } from 'astro:content';

/** URL slug for an album: the file id minus the `<year>-` prefix, which
    exists only to keep the content files chronologically sorted on disk. */
export function albumSlug(album: { id: string }): string {
  return album.id.replace(/^\d{4}-/, '');
}

/** All albums, oldest first — the canonical chronological order for the site.
    `orderingDate` (never displayed) overrides `releaseDate` for sorting. */
export async function getSortedAlbums() {
  const albums = await getCollection('albums');
  const sortKey = (a: (typeof albums)[number]) =>
    (a.data.orderingDate ?? a.data.releaseDate).valueOf();
  return albums.sort((a, b) => sortKey(a) - sortKey(b));
}
