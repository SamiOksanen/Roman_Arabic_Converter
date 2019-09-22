var path = require('path');
const express = require('express');

const app = express();
const staticPath = path.join(__dirname, 'dist/build');
app.use(express.static(staticPath));

app.listen(3000, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.log('Server listening port 3000');
});