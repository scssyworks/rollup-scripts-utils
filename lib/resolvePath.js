const path = require('node:path');
const { cwd } = require('./env');

module.exports = {
  /**
   * Resolves the given path by joining it with the current working directory.
   *
   * @param {string} p - the path to be resolved
   * @return {string} the resolved path
   */
  resolvePath(p) {
    return path.join(cwd(), p);
  },
};
