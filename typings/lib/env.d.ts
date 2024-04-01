/**
 * Returns an object containing the environment variables as properties.
 *
 * @return {{[key: string]: string}} An object with environment variables as properties.
 */
export function env(): {
  [key: string]: string;
};
/**
 * Returns the current working directory.
 *
 * @return {string} The current working directory.
 */
export function cwd(): string;
