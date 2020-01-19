let express = require('express');
let app = express();

function serve (request, response) {
    response.send('Hiya, mundo!');
    // Interesting, Express gives us a different font face
}

app.use('/', serve);

app.listen(8000, function() {
    console.log('Running server... ... ...')
})
