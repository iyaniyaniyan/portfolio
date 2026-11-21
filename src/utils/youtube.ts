const videoId = /^[A-Za-z0-9_-]{11}$/;

export function youtubeIdFromUrl(value: string): string | undefined {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return;
  }
  if (url.protocol !== 'https:') return;

  const host = url.hostname.replace(/^www\./, '');
  const [, route, id] = url.pathname.split('/');
  let candidate: string | null | undefined;
  if (host === 'youtu.be') {
    candidate = route;
  } else if (
    host === 'youtube.com' ||
    host === 'm.youtube.com' ||
    host === 'youtube-nocookie.com'
  ) {
    if (route === 'watch') candidate = url.searchParams.get('v');
    if (['embed', 'shorts', 'live'].includes(route)) candidate = id;
  }
  return candidate && videoId.test(candidate) ? candidate : undefined;
}
