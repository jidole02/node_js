

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const router = require('./route/router');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodg://localhost/howl')

app.use(router);

app.listen(port,(err)=>{
    if(err) console.log(err);
    else  console.log("서버 작동됨.")
})