import { readFile } from 'fs/promises';

export default async function read(filename){
    try {
        const file = await readFile(filename, 'utf-8');
        return ['File read',file]
    } catch (error) {
        if (error.errno !== -4058){
            return error
        } else {
            return 'File not found, check if the name is correct'
        }
    }
}