import path from 'node:path';
import { cwd } from './env.js';

/**
 * Resolves the given path by joining it with the current working directory.
 */
export function resolvePath(p: string) {
  return path.join(cwd(), p);
}
