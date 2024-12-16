import childProcess from 'node:child_process';
import { cwd } from './env.js';

/**
 * Installs the specified dependencies with the given prefix and flag.
 */
export async function install(deps: string[], isDev: boolean, prefix: string) {
  if (deps?.length) {
    const npmProcess = `npm${/^win/.test(process.platform) ? '.cmd' : ''}`;
    const suffixes: string[] = [];
    if (prefix) {
      suffixes.push('--prefix', prefix);
    }
    suffixes.push('i');
    if (isDev) {
      suffixes.push('-D');
    }
    suffixes.push(...deps);
    return new Promise<number>((resolve, reject) => {
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
  return Promise.resolve(0);
}