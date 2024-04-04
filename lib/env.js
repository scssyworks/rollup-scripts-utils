const fs = require('node:fs');
const { crossPath } = require('./crossPath');

/**
 * Returns an object containing the environment variables as properties.
 *
 * @return {{[key: string]: string}} An object with environment variables as properties.
 */
function env() {
  return Object.entries(process.env).reduce((prev, curr) => {
    const [key, value] = curr;
    prev[`process.env.${key}`] = JSON.stringify(value);
    return prev;
  }, {});
}

/**
 * Returns the current working directory.
 *
 * @return {string} The current working directory.
 */
function cwd() {
  return crossPath(process.env.CWD ?? fs.realpathSync(process.cwd()));
}

module.exports = {
  env,
  cwd,
};
