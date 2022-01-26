import read from '../read.js';

test.skip('Reading unexisting file', async () => {
    let result = await read('./content/readfil');
    expect(result).toBe('There was an error reading this file, check the name is correct');
});
test.skip('Reading a file',async ()=>{
    let result = await read('./test/content/readfile.txt');
    expect(result[0]).toBe('File read');
});