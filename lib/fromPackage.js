const { resolvePath } = require('./resolvePath');

/**
 * Retrieves a resource from the specified file name.
 *
 * @param {string} fileName - The name of the file to retrieve the resource from.
 * @return {any} The resource retrieved from the file, or null if the file cannot be found or loaded.
 */
function getResource(fileName) {
  try {
    return require(resolvePath(fileName));
  } catch (e) {
    return null;
  }
}

/**
 * Retrieves a specific field from the package.json file.
 *
 * @param {string} field - The field to retrieve from the package.json file.
 * @return {any} The value of the specified field in the package.json file, or null if the field does not exist.
 */
function fromPackage(field) {
  const pkg = getResource(PKG);
  return pkg?.[field] ?? null;
}

/**
 * Generates a list of unique dependencies from a given list of keys.
 *
 * @param {string[]} keys - The list of keys to generate dependencies from.
 * @return {string[]} The list of unique dependencies.
 */
function deps(keys) {
  const deps = [];
  for (const key of keys) {
    for (const dep of Object.keys(fromPackage(key) ?? {})) {
      if (!deps.includes(dep)) {
        deps.push(dep);
      }
    }
  }
  return deps;
}

module.exports = {
  fromPackage,
  deps,
};
