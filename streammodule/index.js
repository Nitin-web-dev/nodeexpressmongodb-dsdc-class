const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request',(req,res)=>{
const stream = fs.createReadStream("demo.txt")
stream.pipe(res);
})

server.listen(5000,"127.0.0.1",()=>{
    console.log("5000 is listening");
});