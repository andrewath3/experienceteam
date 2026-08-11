import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

/**
 * Reads a single content file's frontmatter + body. No caching — always
 * reads current disk contents, so edits show up on the next request/refresh
 * without restarting the dev server.
 */
export function readContentFile(relPath: string): { data: Record<string, unknown>; body: string } {
  const raw = fs.readFileSync(path.join(CONTENT_ROOT, relPath), "utf8");
  const { data, content } = matter(raw);
  return { data: data as Record<string, unknown>, body: content.trim() };
}

/** Reads every .md file in a content subdirectory (non-recursive). */
export function readContentDir(relDir: string): { slug: string; data: Record<string, unknown>; body: string }[] {
  return fs
    .readdirSync(path.join(CONTENT_ROOT, relDir))
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ slug: f.replace(/\.md$/, ""), ...readContentFile(path.join(relDir, f)) }));
}

/** Splits a markdown body into paragraphs on blank lines. */
export function splitParagraphs(body: string): string[] {
  return body
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
