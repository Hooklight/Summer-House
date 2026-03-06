import fs from "fs";
import path from "path";
import { marked } from "marked";

export type PeptidePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  displayTitle: string;
  contentHtml: string;
  lastReviewed: string;
};

function extractField(frontmatter: string, field: string): string {
  const quoted = frontmatter.match(new RegExp(`${field}:\\s*"([^"]+)"`));
  if (quoted) return quoted[1];
  const unquoted = frontmatter.match(new RegExp(`${field}:\\s*([^\\s"]+)`));
  return unquoted?.[1] ?? "";
}

function parsePage(filename: string, raw: string): PeptidePage {
  const slug = filename.replace(/\.md$/, "");

  const first = raw.indexOf("---");
  const second = raw.indexOf("---", first + 3);
  const frontmatter = first >= 0 && second > first ? raw.slice(first + 3, second) : "";

  const metaTitle = extractField(frontmatter, "title").replace("Summer House Aesthetics", "Summer House Medspa");
  const metaDescription = extractField(frontmatter, "description").replace("Summer House Aesthetics", "Summer House Medspa");
  const displayTitle = metaTitle.replace(/\s*\|.*$/, "").trim();
  const lastReviewed = extractField(frontmatter, "lastUpdated") || "2026-03-05";

  const body = second >= 0 ? raw.slice(second + 3).trim() : raw;
  const contentHtml = marked.parse(body) as string;

  return { slug, metaTitle, metaDescription, displayTitle, contentHtml, lastReviewed };
}

let _cache: PeptidePage[] | null = null;

export function getAllPeptidePages(): PeptidePage[] {
  if (_cache) return _cache;
  const dir = path.join(process.cwd(), "content/peptide-therapy");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
  _cache = files.map((f) => parsePage(f, fs.readFileSync(path.join(dir, f), "utf-8")));
  return _cache;
}

export function getPeptidePage(slug: string): PeptidePage | undefined {
  return getAllPeptidePages().find((p) => p.slug === slug);
}
