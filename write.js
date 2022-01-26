import {writeFile} from 'fs/promises';

export default async function write(filename, content) {
    try {
        let result = await writeFile(filename,content);
        return 'File written'
    } catch (error) {
        return error;
    }    
}