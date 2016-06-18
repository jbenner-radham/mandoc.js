'use strict';

const fs     = require('fs');
const mandoc = require('./lib');

let file = process.argv[2];
let src  = fs.readFileSync(file).toString();

mandoc.parse(src);
