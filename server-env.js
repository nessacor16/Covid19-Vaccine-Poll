// Using dotenv to manage ENV variables in Node JS
const http = require('http');
const bodyParser = require("body-parser");
const cores = require("cores"); 
// Mongodb connection...

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


require("dotenv").config();
const mongodb = require("mongodb");
// const mongoose = require("mongoose");

// I there is a special name or location -- {path: path/filename}
const express = require('express');
const app = express();


// When the above script run--it will have access to all the 'dotenv' passwords and etc. it will go through the process called 'process.env'
// Using the variables from the .env "host" and "port" inside of -- the 'config' will get the variables; process.env.PORT
let port = process.env.PORT || 1234;
let host = process.env.HOST;

// connectDB();
app.use(bodyParser.json());
// app.use(cores());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended:true
  })
)



uri = "mongodb+srv://localhost:1234/Covid19-VaccinePoll"

mongodb.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
 }).catch(err => {
      console.log('mongodb+srv Connection Error: ' + err);
 }).then(() => {
        console.log('Connected to Mongo!');
  }).catch(err => console.log(err));
  // console.log(db);



// const client = new MongoClient(uri, {useUnifiedTopology: true});
    

// Creating the Server
let server = http.createServer((req, res) => {
    console.log('Up and running');
    res.writeHead(200, { 'Content-Type' : 'text/plain'});
    res.end('I Rock');
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  


server.listen(port, host , app, ()=>{
    console.log(`==> 🌎Server is listening ${host}:${port}`)
});

