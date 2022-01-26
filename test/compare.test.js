import path from 'path';
import dir  from '../dir.mjs';
import compare from '../compare.js';

const TEST_DIR  = decodeURIComponent(path.dirname(import.meta.url.replace('file:///', '')));
const ROOT_DIR  = path.resolve(TEST_DIR, 'content');

test.skip('equal folders', async () => {
    let origin = await dir(path.resolve(ROOT_DIR, 'equal/origin'));
    let target = await dir(path.resolve(ROOT_DIR, 'equal/target'));
    let result = await compare(origin, target);
    expect(result).toEqual({
        "a.txt": compare.EQUAL
    });
});

test.skip('left', async () => {
    let origin = await dir(path.resolve(ROOT_DIR, 'left/origin'));
    let target = await dir(path.resolve(ROOT_DIR, 'left/target'));
    let result = await compare(origin, target);
    expect(result).toEqual({
        "a.txt": compare.ONLY_ORIGIN
    });
});

test.skip('right', async () => {
    let origin = await dir(path.resolve(ROOT_DIR, 'right/origin'));
    let target = await dir(path.resolve(ROOT_DIR, 'right/target'));
    let result = await compare(origin, target);
    expect(result).toEqual({
        "a.txt": compare.ONLY_TARGET
    });
});

test.skip('size', async () => {
    let origin = await dir(path.resolve(ROOT_DIR, 'size/origin'));
    let target = await dir(path.resolve(ROOT_DIR, 'size/target'));
    let result = await compare(origin, target);
    expect(result).toEqual({
        "a.txt": compare.DIFF_SIZE
    });
});

test.skip('date', async () => {
    let origin = await dir(path.resolve(ROOT_DIR, 'date/origin'));
    let target = await dir(path.resolve(ROOT_DIR, 'date/target'));
    let result = await compare(origin, target);
    expect(result).toEqual({
        "a.txt": compare.DIFF_DATE
    });
});

test.skip('file-folder', async () => {
    let origin = await dir(path.resolve(ROOT_DIR, 'file-folder/origin'));
    let target = await dir(path.resolve(ROOT_DIR, 'file-folder/target'));
    let result = await compare(origin, target);
    expect(result).toEqual({
        "a.txt": compare.DIFF_TYPE
    });
});

test.skip('all-features', async () => {
    let origin = await dir(path.resolve(ROOT_DIR, 'all-features/origin'));
    let target = await dir(path.resolve(ROOT_DIR, 'all-features/target'));
    let result = await compare(origin, target);
    expect(result).toEqual({
        "a.txt": compare.EQUAL,
        "b.txt": compare.ONLY_ORIGIN,
        "c.txt": compare.ONLY_TARGET,
        "d.txt": compare.DIFF_SIZE,
        "e.txt": compare.DIFF_DATE,
        "f.txt": compare.DIFF_TYPE
    });
});

