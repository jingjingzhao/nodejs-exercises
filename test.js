#!/usr/bin/env node

// #!/usr/bin/env node 表示指定node来执行该脚本。
// 所以可以直接使用 ./test.js来执行脚本。 
// ./表示从path中查找
// change username jingjingzhao

const program = require('commander');
const fs = require('fs');
const path = require('path');

// 命令行
program
  .version('0.1.0')
  .option('-d, --dir [type]', 'dir')
  .option('-f, --file [type]', 'file name')
  .option('-s, --save [type]', 'append to file end')
  .parse(process.argv);

// 执行脚本时未输入任何参数，则显示 -h 的内容
if (process.argv.length === 2) {  
  program.help();
  process.exit(1);
}

const dir = path.join(program.dir || '', program.file || '');

// 在指定文件中追加内容
if (program.save) {
  fs.appendFile(dir, program.save + '\n', (error) => {
    if (error) throw error;
    console.log('data append success!');
  });
}

// 读取指定目录的文件内容
fs.readFile(dir, 'utf8', (error, data) => {  // 读取指定目录下的文件内容
  if (error) throw error;
  console.log(data);
});
