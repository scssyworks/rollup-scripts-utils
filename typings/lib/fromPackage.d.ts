/**
 * Retrieves a resource from the specified file name.
 *
 * @param {string} fileName - The name of the file to retrieve the resource from.
 * @return {any} The resource retrieved from the file, or null if the file cannot be found or loaded.
 */
export function getResource(fileName: string): any;
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
