// const express = require("express");
// const app = express();
// const fs = require("fs");

// const data = fs.readFileSync("index.html","utf-8");
// const data2 = fs.readFileSync("testimonial.html","utf-8");

// const port = 4000 ;
// app.get("/",(req,res)=>{
//     res.write("<h1>hello</h1>");
//     res.send();
//     // res.send("<h1>hello this is home page</h1>");
// })

// app.get("/about",(req,res)=>{
//     res.send(data);
// })

// app.get("/testimonials",(req,res)=>{
//     res.send(data2);
// })

// app.get("/services",(req,res)=>{
//     res.send([{
//         id:1,
//         name:"ritik",
//     },
//     {
//         id:1,
//         name:"ritik",
//     },
//     {
//         id:1,
//         name:"ritik",
//     },
//     {
//         id:1,
//         name:"ritik",
//     }])
// })

// app.listen(port,(req,res)=>{
//     console.log(`you are listening ${port}`);
// })




// *********************** middlewares *****************************

// require("dotenv").config();
// const express = require("express");
// const app = express();
// const path = require('path');
// const port = process.env.PORT;

// const staticpath =  path.join(__dirname,"../public");
// // console.log(staticpath);
// // console.log(__dirname)


// // built in middleware

// // app.use(express.static(staticpath));


// app.set('view engine', 'hbs')



// app.get("/",(req,res)=>{
//     // res.send("this is home page");
//     res.render('index',{
//         ownerName : 'SamSingh',
//         page: "index"
//     })

// })

// app.get("/about",(req,res)=>{
//     // res.send("this is about page");
//     res.render('about', {
//         ownerName: 'About Page'
//     })
// })

// app.listen(port,()=>{
//     console.log(`you are listening ${port}`);
// })



const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views")
const partials = path.join(__dirname,"../templates/partials")
// middlewares
app.use(express.static(staticpath));

app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partials);

app.get("/",(req,res)=>{

    res.render("index",{
        name:req.query.name
        
    });
})

app.get("/hello",(req,res)=>{
    console.log(req.query.name);
    console.log(req.query.age);
})
app.get("/about",(req,res)=>{
    res.render("about",{
        ownerName:"ritik"
    });
})

app.listen(4000,()=>{
    console.log("listening");
})