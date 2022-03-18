'use strict';

const path = require('path');
const fs = require('fs-extra');
const os = require('os');

const pkgFile = path.resolve(__dirname, './package.json');
const pkgJson = fs.readJsonSync(pkgFile);
const toRemoveAttrs = ['eject', 'postinstall'];

fs.writeJSONSync(pkgFile, pkgJson, {
  spaces: 2,
  EOL: os.EOL,
  replacer(key, value) {
    if (key === 'scripts') {
      toRemoveAttrs.forEach(attr => delete value[attr]);
      return value;
    }

    return value;
  },
});
fs.removeSync(path.resolve(__dirname, './postinstall.js'));
