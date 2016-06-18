'use strict';

const fs     = require('fs');
const mandoc = require('./lib');

let file   = process.argv[2];
let source = fs.readFileSync(file).toString();

mandoc.hello();
