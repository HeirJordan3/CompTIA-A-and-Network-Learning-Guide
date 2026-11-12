import fs from "node:fs";
import path from "node:path";

/** Repository root (parent of web/). */
export function getRepoRoot(): string {
  return path.resolve(process.cwd(), "..");
}

export function getContentRoot(
  contentRoot: "core-1" | "core-2" | "network-plus",
): string {
  return path.join(getRepoRoot(), contentRoot);
}

/**
 * Resolve a curriculum-indexed file under a content root.
 * Rejects path traversal and any path outside the allowed root.
 */
export function resolveIndexedContentFile(
  contentRoot: "core-1" | "core-2" | "network-plus",
  relativeFile: string,
): string {
  if (
    relativeFile.includes("\0") ||
    path.isAbsolute(relativeFile) ||
    relativeFile.split(/[/\\]/).some((part) => part === "..")
  ) {
    throw new Error("Invalid content path.");
  }

  const root = path.resolve(getContentRoot(contentRoot));
  const resolved = path.resolve(root, relativeFile);

  if (resolved !== root && !resolved.startsWith(root + path.sep)) {
    throw new Error("Content path escaped allowed root.");
  }

  if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
    throw new Error(`Content file not found: ${relativeFile}`);
  }

  return resolved;
}
