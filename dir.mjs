import fs from 'fs/promises';
import path             from 'path';

export default async function dir (root) {
  const result = await getDir(root);
  result.forEach(f => {
    f.name = path.relative(root, f.name).replace(/\\/g, '/');
  });
  return result;
}

async function getDir (root) {
  try {
    const files       = await fs.readdir(root);
    let responseArray = [];
    for (const file of files) {
      let name  = path.join(root, file);
      let stats = await fs.lstat(name);
      let isDir = stats.isDirectory();
      responseArray.push({
        name : path.join(name, '/'),
        isDir: isDir,
        size : stats.size,
        mtime: stats.mtime
      });
      if (isDir) {
        let subDirArray = await getDir(name);
        responseArray.push(...subDirArray);
      }
    }
    return responseArray;
  } catch (err) {
    console.error(err);
  }
}

