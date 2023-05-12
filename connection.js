const mongoose = require('mongoose');
const express = require('express');
const app = express(); 
require('dotenv').config();


app.use(express.json());

// app.listen(5555, ()=> {

//     console.log(`apis is listening on ${5555}`);
// });

mongoose.connect(process.env.dbUrl).then((value)=> {
    console.log(`value is ${value}`);
    console.log('database connected.. ');
}).catch((err)=> {
    console.log(`error is ${err}`);  
});


module.exports  = {app};