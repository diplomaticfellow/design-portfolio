// Prefix any raw asset URL (e.g. used in <a href> for the PDF) with the
// configured basePath so it works when deployed to GitHub Pages under
// /design-portfolio/. next/image handles basePath automatically.
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  if (!path.startsWith("/")) return base + "/" + path
  return base + path
}
