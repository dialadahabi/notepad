const solc = require('solc');
const path = require('path');
const fs = require('fs');
const notepadPath = path.resolve(__dirname, 'contracts', 'notepad.sol');
const source = fs.readFileSync(notepadPath, 'utf8');
module.exports = solc.compile(source,1).contracts[':notepad'];