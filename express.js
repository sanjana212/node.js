const http=require('http');
const express=require('express');
const app=express();
/*
call
intro-name,from,experiance,-1.3 yr experiance where,

*/
// app.get("/",(req,res)=>{
//     return res.send("hello from home page");
// })
app.get("/about",(req,res)=>{
    return res.send("hello from about page"+'hey'+req.query.name+'you are'+req.query.age);
})

// const myServer=http.createServer(app);
// myServer.listen(8000,()=>{console.log('server started');})
app.listen(7800,()=>console.log("server started"));