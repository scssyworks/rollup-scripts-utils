module.exports = {
  /**
   * Returns a path sanitized for cross-platform
   *
   * @param {string} path - Path
   * @return {string} Sanitized path
   */
  crossPath(path) {
    return typeof path === 'string' ? path.replace(/\\/g, '/') : '';
  },
};
