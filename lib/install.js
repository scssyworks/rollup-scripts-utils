const childProcess = require('node:child_process');
const { cwd } = require('./env');

/**
 * Installs the specified dependencies with the given prefix and flag.
 *
 * @param {string[]} deps - An array of dependencies to install.
 * @param {boolean} isDev - A flag indicating whether the installation is for development purposes.
 * @param {string} prefix - The prefix to use for the installation.
 * @return {Promise<number>} A promise that resolves with the exit code of the installation process.
 */
function install(deps, isDev, prefix) {
  if (deps?.length) {
    const npmProcess = `npm${/^win/.test(process.platform) ? '.cmd' : ''}`;
    const suffixes = [];
    if (prefix) {
      suffixes.push('--prefix', prefix);
    }
    suffixes.push('i');
    if (isDev) {
      suffixes.push('-D');
    }
    suffixes.push(...deps);
    return new Promise((resolve, reject) => {
      const npmi = childProcess.spawn(npmProcess, suffixes, {
        stdio: [0, 1, 2],
        cwd: cwd(),
      });
      npmi.on('close', (code) => {
        if (code === 0) {
          resolve(code);
        } else {
          reject(code);
        }
      });
    });
  }
}

module.exports = {
  install,
};
