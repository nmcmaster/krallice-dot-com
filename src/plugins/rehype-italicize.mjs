/**
 * Wraps occurrences of frontmatter-listed phrases in <em> in the rendered
 * markdown body. Driven by the `italicize` frontmatter field (a list of
 * strings — album titles, typically), so prose can mention Dimensional
 * Bleedthrough without hand-marking every occurrence with asterisks.
 *
 * Matching is exact and case-sensitive, guarded by word boundaries (the
 * characters either side of a match must not be letters or digits), and
 * skipped inside elements where nesting emphasis would misbehave.
 */

const SKIP = new Set(['em', 'i', 'code', 'pre', 'a', 'script', 'style']);

export default function rehypeItalicize() {
  return (tree, file) => {
    const titles = file.data.astro?.frontmatter?.italicize ?? [];
    if (!titles.length) return;
    // longest first, so "Years Past Matter" wins over a hypothetical "Years"
    const sorted = [...titles].filter(Boolean).sort((a, b) => b.length - a.length);
    walk(tree, sorted);
  };
}

function walk(node, titles) {
  if (!node.children) return;
  const next = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      next.push(...splitText(child.value, titles));
    } else {
      if (!(child.type === 'element' && SKIP.has(child.tagName))) {
        walk(child, titles);
      }
      next.push(child);
    }
  }
  node.children = next;
}

const isWordChar = (ch) => ch !== undefined && /[\p{L}\p{N}]/u.test(ch);

function splitText(value, titles) {
  const nodes = [];
  let rest = value;
  while (rest.length) {
    let hit = null;
    for (const title of titles) {
      const at = findBounded(rest, title);
      if (at !== -1 && (hit === null || at < hit.at)) hit = { at, title };
    }
    if (!hit) break;
    if (hit.at > 0) nodes.push({ type: 'text', value: rest.slice(0, hit.at) });
    nodes.push({
      type: 'element',
      tagName: 'em',
      properties: {},
      children: [{ type: 'text', value: hit.title }],
    });
    rest = rest.slice(hit.at + hit.title.length);
  }
  if (rest.length) nodes.push({ type: 'text', value: rest });
  return nodes;
}

function findBounded(haystack, needle) {
  let from = 0;
  while (true) {
    const at = haystack.indexOf(needle, from);
    if (at === -1) return -1;
    if (!isWordChar(haystack[at - 1]) && !isWordChar(haystack[at + needle.length])) {
      return at;
    }
    from = at + 1;
  }
}
