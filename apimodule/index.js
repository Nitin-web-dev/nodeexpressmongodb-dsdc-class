const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

     
    const data = fs.readFileSync("api.json","utf-8")
    
    const data1 = JSON.parse(data);
    console.log(data1);
    
    if(req.url=="/"){
        res.end("This is home page");
    }
    else if(req.url=="/about"){
        res.end("This is about page");
    }
    else if(req.url ==  "/contact"){
        res.end(data1[0].Year);
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>Error 404 found</h1>");
    }
})

server.listen(4000,"127.0.0.1",()=>{
    console.log("4000 is listening");
})