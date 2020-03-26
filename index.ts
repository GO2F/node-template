// 任务
// 1.   将template目录中的模板文件, 释放到当前所在文件夹中
import shelljs from "shelljs";
export function unpackage() {
  // 运行所在目录(将template目录中文件释放到当前目录下)
  let runtimeAtPath = process.cwd();
  // 当前文件所在目录
  let filePath = __dirname;
  console.log("filePath => ", filePath);
  console.log("runtimeAtPath => ", runtimeAtPath);
  // shelljs.cp("-rf", filePath, runtimeAtPath);
  console.log("success");
}
