let express = require('express'),
    path = require('path'),
    http = require('http'),
    app = express();

app.use(express.static(path.join(__dirname, 'static/')));
http.createServer(app).listen(3000);
