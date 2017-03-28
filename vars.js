const _ = require('lodash');

const __VARS__ = {};

function get(...args) {
    return _.get(__VARS__, ...args);
}

function set(...args) {
    return _.set(__VARS__, ...args);
}

function unset(...args) {
    return _.unset(__VARS__, ...args);
}

module.exports = {
    get,
    set,
    unset,
};
