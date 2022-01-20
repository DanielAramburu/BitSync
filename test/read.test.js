import read from '../read.js';

test('Reading unexisting file', async () => {
    let result = read(filename);
    expect(result).toBe('There was an error reading this file, check the name is correct');
});
test('Reading a file',async ()=>{
    let result = read(filename);
    expect(result).toBe('File read');
});