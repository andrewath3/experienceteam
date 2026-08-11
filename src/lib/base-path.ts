export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** next/image with `unoptimized: true` doesn't auto-prefix basePath, unlike next/link. */
export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
