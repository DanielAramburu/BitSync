import copy from '../copy.js';

test('copy a file', async () => {
    const result = await copy('./test/content/readfile.txt','./test/content/copyfiletest.txt');
    expect(result).toBe('File copied');
});


test('copy a not found file', async () => {
    const result = await copy('./test/content/readfilt','./test/content/copyfiletest.txt');
    expect(result).toBe('File not found, check if the name is correct');
});