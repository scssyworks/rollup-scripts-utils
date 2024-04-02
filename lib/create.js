const { writeFile, mkdir, existsSync } = require('node:fs');
const nodePath = require('node:path');
const { crossPath } = require('./crossPath');
const { cwd } = require('./env');

function toArray(input) {
  return Array.isArray(input) ? input : [input];
}

async function createFiles(paths, content, override = true) {
  const pathArray = toArray(paths);
  const folders = [];
  const files = [];
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
  return Promise.all(
    files.map((file) => {
      return new Promise((resolve, reject) => {
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

async function createFolders(paths, override = true) {
  const folderPaths = toArray(paths);
  if (folderPaths.length) {
    return Promise.all(
      folderPaths.map((folder) => {
        return new Promise((resolve, reject) => {
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
  return Promise.resolve();
}

module.exports = {
  createFiles,
  createFolders,
};
