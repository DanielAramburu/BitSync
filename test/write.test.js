import read from '../read.js';
import write from '../write.js';

test.only('Write a file', async () => {
    const content =  await read('./test/content/readfile.txt');
    let result = await write('./test/content/writetest.txt',content + "Archivo escrito desde la funcion write()");
    console.log(result);
    expect(result).toBe('File written');
});