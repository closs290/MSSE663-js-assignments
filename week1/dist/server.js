"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
// FUNCTIONS
function serve(request, response) {
    response.send('Hello, world!');
    // Interesting, Express gives us a different font face
}
function serverRunNotification() {
    console.log('Running server... ... ...');
}
// EXPRESS APP OPERATIONS
app.use('/', serve);
app.listen(8000, serverRunNotification);
