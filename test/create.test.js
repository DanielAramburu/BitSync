import create from "../create.js";

test('Create directory', async () => {
    let result = await create("./test/testingMKDIR");
    expect(result).toEqual('Directory created');
});

test('wrong name to create a directory', async () => {
    let result = await create("///");
    expect(result).toBe({
        "code": "EPERM",
        "errno": -4048,
        "path": "C:\\",
        "syscall": "mkdir"
    });
});

test('Directory already exist', async () => {
    let result = await create('./test');
    expect(result).toBe('This directory already exist')
});