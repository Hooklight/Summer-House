export const siteName = "Summer House Medspa";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://summerhousemedspa.com";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteUrl).toString();
}
