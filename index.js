import dir from './dir.mjs';
import compare from './compare.js';
import { Command } from 'commander/esm.mjs';
const program = new Command();

program
  .option('-o, --origin <origin>', 'origin folder')
  .option('-t, --target <target>', 'target folder')
  .option('-d, --diffs', 'display only diffs')

program.parse(process.argv);

const options = program.opts();

async function main() {
    console.log('comparing', options.origin, 'to', options.target);
    const result = compare(
        await dir(options.origin), 
        await dir(options.target)
    );
    for (let key in result) {
        if (!options.diffs || result[key] !== compare.EQUAL) {
            console.log(`${key} - ${decode(result[key])}`)
        }
    }
}

function decode(value) {
    if (value === compare.EQUAL) return 'Both files are equal ';       
    if (value === compare.ONLY_ORIGIN) return 'File only on origin'; 
    if (value === compare.ONLY_TARGET) return 'File only on target'; 
    if (value === compare.DIFF_SIZE) return 'This file has diferent sizes.';   
    if (value === compare.DIFF_DATE) return "The origin date is lastest than target's one";  
    if (value === compare.DIFF_TYPE) return 'Origin and target are a different type of document(directory/file)';   
}
main().then(process.exit);
