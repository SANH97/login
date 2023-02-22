"use strict"
//모듈
const express = require("express");
const app =express();


//앱세팅
app.set("views","./views");
app.set("view engine","ejs");

const home = require("./routes/home");
app.use("/",home); //use-> 미들 웨어


 module.exports= app;
