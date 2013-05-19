var express = require('express');
    app = express();

app.use(express.static(__dirname));

app.listen(4000);
console.log('Server started on port 4000');