// create a server with http module
// it will create a server for us on localhost , port= 8080, ip = 127,0,0,,1

// import module http
const http = require('http');

//port and ip
const PORT = 8080;
const IPPORT = "127.0.0.1";

//create a server 
const server = http.createServer((req,res) => {
    // get req url and set response;
    if(req.url === '/') {
        res.end('this is home page');
    }else if (req.url === '/about'){
        res.end('this is about page');
    }else {
        res.end('page not found : 404');
    }
    console.log(req.url);

});

// listen to server 
server.listen(PORT, IPPORT, (req, res) => {
    console.log(`server is live on ${PORT}`);
})