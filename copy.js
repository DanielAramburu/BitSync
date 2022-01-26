import read from './read.js';
import write from './write.js';

export default async function copy(origin, target) {
    try {
        const content = await read(origin); 
        if(content[0] === 'File read'){
            const result  = await write(target, content[1]);
            if(result === 'File written'){
                return 'File copied';
            }
        }
        return content;
    } catch (error) {
        return error
    }
}
