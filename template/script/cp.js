const child_process = require('child_process');
const path = require("path");
const shelljs = require("shelljs")


let distPath = path.resolve("./dist", "*")
let staticPath = path.resolve("../static")
console.log("静态资源编译完毕, 准备进行迁移")
console.log(`开始将编译后资源由${distPath}复制到${staticPath}文件夹`)
shelljs.cp("-rf", distPath, staticPath)
console.log(`静态资源迁移完毕`)