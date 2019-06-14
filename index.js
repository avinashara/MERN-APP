const express = require("express");
const bodyParser = require("body-parser");
const queue = require("express-queue");
const path = require("path");

const config = require("./server/config");
const routes = require("./server/router/routers");
const connection = require("./server/dbconnection");


//initialize the app
const app = express();
//DB Connection initialize
connection();
//Limiting the no of process at a time
app.use(queue({ activeLimit: 2, queuedLimit: -1 }));

app.use(express.static(path.join(__dirname, './client/build')));


//Adding body parser for post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
})
//Registering the application router
app.use('/', routes);

//Registering the app to listen to port: 1234
app.listen(config.port, () => {
    console.log("Server Started at port: " + config.port);
});

