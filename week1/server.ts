import express = require('express');
let app = express();

// FUNCTIONS
function serve (request: any, response: any): void {
    response.send('Hello, world!');
    // Interesting, Express gives us a different font face
}

function serverRunNotification(): void {
    console.log('Running server... ... ...')
}

// EXPRESS APP OPERATIONS
app.use('/', serve);
app.listen(8000, serverRunNotification);
