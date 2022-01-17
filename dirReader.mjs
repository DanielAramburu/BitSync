import { readdir, lstat } from 'fs/promises';
import path from 'path';

async function readDirectory(root){
  try {
    const files = await readdir(root);
    for (const file of files) {
      let name = path.join(root, file);
      let stats = await lstat(name);
      let isDir = stats.isDirectory();
      if (isDir) {
        console.log(path.join(name,'/'));
        await readDirectory(name);
      } else {
        console.log(name);
      }
    }
  } catch (err) {
    console.error(err);
  }
}


const origin = "./";
// console.log('El path es: '+origin);
readDirectory(origin);


// fs.lstat(path, (err, stats) => {

//     if(err)
//         return console.log(err); //Handle error

//     console.log(`Is file: ${stats.isFile()}`);
//     console.log(`Is directory: ${stats.isDirectory()}`);
//     console.log(`Is symbolic link: ${stats.isSymbolicLink()}`);
//     console.log(`Is FIFO: ${stats.isFIFO()}`);
    // console.log(`Is socket: ${stats.isSocket()}`);
//     console.log(`Is character device: ${stats.isCharacterDevice()}`);
//     console.log(`Is block device: ${stats.isBlockDevice()}`);
// });