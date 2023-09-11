// const express=require('express')
// const app= express()

// app.listen(3000,()=>{
//     console.log("this");
// })

// app.get('/books',(req,res)=>{
//     res.json({mssg:"Welcome"})
// })

// const mongoose = require('mongoose');
// const express = require('express');

// const app = express();
// const port=3000
// mongoose.set('strictQuery',false);
// const uri = "mongodb+srv://shivanibhatt2:India123@cluster0.bdt4998.mongodb.net/?retryWrites=true&w=majority";

// const start =async()=>{
//     await mongoose.connect(uri);
//     app.listen(port,()=>{;
//         console.log("app listening on port",+port)
//     })
// }

// start();



const app=require('express')();
const http=require('http').Server(app);
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://shivanibhatt2:India123@test.jzyvuwm.mongodb.net/?retryWrites=true&w=majority");

const User= require("/home/rnil/node/server/userModel");

http.listen(3000,function(){
    console.log('server is running');
}
);