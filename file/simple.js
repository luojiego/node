let fs=require("fs");

fs.writeFileSync("test3.txt", "write file use fs.writeFileSync", function(err){
    if (!err) {
        console.log("write file success");
    }
})