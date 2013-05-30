var express = require('express'),
    path = require("path"),
    app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.listen(4000);
console.log('Server started on port 4000');