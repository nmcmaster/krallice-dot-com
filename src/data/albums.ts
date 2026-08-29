import { getCollection } from 'astro:content';

/** URL slug for an album: the file id minus the `<year>-` prefix, which
    exists only to keep the content files chronologically sorted on disk. */
export function albumSlug(album: { id: string }): string {
  return album.id.replace(/^\d{4}-/, '');
}

/** All albums, oldest first — the canonical chronological order for the site. */
export async function getSortedAlbums() {
  const albums = await getCollection('albums');
  return albums.sort(
    (a, b) => a.data.releaseDate.valueOf() - b.data.releaseDate.valueOf(),
  );
}
