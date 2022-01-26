import {createReadStream , createWriteStream} from 'fs';

export default async function copyStream(origin, target) {
    try{
        let readStream = createReadStream(origin, 'UTF-8'); 
        let writeStream = createWriteStream(target);
        
        await readStream.pipe(writeStream);
        return 'File copied';
    } catch (err){
        if(err.errno !== -4058){
            return err;
        } else {
            return 'Origin file not found';
        }
    }
}

let origin  = './test/content/readfileStream.txt'; 
let target = './test/content/writefileStream.txt';
    
console.log( await copyStream(origin,target));