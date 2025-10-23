export const isInternalLink = (href?: string) =>
  href && (href.startsWith("/") || href.startsWith("#"));
