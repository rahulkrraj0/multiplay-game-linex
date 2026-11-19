import { normalizePublicSiteUrl } from "../../scripts/playora-seo-artifacts.mjs";

const DEFAULT_SITE_ORIGIN = "https://gameslord.online";

export const publicSiteOrigin =
  normalizePublicSiteUrl(import.meta.env.VITE_PUBLIC_SITE_URL) ??
  DEFAULT_SITE_ORIGIN;

export function canonicalUrl(path: string) {
  return `${publicSiteOrigin}${path}`;
}

