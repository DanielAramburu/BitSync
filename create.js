import {mkdir} from 'fs/promises';

export default async function create(dirName){
    try{
        await mkdir(`${dirName}`);
        return 'Directory created';
    } catch(err) {
        if(err.errno !== -4075){
            return err;
        } else {
            return 'This directory already exist'
        }
    }
}