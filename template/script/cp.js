const child_process = require('child_process');
const path = require("path");
const shelljs = require("shelljs")


let distPath = path.resolve(__dirname, "..", "dist", "*")
let staticPath = path.resolve(__dirname, "..", "..", "static")
let staticSubPath = path.resolve(__dirname, "..", "..", "static", "*")
console.log("静态资源编译完毕, 准备进行迁移")
console.log(`清空静态文件夹${staticSubPath}下所有文件`)
shelljs.rm("-rf", staticSubPath)
console.log(`静态资源文件夹清理完毕`)
console.log(`开始将编译后资源由${distPath}复制到${staticPath}文件夹`)
shelljs.cp("-rf", distPath, staticPath)
console.log(`静态资源迁移完毕`)