/**
 * Returns a path sanitized for cross-platform
 */
export function crossPath(path: string) {
  return typeof path === 'string' ? path.replace(/\\/g, '/') : '';
}