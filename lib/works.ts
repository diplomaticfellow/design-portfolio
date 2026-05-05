import fs from "node:fs"
import path from "node:path"

export type Work = {
  id: string
  title: string
  src: string
}

const VALID_EXT = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"])

function titleFromFile(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "")
  const cleaned = base.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim()
  return cleaned
    .split(" ")
    .map((w) => (w.length > 0 ? w.charAt(0).toUpperCase() + w.slice(1) : w))
    .join(" ")
}

/**
 * Reads /public/<folder> at build time and returns a sorted list of works.
 * Drop new images into /public/posters or /public/mockups and they will
 * automatically appear after the next build — no code changes required.
 *
 * Files are sorted alphabetically; prefix with `01-`, `02-`, etc. to
 * control the order if you need to.
 */
export function getWorks(folder: "posters" | "mockups"): Work[] {
  const dir = path.join(process.cwd(), "public", folder)
  let files: string[] = []
  try {
    files = fs.readdirSync(dir)
  } catch {
    return []
  }
  return files
    .filter((f) => !f.startsWith("."))
    .filter((f) => VALID_EXT.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
    .map((file, i) => ({
      id: String(i + 1).padStart(2, "0"),
      title: titleFromFile(file),
      src: `/${folder}/${file}`,
    }))
}
