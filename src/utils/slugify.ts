/**
 * Replicates Hugo's `urlize` filter:
 * lowercase, collapse whitespace/special chars to hyphens, trim leading/trailing hyphens.
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
