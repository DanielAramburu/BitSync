import { readFile } from 'fs/promises';

export default async function read(filename){
    try {
        const file = await readFile(filename, 'utf-8');
        return file
    } catch (error) {
        if (error.errno !== -4058){
            return error
        } else {
            return 'There was an error reading this file, check the name is correct'
        }
    }
}

read('./test/content/readfil');