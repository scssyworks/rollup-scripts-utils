import { writeFile, mkdir, existsSync } from 'node:fs';
import nodePath from 'node:path';
import { crossPath } from './crossPath.js';
import { cwd } from './env.js';

function toArray(input: string | string[]) {
  return Array.isArray(input) ? input : [input];
}

export async function createFiles(
  paths: string | string[],
  content: string,
  override = true
) {
  const pathArray = toArray(paths);
  const folders: string[] = [];
  const files: string[] = [];
  for (const path of pathArray) {
    if (typeof path === 'string' && path.trim()) {
      let finalPath = crossPath(path);
      const workingDir = cwd();
      if (!finalPath.startsWith(workingDir)) {
        finalPath = crossPath(nodePath.join(workingDir, finalPath));
      }
      const finalPathParts = finalPath.split('/');
      const [fileName] = finalPathParts.splice(finalPathParts.length - 1, 1);
      const folderPath = finalPathParts.join('/').trim();
      if (fileName.trim() && !files.includes(finalPath)) {
        files.push(finalPath);
      }
      if (folderPath.trim() && !folders.includes(folderPath)) {
        folders.push(folderPath);
      }
    }
  }
  await createFolders(folders);
  await Promise.all(
    files.map((file) => {
      return new Promise<void>((resolve, reject) => {
        if (override || !existsSync(file)) {
          writeFile(file, content, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        }
      });
    })
  );
}

export async function createFolders(paths: string | string[], override = true) {
  const folderPaths = toArray(paths);
  if (folderPaths.length) {
    await Promise.all(
      folderPaths.map((folder) => {
        return new Promise<void>((resolve, reject) => {
          if (override || !existsSync(folder)) {
            mkdir(folder, { recursive: true }, (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          }
        });
      })
    );
  }
}
