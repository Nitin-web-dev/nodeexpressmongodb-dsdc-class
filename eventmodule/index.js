const eventEmitter = require("events");
const event = new eventEmitter();


event.on("printmyname",()=>{
    console.log("alok is created");
})


event.on("printmyname",()=>{
  setTimeout(()=>{
    console.log("alok2 is created");
  },1000);
})

event.on("printmyname",()=>{
    setTimeout(()=>{
        console.log("alok3 is created");
      },2000);
})

event.on("printmyname",(a,b)=>{
    setTimeout(()=>{
        console.log(`status code is${a} and value is ${b}`);
      },3000);
})

event.on("printmyname",()=>{
    setTimeout(()=>{
        console.log("alok5 is created");
      },4000);
})
event.emit("printmyname",200,"ok");