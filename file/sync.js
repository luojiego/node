
let fs=require("fs");

let fd = fs.openSync("test.txt", "w");

fs.writeSync(fd, "hello world");

fs.closeSync(fd);
