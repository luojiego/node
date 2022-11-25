let promise = new Promise((resolve, reject)=>{
    // resolve("hello");
    setTimeout(()=>{
        reject("嗨，出错了");
    },3000)
})

console.log(promise)

promise.then((data)=>{
    console.log("读到了数据", data);
}).catch((err)=>{
    console.log("出错啦", err)
})