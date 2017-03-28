const isMainProcess = process.type === 'browser';

let vars;

if (isMainProcess) {
    vars = require('./vars');
} else {
    const { remote } = require('electron');
    vars = remote.require(`${__dirname}/vars`);
}

module.exports = vars;