const _ = require('lodash');
const Conf = require('conf');

if (process.type !== 'browser') {
    console.error('Please use remote.require to import electron-vars in renderer process.');
}

const __VARS__ = {};
let config = new Conf();

function get(...args) {
    return _.get(__VARS__, ...args);
}

function set(...args) {
    return _.set(__VARS__, ...args);
}

function unset(...args) {
    return _.unset(__VARS__, ...args);
}

function retrieve(...args) {
    return config.get(...args);
}

function store(...args) {
    return config.set(...args);
}

function deleteData(...args) {
    return config.delete(...args);
}

function has(...args) {
    return config.has(...args);
}

function clear() {
    return config.clear();
}

module.exports = {
    get,
    set,
    unset,
    retrieve,
    store,
    delete: deleteData,
    has,
    clear,
};
