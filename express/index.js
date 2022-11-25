const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
// app.use(express.static(path.resolve(__dirname, "public")))

/*app.use(function(req, res, next) {
    next();
})*/

// 设置模板引擎
app.set("view engine", "ejs")

// 设置路由
app.get("/", (req, res, next)=> {
    console.log("/")
    res.status(200).send("<h1>Welcome!</h1")
})

app.get("/ejs", (req, res, next)=> {
    // 使用模板引擎来渲染数据
    res.render("index",{name: "luojie"})
})

// 最后兜底，网页找不见了
app.use((req, res, next)=>{
    res.render("404")
})

app.listen(3000,()=>{
    console.log("listen success")
})