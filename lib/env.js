const fs = require('node:fs');

module.exports = {
  /**
   * Returns an object containing the environment variables as properties.
   *
   * @return {{[key: string]: string}} An object with environment variables as properties.
   */
  env() {
    return Object.entries(process.env).reduce((prev, curr) => {
      const [key, value] = curr;
      prev[`process.env.${key}`] = JSON.stringify(value);
      return prev;
    }, {});
  },
  /**
   * Returns the current working directory.
   *
   * @return {string} The current working directory.
   */
  cwd() {
    return process.env.CWD ?? fs.realpathSync(process.cwd());
  },
};
