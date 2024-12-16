import childProcess from 'node:child_process';
import fs from 'node:fs';
import { crossPath } from './crossPath.js';
import { cwd } from './env.js';

/**
 * Generate the Git URL by executing a Git command.
 */
export async function gitURL() {
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
