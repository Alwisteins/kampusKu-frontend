export async function fetcher(url?: string) {
  const data = await fetch(String(url));
  return await data.json();
}
