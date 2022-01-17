import path from 'path';
import dir  from '../dir.mjs';

const TEST_DIR  = path.dirname(import.meta.url.replace('file:///', ''));
const ROOT_DIR  = path.resolve(TEST_DIR, 'content');
const EMPTY_DIR = path.resolve(ROOT_DIR, 'empty');
const FILL_DIR  = path.resolve(ROOT_DIR, 'fill');

test('get empty folder', async () => {
  expect(await dir(EMPTY_DIR)).toEqual([]);
});

test('folder with content', async () => {
  let result = await dir(FILL_DIR);
  expect(result[0].name).toBe('1.txt');
  expect(result[1].name).toBe('2.txt');
  expect(result[2].name).toBe('d');
  expect(result[2].isDir).toBe(true);
  expect(result[3].name).toBe('d/3.txt');

});