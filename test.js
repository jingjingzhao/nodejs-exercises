#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const path = require('path');

program
  .version('0.1.0')
  .option('-d, --dir [type]', 'dir')
  .option('-f, --file [type]', 'file name')
  .parse(process.argv);


if (!program.dir && !program.file) {
  program.help();
  return;
}

const dir = path.join(program.dir || '', program.file || '');
fs.readFile(dir, 'utf8', (error, data) => {
  if (error) throw error;
  console.log(data);
});
