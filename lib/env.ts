import fs from 'node:fs';
import { crossPath } from './crossPath.js';

/**
 * Returns an object containing the environment variables as properties.
 */
export function env() {
  return Object.entries(process.env).reduce<Record<string, string>>((prev, curr) => {
    const [key, value] = curr;
    prev[`process.env.${key}`] = JSON.stringify(value);
    return prev;
  }, {});
}

/**
 * Returns the current working directory.
 */
export function cwd() {
  return crossPath(process.env.CWD ?? fs.realpathSync(process.cwd()));
}