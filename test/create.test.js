import create from "../create.js";

test.skip('Create directory', async () => {
    let result = await create("./test/testingMKDIR");
    expect(result).toEqual('Directory created');
});

test.skip('wrong name to create a directory', async () => {
    let result = await create("///");
    expect(result).toBe({
        "code": "EPERM",
        "errno": -4048,
        "path": "C:\\",
        "syscall": "mkdir"
    });
});

test.skip('Directory already exist', async () => {
    let result = await create('./test');
    expect(result).toBe('This directory already exist')
});