let path = require('path'),
    express = require('express'),
    app = express(),
    cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
