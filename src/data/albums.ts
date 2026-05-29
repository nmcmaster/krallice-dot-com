import { getCollection } from 'astro:content';

/** All albums, oldest first — the canonical chronological order for the site. */
export async function getSortedAlbums() {
  const albums = await getCollection('albums');
  return albums.sort(
    (a, b) => a.data.releaseDate.valueOf() - b.data.releaseDate.valueOf(),
  );
}
