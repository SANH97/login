"use strict"
//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app =express();


//앱세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.static(`${__dirname}/src/public`))

const home = require("./src/routes/home");
app.use("/",home); //use-> 미들 웨어


 module.exports= app;
