// Using dotenv to manage ENV variables in Node JS
const http = require('http');
const bodyParser = require("body-parser");
// const cores = require("cores"); 
// Mongodb connection...

require("dotenv").config();
const mongoose = require("mongoose");
// I there is a special name or location -- {path: path/filename}
const express = require('express');
const connectDB = require('./DB/Connection')
const app = express();


// When the above script run--it will have access to all the 'dotenv' passwords and etc. it will go through the process called 'process.env'
// Using the variables from the .env "host" and "port" inside of -- the 'config' will get the variables; process.env.PORT
let port = process.env.PORT || 3000;
let host = process.env.HOST;

connectDB();
app.use(bodyParser.json());
// app.use(cores());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended:true
  })
)







mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);






// mongoose
// .connect(MONGODB_URI)
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err))

MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://covid19-vaccinepoll.tcjgy.mongodb.net/titanPlanet"
mongoose
    .connect("mongodb+srv://covid19-vaccinepoll.tcjgy.mongodb.net/titanPlanet", { useUnifiedTopology: true,  useNewUrlParser: true})
    .catch(err => {
      console.log('DB Connection Error: ' + err);
 })
    .then(() => {
        console.log('Connected to Mongo!');
    });

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

