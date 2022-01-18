function compareName(origin, target){
    return origin.filter(o => ! target.find(t=> t.name === o.name)).map(r => r.name);
}

function compareSize(origin, target){
    return origin.filter(o => ! target.find(t => t.name === o.name && t.size === o.size)).map(r => r.name);
}

function compareDate(origin, target){
    return origin.filter(o => ! target.find(t => t.name === o.name && o.mtime <= t.mtime)).map(r => r.name);
}

function compareType(origin, target){
    return origin.filter(o => ! target.find(t=> t.name === o.name && t.isDir === o.isDir)).map(r => r.name);
}


const EQUAL       = 0;
const ONLY_ORIGIN = 1;
const ONLY_TARGET = 2;
const DIFF_SIZE   = 3;
const DIFF_DATE   = 4;
const DIFF_TYPE   = 5;

// export default function compare(origin, target){
//     const result = {};
//     for (let name of origin.map(r => r.name)) {
//         result[name] = EQUAL;
//     }
//     for (let name of compareType(origin, target)) {
//         result[name] = DIFF_TYPE;
//     }
    
//     for (let name of compareSize(origin, target)) {
//         result[name] = DIFF_SIZE;
//     }
//     for (let name of compareDate(origin, target)) {
//         result[name] = DIFF_DATE;
//     }

//     for (let name of compareName(origin, target)) {
//         result[name] = ONLY_ORIGIN;
//     }
//     for (let name of compareName(target, origin)) {
//         result[name] = ONLY_TARGET;
//     }

//    return result;
// }

export default function compare(origin, target) {
    const result = {};
    for (let o of origin) {
        let t =  target.find(t => o.name === t.name);
        if (!t) {
            result[o.name] = ONLY_ORIGIN;
        } else if (o.isDir !== t.isDir) {
            result[o.name] = DIFF_TYPE;
        } else if (o.size !== t.size) {
            result[o.name] = DIFF_SIZE;
        } else if (o.mtime > t.mtime) {
            result[o.name] = DIFF_DATE
        } else {
            result[o.name] = EQUAL;
        }
    }
    for (let t of target) {
        let o =  origin.find(o => o.name === t.name);
        if (!o) {
            result[t.name] = ONLY_TARGET;
        }
    }
    return result;
}

compare.EQUAL       = EQUAL;
compare.ONLY_ORIGIN = ONLY_ORIGIN;
compare.ONLY_TARGET = ONLY_TARGET;
compare.DIFF_SIZE   = DIFF_SIZE;
compare.DIFF_DATE   = DIFF_DATE;
compare.DIFF_TYPE   = DIFF_TYPE;