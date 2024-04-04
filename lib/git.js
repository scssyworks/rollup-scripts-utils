const childProcess = require('node:child_process');
const fs = require('node:fs');
const { crossPath } = require('./crossPath');
const { cwd } = require('./env');

/**
 * Generate the Git URL by executing a Git command.
 *
 * @return {Promise<string>} The Git URL.
 */
async function gitURL() {
  let gitURL = '';
  try {
    gitURL = await new Promise((resolve, reject) => {
      childProcess.exec('git remote get-url origin', (err, stdout) => {
        try {
          if (err) {
            if (!fs.readdirSync(crossPath(cwd())).includes('.git')) {
              childProcess.execSync('git init');
            }
            reject('');
          } else {
            resolve(stdout.toString().trim());
          }
        } catch (e) {
          reject(e);
        }
      });
    });
  } catch (e) {
    gitURL = '';
  }
  return gitURL;
}

module.exports = {
  gitURL,
};
