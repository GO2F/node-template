// 任务
// 1.   将template目录中的模板文件, 释放到当前所在文件夹中
import path from "path";
import shelljs from "shelljs";
export function unpackage() {
  // 运行所在目录(将template目录中文件释放到当前目录下)
  let runtimeAtUri = process.cwd();
  // 当前文件所在目录
  let fileUri = __dirname;

  let templateUri = path.resolve(fileUri, "template");

  console.log("fileUri => ", fileUri);
  console.log("runtimeAtUri => ", runtimeAtUri);
  console.log("templateUri => ", templateUri);
  // shelljs.cp("-rf", templateUri, runtimeAtUri);
  console.log("success");
}

// unpackage();
