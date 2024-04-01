/**
 * Retrieves a specific field from the package.json file.
 *
 * @param {string} field - The field to retrieve from the package.json file.
 * @return {any} The value of the specified field in the package.json file, or null if the field does not exist.
 */
export function fromPackage(field: string): any;
/**
 * Generates a list of unique dependencies from a given list of keys.
 *
 * @param {string[]} keys - The list of keys to generate dependencies from.
 * @return {string[]} The list of unique dependencies.
 */
export function deps(keys: string[]): string[];
