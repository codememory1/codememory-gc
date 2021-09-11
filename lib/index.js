const path = require('path');
const fs = require('fs');

const rootPath = path.dirname(require.main.filename);
const dirWithConfig = '/.config/';
const filenameConfig = '.codememory.json';

exports.getAll = getAll
exports.get = get

/**
 *
 * @returns {any}
 */
function getAll() {

    const data = fs.readFileSync(rootPath + dirWithConfig + filenameConfig, 'utf8');

    return JSON.parse(data);

}

/**
 *
 * @param key
 * @returns {*}
 */
function get(key) {

    const keys = key.split('.');

    let data = getAll();

    for (let i = 0; i < keys.length; i++) {
        if(keys[i] in data) {
            data = data[keys[i]];
        } else {
            data = null;

            break;
        }
    }

    return data;

}
