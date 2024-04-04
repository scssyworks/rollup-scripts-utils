/**
 * Returns a path sanitized for cross-platform
 *
 * @param {string} path - Path
 * @return {string} Sanitized path
 */
function crossPath(path) {
  return typeof path === 'string' ? path.replace(/\\/g, '/') : '';
}

module.exports = {
  crossPath,
};
