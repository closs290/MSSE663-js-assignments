let http = require('http');
//console.log(http);

function serve(req, res) {
    let hello = 'Hello, world!';

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Content-Length': hello.length
    });

    res.end(hello);

}

// Create service
let server = http.createServer(serve);

server.listen(8000);

console.log('Running server...');

// function hello() {
//     let helloWorld = "Hello, world!";
//     const hiEarth = "Hi, Earth!";
//     // Not using "var" because my coworkers tell me it's deprecated...
    
//     // Test
//     // hiEarth = 'This shouldn\'t work';
    
//     console.log(helloWorld);
//     console.log(hiEarth);
// }

// hello();