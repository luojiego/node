let fs=require("fs");

fs.open("test2.txt","w",function(err,fd){
    if (!err) {
        console.log("open file success");
        fs.write(fd, "hello world by asynchronous", function(err) {
            if (!err) {
                console.log("write success");
                fs.close(fd, function(err) {
                    if (!err) {
                        console.log("close success");
                    }
                })
            }
        })
    } else {
        console.log("打开文件失败 "+err);
    }
})

console.log("我开始执行啦");