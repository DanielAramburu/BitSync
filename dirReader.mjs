import { Console } from 'console';
import { readdir, lstat } from 'fs/promises';
import path from 'path';

async function readDirectory(root){
  try {
    const files = await readdir(root);
    let responseArray = [];
    for (const file of files) {
      let name = path.join(root, file);
      let stats = await lstat(name);
      let isDir = stats.isDirectory();
      if (isDir) {
        responseArray.push(path.join(name,'/'));
        let subDirArray = await readDirectory(name);
        console.log(subDirArray);
        responseArray.push(...subDirArray);
      } else {
        responseArray.push(name);
      }
    }
    // console.log(responseArray);
    return responseArray;
  } catch (err) {
    console.error(err);
  }
}

(async function() {
const origin = "./";
let originDirectory = await readDirectory(origin);
console.log(originDirectory);
})();