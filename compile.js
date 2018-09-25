const path = require('path');
const fs = require('fs');
const solc = require('solc');
const npPath = path.resolve(__dirname, 'contracts', 'notepad.sol');
const source = fs.readFileSync(npPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Notepad'];
