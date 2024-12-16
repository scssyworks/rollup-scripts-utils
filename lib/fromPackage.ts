import fs from 'node:fs';
import { resolvePath } from './resolvePath.js';

/**
 * Retrieves a specific field from the package.json file.
 */
export function fromPackage(field: string) {
  try {
    const packageJson = fs.readFileSync(resolvePath('package.json'), { encoding: 'utf-8' });
    const pkg = JSON.parse(packageJson);
    return pkg?.[field] ?? null;
  } catch (e) {
    return null;
  }
}

/**
 * Generates a list of unique dependencies from a given list of keys.
 */
export function deps(keys: string[]) {
  const deps: string[] = [];
  for (const key of keys) {
    const config = fromPackage(key);
    for (const dep of Object.keys(config ?? {})) {
      if (!deps.includes(dep)) {
        deps.push(dep);
      }
    }
  }
  return deps;
}
