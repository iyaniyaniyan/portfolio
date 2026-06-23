export function assetPath(path?: string) {
  if (!path) {
    return '';
  }

  if (/^https?:\/\//i.test(path) || path.startsWith('mailto:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL ?? '/';
  return `${base}${path.replace(/^\//, '')}`;
}
